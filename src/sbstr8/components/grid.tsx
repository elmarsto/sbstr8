import * as React from 'react';
import ccn from '@sindresorhus/class-names';

export interface GridProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const gridClasses = ccn('grid', 'grid-cols-1', 'lg:grid-cols-2', 'sm:gap-6');

export const Grid = ({ className, children, style }: GridProps) => (
  <div className={ccn(gridClasses, className)} style={style}>
    {children}
  </div>
);

export default Grid;
