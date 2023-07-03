'use client';
import { CSSProperties, useState, useCallback } from 'react';
import { faClipboard as lightClipboard } from '@fortawesome/free-regular-svg-icons';
import ccn from '@sindresorhus/class-names';
import {
  faClipboard as darkClipboard,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface ClipboardButtonProps {
  title?: string;
  children?: string; // intentionally not a React node! Must be a string!
  className?: string;
  style?: CSSProperties;
}

export const ClipboardButton = ({
  title,
  children,
  className,
  style,
}: ClipboardButtonProps) => {
  const [down, setDown] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const handleClick = useCallback(() => {
    navigator.clipboard.writeText(children || '');
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  }, [children]);
  const handleDown = useCallback(() => setDown(true), []);
  const handleUp = useCallback(() => setDown(false), []);
  return (
    <button
      title={title || 'Copy to clipboard'}
      onClick={handleClick}
      onMouseDown={handleDown}
      onMouseUp={handleUp}
      className={ccn('sbstr8:clipboard-button', className)}
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
