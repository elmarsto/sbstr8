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
  <article className={ccn('sbstr8:essay', className)} style={style}>
    <h1 className={ccn('sbstr8:essay-title', titleClassName)}>{title}</h1>
    <div
      className={ccn(
        'sbstr8:essay-body',
        'sbstr8:article-body',
        contentClassName,
      )}
    >
      {children}
    </div>
  </article>
);

export default Essay;
