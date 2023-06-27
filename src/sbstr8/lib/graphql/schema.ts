import { gql } from 'graphql-tag';

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
    authors: [Person]
    contributions: [Contribution]
    categories: [String]
    created: String
    updated: String
    description: String
    image: String
    thumbnail: String
    paragraphs: [String]
    date: String
    slug: String!
    tags: [String]
    title: String
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
    lastModified: String
  }
`;
