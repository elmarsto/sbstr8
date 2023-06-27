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
    <header
      style={style}
      className={ccn(
        'absolute',
        'left-0',
        'm-0',
        'pt-2',
        'right-0',
        'top-0',
        'z-10',
        className,
      )}
    >
      {children}
      <nav>
        <menu>
          <ul>
            {menuLinks.map(({ href, title }, i) => (
              <li key={i}>
                <Link href={href}>{title}</Link>
              </li>
            ))}
          </ul>
        </menu>
      </nav>
    </header>
  );
};
export default PageHeader;
