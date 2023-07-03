'use client';
import { ReactNode, FunctionComponent, CSSProperties, useRef } from 'react';
import ccn from '@sindresorhus/class-names';
import {
  ClipboardButton as defaultClipboardButtonComponent,
  ClipboardButtonProps,
} from '@/sbstr8/components/clipboard-button';

export interface PreProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  clipboardButtonClassName?: string;
  ClipboardButtonComponent?: FunctionComponent<ClipboardButtonProps>;
}

export const Pre = ({
  style,
  className,
  clipboardButtonClassName,
  children,
  ClipboardButtonComponent,
}: PreProps) => {
  const ref = useRef<HTMLPreElement>(null);
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
