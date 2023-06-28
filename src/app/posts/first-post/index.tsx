import * as React from 'react';
import Link from '@/sbstr8/components/link';
import { HookProps } from '@/sbstr8/lib/types/post';
import meta from './meta.json';
import Teaser from './teaser.md';
import Body from './body.md';
import MdHook from './hook.md';
import MdFootnotes from './footnotes.md';

const Hook = ({ link }: HookProps) => (
  <Link href={link}>
    <MdHook />
  </Link>
);
const Footnotes = () => <MdFootnotes />;

export const Post = () => (
  <>
    <Teaser />
    <Body />
  </>
);

Post.Hook = Hook;
Post.Teaser = Teaser;
Post.Footnotes = Footnotes;
Post.meta = meta;
export default Post;
