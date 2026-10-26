import { NextResponse } from 'next/server';
import { syncLatestVideos } from '@/lib/youtubeSync';

// Export route as dynamic so Next.js doesn't cache the cron execution
export const dynamic = 'force-dynamic';

export async function GET(request) {
  try {
    // Optional Vercel Cron Secret validation
    const cronSecret = process.env.CRON_SECRET;
    const authHeader = request.headers.get('authorization');

    if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
      // In development, allow testing without auth if needed
      if (process.env.NODE_ENV === 'production') {
        return NextResponse.json({ error: 'Unauthorized cron request' }, { status: 401 });
      }
    }

    console.log('[CRON] Starting Vercel Cron video sync...');
    const result = await syncLatestVideos();
    console.log('[CRON] Sync completed successfully:', result);

    return NextResponse.json({
      message: 'Vercel Cron Sync executed successfully',
      timestamp: new Date().toISOString(),
      ...result,
    });
  } catch (error) {
    console.error('[CRON] Error during video sync:', error);
    return NextResponse.json(
      {
        error: 'Failed to execute video sync',
        message: error.message,
      },
      { status: 500 }
    );
  }
}

// Also support POST for manual triggers / admin webhooks
export async function POST(request) {
  return GET(request);
}
