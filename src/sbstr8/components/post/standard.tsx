import * as React from 'react';
import ccn from '@sindresorhus/class-names';
import S8 from '@/sbstr8';
import { Person } from '@/sbstr8/lib/types/person';
import { defaultAuthor } from '@/sbstr8.config';

export interface StandardProps {
  authorClassName?: string;
  authors?: Person[];
  children: React.ReactNode;
  contentClassName?: string;
  created: string;
  dateClassName?: string;
  footnoteClassName?: string;
  footnotes?: React.ReactNode;
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
  dateClassName,
  footnoteClassName,
  footnotes,
  image,
  title,
  titleClassName,
  updated,
}: StandardProps) => {
  const author = authors && authors.length > 0 ? authors[0] : defaultAuthor;
  return (
    <>
      <S8.PageHeader />
      <main>
        <article>
          <header>
            <div
              className={ccn(
                'bg-cover',
                'bg-no-repeat',
                'bg-top',
                'flex',
                'flex-col',
                'flex-nowrap',
                'justify-end',
                'lg:bg-contain',
                'lg:bg-fixed',
              )}
              style={{
                backgroundImage: `url(${image})`,
                height: '50vw',
                minHeight: 640,
              }}
            >
              <div
                style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
                className={ccn(
                  'flex',
                  'flex-row',
                  'gap-4',
                  'items-baseline',
                  'justify-between',
                  'p-4',
                  'text-white',
                )}
              >
                <div
                  className={ccn(
                    'flex',
                    'flex-col',
                    'items-end',
                    'justify-start',
                    'sm:text-xl',
                    'text-sm',
                  )}
                >
                  <span className={dateClassName}>{created}</span>
                  {updated && (
                    <em>
                      Updated <span className={dateClassName}>{updated}</span>
                    </em>
                  )}
                </div>
                <div
                  className={ccn(
                    'flex',
                    'flex-col',
                    'justify-start',
                    'items-end',
                  )}
                >
                  <h2 className={ccn('text-xl', 'sm:text-4xl', titleClassName)}>
                    {title}
                  </h2>
                  {author && (
                    <h3 className={ccn('text-sm', 'sm:text-lg')}>
                      by <span className={authorClassName}>{author.name}</span>
                    </h3>
                  )}
                </div>
              </div>
            </div>
          </header>
          <div
            className={ccn(
              'md:my-12',
              'md:p-8',
              'md:w-2/3',
              'mx-auto',
              'p-4',
              'text-md',
              'sm:text-lg',
              contentClassName,
            )}
          >
            {children}
          </div>
          <em className={ccn('text-xs', footnoteClassName)}>{footnotes}</em>
        </article>
      </main>
    </>
  );
};

export default Standard;
