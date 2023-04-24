// adapted from https://raw.githubusercontent.com/Ibaslogic/nextjs-mdx-blog-starter/main/pages/blog/index.js

import Link from 'next/link';
import { Post } from '@/types';
import config from '@/../sbstr8-config';
import styles from './styles.module.css';

export interface HomeProps {
  posts: Post[];
  lastModified: string;
}

export const Home = ({ posts, lastModified }: HomeProps) => (
  <main>
    <h1>{config.title}</h1>
    <h2>Updated {lastModified}</h2>
    <ul className={styles['posts']}>
      {posts.map(({ slug, title, updated, created, description }: Post) => (
        <li className={styles['post']} key={slug}>
          <Link className={styles['link']} href={`/post/${slug}`}>
            <article>
              <h2>{title}</h2>
              <div className={styles['metadata']}>
                <span>
                  {created}
                  {updated ? `; last updated ${updated}` : ''}
                </span>{' '}
              </div>
              <p>{description}</p>
            </article>
          </Link>
        </li>
      ))}
    </ul>
  </main>
);

export default Home;
