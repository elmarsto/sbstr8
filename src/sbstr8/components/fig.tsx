import * as React from 'react';

export interface FigProps {
  caption?: React.ReactNode | string;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  captionClassName?: string;
}

export const Fig = ({
  caption,
  children,
  className,
  captionClassName,
  style,
}: FigProps) => (
  <figure className={className} style={style}>
    {children}
    <figcaption className={captionClassName}>{caption}</figcaption>
  </figure>
);

export default Fig;
