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

const defaultClassName = ccn(
  'bg-cover',
  'bg-no-repeat',
  'bg-top',
  'pt-12',
  'sm:bg-fixed',
  'sm:p-8',
  'sm:pt-28',
);

const backgrounder = (b?: string) =>
  b ? { backgroundImage: `url(${b})` } : {};

const defaultTitleClassName = ccn('text-xl', 'mb-8');

export const StandardPage = ({
  bg,
  children,
  className,
  style,
  title,
  titleClassName,
}: StandardPageProps) => (
  <div
    className={ccn(defaultClassName, className)}
    style={{ ...backgrounder(bg), ...style }}
  >
    <h1 className={ccn(defaultTitleClassName, titleClassName)}>{title}</h1>
    {children}
  </div>
);

export default StandardPage;
