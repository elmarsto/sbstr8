// adapted from https://raw.githubusercontent.com/Ibaslogic/nextjs-mdx-blog-starter/main/pages/blog/index.js

import Link from 'next/link';
import urlJoin from 'url-join';
import { Post } from '@/types';
import config from '@/../sbstr8-config';
import styles from './styles.module.css';
import { Md } from '@/components/md';
import { defaultPostPath } from '@/lib/post';

export interface HomeProps {
  posts: Post[];
  lastModified: string;
}

export const Home = ({ posts, lastModified }: HomeProps) => (
  <main>
    <h1>
      <Md>{config.title}</Md>
    </h1>
    <h2>Updated {lastModified}</h2>
    <ul className={styles['posts']}>
      {posts.map(({ slug, title, updated, created, description }: Post) => (
        <li className={styles['post']} key={slug}>
          <Link
            className={styles['link']}
            href={urlJoin(defaultPostPath, slug)}
          >
            <article>
              <h2>
                <Md>{title}</Md>
              </h2>
              <div className={styles['metadata']}>
                <span>
                  {created}
                  {updated ? `; last updated ${updated}` : ''}
                </span>{' '}
              </div>
              <Md>{description}</Md>
            </article>
          </Link>
        </li>
      ))}
    </ul>
  </main>
);

export default Home;
