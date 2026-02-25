<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet
  version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
>
  <xsl:output method="html" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="robots" content="noindex, follow"/>
        <title>Sitemap — tomnyambu.dev</title>
        <style>
          *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            background: #0f172a;
            color: #e2e8f0;
            padding: 2rem 1rem;
            min-height: 100vh;
          }

          .wrapper {
            max-width: 860px;
            margin: 0 auto;
          }

          header {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 2rem;
            padding-bottom: 1.5rem;
            border-bottom: 1px solid #1e293b;
          }

          .logo {
            width: 44px;
            height: 44px;
            background: linear-gradient(135deg, #6366f1, #8b5cf6);
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 800;
            font-size: 1.1rem;
            color: #fff;
            flex-shrink: 0;
          }

          h1 {
            font-size: 1.25rem;
            font-weight: 700;
            color: #f8fafc;
          }

          h1 span {
            display: block;
            font-size: 0.8rem;
            font-weight: 400;
            color: #64748b;
            margin-top: 2px;
          }

          .meta {
            display: flex;
            gap: 1rem;
            margin-bottom: 1.5rem;
            flex-wrap: wrap;
          }

          .badge {
            background: #1e293b;
            border: 1px solid #334155;
            border-radius: 6px;
            padding: 0.35rem 0.75rem;
            font-size: 0.78rem;
            color: #94a3b8;
          }

          .badge strong {
            color: #a5b4fc;
          }

          table {
            width: 100%;
            border-collapse: collapse;
            font-size: 0.875rem;
          }

          thead tr {
            background: #1e293b;
          }

          th {
            text-align: left;
            padding: 0.75rem 1rem;
            font-size: 0.75rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: #64748b;
          }

          td {
            padding: 0.75rem 1rem;
            border-bottom: 1px solid #1e293b;
            vertical-align: middle;
          }

          tr:hover td {
            background: #1e293b;
          }

          td a {
            color: #818cf8;
            text-decoration: none;
            word-break: break-all;
          }

          td a:hover {
            color: #a5b4fc;
            text-decoration: underline;
          }

          .pill {
            display: inline-block;
            padding: 0.2rem 0.6rem;
            border-radius: 999px;
            font-size: 0.72rem;
            font-weight: 600;
          }

          .pill-high   { background: #166534; color: #bbf7d0; }
          .pill-med    { background: #1e3a5f; color: #bfdbfe; }
          .pill-low    { background: #1e1b4b; color: #c7d2fe; }

          .freq { color: #64748b; font-size: 0.8rem; }

          footer {
            margin-top: 2rem;
            padding-top: 1rem;
            border-top: 1px solid #1e293b;
            font-size: 0.75rem;
            color: #475569;
            text-align: center;
          }
        </style>
      </head>
      <body>
        <div class="wrapper">
          <header>
            <div class="logo">TN</div>
            <h1>
              XML Sitemap
              <span>tomnyambu.dev — Full Stack Engineer &amp; Cloud Architect, Kenya</span>
            </h1>
          </header>

          <div class="meta">
            <div class="badge">
              <strong><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></strong> URLs indexed
            </div>
            <div class="badge">
              Generated <strong>2026-02-25</strong>
            </div>
            <div class="badge">
              Geo-targeted: <strong>Kenya (en-KE) · Africa (en-001) · Global</strong>
            </div>
          </div>

          <table>
            <thead>
              <tr>
                <th>URL</th>
                <th>Last Modified</th>
                <th>Priority</th>
                <th>Frequency</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <xsl:sort select="sitemap:priority" order="descending" data-type="number"/>
                <tr>
                  <td>
                    <a href="{sitemap:loc}" target="_blank" rel="noopener">
                      <xsl:value-of select="sitemap:loc"/>
                    </a>
                  </td>
                  <td><xsl:value-of select="sitemap:lastmod"/></td>
                  <td>
                    <xsl:choose>
                      <xsl:when test="sitemap:priority >= 0.9">
                        <span class="pill pill-high"><xsl:value-of select="sitemap:priority"/></span>
                      </xsl:when>
                      <xsl:when test="sitemap:priority >= 0.7">
                        <span class="pill pill-med"><xsl:value-of select="sitemap:priority"/></span>
                      </xsl:when>
                      <xsl:otherwise>
                        <span class="pill pill-low"><xsl:value-of select="sitemap:priority"/></span>
                      </xsl:otherwise>
                    </xsl:choose>
                  </td>
                  <td class="freq"><xsl:value-of select="sitemap:changefreq"/></td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>

          <footer>
            This sitemap is intended for search engine crawlers. ·
            <a href="https://tomnyambu.dev" style="color:#475569;">tomnyambu.dev</a>
          </footer>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
