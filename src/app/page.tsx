import { Home } from './home';
import cfg from '@/../martrix-config';

const getData = async () => {
  const endpoint = `${cfg.link}/api/post`;
  const res = await fetch(endpoint, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  return res.json();
};

export default async function Page() {
  const data = await getData();
  const items = data['data']['items'];
  return <Home items={items} />;
}
