import * as React from 'react';
import ccn from '@sindresorhus/class-names';

export interface FigProps {
  caption?: React.ReactNode | string;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  captionClassName?: string;
}

const figClassName = ccn('flex', 'flex-col', 'justify-start', 'items-end');
const defaultCaptionClassName = ccn('text-xs');

export const Fig = ({
  caption,
  children,
  className,
  captionClassName,
  style,
}: FigProps) => (
  <figure className={ccn(figClassName, className)} style={style}>
    {children}
    <figcaption className={ccn(defaultCaptionClassName, captionClassName)}>
      {caption}
    </figcaption>
  </figure>
);

export default Fig;
