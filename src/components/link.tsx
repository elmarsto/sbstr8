import * as React from 'react';
import NextLink from 'next/link';
import ccn from '@sindresorhus/class-names';

export type LinkProps = React.PropsWithChildren<{
  className?: string;
  href?: string;
  bare?: boolean;
  style?: React.CSSProperties;
}>;

export const Link = ({ className, href, bare, style, children }: LinkProps) => (
  <>
    {href ? (
      <NextLink
        className={ccn(
          { underline: !bare },
          { 'no-underline': bare },
          { 'decoration-dotted': !bare },
          { 'hover:decoration-solid': !bare },
          { 'hover:underline': !bare },
          { 'active:decoration-double': !bare },
          { 'hover:text-teal-700': !bare },
          { 'active:text-amber-800': !bare },
          'transition-all',
          className,
        )}
        href={href || '#'}
        style={style}
      >
        {children}
      </NextLink>
    ) : (
      <span className={className} style={style}>
        {children}
      </span>
    )}
  </>
);

export default Link;
