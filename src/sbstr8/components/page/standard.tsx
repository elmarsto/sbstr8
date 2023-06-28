import * as React from 'react';

export interface StandardPageProps {
  backgroundClassName?: string;
  bg?: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  title?: string | React.ReactNode;
  titleClassName?: string;
}

const backgrounder = (b?: string) =>
  b ? { backgroundImage: `url(${b})` } : {};

export const StandardPage = ({
  bg,
  children,
  className,
  style,
  title,
  titleClassName,
}: StandardPageProps) => (
  <div className={className} style={{ ...backgrounder(bg), ...style }}>
    <h1 className={titleClassName}>{title}</h1>
    {children}
  </div>
);

export default StandardPage;
