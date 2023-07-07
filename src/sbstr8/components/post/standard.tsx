import { ReactNode } from 'react';
import ccn from '@sindresorhus/class-names';
import PageHeader from '@/sbstr8/components/page/header';
import Image from '@/sbstr8/components/image';
import { Person } from '@/sbstr8/lib/types/person';
import { defaultAuthor } from '@/../sbstr8.config';
import cfg from '@/../sbstr8.config';

const LOGO_SZ = 32;
const defaultLogo = '/media/sbstr8.svg';

const IMG_WIDTH = 2048;
const IMG_HEIGHT = 1024;

export interface StandardProps {
  authorClassName?: string;
  authors?: Person[];
  children: ReactNode;
  contentClassName?: string;
  className?: string;
  created: string;
  dateClassName?: string;
  footnoteClassName?: string;
  footnotes?: ReactNode;
  image: string;
  title: string;
  titleClassName?: string;
  updated?: string;
}
// TODO: refactor all the random things named 'post' under @/components/ into @/components/post/*

export const Standard = ({
  authorClassName,
  authors,
  children,
  contentClassName,
  created,
  className,
  dateClassName,
  footnoteClassName,
  footnotes,
  image,
  title,
  titleClassName,
  updated,
}: StandardProps) => {
  const author = authors && authors.length > 0 ? authors[0] : defaultAuthor;
  const pic = cfg.icon || defaultLogo;
  return (
    <div className={ccn('s8-post-standard', className)}>
      <PageHeader className="s8-post-standard-header">
        <Image src={pic} width={LOGO_SZ} height={LOGO_SZ} alt="logo" />
      </PageHeader>
      <main>
        <article className="s8-post-standard-article">
          <header className="s8-post-standard-article-header">
            <Image
              src={image}
              alt={title}
              width={IMG_WIDTH}
              height={IMG_HEIGHT}
              className="s8-post-standard-article-header-image"
            />
            <h2
              className={ccn(
                's8-post-standard-article-header-title',
                titleClassName,
              )}
            >
              {title}
            </h2>
            {author && (
              <h3
                className={ccn(
                  's8-post-standard-article-header-author',
                  authorClassName,
                )}
              >
                by{' '}
                <span
                  className={ccn(
                    's8-post-standard-article-header-author-name',
                    authorClassName,
                  )}
                >
                  {author.name}
                </span>
              </h3>
            )}
            <h3
              className={ccn(
                's8-post-standard-article-date-created',
                dateClassName,
              )}
            >
              {created}
            </h3>
            {updated && (
              <h3 className={ccn('s8-post-standard-article-date-updated')}>
                <em>
                  Updated{' '}
                  <span
                    className={ccn(
                      's8-post-standard-article-date-updated-date',
                      dateClassName,
                    )}
                  >
                    {updated}
                  </span>
                </em>
              </h3>
            )}
          </header>
          <div
            className={ccn(
              's8-post-standard-article-body',
              's8-article-body',
              contentClassName,
            )}
          >
            {children}
          </div>
          <em
            className={ccn(
              's8-post-standard-article-footnote',
              footnoteClassName,
            )}
          >
            {footnotes}
          </em>
        </article>
      </main>
    </div>
  );
};

export default Standard;
