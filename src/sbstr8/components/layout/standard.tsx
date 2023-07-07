import { PropsWithChildren } from 'react';
import { PageHeader } from '@/sbstr8/components/page/header';
import Image from '@/sbstr8/components/image';
import cfg from '@/../sbstr8.config';
const LOGO_SZ = 32;
const defaultLogo = '/media/sbstr8.svg';

const Layout = async ({ children }: PropsWithChildren<object>) => {
  const pic = cfg.icon || defaultLogo;
  return (
    <main className="s8-layout-standard">
      <PageHeader className="s8-layout-standard-header">
        <Image
          className="s8-layout-standard-header-logo"
          src={pic}
          width={LOGO_SZ}
          height={LOGO_SZ}
          alt="logo"
        />
      </PageHeader>
      {children}
    </main>
  );
};
export default Layout;
