import { getSortedPost } from '@/utils/post';
import { NextResponse } from 'next/server';

export async function GET() {
  const data = { items: getSortedPost() };
  return NextResponse.json({ data });
}
