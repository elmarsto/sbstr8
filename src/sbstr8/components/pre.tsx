'use client';
import * as React from 'react';
import ccn from '@sindresorhus/class-names';
import ClipboardButton from '@/sbstr8/components/clipboard-button';

export interface PreProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  clipboardButtonClassName?: string;
}

export const Pre = ({
  style,
  className,
  clipboardButtonClassName,
  children,
}: PreProps) => {
  const ref = React.useRef<HTMLPreElement>(null);
  return (
    <pre ref={ref} className={ccn('grow', 'relative', className)} style={style}>
      {children}
      <ClipboardButton
        className={ccn(
          'absolute',
          'm-1',
          'right-0',
          'top-0',
          clipboardButtonClassName,
        )}
      >
        {ref?.current?.innerText}
      </ClipboardButton>
    </pre>
  );
};

export default Pre;
