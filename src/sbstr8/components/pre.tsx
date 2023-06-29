'use client';
import * as React from 'react';
import ccn from '@sindresorhus/class-names';
import {
  ClipboardButton as defaultClipboardButtonComponent,
  ClipboardButtonProps,
} from '@/sbstr8/components/clipboard-button';

export interface PreProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  clipboardButtonClassName?: string;
  ClipboardButtonComponent?: React.FunctionComponent<ClipboardButtonProps>;
}

export const Pre = ({
  style,
  className,
  clipboardButtonClassName,
  children,
  ClipboardButtonComponent,
}: PreProps) => {
  const ref = React.useRef<HTMLPreElement>(null);
  const ClipboardButton =
    ClipboardButtonComponent || defaultClipboardButtonComponent;
  return (
    <pre
      ref={ref}
      className={ccn('sbstr8:pre', 'relative', className)}
      style={style}
    >
      {children}
      <ClipboardButton
        className={ccn(
          'sbstr8:pre-clipboard-button',
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
