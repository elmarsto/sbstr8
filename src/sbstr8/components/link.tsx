import * as React from 'react';
import NextLink from 'next/link';

export type LinkProps = React.PropsWithChildren<{
  className?: string;
  href?: string;
  style?: React.CSSProperties;
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
        className={className}
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
