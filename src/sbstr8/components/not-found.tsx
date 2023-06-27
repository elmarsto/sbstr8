import StandardPage from '@/sbstr8/components/page/standard';
import PageHeader from '@/sbstr8/components/page/header';
import S8 from '@/sbstr8';

const NotFound = () => (
  <>
    <PageHeader />
    <StandardPage title="Error Four Hundred and Four">
      <S8.Card title="⚀⚀ Snake Eyes">
        <p>
          So, the bad news is that we couldn&apos;t find the link you were
          looking for.
        </p>
        <p>Check the URL in the address bar and try again.</p>
        <p>
          If you&apos;re unlucky even in that, maybe{' '}
          <S8.Link href="/">navigate to the home page</S8.Link>?
        </p>
      </S8.Card>
    </StandardPage>
  </>
);
export default NotFound;
