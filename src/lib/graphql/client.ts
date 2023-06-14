import { ApolloClient, InMemoryCache } from '@apollo/client';
import urlJoin from 'url-join';
import cfg from '@/../sbstr8-config';
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

export const cClient = new ApolloClient({
  cache,
  typeDefs,
  uri: urlJoin(cfg.link, '/api/graphql'),
});
