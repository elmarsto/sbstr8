import * as React from 'react';
import ccn from '@sindresorhus/class-names';
import PageHeader from '@/sbstr8/components/page/header';
import Image from '@/sbstr8/components/image';
import { Person } from '@/sbstr8/lib/types/person';
import { defaultAuthor } from '@/../sbstr8.config';

const IMG_WIDTH = 2048;
const IMG_HEIGHT = 1024;

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
      <PageHeader />
      <main>
        <article>
          <header>
            <Image
              src={image}
              alt={title}
              width={IMG_WIDTH}
              height={IMG_HEIGHT}
            />
            <h2 className={titleClassName}>{title}</h2>
            {author && (
              <h3 className={authorClassName}>
                by <span className={authorClassName}>{author.name}</span>
              </h3>
            )}
            <h3 className={dateClassName}>{created}</h3>
            {updated && (
              <h3>
                <em>
                  Updated <span className={dateClassName}>{updated}</span>
                </em>
              </h3>
            )}
          </header>
          <div className={ccn('article-body', contentClassName)}>
            {children}
          </div>
          <em className={footnoteClassName}>{footnotes}</em>
        </article>
      </main>
    </>
  );
};

export default Standard;
