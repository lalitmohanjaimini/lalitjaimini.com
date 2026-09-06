# GitHub Pages deployment

Status: source and SEO are prepared. GitHub repository connection, Pages setup, DNS migration, secondary-domain redirect and Google Search Console verification are still pending. No GitHub deployment has run.

Primary origin: https://lalitjaimini.com/
Secondary hostname: lalitmohanjaimini.com, to permanently redirect to the primary origin.

## Publish

1. Connect the intended GitHub account and select a repository. Push this source to its main branch, preserving `.github/workflows/pages.yml` and `dist/`.
2. Verify domain ownership in GitHub account settings before changing DNS. Use the exact TXT record GitHub returns. This is separate from Google Search Console verification.
3. Repository Settings → Pages: select GitHub Actions as the publishing source, and set the custom domain to `lalitjaimini.com`. For Actions deployments, configure the domain in Settings; the CNAME file alone does not configure it.
4. Run the Publish portfolio workflow and confirm its deployment succeeds.
5. Migrate the PRIMARY domain's apex A records to all four GitHub Pages addresses: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`. Remove conflicting old apex A/AAAA/CNAME routing records only during this cutover; preserve MX and unrelated TXT records. The previously supplied Sites IPs are not GitHub Pages targets.
6. If adding www support, set `www` CNAME to the real account's `<owner>.github.io`, using the verified owner, not a repository path. Do not invent the owner.
7. Wait for domain validation and certificate provisioning; enable Enforce HTTPS. Verify the homepage, favicon, stylesheet, sitemap, robots file and a deliberate 404.
8. Configure an HTTPS-capable 301 or 308 redirect at the DNS/edge provider for `lalitmohanjaimini.com` to `https://lalitjaimini.com`, preserving paths and query strings. DNS alone is not an HTTP redirect. Do not simply point two unrelated apex domains at this one Pages site. Exact redirect settings depend on the DNS provider.

## Google launch

- Public access with no login is required for crawling. The existing private Sites URL is not the SEO production target.
- Verify the `lalitjaimini.com` domain property in Google Search Console using Google's returned DNS TXT value; never invent a verification token.
- Submit `https://lalitjaimini.com/sitemap.xml` and inspect the homepage URL to request indexing.
- Check the live canonical, HTTP status, robots access and structured data. A successful parser check is not a Google Rich Results Test.
- Add the primary website to the user's LinkedIn profile when separately authorized. Request relevant company profile links through the user's normal process.
- Main name target: Lalit Mohan Jaimini. Secondary: Lalit Jaimini and role-specific combinations. Broad searches for Lalit, Lalit Mohan or Jaimini are competitive and cannot be guaranteed.
- No hidden keyword lists, fabricated achievements or duplicate doorway pages. Only add case studies with approved factual content.

Sources:
- https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
- https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
- https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
