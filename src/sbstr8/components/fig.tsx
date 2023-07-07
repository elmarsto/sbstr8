import ccn from '@sindresorhus/class-names';

export interface FigProps {
  caption?: React.ReactNode | string;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  captionClassName?: string;
}

export const Fig = ({
  caption,
  children,
  className,
  captionClassName,
  style,
}: FigProps) => (
  <figure className={ccn('s8-fig', className)} style={style}>
    {children}
    <figcaption className={ccn('s8-fig-caption', captionClassName)}>
      {caption}
    </figcaption>
  </figure>
);

export default Fig;
