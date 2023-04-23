import { ApolloClient, InMemoryCache } from '@apollo/client';
import { SchemaLink } from '@apollo/client/link/schema';
import { resolvers } from './server';
import { makeExecutableSchema } from '@graphql-tools/schema';
import urlJoin from 'url-join';
import cfg from '@/../substrate-config';
import { typeDefs } from './schema';

const cache = new InMemoryCache({
  typePolicies: {
    Person: {
      keyFields: ['email'],
    },
    Post: {
      keyFields: ['slug'],
    },
  },
});

export const csrClient = new ApolloClient({
  cache,
  typeDefs,
  uri: urlJoin(cfg.link, '/api/graphql'),
});

export const ssrClient = new ApolloClient({
  cache,
  typeDefs,
  ssrMode: true,
  link: new SchemaLink({
    schema: makeExecutableSchema({ typeDefs, resolvers }),
  }),
});
