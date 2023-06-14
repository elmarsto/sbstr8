import * as React from 'react';

const Layout = async ({ children }: React.PropsWithChildren<object>) => (
  <>{children}</>
);
export default Layout;

export const metadata = {
  openGraph: {
    type: 'article',
  },
};
