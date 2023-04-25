// adapted from https://raw.githubusercontent.com/Ibaslogic/nextjs-mdx-blog-starter/main/components/MdxComponents.js
export * from './link';
export * from './image';

import Link from './link';
import Image from './image';

export const MdxComponents = {
  img: Image,
  a: Link,
};

export default MdxComponents;
