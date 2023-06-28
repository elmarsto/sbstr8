import * as React from 'react';
import ccn from '@sindresorhus/class-names';
import { mkShortDate } from '@/sbstr8/lib/date';
import { Post } from '@/sbstr8/lib/types/post';
import clss from './station.module.css';
import {
  Image as defaultImageComponent,
  ImageProps,
} from '@/sbstr8/components/image';
import {
  Link as defaultLinkComponent,
  LinkProps,
} from '@/sbstr8/components/link';

const defaultImageWidth = 1024;
const defaultImageHeight = 512;

export interface StationProps {
  post: Post;
  link: string;
  cut: 'primary' | 'secondary' | 'tertiary';
  imageWidth?: number;
  imageHeight?: number;
  authorClassName?: string;
  className?: string;
  dateClassName?: string;
  hookClassName?: string;
  imageClassName?: string;
  teaserClassName?: string;
  titleClassName?: string;
  style?: React.CSSProperties;
  ImageComponent?: React.FunctionComponent<ImageProps>;
  LinkComponent?: React.FunctionComponent<LinkProps>;
}
const defaultImage = '/media/sbstr8.svg';

const Station = ({
  link,
  post: {
    meta: { image, title, created, updated, authors },
    Hook,
    Teaser,
  },
  cut,
  className,
  imageClassName,
  imageWidth,
  imageHeight,
  authorClassName,
  titleClassName,
  dateClassName,
  teaserClassName,
  hookClassName,
  style,
  ImageComponent,
  LinkComponent,
}: StationProps) => {
  const date = mkShortDate(created, updated);
  const Link = LinkComponent || defaultLinkComponent;
  const Image = ImageComponent || defaultImageComponent;
  return (
    <div className={ccn(clss[cut], className)} style={style}>
      <Link href={link}>
        <Image
          className={imageClassName}
          src={image || defaultImage}
          width={imageWidth || defaultImageWidth}
          height={imageHeight || defaultImageHeight}
          alt={`Image for post entitled ${title}`}
        />
      </Link>
      <h1 className={ccn(clss['title'], titleClassName)}>
        <Link href={link}>{title}</Link>
      </h1>
      <h2 className={ccn(clss['date'], dateClassName)}>{date}</h2>
      <h2 className={ccn(clss['author'], authorClassName)}>
        {(authors || []).join(', ')}
      </h2>
      <div></div>
      <div className={ccn(clss['teaser'], teaserClassName)}>
        <Teaser />
      </div>
      <Link className={ccn(clss['hook'], hookClassName)} href={link}>
        <Hook />
      </Link>
    </div>
  );
};

export default Station;
