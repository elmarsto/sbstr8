'use client';
import useDimensions from 'react-cool-dimensions';
import NextImage, { ImageProps as NextImageProps } from 'next/image';

export type ImageProps = NextImageProps;

export const Image = ({ fill, className, ...otherProps }: ImageProps) => {
  const { width, observe } = useDimensions<HTMLDivElement>();
  const height = width / 1.618; // golden ratio
  return (
    <div
      className={'sbstr8:image'}
      ref={observe}
      style={{ overflow: 'hidden' }}
    >
      {fill ? (
        <NextImage
          className={className}
          {...otherProps}
          width={width || 0}
          height={height || 0}
        />
      ) : (
        <NextImage className={className} {...otherProps} />
      )}
    </div>
  );
};

export default Image;
