import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import { VideoJs } from '@/components/VideoJs';

export default function Home() {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="A blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <VideoJs
          onReady={() => {
            console.log('foo');
          }}
          options={{}}
        />
      </main>
    </>
  );
}
