import * as React from 'react';
import ccn from '@sindresorhus/class-names';
import Link from '@/sbstr8/components/link';
import urlJoin from 'url-join';
import { Md } from '@/sbstr8/components/md';
import style from './lede.module.css';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CookedPostMetadata } from '@/sbstr8/lib/types/post';

export type LedeProps = CookedPostMetadata;
export const Lede = ({
  title,
  slug,
  date,
  description,
  image,
  thumbnail,
}: LedeProps) => {
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
export default Lede;
