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
      </head>
      <body>
        <div>
          <a href="/"><img src="${urlJoin(
            cfg.link,
            cfg.image || '',
          )}" width="32" height="32"/></a>
          <div>
            <h1>RSS Atom Feed</h1>
            <p>
              To use this feed, you need a <em>feed reader</em>. Visit
              <a href="https://aboutfeeds.com">About Feeds</a>
              to learn more and get started. It’s free.
            </p>
            <p>If you already have a feed reader: simply copy the address in the URL bar and add it as a feed in your feed reader. You will receive updates whenever I add content to this website.</p>
            <p>Alternately, if you don&apos;t want to mess with RSS and don&apos;t care about update notifications, you may view the same content in your browser <a href="/posts/">over here.</a></p>
          </div>
        </div>
        <div>
          <ul>
          <xsl:for-each select="/atom:feed/atom:entry">
            <li><h3><a>
              <xsl:attribute name="href">
                <xsl:value-of select="atom:link/@href"/>
              </xsl:attribute>
              <xsl:value-of select="atom:title"/>
            </a></h3></li>
            <p>Last updated:
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
