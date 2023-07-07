import ccn from '@sindresorhus/class-names';

export interface BlurbProps {
  title: React.ReactNode | string;
  float?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  titleClassName?: string;
  style?: React.CSSProperties;
}

const floatClasses = 'float-right';

export const Blurb = ({
  title,
  float,
  children,
  style,
  className,
  titleClassName,
}: BlurbProps) => (
  <article className={ccn('s8-blurb', className)} style={style}>
    {title && (
      <h1 className={ccn('s8-blurb-title', titleClassName)}>{title}</h1>
    )}
    {float && (
      <div className={ccn('s8-blurb-float', floatClasses)}>{float}</div>
    )}
    {children}
  </article>
);

export default Blurb;
