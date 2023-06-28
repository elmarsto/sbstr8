import * as React from 'react';

export interface CardProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  title?: React.ReactNode | string;
  titleClassName?: string;
}

export const Card = ({
  className,
  children,
  title,
  titleClassName,
  style,
}: CardProps) => (
  <section className={className} style={style}>
    {title && <h1 className={titleClassName}>{title}</h1>}
    {children}
  </section>
);

export default Card;
