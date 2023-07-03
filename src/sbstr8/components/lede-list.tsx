import { FunctionComponent } from 'react';
import ccn from '@sindresorhus/class-names';
import {
  Lede as defaultLedeComponent,
  LedeProps,
} from '@/sbstr8/components/lede';
import useOverride from '@/sbstr8/lib/hook/server/override';

export interface LedeListProps {
  children: LedeProps[];
  className?: string;
  style?: React.CSSProperties;
  LedeComponent?: FunctionComponent<LedeProps>;
  ledeClassName?: string;
}

export const LedeList = async ({
  children,
  className,
  ledeClassName,
  style,
  LedeComponent,
}: LedeListProps) => {
  const overLede = await useOverride(defaultLedeComponent);
  const Lede = LedeComponent || overLede;
  return (
    <ul className={ccn('sbstr8:lede-list', className)} style={style}>
      {children.map((p: LedeProps, i: number) => (
        <li className={ccn('sbstr8:lede-list-item', ledeClassName)} key={i}>
          <Lede {...p} />
        </li>
      ))}
    </ul>
  );
};

export default LedeList;
