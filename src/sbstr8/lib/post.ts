// adapted from https://blog.logrocket.com/adding-rss-feed-next-js-app/ 2023-03-29

import fs from 'fs';
import path from 'path';

import { CookedPostMetadata, RawPostMetadata } from '@/sbstr8/lib/types';

const BEGINNING_OF_TIME = 'Jan 1 1970';
const TODAY = new Date();
const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const defaultPostPath = '/post';
export const postSubdirectory = (postPath: string) => `src/app/${postPath}`;
const rootDirectory = process.cwd();

// TODO: correctly handle updated date
export const getLastModified = (posts: CookedPostMetadata[]): Date =>
  posts[0] ? new Date(posts[0].updated || posts[0].created) : new Date();

// get sorted post
interface Pagination {
  offset?: number;
  limit?: number;
}

export const mkShortDate = (created?: string, updated?: string) => {
  const theCreated = new Date(created || BEGINNING_OF_TIME);
  const theUpdated = new Date(updated || BEGINNING_OF_TIME);
  const theMostRecent =
    theCreated.getTime() < theUpdated.getTime() ? theUpdated : theCreated;
  const theDay = theMostRecent.getDate();
  const theMonth = MONTHS[theMostRecent.getMonth()];
  const theYear = theMostRecent.getFullYear();
  const currentYear = TODAY.getFullYear();
  // TODO: show 'today' for all dates equal to or greater than today (incl. future posts!)
  // TODO: show 'yesterday' for all dates equal to today minus one day
  if (theYear === currentYear) {
    return `${theMonth} ${theDay}`;
  } else {
    return `${theYear} ${theMonth} ${theDay}`;
  }
};

export const getSortedPost = (
  pagination?: Pagination,
): CookedPostMetadata[] => {
  const postDirectory = path.join(
    rootDirectory,
    postSubdirectory(defaultPostPath),
  );
  const slugs = fs.readdirSync(postDirectory);
  const posts: CookedPostMetadata[] = [];

  if (!slugs) return [];

  slugs.forEach((slug) => {
    if (!fs.lstatSync(path.join(postDirectory, slug)).isDirectory()) return;
    const filePath = path.join(postDirectory, slug, 'meta.json');
    const metadataFileContent = fs.readFileSync(filePath, 'utf8');
    const data: RawPostMetadata = JSON.parse(metadataFileContent);

    posts.push({
      // above data so it can be overridden
      image: path.join(defaultPostPath, slug, 'image.png'),
      ...data,
      slug,
      created: data.created || 'Jan 1 2023',
      date: mkShortDate(data.created, data.updated),
      description: data.description || '',
      title: data.title || '',
      link: path.join(defaultPostPath, slug),
    });
  });

  posts.sort((a: CookedPostMetadata, b: CookedPostMetadata) => {
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
