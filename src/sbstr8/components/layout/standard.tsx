import * as React from 'react';
import { PageHeader } from '@/sbstr8/components/page/header';

const Layout = async ({ children }: React.PropsWithChildren<object>) => (
  <main>
    <PageHeader />
    {children}
  </main>
);
export default Layout;
