import { Home } from './home';
import { getSortedPosts, PostMetadata } from '@/utils/post';
import cfg from '@/../martrix-config';

const getData = async () => {
  const res = await fetch(`${cfg.url}/api/post`);
  if (!res.ok) {
    throw newError('Failed to fetch posts');
  }
};

interface Data {
  items: PostMetadata[];
}

export default async function Page() {
  const { items }: Data = await getData();
  return <Home items={items} />;
}
