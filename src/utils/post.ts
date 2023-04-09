// adapted from https://blog.logrocket.com/adding-rss-feed-next-js-app/ 2023-03-29

import fs from 'fs';
import path from 'path';

const postSubdirectory = 'src/app/post';
const suffixRegex = /\.mdx$/; // TODO: add support for .md, .ts(x?), and .js(x?). Will require novel methods of grabbing metadata

const metadata = require('extract-mdx-metadata');

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
  const files = fs.readdirSync(postDirectory);
  const posts: PostMetadata[] = [];

  if (!files) return;

  files.forEach((file) => {
    if (!suffixRegex.test(file)) return;
    const filePath = path.join(postDirectory, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const { data } = metadata(content);
    console.log(data);
    posts.push({
      ...data,
      slug: file.replace(suffixRegex, ''),
    });
  });

  // Sort posts by date
  return posts.sort((a: PostMetadata, b: PostMetadata) => {
    if (a.date && b.date && a.date < b.date) return 1;
    if (a.date && b.date && a.date > b.date) return -1;
    return 0;
  });
}
