import * as React from 'react';
import Link, { LinkProps } from '@/sbstr8/components/link';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface ReadMoreProps extends LinkProps {
  children?: React.ReactNode;
  iconClassName?: string;
}

export const ReadMore = ({
  children,
  iconClassName,
  ...otherProps
}: ReadMoreProps) => (
  <Link {...otherProps}>
    {children && <span className="pr-2">{children}</span>}
    <FontAwesomeIcon icon={faPlay} size="lg" className={iconClassName} />
  </Link>
);

export default ReadMore;
