import { ApolloServer } from '@apollo/server';
import { compose, pluck, flatten } from 'ramda';
import { getSortedPost, getLastModified } from '@/utils/post';
import cfg from '@/../substrate-config';
import { DateRange, Post, Contribution, Person } from '@/types';
import { typeDefs } from './schema';

// TODO: unit tests for resolvers and filters

const nary = (criteria?: any[]) => !criteria || criteria.length === 0;

export const filterByTags = (tags?: string[]) => (posts: Post[]) => {
  if (nary(tags)) return posts;
  return posts.filter(
    // return the post if its set of tags is a superset of the set of provided tags. Careful: this is intersection, not union, unlike every other query, for drilldown
    (post) => (tags || []).every((tag) => (post.tags || []).includes(tag)),
  );
};

export const filterByCategories =
  (categories?: string[]) => (posts: Post[]) => {
    if (nary(categories)) return posts;
    return posts.filter((post) =>
      (categories || []).some(
        (category) => (post.categories || []).includes(category), // return the post if any of its categories match any of the provided categories
      ),
    );
  };

export const filterBySlug = (slugs?: string[]) => (posts: Post[]) => {
  if (nary(slugs)) return posts;
  return posts.filter(
    (post) => (slugs || []).some((slug) => post.slug === slug), // the post slug must match exactly one of the provided slugs
  );
};

const pluckEmail = pluck('email');
export const filterByAuthors =
  (authorEmailAddresses?: string[]) => (posts: Post[]) => {
    if (nary(authorEmailAddresses)) return posts;
    return posts.filter((post) =>
      (authorEmailAddresses || []).some(
        (authorEmailAddress) =>
          pluckEmail(post.authors || []).includes(authorEmailAddress), // *some* author must match
      ),
    );
  };

const pluckContributors = pluck('contributors');
const allContributors = (contributions: Contribution[]): Person[] =>
  flatten(pluckContributors(contributions));

export const filterByContributors =
  (contributorEmailAddresses?: string[]) => (posts: Post[]) => {
    if (nary(contributorEmailAddresses)) return posts;
    return posts.filter((post) =>
      (contributorEmailAddresses || []).some(
        (contributorEmailAddress) =>
          pluckEmail([
            ...(post.authors || []), // authors contribute authorship
            ...allContributors(post.contributions || []),
          ]).includes(contributorEmailAddress), // *some* contributor *or author* must match, as an author is a special kind of contributor
      ),
    );
  };

export const filterByDateCreated =
  (dateRange?: DateRange) => (posts: Post[]) => {
    if (!dateRange) return posts;
    return posts.filter((post) => {
      const d = new Date(post.created).getTime();
      const f = new Date(dateRange.from).getTime();
      const t = (dateRange.to ? new Date(dateRange.to) : new Date()).getTime();
      return d >= f && d <= t;
    });
  };

// careful: this is a bit different than filterByDateCreated, because it uses post.created if post.updated is not defined
export const filterByDateUpdated =
  (dateRange?: DateRange) => (posts: Post[]) => {
    if (!dateRange) return posts;
    return posts.filter((post) => {
      const d = new Date(post.updated || post.created).getTime();
      const f = new Date(dateRange.from).getTime();
      const t = (dateRange.to ? new Date(dateRange.to) : new Date()).getTime();
      return d >= f && d <= t;
    });
  };

export interface PostResolverArgs {
  authors?: string[]; // by email
  categories?: string[];
  contributors?: string[]; // by email
  created?: DateRange;
  slugs?: string[];
  tags?: string[];
  updated?: DateRange;
  offset?: number;
  limit?: number;
}

export const resolvePosts =
  ({
    authors,
    categories,
    contributors,
    created,
    slugs,
    tags,
    updated,
  }: PostResolverArgs) =>
  (posts: Post[]) =>
    compose(
      filterByAuthors(authors),
      filterByCategories(categories),
      filterByContributors(contributors),
      filterByDateCreated(created),
      filterByDateUpdated(updated),
      filterBySlug(slugs),
      filterByTags(tags),
    )(posts);

export const resolvers = {
  Query: {
    categories: () => cfg.categories,
    description: () => cfg.description,
    icon: () => cfg.icon,
    image: () => cfg.image,
    keywords: () => cfg.keywords,
    language: () => cfg.language,
    link: () => cfg.link,
    owners: () => cfg.owners,
    posts: (_: any, args: PostResolverArgs) =>
      resolvePosts(args)(getSortedPost(args)),
    title: () => cfg.title,
    updated: () => getLastModified(getSortedPost()).toISOString(),
  },
};

export const server = new ApolloServer({
  resolvers,
  typeDefs,
});
