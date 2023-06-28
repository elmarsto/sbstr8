import * as React from 'react';

export interface SlipProps {
  title: React.ReactNode | string;
  float?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  titleClassName?: string;
  style?: React.CSSProperties;
}

const floatClasses = 'float-right';

export const Slip = ({
  title,
  float,
  children,
  style,
  className,
  titleClassName,
}: SlipProps) => (
  <article className={className} style={style}>
    {title && <h1 className={titleClassName}>{title}</h1>}
    {float && <div className={floatClasses}>{float}</div>}
    {children}
  </article>
);

export default Slip;
