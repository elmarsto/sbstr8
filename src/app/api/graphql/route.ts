import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { NextRequest } from 'next/server';
import { server } from '@/utils/graphql/server';

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async (req) => ({ req }),
});

const restHandler = async (request: NextRequest) => {
  const response = await handler(request);

  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  response.headers.set(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization',
  );
  response.headers.set('Access-Control-Allow-Credentials', 'true');

  return response;
};

export async function GET(request: NextRequest) {
  return await restHandler(request);
}

export async function POST(request: NextRequest) {
  return await restHandler(request);
}
