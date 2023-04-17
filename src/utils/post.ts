// adapted from https://blog.logrocket.com/adding-rss-feed-next-js-app/ 2023-03-29

import fs from 'fs';
import path from 'path';

import { Post } from '@/types';
import cfg from '@/../substrate-config';

export const defaultPostPath = 'post';
export const postSubdirectory = (postPath: string) => `src/app/${postPath}`;
const rootDirectory = process.cwd();

// TODO: memoize
export const getLastModified = (posts: Post[]): Date => {
  let lastModifiedTime = new Date().getTime();
  for (const post of posts) {
    const createdTime: number = new Date(post.created).getTime();
    const updatedTime: number = post.updated
      ? new Date(post.created).getTime()
      : createdTime;
    if (updatedTime > lastModifiedTime) lastModifiedTime = updatedTime;
  }
  return new Date(lastModifiedTime);
};

interface SortedPosts {
  lastModified: Date;
  posts: Post[];
}

// get sorted post
export const getSortedPost = (): SortedPosts => {
  const postDirectory = path.join(
    rootDirectory,
    postSubdirectory(cfg.postPath || defaultPostPath),
  );
  const slugs = fs.readdirSync(postDirectory);
  const posts: Post[] = [];

  if (!slugs)
    return {
      lastModified: new Date(),
      posts: [],
    };

  slugs.forEach((slug) => {
    if (!fs.lstatSync(path.join(postDirectory, slug)).isDirectory()) return;
    const filePath = path.join(postDirectory, slug, 'meta.json');
    const metadataFileContent = fs.readFileSync(filePath, 'utf8');
    const data: Post = JSON.parse(metadataFileContent);
    posts.push({
      ...data,
      slug,
      link: path.join(cfg.link, cfg.postPath || defaultPostPath, slug),
    });
  });

  // FIXME: this code feels wasteful and naive. Combine getLastModified and sort?
  const lastModified = getLastModified(posts);
  posts.sort((a: Post, b: Post) => {
    const aD = new Date(a.created).getTime();
    const bD = new Date(b.created).getTime();

    if (aD && bD && aD < bD) return 1;
    if (aD && bD && aD > bD) return -1;
    return 0;
  });

  return {
    lastModified,
    posts,
  };
};
