// adapted from https://raw.githubusercontent.com/Ibaslogic/nextjs-mdx-blog-starter/main/components/MdxComponents.js
import NextImage from 'next/image';

//FIXME: any
export const Image = (props: any) => {
  return <NextImage alt="" loading="lazy" {...props} />;
};

export default Image;
