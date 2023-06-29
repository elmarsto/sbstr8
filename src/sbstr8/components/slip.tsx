import * as React from 'react';
import ccn from '@sindresorhus/class-names';

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
  <article className={ccn('sbstr8:slip', className)} style={style}>
    {title && (
      <h1 className={ccn('sbstr8:slip-title', titleClassName)}>{title}</h1>
    )}
    {float && (
      <div className={ccn('sbstr8:slip-float', floatClasses)}>{float}</div>
    )}
    {children}
  </article>
);

export default Slip;
