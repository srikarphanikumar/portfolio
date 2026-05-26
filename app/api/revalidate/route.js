import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export async function GET(request) {
    // Vercel sets CRON_SECRET automatically and sends it as Bearer token.
    // When calling manually, pass ?secret=<CRON_SECRET> instead.
    const authHeader = request.headers.get('authorization');
    const { searchParams } = new URL(request.url);
    const querySecret = searchParams.get('secret');
    const cronSecret = process.env.CRON_SECRET;

    const isAuthorized =
        (cronSecret && authHeader === `Bearer ${cronSecret}`) ||
        (cronSecret && querySecret === cronSecret);

    if (!isAuthorized) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    revalidatePath('/terminal/writing');
    return NextResponse.json({ revalidated: true, timestamp: new Date().toISOString() });
}
