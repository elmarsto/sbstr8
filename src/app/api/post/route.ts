import { getSortedPost } from '@/utils/post';
import { NextResponse } from 'next/server';

export async function GET() {
  const data = { posts: await getSortedPost() };
  return NextResponse.json({ data });
}
