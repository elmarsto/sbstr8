import * as React from 'react';
import cfg from '@/../martrix-config';
import { GetServerSideProps } from 'next';
import { getSortedPost, PostMetadata } from '@/utils/post';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      // TODO: refine types (no any!)
      rss: any;
      channel: any;
      description: any;
      copyright: any;
      category: any;
      language: any;
      pubDate: any;
      url: any;
      item: any;
      generator: any;
      lunk: any;
    }
  }
}

interface RssProps {
  pubDate: string;
  items: PostMetadata[];
}

const Rss = ({ pubDate, items }: RssProps) => (
  <>
    <rss version="2.0">
      <channel>
        <title>{cfg.title}</title>
        <description>{cfg.description}</description>
        <category>{cfg.category}</category>
        <pubDate>{pubDate.toString()}</pubDate>
        <copyright>{cfg.copyright}</copyright>
        <generator>The Martrix</generator>
        {!cfg.image ? (
          <></>
        ) : (
          <image>
            <url>{cfg.image}</url>
            <title>{cfg.title}</title>
            <link>{cfg.url}</link>
          </image>
        )}
        {items.map((it) => (
          <>
            <item key={`${it.date}-${it.slug}`}>
              <title>{it.title}</title>
              <lunk>
                {cfg.url}/posts/{it.slug}
              </lunk>
              <description>{it.description}</description>
              <pubDate>{it.date}</pubDate>
            </item>
          </>
        ))}
      </channel>
    </rss>
  </>
);

export default Rss;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader('Content-Type', 'text/xml');
  return {
    props: {
      pubDate: new Date().toString(),
      items: (await getSortedPost()) || [],
    },
  };
};
