import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import config from '@/../martrix-config';

export default function Home() {
  return (
    <>
      <Head>
        <title>{config.title}</title>
        <meta name="description" content={config.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles['main']}></main>
    </>
  );
}
