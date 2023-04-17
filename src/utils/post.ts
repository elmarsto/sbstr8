// adapted from https://blog.logrocket.com/adding-rss-feed-next-js-app/ 2023-03-29

import fs from 'fs';
import path from 'path';
import { Post } from '@/types';
import cfg from '@/../substrate-config';

export const defaultPostPath = 'post';
export const postSubdirectory = (postPath: string) => `src/app/${postPath}`;
const rootDirectory = process.cwd();

// get sorted mdx post
export function getSortedPost() {
  const postDirectory = path.join(
    rootDirectory,
    postSubdirectory(cfg.postPath || defaultPostPath),
  );
  const slugs = fs.readdirSync(postDirectory);
  const posts: Post[] = [];

  if (!slugs) return posts;

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

  // Sort posts by date
  return posts.sort((a: Post, b: Post) => {
    const aD = new Date(a.created).getTime();
    const bD = new Date(b.created).getTime();

    if (aD && bD && aD < bD) return 1;
    if (aD && bD && aD > bD) return -1;
    return 0;
  });
}
