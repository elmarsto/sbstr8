import ccn from '@sindresorhus/class-names';
import urlJoin from 'url-join';
import '@/sbstr8/lib/style.css';
import pkg from '@/../package.json';
import cfg, { defaultAuthor } from '@/sbstr8/config';

const MainLayout = ({ children }: React.PropsWithChildren<unknown>) => (
  <html lang="en">
    <body>
      {children}
      <footer className={ccn('ml-6', 'mt-6', 'text-xs')}>
        &copy; {cfg.copyright}
        &nbsp; Built with{' '}
        <a href="https://github.com/elmarsto/sbstr8">sbstr8</a>.
      </footer>
    </body>
  </html>
);
export default MainLayout;

export const metadata = {
  applicationName: cfg.title,
  authors: cfg.owners.map(({ name, link }) => ({ name, url: link })),
  category: cfg.categories.join('/'),
  creator: defaultAuthor.name,
  description: cfg.description,
  generator: pkg.name,
  keywords: cfg.keywords,
  metadataBase: new URL(cfg.link),
  openGraph: {
    description: cfg.description,
    locale: cfg.language,
    siteName: cfg.title,
    title: cfg.title,
    type: 'website',
    url: '/',
    images: cfg.image
      ? [
          {
            url: urlJoin(cfg.link, cfg.image),
          },
        ]
      : [],
  },
  publisher: pkg.author,
  robots: {
    follow: false, // don't follow; instead use @/app/sitemap.ts
    googleBot: {
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
    index: true,
  },
  title: cfg.title,
  icons: {
    icon: cfg.icon,
    shortcut: cfg.icon,
    apple: cfg.icon,
  },
};
