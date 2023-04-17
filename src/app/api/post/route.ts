import { getSortedPost } from '@/utils/post';
import { NextResponse } from 'next/server';

export async function GET() {
  const { posts, lastModified } = getSortedPost();
  return NextResponse.json({
    data: { posts, lastModified: lastModified.toISOString() },
  });
}
