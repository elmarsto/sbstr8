import * as React from 'react';
import {
  Link as defaultLinkComponent,
  LinkProps,
} from '@/sbstr8/components/link';
import cfg from '@/../sbstr8.config';
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
      <Link href={cfg.link}>{children}</Link>
      <nav>
        <menu>
          {menuLinks.map(({ href, title }, i) => (
            <h1 key={i}>
              <Link href={href}>{title}</Link>
            </h1>
          ))}
        </menu>
      </nav>
    </header>
  );
};
export default PageHeader;
