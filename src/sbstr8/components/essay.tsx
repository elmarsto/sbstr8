import * as React from 'react';
import ccn from '@sindresorhus/class-names';

export interface EssayProps {
  children?: React.ReactNode;
  className?: string;
  title?: string | React.ReactNode;
  titleClassName?: string;
  contentClassName?: string;
  style?: React.CSSProperties;
}

export const Essay = ({
  children,
  className,
  contentClassName,
  style,
  title,
  titleClassName,
}: EssayProps) => (
  <article className={className} style={style}>
    <h1 className={titleClassName}>{title}</h1>
    <div className={ccn('article-body', contentClassName)}>{children}</div>
  </article>
);

export default Essay;
