import { NextResponse } from 'next/server';
import { getAllVideos } from '@/lib/videoStore';

// Dynamic route so newly synced videos are served without rebuild
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const videos = getAllVideos();
    return NextResponse.json(videos, {
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
      },
    });
  } catch (error) {
    console.error('Error in /api/videos:', error);
    return NextResponse.json({ error: 'Failed to fetch videos' }, { status: 500 });
  }
}
