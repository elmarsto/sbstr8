import urlJoin from 'url-join';
import '@/sbstr8/lib/style.css';
import pkg from '@/../package.json';
import cfg, { defaultAuthor } from '@/../sbstr8.config';
import defaults from '@/sbstr8/lib/default';

const MainLayout = ({ children }: React.PropsWithChildren<unknown>) => (
  <html lang="en" className="s8-layout-root">
    <body>
      {children}
      <footer className="s8-layout-root-footer">
        <h6>
          &copy; {cfg.copyright}
          &nbsp; Built with{' '}
          <a href="https://github.com/elmarsto/sbstr8">sbstr8</a>.
        </h6>
      </footer>
    </body>
  </html>
);
export default MainLayout;

export const metadata = {
  applicationName: cfg.title,
  authors: cfg.owners.map(({ name, link }) => ({ name, url: link })),
  alternates: {
    canonical: cfg.link,
    types: {
      'application/rss+xml': urlJoin(cfg.link, defaults.path.feed),
    },
  },
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
