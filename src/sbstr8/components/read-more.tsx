import { FunctionComponent, ReactNode } from 'react';
import {
  Link as defaultLinkComponent,
  LinkProps,
} from '@/sbstr8/components/link';
import ccn from '@sindresorhus/class-names';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useOverride from '@/sbstr8/lib/hook/server/override';

const READ_MORE = 'Read More';
export interface ReadMoreProps extends LinkProps {
  children?: ReactNode;
  iconClassName?: string;
  LinkComponent?: FunctionComponent<LinkProps>;
}

export const ReadMore = async ({
  children,
  iconClassName,
  className,
  LinkComponent,
  ...otherProps
}: ReadMoreProps) => {
  const overLink = await useOverride(defaultLinkComponent);
  const Link = LinkComponent || overLink;

  const kids = children || <>{READ_MORE}</>;
  return (
    <Link className={ccn('s8-read-more', className)} {...otherProps}>
      <div className="flex flex-row items-center">
        <div className={ccn('s8-read-more-text', 'pr-1')}>{kids}</div>
        <FontAwesomeIcon
          icon={faPlay}
          style={{ width: '1rem', height: '1rem' }}
          className={ccn('s8-read-more-icon', iconClassName)}
        />
      </div>
    </Link>
  );
};

export default ReadMore;
