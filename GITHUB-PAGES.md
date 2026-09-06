# Domain migration

1. Old repository `lalitmohanjaimini/lalitmohanjaimini.github.io`: Settings → Pages → remove `lalitjaimini.com` from Custom domain.
2. This repository: Settings → Pages → Source `Deploy from a branch`, branch `main`, folder `/(root)`.
3. Set Custom domain to `lalitjaimini.com`, save, and enable Enforce HTTPS when available.
4. Keep existing GitHub Pages DNS routing if already valid. Domain assignment is per repository and DNS alone will not move it.
5. Confirm the root URL serves the new portfolio, CSS and LJ favicon before considering migration complete.
6. Set an HTTPS 301/308 redirect for `lalitmohanjaimini.com` to `https://lalitjaimini.com/` at the domain/edge provider.
7. Verify primary domain in Google Search Console; submit `https://lalitjaimini.com/sitemap.xml` and request homepage indexing. Indexing/ranking is not guaranteed.

The public site is served from root HTML assets, not README or dist. The competing custom Actions deployment was removed to use a single branch publishing source.
