import { ApolloClient, ApolloCache, DocumentNode } from '@apollo/client';
import * as React from 'react';
import { Person } from './person';
import { MenuItem } from '@/sbstr8/lib/menu';

export interface Config {
  owners: Person[];
  categories: string[];
  copyright: string;
  description: string;
  icon?: string;
  image?: string;
  language: string;
  link: string;
  postPath?: string; // URL segment, e.g. /post
  keywords: string[];
  title: string;
}

export interface Override {
  component?: {
    Link?: React.ComponentType;
    Image?: React.ComponentType;
    Station?: React.ComponentType;
    PostList?: React.ComponentType;
    Lede?: React.ComponentType;
    page?: {
      Standard: React.ComponentType;
      Home: React.ComponentType;
      Posts: React.ComponentType;
      Post: React.ComponentType;
    };
    layout?: {
      Standard: React.ComponentType;
      Home: React.ComponentType;
      Posts: React.ComponentType;
      Post: React.ComponentType;
    };
  };
  menu?: MenuItem[];
  graphql?: {
    clientSideClient?: ApolloClient<ApolloCache<any>>;
    serverSideClient?: ApolloClient<ApolloCache<any>>;
    cache?: ApolloCache<any>;
    typeDefs?: string | DocumentNode | Array<DocumentNode>;
    resolvers?: object | object[];
    schema?: object;
  };
}
