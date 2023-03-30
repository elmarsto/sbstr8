// adapted from https://raw.githubusercontent.com/Ibaslogic/nextjs-mdx-blog-starter/main/pages/blog/index.js

import Link from 'next/link';
import { format } from 'date-fns';
import { getSortedPost, PostList } from '../../utils/mdx';
import generateRssFeed from '../../utils/generateRSSFeed';

import styles from '../../styles/Post.module.css';

interface PostProps {
  posts: PostList[];
}

export async function getStaticProps() {
  await generateRssFeed();
  const posts: PostList[] = (await getSortedPost()) || [];
  return {
    props: {
      posts,
    },
  };
}

const Post = ({ posts }: PostProps) => {
  return (
    <>
      <h1>Posts</h1>
      <ul>
        {posts.map((post: PostList) => {
          const { slug, title, date, description }: PostList = post;

          return (
            <li className={styles.post_item} key={slug}>
              <Link href={`/post/${slug}`}>
                <article>
                  <h2>{title}</h2>
                  <div className={styles.post__meta}>
                    <span className={styles.post__meta}>
                      {format(date || 0, 'MMMM dd, yyyy')}
                    </span>{' '}
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

export default Post;
