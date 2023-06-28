import * as React from 'react';
import {
  Link as defaultLinkComponent,
  LinkProps,
} from '@/sbstr8/components/link';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const READ_MORE = 'Read More';
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

  const kids = children || <>{READ_MORE}</>;
  return (
    <Link {...otherProps}>
      <div className="flex flex-row items-center">
        <div className="pr-1">{kids}</div>
        <FontAwesomeIcon
          icon={faPlay}
          style={{ width: '1rem', height: '1rem' }}
          className={iconClassName}
        />
      </div>
    </Link>
  );
};

export default ReadMore;
