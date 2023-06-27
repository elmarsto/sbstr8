import * as React from 'react';
import {
  Link as defaultLinkComponent,
  LinkProps,
} from '@/sbstr8/components/link';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface ReadMoreProps extends LinkProps {
  children?: React.ReactNode;
  iconClassName?: string;
  LinkComponent?: React.FunctionComponent<LinkProps>;
}

export const ReadMore = ({
  children,
  iconClassName,
  LinkComponent,
  ...otherProps
}: ReadMoreProps) => {
  const Link = LinkComponent || defaultLinkComponent;
  return (
    <Link {...otherProps}>
      {children && <span className="pr-2">{children}</span>}
      <FontAwesomeIcon icon={faPlay} size="lg" className={iconClassName} />
    </Link>
  );
};

export default ReadMore;
