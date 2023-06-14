'use client';
import * as React from 'react';
import { faClipboard as lightClipboard } from '@fortawesome/free-regular-svg-icons';
import {
  faClipboard as darkClipboard,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface ClipboardButtonProps {
  title?: string;
  children: string; // intentionally not a React node! Must be a string!
  className?: string;
  style?: React.CSSProperties;
}

export const ClipboardButton = ({
  title,
  children,
  className,
  style,
}: ClipboardButtonProps) => {
  const [down, setDown] = React.useState<boolean>(false);
  const [copied, setCopied] = React.useState<boolean>(false);
  const handleClick = React.useCallback(() => {
    navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  }, [children]);
  const handleDown = React.useCallback(() => setDown(true), []);
  const handleUp = React.useCallback(() => setDown(false), []);
  return (
    <button
      title={title || 'Copy to clipboard'}
      onClick={handleClick}
      onMouseDown={handleDown}
      onMouseUp={handleUp}
      className={className}
      style={style}
    >
      <span className="fa-layers">
        <FontAwesomeIcon
          icon={down ? darkClipboard : lightClipboard}
          size="lg"
        />
        {copied && <FontAwesomeIcon icon={faCheck} size="lg" />}
      </span>
    </button>
  );
};

export default ClipboardButton;
