// adapted from https://raw.githubusercontent.com/Ibaslogic/nextjs-mdx-blog-starter/main/pages/blog/index.js

import Link from 'next/link';
import { format } from 'date-fns';
import { getSortedPost, PostMetadata } from '../../utils/mdx';
import generateRssFeed from '../../utils/generateRSSFeed';
import config from '@/../martrix-config';

import styles from '../../styles/Post.module.css';

interface PostsProps {
  posts: PostMetadata[];
}

export async function getStaticProps() {
  await generateRssFeed();
  const posts: PostMetadata[] = (await getSortedPost()) || [];
  return {
    props: {
      posts,
    },
  };
}

const Posts = ({ posts }: PostsProps) => {
  return (
    <>
      <h1>{config.title} - Posts</h1>
      <ul className={styles['posts']}>
        {posts.map((post: PostMetadata) => {
          const { slug, title, date, description }: PostMetadata = post;

          return (
            <li className={styles['post']} key={slug}>
              <Link className={styles['link']} href={`/post/${slug}`}>
                <article>
                  <h2>{title}</h2>
                  <div className={styles['metadata']}>
                    <span>{format(date || 0, 'MMMM dd, yyyy')}</span>{' '}
                  </div>
                  <p>{description}</p>
                </article>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Posts;
