import * as React from 'react';
import { CookedPostMetadata as lede } from '@/sbstr8/lib/types/post';
import {
  Lede as defaultLedeComponent,
  LedeProps,
} from '@/sbstr8/components/lede';

export interface LedeListProps {
  children: lede[];
  className?: string;
  style?: React.CSSProperties;
  LedeComponent?: React.FunctionComponent<LedeProps>;
  ledeClassName?: string;
}

export const LedeList = ({
  children,
  className,
  ledeClassName,
  style,
  LedeComponent,
}: LedeListProps) => {
  const Lede = LedeComponent || defaultLedeComponent;
  return (
    <ul className={className} style={style}>
      {children.map((p: lede, i: number) => (
        <li className={ledeClassName} key={i}>
          <Lede {...p} />
        </li>
      ))}
    </ul>
  );
};

export default LedeList;
