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
import useOverride from '@/sbstr8/lib/hook/server/override';
import cfg from '@/../sbstr8.config';
import def from '@/sbstr8/lib/default';

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

export const Lede = async ({
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
  const overLink = await useOverride(defaultLinkComponent);
  const overMd = await useOverride(defaultMdComponent);
  const overImg = (await useOverride(def.image))?.logo || def.image;
  const overPath = (await useOverride(def.path))?.posts || def.path.posts;
  const thumbSz =
    (await useOverride(def.dimension))?.thumbnail || def.dimension.thumbnail;
  const Link = LinkComponent || overLink;
  const Md = MdComponent || overMd;
  const pic = thumbnail || image || cfg.icon || overImg;
  const postsPath = cfg.postPath || overPath;
  return (
    <div className={ccn('s8-lede', className)} style={style}>
      <Link
        className={ccn('s8-lede-thumbnail')}
        href={urlJoin(postsPath, slug)}
      >
        <Image
          className={thumbnailClassName}
          src={pic}
          width={thumbSz}
          height={thumbSz}
          alt={title}
        />
      </Link>
      <h2 className={ccn('s8-lede-title', titleClassName)}>
        <Link href={urlJoin(postsPath, slug)}>{title}</Link>
      </h2>
      <h3 className={ccn('s8-lede-date', dateClassName)}>{date}</h3>
      <div className={ccn('s8-lede-description', descriptionClassName)}>
        <Md>{description}</Md>
      </div>
    </div>
  );
};
export default Lede;
