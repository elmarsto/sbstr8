import * as React from 'react';
import S8 from '@/sbstr8';
import { HookProps } from '@/sbstr8/lib/types/post';
import meta from './meta.json';
import Teaser from './teaser.md';
import Body from './body.md';
import MdHook from './hook.md';
import MdFootnotes from './footnotes.md';

const Hook = ({ link }: HookProps) => (
  <S8.Link href={link}>
    <MdHook />
  </S8.Link>
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
