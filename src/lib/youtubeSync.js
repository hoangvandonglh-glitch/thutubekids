import https from 'https';
import { getAllVideos, saveDynamicVideos } from './videoStore';

// Curated verified safe kids channels for automatic sync
export const MONITORED_CHANNELS = [
  {
    name: 'Super Simple Songs',
    channelId: 'UCLsooMJoIpl_7ux2jvdPB-Q',
    defaultCategory: 'nursery-rhymes',
  },
  {
    name: 'Cocomelon - Nursery Rhymes',
    channelId: 'UCbCmjCuTUZos6Inko4u57UQ',
    defaultCategory: 'nursery-rhymes',
  },
  {
    name: 'Pinkfong! Kids Songs & Stories',
    channelId: 'UCcdwLMPsaU2ezNSJU1nFoBQ',
    defaultCategory: 'nursery-rhymes',
  },
  {
    name: 'The Singing Walrus',
    channelId: 'UCe1VpF4wS_kdcjyTRSXBcnQ',
    defaultCategory: 'learning',
  },
  {
    name: 'ChuChu TV Nursery Rhymes',
    channelId: 'UCBnZ16ahKA2DZ_T5W0FPUXg',
    defaultCategory: 'nursery-rhymes',
  },
  {
    name: 'Dave and Ava - Nursery Rhymes',
    channelId: 'UC3xdYJcb7ny8Weoo53vS9LA',
    defaultCategory: 'nursery-rhymes',
  },
  {
    name: 'Bounce Patrol - Kids Songs',
    channelId: 'UCAcq6oZXEN9KObS3a1ZDdPw',
    defaultCategory: 'music',
  },
  {
    name: 'Blippi - Educational Videos for Kids',
    channelId: 'UCx3RchaoRFpDpB60x7xRREw',
    defaultCategory: 'learning',
  },
];

// Helper to make HTTPS GET request
function fetchText(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => resolve({ status: res.statusCode, data }));
    }).on('error', (err) => reject(err));
  });
}

// Check if a video is embeddable via YouTube oEmbed API
export async function verifyEmbeddable(youtubeId) {
  try {
    const url = `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${youtubeId}&format=json`;
    const res = await fetchText(url);
    if (res.status === 200) {
      const json = JSON.parse(res.data);
      return {
        embeddable: true,
        title: json.title,
        author: json.author_name,
        thumbnail: `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`,
      };
    }
  } catch (err) {
    console.error(`oEmbed verification failed for ${youtubeId}:`, err.message);
  }
  return { embeddable: false };
}

// Fetch newest videos from a channel using RSS XML (Zero-API-Key Mode)
async function fetchChannelVideosViaRSS(channelId) {
  try {
    const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
    const res = await fetchText(rssUrl);
    if (res.status !== 200) return [];

    const xml = res.data;
    const entries = [];
    const entryRegex = /<entry>([\s\S]*?)<\/entry>/g;
    let match;

    while ((match = entryRegex.exec(xml)) !== null) {
      const entryContent = match[1];
      const videoIdMatch = entryContent.match(/<yt:videoId>([^<]+)<\/yt:videoId>/);
      const titleMatch = entryContent.match(/<title>([^<]+)<\/title>/);
      const descMatch = entryContent.match(/<media:description>([\s\S]*?)<\/media:description>/);

      if (videoIdMatch) {
        entries.push({
          youtubeId: videoIdMatch[1],
          title: titleMatch ? titleMatch[1].trim() : '',
          rawDescription: descMatch ? descMatch[1].trim() : '',
        });
      }
    }
    return entries;
  } catch (err) {
    console.error(`RSS fetch error for channel ${channelId}:`, err);
    return [];
  }
}

// Fetch newest videos using YouTube Data API v3 (if YOUTUBE_API_KEY is configured)
async function fetchChannelVideosViaAPI(channelId, apiKey) {
  try {
    const apiUrl = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=5&type=video`;
    const res = await fetchText(apiUrl);
    if (res.status !== 200) return [];

    const json = JSON.parse(res.data);
    if (!json.items) return [];

    return json.items.map((item) => ({
      youtubeId: item.id.videoId,
      title: item.snippet.title,
      rawDescription: item.snippet.description,
    }));
  } catch (err) {
    console.error(`YouTube API v3 fetch error for channel ${channelId}:`, err);
    return [];
  }
}

// Clean title to create URL slug
function createSlug(title, id) {
  const clean = title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // remove accents
    .replace(/[^\w\s-]/g, '') // remove non-alphanumeric except spaces & hyphens
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
  return clean || `video-${id}`;
}

// Auto-detect kid-friendly category based on title and content
function detectCategory(title, defaultCat) {
  const t = title.toLowerCase();
  if (t.includes('animal') || t.includes('zoo') || t.includes('jungle') || t.includes('dino') || t.includes('shark') || t.includes('pet')) {
    return 'animals';
  }
  if (t.includes('abc') || t.includes('alphabet') || t.includes('number') || t.includes('count') || t.includes('shape') || t.includes('color') || t.includes('routine') || t.includes('brush') || t.includes('learn')) {
    return 'learning';
  }
  if (t.includes('planet') || t.includes('space') || t.includes('plant') || t.includes('science') || t.includes('water cycle') || t.includes('solar')) {
    return 'science';
  }
  if (t.includes('story') || t.includes('fairy tale') || t.includes('fable') || t.includes('pig') || t.includes('wolf')) {
    return 'stories';
  }
  if (t.includes('morphle') || t.includes('cartoon') || t.includes('peppa') || t.includes('episode')) {
    return 'cartoons';
  }
  if (t.includes('dance') || t.includes('sing') || t.includes('freeze') || t.includes('happy') || t.includes('exercise')) {
    return 'music';
  }
  return defaultCat || 'nursery-rhymes';
}

// Generate rich educational metadata
function generateMetadata(title, channelName, category) {
  const cleanTitle = title.replace(/[^\w\s]/gi, '').trim();

  const description = `${cleanTitle} is a joyful and safe educational video from ${channelName}. Carefully crafted for toddlers and early learners, this video promotes wholesome values, language growth, and active participation in a positive screen-time environment.`;

  const learningPoints = [
    `Encourages active listening, word recognition, and cadence in English`,
    `Builds positive focus and musical rhythm through guided repetition`,
    `Fosters cheerful family interaction and screen time self-regulation`,
  ];

  const parentTips = `Watch this video together with your child and ask them about their favorite part or imitate the movements together!`;

  return {
    description,
    learningPoints,
    parentTips,
    ageRange: category === 'science' ? '3-9' : '1-6',
    badge: '✨ Newly Added',
    tags: [category, 'safe kids', 'educational', channelName.toLowerCase().split(' ')[0]],
  };
}

// Main Sync Function called by Vercel Cron or Manual Admin Trigger
export async function syncLatestVideos() {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const existingVideos = getAllVideos();
  const existingIdSet = new Set(existingVideos.map((v) => v.youtubeId));
  const existingSlugSet = new Set(existingVideos.map((v) => v.slug));

  const newlyAdded = [];
  const logMessages = [];

  logMessages.push(`Starting sync at ${new Date().toISOString()}`);
  logMessages.push(`Mode: ${apiKey ? 'YouTube Data API v3' : 'YouTube Channel RSS (Zero-Config)'}`);

  for (const ch of MONITORED_CHANNELS) {
    try {
      logMessages.push(`Checking channel: ${ch.name}...`);
      let candidateVideos = [];

      if (apiKey) {
        candidateVideos = await fetchChannelVideosViaAPI(ch.channelId, apiKey);
      } else {
        candidateVideos = await fetchChannelVideosViaRSS(ch.channelId);
      }

      for (const item of candidateVideos) {
        // 1. Skip if already exists in store
        if (existingIdSet.has(item.youtubeId)) {
          continue;
        }

        // 2. CRUCIAL RULE: Verify embeddability via YouTube oEmbed
        const oEmbed = await verifyEmbeddable(item.youtubeId);
        if (!oEmbed.embeddable) {
          logMessages.push(`[SKIPPED] ${item.youtubeId} (Embedding is restricted or video not public)`);
          continue;
        }

        // 3. Create unique slug
        let slug = createSlug(oEmbed.title || item.title, item.youtubeId);
        if (existingSlugSet.has(slug)) {
          slug = `${slug}-${item.youtubeId.slice(0, 4)}`;
        }
        existingSlugSet.add(slug);
        existingIdSet.add(item.youtubeId);

        // 4. Categorize & generate rich article content
        const category = detectCategory(oEmbed.title || item.title, ch.defaultCategory);
        const meta = generateMetadata(oEmbed.title || item.title, ch.name, category);

        const newVideoObject = {
          id: `dyn_${Date.now()}_${item.youtubeId}`,
          slug,
          title: oEmbed.title || item.title,
          channel: ch.name,
          category,
          youtubeId: item.youtubeId,
          thumbnail: oEmbed.thumbnail,
          duration: '3:00',
          views: 'Fresh',
          ageRange: meta.ageRange,
          badge: meta.badge,
          description: meta.description,
          learningPoints: meta.learningPoints,
          lyrics: `Sing and follow along with ${cleanWords(oEmbed.title || item.title)}!`,
          parentTips: meta.parentTips,
          tags: meta.tags,
          syncedAt: new Date().toISOString(),
        };

        newlyAdded.push(newVideoObject);
        logMessages.push(`[ADDED] ${newVideoObject.title} (/video/${newVideoObject.slug})`);

        // Limit to maximum 3 new videos per channel per sync run to prevent flooding
        if (newlyAdded.filter((v) => v.channel === ch.name).length >= 2) {
          break;
        }
      }
    } catch (err) {
      logMessages.push(`Error syncing channel ${ch.name}: ${err.message}`);
    }
  }

  // Save new videos to persistent dynamic storage
  if (newlyAdded.length > 0) {
    saveDynamicVideos(newlyAdded);
    logMessages.push(`Successfully saved ${newlyAdded.length} new videos to store.`);
  } else {
    logMessages.push(`No new embeddable videos found. Store is up to date.`);
  }

  return {
    success: true,
    newCount: newlyAdded.length,
    totalVideos: existingVideos.length + newlyAdded.length,
    addedVideos: newlyAdded.map((v) => ({ title: v.title, slug: v.slug, youtubeId: v.youtubeId })),
    logs: logMessages,
  };
}

function cleanWords(str) {
  return str.replace(/[^a-zA-Z0-9\s]/g, '').trim();
}
