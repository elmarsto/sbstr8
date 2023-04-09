// adapted from https://raw.githubusercontent.com/Ibaslogic/nextjs-mdx-blog-starter/main/pages/blog/index.js

import Link from 'next/link';
import { format } from 'date-fns';
import { PostMetadata } from '@/utils/post';
import config from '@/../martrix-config';
import styles from './styles.module.css';

export interface HomeProps {
  items: PostMetadata[];
}

export const Home = ({ items }: HomeProps) => {
  console.log(items);
  return (
    <main>
      <h1>{config.title} - Posts</h1>
      <ul className={styles['posts']}>
        {items.map((it: PostMetadata) => {
          const { slug, title, date, description }: PostMetadata = it;

          return (
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
          );
        })}
      </ul>
    </main>
  );
};

export default Home;
