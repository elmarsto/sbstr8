// adapted from https://blog.logrocket.com/adding-rss-feed-next-js-app/ 2023-03-29

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import readingTime from 'reading-time';
import imageSize from 'rehype-img-size';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

const rootDirectory = process.cwd();

export interface PostList {
  slug: string;
  title?: string;
  date?: number;
  description?: string;
}

// get sorted mdx post
export async function getSortedPost() {
  const postDirectory = path.join(rootDirectory, 'posts/');
  const files = fs.readdirSync(postDirectory);
  const postLists: PostList[] = [];

  if (!files) return;

  files.forEach((file) => {
    if (!file.endsWith('.mdx')) return;
    const filePath = path.join(postDirectory, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(content);

    postLists.push({
      ...data,
      date: data.date.valueOf(),
      slug: file.replace('.mdx', ''),
    });
  });

  // Sort posts by date

  return postLists.sort((a, b) => {
    if (a.date && b.date && a.date < b.date) return 1;
    if (a.date && b.date && a.date > b.date) return -1;
    return 0;
  });
}

// get post type dir
export async function getPostDir() {
  return fs.readdirSync(path.join(rootDirectory, 'posts'));
}

// get file by slug
export async function getFileBySlug(slug: string) {
  // get file content
  const fileContent = fs.readFileSync(
    path.join(rootDirectory, 'posts', `${slug}.mdx`),
    'utf8',
  );

  const { data, content } = matter(fileContent);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            behavior: 'append',
          },
        ],
        // justification: code from https://blog.logrocket.com/adding-rss-feed-next-js-app/#setting-up-next-js-rss-feed-project
        // and converted to typescript; this part did not convert cleanly. TODO: fix this
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        [imageSize, { dir: 'public' }],
      ],
    },
  });

  return {
    mdxSource,
    frontMatter: {
      readingTime: readingTime(content),
      slug: slug || null,
      date: data.date.toISOString() || null,
      description: data.description || null,
      title: data.title || null,
    },
  };
}
