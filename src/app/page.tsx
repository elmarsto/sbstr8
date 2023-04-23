'use client';
import { gql, ApolloProvider, useQuery } from '@apollo/client';
import { client } from '@/lib/graphql/client';
import { Home } from './home';

const query = gql`
  query {
    lastModified
    posts {
      slug
      title
      description
      created
    }
  }
`;

const HomeContainer = () => {
  const { data, loading, error } = useQuery(query);
  if (loading) return <div>loading...</div>;
  if (error) return <div>error</div>;

  return <Home posts={data.posts} lastModified={data.lastModified} />;
};

export default function Page() {
  return (
    <ApolloProvider client={client}>
      <HomeContainer />
    </ApolloProvider>
  );
}
