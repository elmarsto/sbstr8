import { ReactNode } from 'react';
import { gql } from '@apollo/client';
import ccn from '@sindresorhus/class-names';
import cfg from '@/../sbstr8.config';
import ReadMore from '@/sbstr8/components/read-more';
import Feature from '@/sbstr8/components/feature';
import Image from '@/sbstr8/components/image';
import { PageHeader } from '@/sbstr8/components/page/header';
import { Post } from '@/sbstr8/lib/types/post';
import LedeList from '@/sbstr8/components/lede-list';
import { sClient } from '@/sbstr8/lib/graphql/server';

const LOGO_SZ = 32;

const defaultPostPath = '/posts/';
const defaultLogo = '/media/sbstr8.svg';
const query = gql`
  query {
    lastModified
    posts {
      date
      description
      image
      thumbnail
      slug
      title
    }
  }
`;

export interface Feature {
  post: Post;
  link: string;
}

export interface rootMakerParams {
  primary?: Feature[];
  secondary?: Feature[];
  tertiary?: Feature[];
  mainClassName?: string;
  readMoreClassName?: string;
  readMoreText?: string;
  unfeaturedHeader?: ReactNode;
}

export const rootMaker =
  ({
    primary,
    secondary,
    tertiary,
    mainClassName,
    readMoreClassName,
    readMoreText,
    unfeaturedHeader,
  }: rootMakerParams) =>
  async () => {
    const { data } = await sClient.query({ query });
    const eins: Feature[] = primary || [];
    const zwei: Feature[] = secondary || [];
    const drei: Feature[] = tertiary || [];

    const featureCount = eins.length + zwei.length + drei.length;
    const unfeaturedPosts = data.posts.slice(featureCount);
    const logo = cfg.icon || defaultLogo;
    return (
      <div className="sbstr8:page-root">
        <PageHeader className="sbstr8:page-root-header">
          <Image src={logo} width={LOGO_SZ} height={LOGO_SZ} alt="logo" />
        </PageHeader>
        <main className={ccn('sbstr8:page-root-main', mainClassName)}>
          <section
            className={ccn(
              'sbstr8:page-root-section-featured-primary',
              'md:pb-4',
            )}
            style={{ minHeight: 1024 }}
          >
            {eins.map(({ post, link }: Feature, i: number) => (
              <Feature key={i} post={post} link={link} cut="primary" />
            ))}
          </section>
          <section
            className={ccn(
              'sbstr8:page-root-section-featured-secondary',
              'grid',
              'grid-cols-1',
              'md:gap-4',
              'md:grid-cols-2',
              'md:mb-4',
            )}
            style={{ minHeight: 512 }}
          >
            {zwei.map(({ post, link }: Feature, i: number) => (
              <Feature key={i} post={post} link={link} cut="secondary" />
            ))}
          </section>
          <section
            className={ccn(
              'sbstr8:page-root-section-featured-tertiary',
              'grid',
              'grid-cols-1',
              'grow',
              'items-stretch',
              'lg:grid-cols-4',
              'md:gap-4',
              'md:grid-cols-2',
              'md:mb-4',
            )}
            style={{ minHeight: 256 }}
          >
            {drei.map(({ post, link }: Feature, i: number) => (
              <Feature key={i} post={post} link={link} cut="tertiary" />
            ))}
          </section>
          {unfeaturedPosts && (
            <section className="sbstr8:page-root-section-unfeatured">
              {unfeaturedHeader}
              <LedeList>{unfeaturedPosts}</LedeList>
              <ReadMore
                href={cfg.postPath || defaultPostPath}
                className={ccn(
                  'sbstr8:page-root-section-unfeatured-read-more',
                  'float-right',
                  'p-2',
                  'text-xs',
                  readMoreClassName,
                )}
              >
                {readMoreText}
              </ReadMore>
            </section>
          )}
        </main>
      </div>
    );
  };

export default rootMaker;
