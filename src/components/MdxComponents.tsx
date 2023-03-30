// adapted from https://raw.githubusercontent.com/Ibaslogic/nextjs-mdx-blog-starter/main/components/MdxComponents.js
import Link from 'next/link';
import Image from 'next/image';

//FIXME: any
const CustomLink = (props: any) => {
  const { href } = props;
  const isInternalLink = href && href.startsWith('/');

  const isHeadingLink = href.startsWith('#');

  if (isInternalLink) {
    return (
      //FIXME: fix legacy behavior
      <Link href={href} legacyBehavior>
        <a {...props} />
      </Link>
    );
  } else if (isHeadingLink) {
    return (
      <Link href={href} legacyBehavior>
        <a className="anchor" {...props}>
          #
        </a>
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

//FIXME: any
const CustomImage = (props: any) => {
  return <Image alt="" loading="lazy" {...props} />;
};

const MDXComponents = {
  img: CustomImage,
  a: CustomLink,
};

export default MDXComponents;
