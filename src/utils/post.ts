// adapted from https://blog.logrocket.com/adding-rss-feed-next-js-app/ 2023-03-29

import fs from 'fs';
import path from 'path';

const postSubdirectory = 'src/app/post';

const rootDirectory = process.cwd();

export interface PostMetadata {
  slug: string;
  title: string;
  date: number;
  description: string;
  featured: string;
}

// get sorted mdx post
export async function getSortedPost() {
  const postDirectory = path.join(rootDirectory, postSubdirectory);
  const slugs = fs.readdirSync(postDirectory);
  const posts: PostMetadata[] = [];

  if (!slugs) return;

  slugs.forEach((slug) => {
    const filePath = path.join(postDirectory, slug, 'meta.json');
    const content = fs.readFileSync(filePath, 'utf8');
    const data: PostMetadata = JSON.parse(content);
    posts.push({
      ...data,
      slug,
    });
  });

  // Sort posts by date
  return posts.sort((a: PostMetadata, b: PostMetadata) => {
    if (a.date && b.date && a.date < b.date) return 1;
    if (a.date && b.date && a.date > b.date) return -1;
    return 0;
  });
}
