import * as React from 'react';
import ccn from '@sindresorhus/class-names';
import { gql } from '@apollo/client';
import Card from '@/sbstr8/components/card';
import Link from '@/sbstr8/components/link';
import PageHeader from '@/sbstr8/components/page/header';
import Slip from '@/sbstr8/components/slip';
import StandardPage from '@/sbstr8/components/page/standard';
import { CookedPostMetadata } from '@/sbstr8/lib/types/post';
import { Md } from '@/sbstr8/components/md';
import { ReadMore } from '@/sbstr8/components/station';
import { sClient } from '@/sbstr8/lib/graphql/server';

const query = gql`
  query {
    lastModified
    posts {
      created
      description
      image
      slug
      thumbnail
      title
      updated
    }
  }
`;

const slugToHref = (slug: string) => `/post/${slug}`;
const defaultReadMoreClassName = 'absolute bottom-0 right-0';

interface PostsProps {
  dateClassName?: string;
  descriptionClassName?: string;
  headerClassName?: string;
  readMoreClassName?: string;
  titleClassName?: string;
}

export const Posts = async ({
  dateClassName,
  descriptionClassName,
  headerClassName,
  readMoreClassName,
  titleClassName,
}: PostsProps) => {
  const {
    data: { posts },
  } = await sClient.query({ query });
  return (
    <>
      <PageHeader className={headerClassName} />
      <StandardPage>
        {posts.map(
          (
            {
              created,
              description,
              image,
              slug,
              thumbnail,
              title,
              updated,
            }: CookedPostMetadata,
            i: number,
          ) => {
            const pic = thumbnail || image;
            return (
              <Card
                key={i}
                className={ccn(
                  'flex',
                  'flex-nowrap',
                  'flex-row',
                  'gap-4',
                  'items-stretch',
                  'justify-between',
                  'mb-1',
                  'sm:mb-4',
                )}
              >
                <Link
                  href={slugToHref(slug)}
                  style={{
                    width: 256,
                    height: 256,
                    backgroundImage: pic && `url(${pic})`,
                  }}
                  className={ccn('bg-cover', 'rounded-lg', 'shrink-0')}
                >
                  &nbsp;
                </Link>
                <Slip
                  className={ccn('grow', 'relative', 'overflow-hidden')}
                  style={{ height: 256 }}
                  title={
                    <Link
                      href={slugToHref(slug)}
                      className={ccn('text-lg', 'sm:text-2xl', titleClassName)}
                    >
                      {title}
                    </Link>
                  }
                >
                  <div className={ccn('pb-4', 'text-sm', 'sm:text-md')}>
                    <span className={dateClassName}>{created}</span>
                    {updated && (
                      <em>
                        &mdash;updated{' '}
                        <span className={dateClassName}>{updated}</span>
                      </em>
                    )}
                  </div>
                  <Md
                    className={ccn(
                      'text-sm',
                      'sm:text-lg',
                      descriptionClassName,
                    )}
                  >
                    {description}
                  </Md>
                  <ReadMore
                    href={slugToHref(slug)}
                    className={ccn(defaultReadMoreClassName, readMoreClassName)}
                  />
                </Slip>
              </Card>
            );
          },
        )}
      </StandardPage>
    </>
  );
};

export default Posts;
