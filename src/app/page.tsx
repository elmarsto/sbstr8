import { Home } from './home';
import { getSortedPost, PostMetadata } from '@/utils/post';

export default async function Page() {
  const items: PostMetadata[] = (await getSortedPost()) || [];
  return <Home items={items} />;
}
