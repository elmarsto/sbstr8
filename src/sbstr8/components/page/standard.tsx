import * as React from 'react';
import ccn from '@sindresorhus/class-names';

export interface StandardPageProps {
  backgroundClassName?: string;
  bg?: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  title?: string | React.ReactNode;
  titleClassName?: string;
}

const backgrounder = (b?: string) =>
  b ? { backgroundImage: `url(${b})` } : {};

export const StandardPage = ({
  bg,
  children,
  className,
  style,
  title,
  titleClassName,
}: StandardPageProps) => (
  <div
    className={ccn('sbstr8:page-standard', className)}
    style={{ ...backgrounder(bg), ...style }}
  >
    <h1 className={ccn('sbstr8:page-standard-title', titleClassName)}>
      {title}
    </h1>
    {children}
  </div>
);

export default StandardPage;
