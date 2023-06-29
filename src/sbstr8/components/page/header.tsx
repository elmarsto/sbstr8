import * as React from 'react';
import {
  Link as defaultLinkComponent,
  LinkProps,
} from '@/sbstr8/components/link';
import ccn from '@sindresorhus/class-names';
import cfg from '@/../sbstr8.config';
import { menuLinks } from '@/sbstr8/lib/menu';

export interface PageHeaderProps {
  children?: React.ReactNode;
  className?: string;
  logoClassName?: string;
  menuItemClassName?: string;
  style?: React.CSSProperties;
  LinkComponent?: React.FunctionComponent<LinkProps>;
}
export const PageHeader = ({
  children,
  className,
  logoClassName,
  menuItemClassName,
  style,
  LinkComponent,
}: PageHeaderProps) => {
  const Link = LinkComponent || defaultLinkComponent;
  return (
    <header style={style} className={ccn('sbstr8:page-header', className)}>
      <nav className="sbstr8:page-header-nav">
        <span className={ccn('sbstr8:page-header-nav-logo', logoClassName)}>
          <Link href={cfg.link}>{children}</Link>
        </span>
        <menu className="sbstr8:page-header-nav-menu">
          {menuLinks.map(({ href, title }, i) => (
            <h1
              key={i}
              className={ccn(
                'sbstr8:page-header-nav-menu-item',
                menuItemClassName,
              )}
            >
              <Link href={href}>{title}</Link>
            </h1>
          ))}
        </menu>
      </nav>
    </header>
  );
};
export default PageHeader;
