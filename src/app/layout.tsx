import React from 'react';
import cfg from '@/../martrix-config';

const RootLayout = ({ children }: React.PropsWithChildren<unknown>) => (
  <html lang="en">
    <body>{children}</body>
  </html>
);
export default RootLayout;

export const metadata = {
  title: cfg.title,
  description: cfg.description,
};
