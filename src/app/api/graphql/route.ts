import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { ApolloServer } from '@apollo/server';
import { NextRequest } from 'next/server';
import { compose, pluck, flatten } from 'ramda';
import { gql } from 'graphql-tag';
import { getSortedPost } from '@/utils/post';
import cfg from '@/../martrix-config';
import { DateRange, Post, Contribution, Person } from '@/types';

// TODO: unit tests for resolvers and filters

// TODO: split this file up, refactor, etc.

export const typeDefs = gql`
  type Person {
    email: String!
    github: String
    image: String
    link: String
    mastodon: String
    matrix: String
    name: String
    twitter: String
  }
  type Contribution {
    contributors: [Person!]!
    description: String
  }
  type Post {
    authors: [Person]!
    contributions: [Contribution]!
    categories: [String]!
    date: String!
    description: String!
    image: String!
    paragraphs: [String]!
    slug: String!
    tags: [String]!
    title: String!
    link: String
  }
  type Query {
    owners: [Person!]!
    categories: [String]!
    description: String!
    icon: String
    image: String
    language: String
    link: String!
    posts: [Post]!
    keywords: [String]!
    title: String!
    updated: String!
  }
`;

export interface PostResolverArgs {
  authors?: string[]; // by email
  categories?: string[];
  contributors?: string[]; // by email
  created?: DateRange;
  slugs?: string[];
  tags?: string[];
  updated?: DateRange;
}

export const filterByTags = (tags: string[]) => (posts: Post[]) => {
  if (!tags) return posts;
  return posts.filter(
    (post) => (tags || []).every((tag) => (post.tags || []).includes(tag)), // return the post if its set of tags is a superset of the set of provided tags. Careful: this is intersection, not union, unlike every other query, for drilldown
  );
};

export const filterByCategories = (categories: string[]) => (posts: Post[]) => {
  if (!categories) return posts;
  return posts.filter((post) =>
    (categories || []).some(
      (category) => (post.categories || []).includes(category), // return the post if any of its categories match any of the provided categories
    ),
  );
};

export const filterBySlug = (slugs: string[]) => (posts: Post[]) => {
  if (!slugs) return posts;
  return posts.filter(
    (post) => (slugs || []).some((slug) => post.slug === slug), // the post slug must match exactly one of the provided slugs
  );
};

const pluckEmail = pluck('email');
export const filterByAuthors =
  (authorEmailAddresses: string[]) => (posts: Post[]) => {
    if (!authorEmailAddresses) return posts;
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
  (contributorEmailAddresses: string[]) => (posts: Post[]) => {
    if (!contributorEmailAddresses) return posts;
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

const resolvePosts = (...args: Array<object>) => {
  const {
    authors = [],
    categories = [],
    contributors = [],
    created,
    slugs = [],
    tags = [],
    updated,
  }: PostResolverArgs = args[1] || {};
  const unfilteredPosts = getSortedPost();
  const greatFilter = compose(
    filterByAuthors(authors),
    filterByCategories(categories),
    filterByContributors(contributors),
    filterByDateCreated(created),
    filterByDateUpdated(updated),
    filterBySlug(slugs),
    filterByTags(tags),
  );
  return greatFilter(unfilteredPosts); // sorry Fermi
};

const resolvers = {
  Query: {
    categories: () => cfg.categories,
    description: () => cfg.description,
    icon: () => cfg.icon,
    image: () => cfg.image,
    keywords: () => cfg.keywords,
    language: () => cfg.language,
    link: () => cfg.link,
    owners: () => cfg.owners,
    posts: () => resolvePosts,
    title: () => cfg.title,
    updated: () => cfg.updated,
  },
};

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

const handler = startServerAndCreateNextHandler(server);

export async function GET(request: NextRequest) {
  return handler(request);
}

export async function POST(request: NextRequest) {
  return handler(request);
}
