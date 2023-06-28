import urlJoin from 'url-join';
import cfg from '@/../sbstr8.config';

const stylesheet = `<?xml version="1.0" encoding="utf-8"?>
  <xsl:stylesheet version="3.0"
                  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                  xmlns:atom="http://www.w3.org/2005/Atom">
    <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
    <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
      <head>
        <title>
          RSS Feed | <xsl:value-of select="/atom:feed/atom:title"/>
        </title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css" referrerpolicy="no-referrer" />
      </head>
      <body class="p-12">
        <div class="md:flex md:flex-row flex-nowrap justify-start items-start" >
          <img src="${urlJoin(
            cfg.link,
            cfg.image || '',
          )}" class="m-5 max-md:mx-auto" />
          <div>
            <h1 class="text-3xl font-bold">RSS Atom Feed</h1>
            <p class="p-2 indent-4">
              To use this feed, you need a <em>feed reader</em>. Visit
              <a href="https://aboutfeeds.com">About Feeds</a>
              to learn more and get started. It’s free.
            </p>
            <p class="p-2 indent-4">If you already have a feed reader: simply copy the address in the URL bar and add it as a feed in your feed reader. You will receive updates whenever I add content to this website.</p>
            <p class="p-2 indent-4">Alternately, if you don&apos;t want to mess with RSS and don&apos;t care about update notifications, you may view the same content in your browser <a href="/posts/">over here.</a></p>
          </div>
        </div>
        <div class="mx-auto flex flex-row row-nowrap justify-around items-stretch pt-24">
          <ul>
          <xsl:for-each select="/atom:feed/atom:entry">
            <li class="p-2"><h3 class="text-xl"><a>
              <xsl:attribute name="href">
                <xsl:value-of select="atom:link/@href"/>
              </xsl:attribute>
              <xsl:value-of select="atom:title"/>
            </a></h3></li>
            <p class="p-2 indent-4">Last updated:
              <xsl:value-of select="substring(atom:updated, 0, 11)" />
            </p>
          </xsl:for-each>
          </ul>
        </div>
      </body>
      </html>
    </xsl:template>
  </xsl:stylesheet>
`;

export function GET() {
  return new Response(stylesheet, {
    status: 200,
    headers: { 'Content-Type': 'text/xml' },
  });
}
