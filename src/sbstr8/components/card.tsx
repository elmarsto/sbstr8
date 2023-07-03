import ccn from '@sindresorhus/class-names';

export interface CardProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  title?: React.ReactNode | string;
  titleClassName?: string;
}

export const Card = ({
  className,
  children,
  title,
  titleClassName,
  style,
}: CardProps) => (
  <section className={ccn('sbstr8:card', className)} style={style}>
    {title && (
      <h1 className={ccn('sbstr8:card-title', titleClassName)}>{title}</h1>
    )}
    {children}
  </section>
);

export default Card;
