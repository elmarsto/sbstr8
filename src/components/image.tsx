'use client';
import * as React from 'react';
import useDimensions from 'react-cool-dimensions';
import NextImage, { ImageProps } from 'next/image';
import ccn from '@sindresorhus/class-names';

const imageClasses = 'rounded-md';

export const Image = ({ fill, className, ...otherProps }: ImageProps) => {
  const { width, observe } = useDimensions<HTMLDivElement>();
  const height = width / 1.618; // golden ratio
  return (
    <div ref={observe} style={{ overflow: 'hidden' }}>
      {fill ? (
        <NextImage
          className={ccn(className, imageClasses)}
          {...otherProps}
          width={width || 0}
          height={height || 0}
        />
      ) : (
        <NextImage className={ccn(className, imageClasses)} {...otherProps} />
      )}
    </div>
  );
};

export default Image;
