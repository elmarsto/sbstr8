import * as React from 'react';
import urlJoin from 'url-join';
import { gql } from '@apollo/client';
import cfg from '@/../sbstr8.config';
import Card from '@/sbstr8/components/card';
import Link from '@/sbstr8/components/link';
import Image from '@/sbstr8/components/image';
import PageHeader from '@/sbstr8/components/page/header';
import Slip from '@/sbstr8/components/slip';
import StandardPage from '@/sbstr8/components/page/standard';
import { CookedPostMetadata } from '@/sbstr8/lib/types/post';
import { Md } from '@/sbstr8/components/md';
import ReadMore from '@/sbstr8/components/read-more';
import { sClient } from '@/sbstr8/lib/graphql/server';

const LOGO_SZ = 32;
const defaultLogo = '/media/sbstr8.svg';

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

const THUMB_SZ = 256;
const THUMB_DEFAULT = '/media/sbstr8.svg';
const defaultPostPath = '/posts';

const slugToHref = (slug: string) =>
  urlJoin(cfg.postPath || defaultPostPath, slug);

export interface PostsParams {
  dateClassName?: string;
  descriptionClassName?: string;
  headerClassName?: string;
  readMoreClassName?: string;
  titleClassName?: string;
}

export const postsMaker =
  ({
    dateClassName,
    descriptionClassName,
    headerClassName,
    readMoreClassName,
    titleClassName,
  }: PostsParams) =>
  async () => {
    const pic = cfg.icon || defaultLogo;
    const {
      data: { posts },
    } = await sClient.query({ query });
    return (
      <>
        <PageHeader className={headerClassName}>
          <Image src={pic} width={LOGO_SZ} height={LOGO_SZ} alt="logo" />
        </PageHeader>
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
              const pic = thumbnail || image || THUMB_DEFAULT;
              return (
                <Card key={i}>
                  <Link href={slugToHref(slug)}>
                    <Image
                      src={pic}
                      alt={title}
                      width={THUMB_SZ}
                      height={THUMB_SZ}
                    />
                  </Link>
                  <Slip
                    style={{ height: THUMB_SZ }}
                    title={
                      <h2>
                        <Link
                          href={slugToHref(slug)}
                          className={titleClassName}
                        >
                          {title}
                        </Link>
                      </h2>
                    }
                  >
                    <h3>
                      <span className={dateClassName}>{created}</span>
                      {updated && (
                        <em>
                          &mdash;updated{' '}
                          <span className={dateClassName}>{updated}</span>
                        </em>
                      )}
                    </h3>
                    <Md className={descriptionClassName}>{description}</Md>
                    <ReadMore
                      href={slugToHref(slug)}
                      className={readMoreClassName}
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

export default postsMaker;
