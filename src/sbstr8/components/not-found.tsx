import StandardPage from '@/sbstr8/components/page/standard';
import PageHeader from '@/sbstr8/components/page/header';
import Link from '@/sbstr8/components/link';
import Card from '@/sbstr8/components/card';

const NotFound = () => (
  <>
    <PageHeader />
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
export default NotFound;
