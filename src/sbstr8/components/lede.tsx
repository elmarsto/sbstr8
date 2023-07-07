import { CSSProperties, FunctionComponent } from 'react';
import urlJoin from 'url-join';
import ccn from '@sindresorhus/class-names';
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
  LinkComponent?: FunctionComponent<LinkProps>;
  MdComponent?: FunctionComponent<MdProps>;
  titleClassName?: string;
  descriptionClassName?: string;
  dateClassName?: string;
  thumbnailClassName?: string;
  className?: string;
  style?: CSSProperties;
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
    <div className={ccn('s8-lede', className)} style={style}>
      <Link className={ccn('s8-lede-thumbnail')} href={urlJoin('post', slug)}>
        <Image
          className={thumbnailClassName}
          src={pic}
          width={THUMB_SZ}
          height={THUMB_SZ}
          alt={title}
        />
      </Link>
      <h2 className={ccn('s8-lede-title', titleClassName)}>
        <Link href={urlJoin('post', slug)}>{title}</Link>
      </h2>
      <h3 className={ccn('s8-lede-date', dateClassName)}>{date}</h3>
      <div className={ccn('s8-lede-description', descriptionClassName)}>
        <Md>{description}</Md>
      </div>
    </div>
  );
};
export default Lede;
