// adapted from https://raw.githubusercontent.com/Ibaslogic/nextjs-mdx-blog-starter/main/pages/blog/[slug].js
import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/image';
import MDXComponents from '../../components/MdxComponents';
import { getPostDir, getFileBySlug } from '../../utils/mdx';
import { parseISO, format } from 'date-fns';

import styles from '../../styles/Slug.module.css';

interface SlugProps {
  mdxSource: any; // FIXME: any
  frontMatter: any; // FIXME: any
}

// it's a bit weird to name this 'Slug' but I do so for consistency, so filenames are straightforward
const Slug = ({ mdxSource, frontMatter }: SlugProps) => {
  const { title, featured, date, readingTime } = frontMatter;

  return (
    <article className={styles.single__post}>
      <header>
        <h1>{title}</h1>
        <span className={styles.post__meta}>
          {format(parseISO(date || '1970-01-01'), 'MMMM dd, yyyy')}
          <span> . </span> {readingTime.text}
        </span>
        {featured && (
          <Image width={800} height={470} src={featured} alt={title} />
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

interface getStaticPropsProps {
  params: {
    slug: string;
  };
}
export async function getStaticProps({
  params: { slug },
}: getStaticPropsProps) {
  const post = await getFileBySlug(slug);
  return {
    props: {
      ...post,
    },
  };
}
