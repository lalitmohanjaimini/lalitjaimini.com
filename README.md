# Lalit Mohan Jaimini — Portfolio

Official portfolio of **Lalit Mohan Jaimini**, Technology Leader, Systems Architect and Chief Technology Officer at Flitpay Private Limited and Flit Webs PVT LTD.

**Live website:** [lalitjaimini.com](https://lalitjaimini.com/)

> Engineering depth. Leadership perspective.

## About the website

A premium, responsive technology-leadership portfolio focused on:

- Backend systems and API architecture
- Data platforms and database engineering
- Cloud infrastructure, Kubernetes and DevOps
- Technical strategy and engineering leadership
- Professional journey and selected work
- Featured K3s engineering blueprint case study
- Clear business context behind technology decisions

## Technology

- Semantic HTML5
- Responsive CSS
- GitHub Pages
- GitHub Actions
- Google Analytics 4 through Cloudflare Google Tag Gateway
- Schema.org structured data
- Open Graph and social sharing metadata

No framework or build dependency is required.

## Project structure

```text
.
├── index.html
├── style.css
├── 404.html
├── CNAME
├── sitemap.xml
├── robots.txt
├── site.webmanifest
├── icon.svg
├── favicon.ico
├── apple-touch-icon.png
├── assets/
└── .github/workflows/publish.yml
```

## Deployment

The website deploys automatically from the `main` branch through GitHub Actions.

Workflow:

```text
.github/workflows/publish.yml
```

Custom domain:

```text
lalitjaimini.com
```

The Pages workflow uses the current Node.js 24-compatible GitHub Actions.

## SEO and discovery

The website includes:

- Canonical URL and `en-IN` language signals
- Person, ProfilePage, WebSite, SoftwareSourceCode and ImageObject structured data
- Search-engine sitemap and robots configuration
- Open Graph and Twitter/X social preview metadata
- Google Search Console domain verification
- Submitted and successfully processed sitemap
- Single-source Google Analytics measurement through Cloudflare Google Tag Gateway

Sitemap: [lalitjaimini.com/sitemap.xml](https://lalitjaimini.com/sitemap.xml)

## Local preview

Run a simple local server from the repository root:

```bash
python3 -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

## Releases

Stable versions are preserved using Git tags and GitHub Releases. The README is reviewed and updated with every release.

Latest stable release: [v1.7.3](https://github.com/lalitmohanjaimini/lalitjaimini.com/releases/tag/v1.7.3)

### v1.7.3 — Performance, Analytics and Edge Security

- Removed the duplicate repository-level GA4 loader and retained Cloudflare Google Tag Gateway as the single active source
- Added a guarded, deferred GA4 fallback for continuity and future CSP hardening
- Preloaded the hero circuit artwork for faster LCP discovery
- Added deployment checks that prevent analytics duplication from returning
- Verified live HSTS, frame protection, COOP, no-sniff, referrer and permissions-policy headers
- Achieved fresh PageSpeed scores of 99/100/100/100 on mobile and 100/100/100/100 on desktop
- Preserved Cloudflare RUM and bot protection for real-user visibility and security

### v1.7.2 — Career Accuracy and Accessibility

- Corrected the Flit Webs progression to Senior Software Engineer (Nov 2015–May 2016) and Chief Technology Officer (Jun 2016–Present)
- Added the official Flit Webs website to the Journey, Selected Work and Person structured data
- Improved Leadership principle-label contrast for PageSpeed accessibility
- Refreshed the stylesheet cache key and structured-data modification timestamp

### v1.7.0 — Featured Engineering Blueprint

- Added a premium K3s engineering case-study section
- Connected architecture, observability, runtime security and disaster recovery
- Added responsive desktop, tablet and mobile layouts
- Added direct access to the public production-platform blueprint
- Added SoftwareSourceCode structured data for technical-project discovery
- Expanded deployment checks for the featured project
- Applied a warm premium surface to the engineering blueprint for clear section rhythm
- Kept the final Connect section and footer on a unified dark closing surface

## Post-v1.7.0 corrections

- Separated the Flitpay role dates from company founding and incorporation.
- Made the blueprint flow vertical so arrows cannot wrap away from their steps.
- Darkened copper labels and improved intermediate-width and small-screen layout rules.
- Updated deployment checks to validate the active social image, JSON-LD datetime, analytics and internal anchors.
- Disabled the extra automatic tag setup in Cloudflare; a fresh live response contains one analytics configuration, and GA4 Realtime received visits.
- Increased mobile content gutters to 24px per side and blueprint flow labels to 14px.
- Reviewed supplied mobile hero, blueprint and footer screenshots; tablet visual verification remains outstanding.
- Removed the duplicate repository-level Google tag so Cloudflare Google Tag Gateway is the only GA4 loader.
- Preloaded the hero circuit artwork with high fetch priority to improve LCP discovery.
- Strengthened deployment validation to prevent analytics duplication from returning.
- Added a deferred external GA4 fallback that stays inactive while Cloudflare Gateway owns the page, allowing a later switch to strict CSP without losing analytics.

## Profiles

- [Portfolio](https://lalitjaimini.com/)
- [LinkedIn](https://www.linkedin.com/in/lalitmohanjaimini/)
- [GitHub](https://github.com/lalitmohanjaimini)
