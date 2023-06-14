import * as React from 'react';
import Link from '@/components/link';

import { gql } from '@apollo/client';
import { sClient } from '@/lib/graphql/server';
import { Post } from '@/lib/types/post';

const query = gql`
  query {
    lastModified
    posts {
      slug
      title
      image
      description
      created
      updated
    }
  }
`;

const slugToHref = (slug: string) => `/post/${slug}`;

const Page = async () => {
  const {
    data: { posts },
  } = await sClient.query({ query });
  return (
    <>
      <div>
        {posts.map(
          (
            { slug, title, description, created, updated, image }: Post,
            i: number,
          ) => (
            <div
              key={i}
              className="mb-4 flex flex-row flex-nowrap justify-between items-stretch gap-4"
            >
              <Link
                href={slugToHref(slug)}
                style={{
                  minWidth: 256,
                  height: 256,
                  backgroundImage: image && `url(${image})`,
                }}
                className="max-sm:hidden bg-cover rounded-lg"
              >
                &nbsp;
              </Link>
              <div className="grow relative" style={{ minHeight: 256 }}>
                <Link href={slugToHref(slug)} className="text-2xl font-bold">
                  {title}
                </Link>
                <div className="pb-4">
                  {created}
                  {updated && <em>&mdash;updated {updated}</em>}
                </div>
                <div className="text-lg">{description}</div>
              </div>
            </div>
          ),
        )}
      </div>
    </>
  );
};

export default Page;
