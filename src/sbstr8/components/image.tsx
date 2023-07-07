import { CSSProperties } from 'react';
import NextImage, { ImageProps as NextImageProps } from 'next/image';
import ccn from '@sindresorhus/class-names';

export interface ImageProps extends NextImageProps {
  className?: string;
  style?: CSSProperties;
}

export const Image = ({ className, style, ...otherProps }: ImageProps) => (
  <NextImage
    className={ccn('s8-image', className)}
    style={{ overflow: 'hidden', ...style }}
    {...otherProps}
  />
);

export default Image;
