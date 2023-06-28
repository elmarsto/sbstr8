import StandardPage from '@/sbstr8/components/page/standard';
import PageHeader from '@/sbstr8/components/page/header';
import Card from '@/sbstr8/components/card';
import Link from '@/sbstr8/components/link';
import Image from '@/sbstr8/components/image';
import cfg from '@/../sbstr8.config';

const LOGO_SZ = 32;
const defaultLogo = '/media/sbstr8.svg';

const NotFound = () => {
  const pic = cfg.icon || defaultLogo;
  return (
    <>
      <PageHeader>
        <Image src={pic} width={LOGO_SZ} height={LOGO_SZ} alt="logo" />
      </PageHeader>
      <StandardPage title="Error Four Hundred and Four">
        <Card title="⚀⚀ Snake Eyes">
          <p>
            So, the bad news is that we couldn&apos;t find the link you were
            looking for.
          </p>
          <p>Check the URL in the address bar and try again.</p>
          <p>
            If you&apos;re unlucky even in that, maybe{' '}
            <Link href="/">navigate to the home page</Link>?
          </p>
        </Card>
      </StandardPage>
    </>
  );
};
export default NotFound;
