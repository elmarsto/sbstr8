// adapted from https://raw.githubusercontent.com/Ibaslogic/nextjs-mdx-blog-starter/main/components/MdxComponents.js
import NextLink from 'next/link';

//FIXME: any
export const Link = (props: any) => {
  const { href } = props;
  const isInternalLink = href && href.startsWith('/');

  const isHeadingLink = href.startsWith('#');

  if (isInternalLink) {
    return (
      //FIXME: fix legacy behavior
      <NextLink href={href} legacyBehavior>
        <a {...props} />
      </NextLink>
    );
  } else if (isHeadingLink) {
    return (
      <NextLink href={href} legacyBehavior>
        <a className="anchor" {...props}>
          #
        </a>
      </NextLink>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

export default Link;
