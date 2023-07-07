import { PropsWithChildren, CSSProperties } from 'react';
import NextLink from 'next/link';
import ccn from '@sindresorhus/class-names';

export type LinkProps = PropsWithChildren<{
  className?: string;
  href?: string;
  style?: CSSProperties;
  onClick?: () => void;
}>;

export const Link = ({
  className,
  href,
  style,
  children,
  onClick,
}: LinkProps) => (
  <>
    {href ? (
      <NextLink
        onClick={onClick}
        className={ccn('s8-link', className)}
        href={href || '#'}
        style={style}
      >
        {children}
      </NextLink>
    ) : (
      <span className={ccn('s8-link', className)} style={style}>
        {children}
      </span>
    )}
  </>
);

export default Link;
