import meta from './meta.json';
import Post from './';
import { CookedPostMetadata as IPost } from '@/sbstr8/lib/types/post';
import Standard from '@/sbstr8/components/post/standard';

const Page = async () => (
  <Standard
    created={meta['created']}
    image={meta['image']}
    title={meta['title']}
    updated={(meta as IPost)['updated']}
    footnotes={<Post.Footnotes />}
    className="s8-post-page"
  >
    <Post />
  </Standard>
);

export default Page;
