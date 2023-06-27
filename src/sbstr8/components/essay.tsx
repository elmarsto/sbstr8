import * as React from 'react';

export interface EssayProps {
  children?: React.ReactNode;
  className?: string;
  title?: string | React.ReactNode;
  style?: React.CSSProperties;
}

export const Essay = ({ title, className, children, style }: EssayProps) => (
  <article className={className} style={style}>
    <h1 className="text-2xl font-bold p-6">{title}</h1>
    <div>{children}</div>
  </article>
);

export default Essay;
