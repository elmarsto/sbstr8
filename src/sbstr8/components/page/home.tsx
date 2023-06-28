import { gql } from '@apollo/client';
import ccn from '@sindresorhus/class-names';
import cfg from '@/../sbstr8.config';
import ReadMore from '@/sbstr8/components/read-more';
import Station from '@/sbstr8/components/station';
import { PageHeader } from '@/sbstr8/components/page/header';
import { Post } from '@/sbstr8/lib/types/post';
import { PostList } from '@/sbstr8/components/lede-list';
import { sClient } from '@/sbstr8/lib/graphql/server';

const defaultPostPath = '/posts/';
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

export interface homeMakerParams {
  primary?: Feature[];
  secondary?: Feature[];
  tertiary?: Feature[];
  mainClassName?: string;
  readMoreClassName?: string;
  readMoreText?: string;
  unfeaturedHeader?: React.ReactNode;
}

export const homeMaker =
  ({
    primary,
    secondary,
    tertiary,
    mainClassName,
    readMoreClassName,
    readMoreText,
    unfeaturedHeader,
  }: homeMakerParams) =>
  async () => {
    const { data } = await sClient.query({ query });
    const eins: Feature[] = primary || [];
    const zwei: Feature[] = secondary || [];
    const drei: Feature[] = tertiary || [];

    const featureCount = eins.length + zwei.length + drei.length;
    const unfeaturedPosts = data.posts.slice(featureCount);
    return (
      <>
        <PageHeader />
        <main
          className={ccn(
            'flex',
            'flex-col',
            'flex-nowrap',
            'justify-stretch',
            mainClassName,
          )}
        >
          <div className={ccn('md:pb-4')}>
            {eins.map(({ post, link }: Feature, i: number) => (
              <Station key={i} post={post} link={link} cut="primary" />
            ))}
          </div>
          <div
            className={ccn(
              'grid',
              'grid-cols-1',
              'md:gap-4',
              'md:grid-cols-2',
              'md:mb-4',
            )}
          >
            {zwei.map(({ post, link }: Feature, i: number) => (
              <Station key={i} post={post} link={link} cut="secondary" />
            ))}
          </div>
          <div
            className={ccn(
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
              <Station key={i} post={post} link={link} cut="tertiary" />
            ))}
          </div>
          {unfeaturedPosts && (
            <div>
              {unfeaturedHeader}
              <PostList>{unfeaturedPosts}</PostList>
              <ReadMore
                href={cfg.postPath || defaultPostPath}
                className={ccn(
                  'float-right',
                  'p-2',
                  'text-xs',
                  readMoreClassName,
                )}
              >
                {readMoreText}
              </ReadMore>
            </div>
          )}
        </main>
      </>
    );
  };

export default homeMaker;
