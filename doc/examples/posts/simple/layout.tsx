import meta from './meta.json';

export default async ({ children }: { children: React.ReactNode }) => (
  <>{children}</>
);

export const metadata = {
  title: meta.title,
  description: meta.description,
  keywords: ['hello world'],
  openGraph: {
    // don't put image here; instead use @/app/opengraph-image.(svg|png|js|ts|tsx)
    description: meta.description,
    siteName: meta.title,
    title: meta.title,
    type: 'article',
    url: 'https://lizmars.net/post/a-new-dawn',
  },
  twitter: {
    // don't put image here; instead use @/app/twitter-image.(svg|png|js|ts|tsx)
    description: meta.description,
    title: meta.title,
  },
};
