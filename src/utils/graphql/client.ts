import { ApolloClient, InMemoryCache } from '@apollo/client';
import urlJoin from 'url-join';
import cfg from '@/../substrate-config';
import { typeDefs } from './schema';

export const client = new ApolloClient({
  cache: new InMemoryCache({
    typePolicies: {
      Person: {
        keyFields: ['email'],
      },
      Post: {
        keyFields: ['slug'],
      },
    },
  }),
  uri: urlJoin(cfg.link, '/api/graphql'),
  typeDefs,
});
