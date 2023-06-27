import * as React from 'react';
import ccn from '@sindresorhus/class-names';
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
}

const listClassName = ccn(
  'grid',
  'grid-cols-2',
  'lg:grid-cols-8',
  'md:gap-4',
  'md:grid-cols-4',
  'text-lg',
);
export const PostList = ({
  children,
  className,
  style,
  LedeComponent,
}: LedeListProps) => {
  const Lede = LedeComponent || defaultLedeComponent;
  return (
    <div className={ccn(listClassName, className)} style={style}>
      {children.map((p: lede) => (
        <Lede {...p} key={p.slug} />
      ))}
    </div>
  );
};

export default PostList;
