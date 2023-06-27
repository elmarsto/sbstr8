import * as React from 'react';
import ccn from '@sindresorhus/class-names';
import { CookedPostMetadata as Post } from '@/sbstr8/lib/types/post';
import Link from '@/sbstr8/components/link';
import urlJoin from 'url-join';
import { Md } from '@/sbstr8/components/md';
import style from './post-list.module.css';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface PostListProps {
  children: Post[];
  className?: string;
  style?: React.CSSProperties;
}

export const Lede = ({
  title,
  slug,
  date,
  description,
  image,
  thumbnail,
}: Post) => {
  const pic = thumbnail || image;
  return (
    <Link
      href={urlJoin('post', slug)}
      className={ccn('block', 'group', 'overflow-hidden', style['flip-card'])}
      style={{ minHeight: 144, maxHeight: 256 }}
    >
      <div className={style['flip-card-inner']}>
        <div className={ccn('absolute', style['flip-card-front'])}>
          <div
            style={{ minHeight: '3rem' }}
            className={ccn(
              'flex',
              'flex-row',
              'items-baseline',
              'justify-between',
              'md:text-sm',
              'px-2',
              'text-xl',
            )}
          >
            <span className={ccn('text-sm', 'md:text-xs', 'pr-1')}>{date}</span>
            {title}
          </div>
          <div className={ccn('p-1', 'text-sm', 'md:text-xs')}>
            <Md>{description}</Md>
            <FontAwesomeIcon
              icon={faPlay}
              size="xs"
              className={ccn(
                'absolute',
                'bottom-0',
                'p-1',
                'right-0',
                'transition-all',
              )}
            />
          </div>
        </div>
        <div
          className={ccn(
            'bg-center',
            'bg-cover',
            'bg-no-repeat',
            'md:text-xs',
            'text-sm',
            style['flip-card-back'],
          )}
          style={{ backgroundImage: `url(${pic})` }}
        >
          &nbsp;
        </div>
      </div>
    </Link>
  );
};

const listClassName = ccn(
  'grid',
  'grid-cols-2',
  'lg:grid-cols-8',
  'md:gap-4',
  'md:grid-cols-4',
  'text-lg',
);
export const PostList = ({ children, className, style }: PostListProps) => {
  return (
    <div className={ccn(listClassName, className)} style={style}>
      {children.map((p: Post) => (
        <Lede {...p} key={p.slug} />
      ))}
    </div>
  );
};

export default PostList;
