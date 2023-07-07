import { PropsWithChildren } from 'react';

const Layout = async ({ children }: PropsWithChildren<object>) => (
  <div className="s8-layout-posts">{children}</div>
);
export default Layout;

export const metadata = {
  openGraph: {
    type: 'article',
  },
};
