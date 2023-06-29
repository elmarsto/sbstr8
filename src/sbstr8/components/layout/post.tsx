import * as React from 'react';

const Layout = async ({ children }: React.PropsWithChildren<object>) => (
  <div className="sbstr8:layout-post">{children}</div>
);
export default Layout;

export const metadata = {
  openGraph: {
    type: 'article',
  },
};
