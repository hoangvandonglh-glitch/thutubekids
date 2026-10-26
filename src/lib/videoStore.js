import fs from 'fs';
import path from 'path';
import { videos as staticVideos } from '@/data/videos';

// Determine the path for dynamic videos
const LOCAL_DYNAMIC_PATH = path.join(process.cwd(), 'src', 'data', 'dynamic-videos.json');
const SERVERLESS_DYNAMIC_PATH = '/tmp/dynamic-videos.json';

// In-memory cache for fast access
let inMemoryDynamic = [];

function getDynamicFilePath() {
  // If running on Vercel serverless (where src/data might be read-only), use /tmp if needed
  if (process.env.VERCEL) {
    if (!fs.existsSync(SERVERLESS_DYNAMIC_PATH)) {
      try {
        if (fs.existsSync(LOCAL_DYNAMIC_PATH)) {
          const content = fs.readFileSync(LOCAL_DYNAMIC_PATH, 'utf-8');
          fs.writeFileSync(SERVERLESS_DYNAMIC_PATH, content, 'utf-8');
        } else {
          fs.writeFileSync(SERVERLESS_DYNAMIC_PATH, '[]', 'utf-8');
        }
      } catch (e) {
        console.warn('Could not initialize /tmp file, using memory only', e);
      }
    }
    return SERVERLESS_DYNAMIC_PATH;
  }
  return LOCAL_DYNAMIC_PATH;
}

export function getDynamicVideos() {
  try {
    const filePath = getDynamicFilePath();
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf-8');
      const parsed = JSON.parse(content);
      if (Array.isArray(parsed)) {
        inMemoryDynamic = parsed;
        return inMemoryDynamic;
      }
    }
  } catch (err) {
    console.error('Error reading dynamic videos, falling back to in-memory:', err);
  }
  return inMemoryDynamic;
}

export function getAllVideos() {
  const dynamic = getDynamicVideos();
  // Merge static videos and dynamic videos without duplicates (by youtubeId or slug)
  const existingIds = new Set(staticVideos.map((v) => v.youtubeId));
  const newVideos = dynamic.filter((v) => !existingIds.has(v.youtubeId));
  return [...staticVideos, ...newVideos];
}

export function getVideoBySlug(slug) {
  const all = getAllVideos();
  return all.find((v) => v.slug === slug || v.id === slug);
}

export function saveDynamicVideos(newVideos) {
  try {
    const current = getDynamicVideos();
    const existingIds = new Set([
      ...staticVideos.map((v) => v.youtubeId),
      ...current.map((v) => v.youtubeId),
    ]);

    const toAdd = newVideos.filter((v) => !existingIds.has(v.youtubeId));
    if (toAdd.length === 0) return current;

    const updated = [...current, ...toAdd];
    inMemoryDynamic = updated;

    const filePath = getDynamicFilePath();
    fs.writeFileSync(filePath, JSON.stringify(updated, null, 2), 'utf-8');
    return updated;
  } catch (err) {
    console.error('Error saving dynamic videos:', err);
    inMemoryDynamic = [...inMemoryDynamic, ...newVideos];
    return inMemoryDynamic;
  }
}
