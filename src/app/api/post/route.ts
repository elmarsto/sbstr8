import { getSortedPost, getLastModified } from '@/lib/post';
import { NextResponse } from 'next/server';

export async function GET() {
  const posts = getSortedPost();
  const lastModified = getLastModified(posts).toISOString();
  return NextResponse.json({
    data: { posts, lastModified },
  });
}
