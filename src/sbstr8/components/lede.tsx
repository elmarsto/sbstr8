import * as React from 'react';
import urlJoin from 'url-join';
import Image from '@/sbstr8/components/image';
import { CookedPostMetadata } from '@/sbstr8/lib/types/post';
import {
  Link as defaultLinkComponent,
  LinkProps,
} from '@/sbstr8/components/link';
import { Md as defaultMdComponent, MdProps } from '@/sbstr8/components/md';
import cfg from '@/../sbstr8.config';

const THUMB_SZ = 256;
const THUMB_DEFAULT = '/media/sbstr8.svg';

export interface LedeProps extends CookedPostMetadata {
  LinkComponent?: React.FunctionComponent<LinkProps>;
  MdComponent?: React.FunctionComponent<MdProps>;
  titleClassName?: string;
  descriptionClassName?: string;
  dateClassName?: string;
  thumbnailClassName?: string;
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
  LinkComponent,
  MdComponent,
  titleClassName,
  descriptionClassName,
  dateClassName,
  thumbnailClassName,
  style,
  className,
}: LedeProps) => {
  const Link = LinkComponent || defaultLinkComponent;
  const Md = MdComponent || defaultMdComponent;
  const pic = thumbnail || image || cfg.icon || THUMB_DEFAULT;
  return (
    <div className={className} style={style}>
      <Link href={urlJoin('post', slug)}>
        <Image
          className={thumbnailClassName}
          src={pic}
          width={THUMB_SZ}
          height={THUMB_SZ}
          alt={title}
        />
      </Link>
      <h2 className={titleClassName}>
        <Link href={urlJoin('post', slug)}>{title}</Link>
      </h2>
      <h3 className={dateClassName}>{date}</h3>
      <div className={descriptionClassName}>
        <Md>{description}</Md>
      </div>
    </div>
  );
};
export default Lede;
