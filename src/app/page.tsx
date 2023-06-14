import { gql } from '@apollo/client';
import { sClient } from '@/lib/graphql/server';
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

export default async function Page() {
  const { data } = await sClient.query({ query });
  return <Home posts={data.posts} lastModified={data.lastModified} />;
}
