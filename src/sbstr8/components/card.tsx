import * as React from 'react';
import ccn from '@sindresorhus/class-names';

export interface CardProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  title?: React.ReactNode | string;
  titleClassName?: string;
}

const cardClasses = ccn('bg-center', 'bg-repeat', 'sm:p-4', 'rounded-xl');
const defaultTitleClasses = ccn('text-xl', 'pb-3');

export const Card = ({
  className,
  children,
  title,
  titleClassName,
  style,
}: CardProps) => (
  <section className={ccn(cardClasses, className)} style={style}>
    {title && (
      <h1 className={ccn(defaultTitleClasses, titleClassName)}>{title}</h1>
    )}
    {children}
  </section>
);

export default Card;
