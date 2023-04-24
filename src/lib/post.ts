// adapted from https://blog.logrocket.com/adding-rss-feed-next-js-app/ 2023-03-29

import fs from 'fs';
import path from 'path';

import { Post } from '@/types';
import cfg from '@/../sbstr8-config';

export type { Post } from '@/types/post';

export const defaultPostPath = 'post';
export const postSubdirectory = (postPath: string) => `src/app/${postPath}`;
const rootDirectory = process.cwd();

// TODO: correctly handle updated date
export const getLastModified = (posts: Post[]): Date =>
  posts[0] ? new Date(posts[0].updated || posts[0].created) : new Date();

// get sorted post
interface Pagination {
  offset?: number;
  limit?: number;
}

export const getSortedPost = (pagination?: Pagination): Post[] => {
  const postDirectory = path.join(
    rootDirectory,
    postSubdirectory(defaultPostPath),
  );
  const slugs = fs.readdirSync(postDirectory);
  const posts: Post[] = [];

  if (!slugs) return [];

  slugs.forEach((slug) => {
    if (!fs.lstatSync(path.join(postDirectory, slug)).isDirectory()) return;
    const filePath = path.join(postDirectory, slug, 'meta.json');
    const metadataFileContent = fs.readFileSync(filePath, 'utf8');
    const data: Post = JSON.parse(metadataFileContent);
    posts.push({
      // above data so it can be overridden
      image: path.join(cfg.link, defaultPostPath, slug, 'image.png'),
      ...data,
      slug,
      link: path.join(cfg.link, defaultPostPath, slug),
    });
  });

  posts.sort((a: Post, b: Post) => {
    const aD = new Date(a.created).getTime();
    const bD = new Date(b.created).getTime();

    if (aD && bD && aD < bD) return 1;
    if (aD && bD && aD > bD) return -1;
    return 0;
  });

  if (!pagination) return posts;
  // else
  const { offset = 0, limit = posts.length } = pagination;
  return posts.slice(offset, offset + limit);
};
