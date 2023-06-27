import * as React from 'react';
import ccn from '@sindresorhus/class-names';

export interface SlipProps {
  title: React.ReactNode | string;
  float?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const titleClasses = ccn('text-xl', 'pb-3');
const floatClasses = 'float-right';

export const Slip = ({
  title,
  float,
  children,
  style,
  className,
}: SlipProps) => (
  <article className={className} style={style}>
    {title && <h1 className={titleClasses}>{title}</h1>}
    {float && <div className={floatClasses}>{float}</div>}
    {children}
  </article>
);

export default Slip;
