import { gql } from '@apollo/client';
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

export default async function Page() {
  const { data } = await client.query({ query });
  return <Home posts={data.posts} lastModified={data.lastModified} />;
}
