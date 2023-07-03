import Link from '@/sbstr8/components/link';
import { HookProps } from '@/sbstr8/lib/types/post';
import meta from './meta.json';
import Teaser from './teaser.md';
import Body from './body.md';
import MdHook from './hook.md';
import MdFootnotes from './footnotes.md';

const Hook = ({ link }: HookProps) => (
  <Link className="sbstr8:post-hook" href={link}>
    <MdHook />
  </Link>
);
const Footnotes = () => (
  <section className="sbstr8:post-footnotes">
    <MdFootnotes />
  </section>
);

export const Post = () => (
  <div className="sbstr8:post">
    <section className="sbstr8:post-teaser">
      <Teaser />
    </section>
    <section className="sbstr8:post-body">
      <Body />
    </section>
  </div>
);

Post.Hook = Hook;
Post.Teaser = Teaser;
Post.Footnotes = Footnotes;
Post.meta = meta;
export default Post;
