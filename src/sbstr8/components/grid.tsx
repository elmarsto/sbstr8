import { ReactNode, CSSProperties } from 'react';
import ccn from '@sindresorhus/class-names';

export interface GridProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

const gridClasses = ccn(
  'sbstr8:grid',
  'grid',
  'grid-cols-1',
  'lg:grid-cols-2',
  'sm:gap-6',
);

export const Grid = ({ className, children, style }: GridProps) => (
  <div className={ccn(gridClasses, className)} style={style}>
    {children}
  </div>
);

export default Grid;
