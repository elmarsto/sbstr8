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
  Image?: React.ComponentType;
  LayoutHome?: React.ComponentType;
  LayoutPost?: React.ComponentType;
  LayoutPosts?: React.ComponentType;
  LayoutStandard?: React.ComponentType;
  Lede?: React.ComponentType;
  Link?: React.ComponentType;
  PageHome?: React.ComponentType;
  PagePost?: React.ComponentType;
  PagePosts?: React.ComponentType;
  PageStandard?: React.ComponentType;
  PostList?: React.ComponentType;
  Station?: React.ComponentType;
  graphqlClientSideCache?: ApolloCache<any>;
  graphqlClientSideClient?: ApolloClient<ApolloCache<any>>;
  graphqlResolvers?: object | object[];
  graphqlServerSideCache?: ApolloCache<any>;
  graphqlServerSideClient?: ApolloClient<ApolloCache<any>>;
  graphqlTypeDefs?: string | DocumentNode | Array<DocumentNode>;
  menu?: MenuItem[];
}
