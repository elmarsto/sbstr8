'use client'; // Error components must be Client Components

import { useEffect } from 'react';
import StandardPage from '@/sbstr8/components/page/standard';
import PageHeader from '@/sbstr8/components/page/header';
import Link from '@/sbstr8/components/link';
import Card from '@/sbstr8/components/card';

interface ErrorProps {
  error: Error;
  reset: () => void;
}
// TODO: flesh this out; rn its just a cut/paste from nextjs docs
const Error = ({ error, reset }: ErrorProps) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <>
      <PageHeader small />
      <StandardPage title="Error Five Hundred and Something">
        <Card title="⚀⚀ Snake Eyes">
          <p>Something has gone wrong in your browser. It happens.</p>
          <p>
            This button forces the web page logic to reload; try clicking it:
            <button
              onClick={
                // Attempt to recover by trying to re-render the segment
                () => reset()
              }
            >
              Try again
            </button>
          </p>
          <p>
            If you&apos;re unlucky even in that, maybe{' '}
            <Link href="/">navigate to the home page</Link>?
          </p>
        </Card>
      </StandardPage>
    </>
  );
};
export default Error;
