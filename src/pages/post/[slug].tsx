// adapted from https://raw.githubusercontent.com/Ibaslogic/nextjs-mdx-blog-starter/main/pages/blog/[slug].js
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import Image from 'next/image';
import MDXComponents from '../../components/MdxComponents';
import { getPostDir, getFileBySlug, PostMetadata } from '../../utils/mdx';
import { format } from 'date-fns';

import styles from '../../styles/Slug.module.css';

interface SlugProps {
  mdxSource: MDXRemoteSerializeResult;
  frontMatter: PostMetadata;
}

// it's a bit weird to name this 'Slug' but I do so for consistency, so filenames are straightforward
const Slug = ({ mdxSource, frontMatter }: SlugProps) => {
  const { title, featured, date, readingTime } = frontMatter;
  const hasFeaturedImage = featured !== undefined;
  const src = hasFeaturedImage ? featured : '';

  return (
    <article className={styles['post']}>
      <header>
        <h1>{title}</h1>
        <span className={styles['meta']}>
          {format(new Date(date || '1970-01-01'), 'MMMM dd, yyyy')}
          <span> . </span> {readingTime?.text}
        </span>
        {hasFeaturedImage && (
          <Image width={800} height={470} src={src} alt={title || 'Post'} />
        )}
      </header>
      <div>
        <MDXRemote {...mdxSource} components={{ ...MDXComponents }} />
      </div>
    </article>
  );
};

export default Slug;

export async function getStaticPaths() {
  const posts = await getPostDir();

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  };
}

interface SlugStaticPropsProps {
  params: {
    slug: string;
  };
}
export async function getStaticProps({
  params: { slug },
}: SlugStaticPropsProps) {
  const post = await getFileBySlug(slug);
  return {
    props: {
      ...post,
    },
  };
}
