// adapted from https://raw.githubusercontent.com/Ibaslogic/nextjs-mdx-blog-starter/main/pages/blog/index.js

import Link from 'next/link';
import { Post } from '@/types';
import config from '@/../substrate-config';
import styles from './styles.module.css';

export interface HomeProps {
  items: Post[];
}

export const Home = ({ items }: HomeProps) => (
  <main>
    <h1>{config.title}</h1>
    <ul className={styles['posts']}>
      {items.map(({ slug, title, date, description }: Post) => (
        <li className={styles['post']} key={slug}>
          <Link className={styles['link']} href={`/post/${slug}`}>
            <article>
              <h2>{title}</h2>
              <div className={styles['metadata']}>
                <span>{date}</span>{' '}
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
