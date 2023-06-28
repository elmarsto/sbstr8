import * as React from 'react';
import ccn from '@sindresorhus/class-names';
import {
  Link as defaultLinkComponent,
  LinkProps,
} from '@/sbstr8/components/link';
import { menuLinks } from '@/sbstr8/lib/menu';

export interface PageHeaderProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  LinkComponent?: React.FunctionComponent<LinkProps>;
}
export const PageHeader = ({
  children,
  className,
  style,
  LinkComponent,
}: PageHeaderProps) => {
  const Link = LinkComponent || defaultLinkComponent;
  return (
    <header style={style} className={className}>
      {children}
      <nav>
        <menu>
          <ul className={ccn('flex', 'flex-row', 'row-nowrap', 'gap-4')}>
            {menuLinks.map(({ href, title }, i) => (
              <li key={i}>
                <h1>
                  <Link href={href}>{title}</Link>
                </h1>
              </li>
            ))}
          </ul>
        </menu>
      </nav>
    </header>
  );
};
export default PageHeader;
