// Vercel's filesystem is read-only/ephemeral, so synced videos would vanish.
// Persist them by committing src/data/dynamic-videos.json to GitHub; the push
// triggers a Vercel redeploy which bakes the new videos into the static pages.
const FILE_PATH = 'src/data/dynamic-videos.json';

export function isGithubPersistEnabled() {
  return Boolean(process.env.GITHUB_TOKEN && process.env.GITHUB_REPO);
}

async function gh(url, options = {}) {
  return fetch(`https://api.github.com/repos/${process.env.GITHUB_REPO}/contents/${FILE_PATH}${url}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      Accept: 'application/vnd.github+json',
      'User-Agent': 'thetubekids-sync',
      ...(options.headers || {}),
    },
  });
}

// Merges newVideos into the committed JSON (by youtubeId) and commits it.
export async function persistVideosToGithub(newVideos) {
  const branch = process.env.GITHUB_BRANCH || 'main';
  const getRes = await gh(`?ref=${branch}`);
  let sha;
  let current = [];
  if (getRes.ok) {
    const json = await getRes.json();
    sha = json.sha;
    current = JSON.parse(Buffer.from(json.content, 'base64').toString('utf-8'));
  } else if (getRes.status !== 404) {
    throw new Error(`GitHub read failed: ${getRes.status}`);
  }

  const map = new Map(current.map((v) => [v.youtubeId, v]));
  for (const v of newVideos) map.set(v.youtubeId, { ...map.get(v.youtubeId), ...v });
  const merged = Array.from(map.values());

  const putRes = await gh('', {
    method: 'PUT',
    body: JSON.stringify({
      message: `chore: auto-sync ${newVideos.length} new video(s)`,
      content: Buffer.from(JSON.stringify(merged, null, 2), 'utf-8').toString('base64'),
      branch,
      ...(sha ? { sha } : {}),
    }),
  });
  if (!putRes.ok) throw new Error(`GitHub commit failed: ${putRes.status} ${await putRes.text()}`);
  return merged.length;
}
