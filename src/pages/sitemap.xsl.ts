import type { APIRoute } from 'astro';
import { SITE } from 'astrowind:config';

export const GET: APIRoute = () => {
  const name = SITE.name;
  const xsl = `<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html lang="en">
      <head>
        <title>${name} XML Sitemap</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style type="text/css">
          :root {
            --bg-color: #ffffff;
            --text-color: #1f2937;
            --muted-text: #6b7280;
            --primary: #3b82f6;
            --primary-hover: #1d4ed8;
            --border-color: #e5e7eb;
            --row-hover: #f9fafb;
          }
          @media (prefers-color-scheme: dark) {
            :root {
              --bg-color: #030620;
              --text-color: #f3f4f6;
              --muted-text: #9ca3af;
              --primary: #60a5fa;
              --primary-hover: #93c5fd;
              --border-color: #1e293b;
              --row-hover: #0b1530;
            }
          }
          body {
            font-family: 'Inter', system-ui, -apple-system, sans-serif;
            background-color: var(--bg-color);
            color: var(--text-color);
            margin: 0;
            padding: 2rem 1rem;
            line-height: 1.5;
          }
          .container {
            max-width: 1000px;
            margin: 0 auto;
          }
          .header {
            margin-bottom: 2rem;
            border-bottom: 1px solid var(--border-color);
            padding-bottom: 1.5rem;
          }
          h1 {
            font-family: 'Montserrat', sans-serif;
            font-size: 2.25rem;
            font-weight: 800;
            letter-spacing: -0.025em;
            margin: 0 0 0.5rem 0;
          }
          .desc {
            color: var(--muted-text);
            font-size: 0.95rem;
          }
          .desc a {
            color: var(--primary);
            text-decoration: none;
          }
          .desc a:hover {
            text-decoration: underline;
          }
          .stats {
            margin: 1.5rem 0 0 0;
            font-size: 0.875rem;
            font-weight: 600;
            color: var(--primary);
            background: rgba(59, 130, 246, 0.1);
            display: inline-block;
            padding: 0.25rem 0.75rem;
            border-radius: 9999px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            text-align: left;
            margin-top: 1rem;
            font-size: 0.925rem;
          }
          th {
            padding: 0.75rem 1rem;
            text-transform: uppercase;
            font-size: 0.75rem;
            letter-spacing: 0.05em;
            color: var(--muted-text);
            border-bottom: 2px solid var(--border-color);
          }
          td {
            padding: 1rem;
            border-bottom: 1px solid var(--border-color);
            word-break: break-all;
          }
          tr:hover td {
            background-color: var(--row-hover);
          }
          .url-link {
            color: var(--primary);
            text-decoration: none;
            font-weight: 500;
          }
          .url-link:hover {
            color: var(--primary-hover);
            text-decoration: underline;
          }
          .badge {
            font-size: 0.75rem;
            padding: 0.125rem 0.5rem;
            border-radius: 0.25rem;
            font-weight: 600;
            background-color: var(--border-color);
            color: var(--muted-text);
          }
        </style>
      </head>
      <body>
        <div class="container">

          <!-- CASE 1: Render if viewing the SITEMAP INDEX -->
          <xsl:if test="sitemap:sitemapindex">
            <div class="header">
              <h1>${name} Sitemap Index</h1>
              <p class="desc">
                This index maps out the sub-sitemaps for this website. Generated automatically by
                <a href="https://docs.astro.build/en/guides/integrations-guide/sitemap/" target="_blank">@astrojs/sitemap</a>.
              </p>
              <div class="stats">
                Total Sitemaps: <xsl:value-of select="count(sitemap:sitemapindex/sitemap:sitemap)"/>
              </div>
            </div>
            <table>
              <thead>
                <tr>
                  <th width="75%">Sitemap URL</th>
                  <th width="25%">Last Modified</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap">
                  <tr>
                    <td>
                      <a class="url-link" href="{sitemap:loc}">
                        <xsl:value-of select="sitemap:loc"/>
                      </a>
                    </td>
                    <td>
                      <span style="color: var(--muted-text);">
                        <xsl:value-of select="substring(sitemap:lastmod, 0, 11)"/>
                      </span>
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </xsl:if>

          <!-- CASE 2: Render if viewing an INDIVIDUAL SITEMAP (sitemap-0.xml, etc.) -->
          <xsl:if test="sitemap:urlset">
            <div class="header">
              <h1>${name} Sitemap</h1>
              <p class="desc">
                This is a list of production-ready URLs generated for search engine indexing.
              </p>
              <div class="stats">
                Total Pages: <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/>
              </div>
            </div>
            <table>
              <thead>
                <tr>
                  <th width="65%">URL Path</th>
                  <th width="15%">Change Freq</th>
                  <th width="20%">Last Modified</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:urlset/sitemap:url">
                  <tr>
                    <td>
                      <a class="url-link" href="{sitemap:loc}">
                        <xsl:value-of select="sitemap:loc"/>
                      </a>
                    </td>
                    <td>
                      <span class="badge">
                        <xsl:choose>
                          <xsl:when test="sitemap:changefreq">
                            <xsl:value-of select="sitemap:changefreq"/>
                          </xsl:when>
                          <xsl:otherwise>daily</xsl:otherwise>
                        </xsl:choose>
                      </span>
                    </td>
                    <td>
                      <span style="color: var(--muted-text);">
                        <xsl:value-of select="substring(sitemap:lastmod, 0, 11)"/>
                      </span>
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </xsl:if>

        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>`;

  return new Response(xsl, {
    headers: { 'Content-Type': 'application/xslt+xml' },
  });
};
