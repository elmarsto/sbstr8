import { gql } from '@apollo/client';
import { ssrClient } from '@/lib/graphql/client';
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
  const { data } = await ssrClient.query({ query });
  return <Home posts={data.posts} lastModified={data.lastModified} />;
}
