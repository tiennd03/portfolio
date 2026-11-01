# Portfolio — Angular Frontend Developer

My personal landing page: who I am, the projects I've built, how I work with clients, and a contact form. Available in **English and Vietnamese**, with light and dark themes.

Built with **Angular 20** and **Tailwind CSS 4**, and **prerendered at build time** (static site generation) so the page loads instantly and is fully readable by search engines.

> **Live site:** _[https://tiennd-portfolio.web.app](https://tiennd-portfolio.web.app/)_

## Features

- **Sections** — hero, about & skills, projects, services & process, FAQ, contact.
- **English / Vietnamese** — one-click switch; remembers the choice and follows the browser language on first visit. Updates `<html lang>`, the page title and meta description.
- **Dark mode** — follows the OS, remembers the choice, no flash on load.
- **Scrollspy navigation** — the menu highlights the section you're reading; smooth scrolling with offset for the fixed header.
- **Scroll-reveal animations** — sections fade in as they appear; disabled for users who prefer reduced motion.
- **Contact form** — validation with translated messages, spam honeypot, sends via [Formspree](https://formspree.io) if configured or opens the visitor's email app otherwise.
- **FAQ** — accessible accordion with native `<details>`.
- **Responsive** — mobile menu, fluid grids.

## Tech highlights

| Area | What's used |
| --- | --- |
| Rendering | Prerendering (SSG) with `@angular/ssr` (`outputMode: "static"`), client hydration with event replay |
| SSR safety | Browser-only code in `afterNextRender`, `isPlatformBrowser`, first render identical on server and client |
| i18n | Typed content dictionary (`Content` interface) + a signal-based `I18nService` with `computed` texts |
| SEO | `Title` and `Meta` services, Open Graph tags, `robots.txt` |
| Angular | Standalone components, signals, `@let`, `OnPush`, custom `appReveal` directive with `IntersectionObserver` |
| Forms | Typed reactive form, honeypot field, error messages per language |
| Styling | Tailwind CSS 4, class-based dark variant, component classes |
| Testing | Jasmine + Karma: i18n service, content parity, contact form component, mailto builder |

## Make it yours

1. Edit `src/app/core/site-config.ts` — name, links, project URLs, skills.
2. Edit `src/app/core/content.ts` — all texts in both languages.
3. Optional: create a free form on formspree.io and paste its id into `formspreeId`.

## Getting started

```bash
npm install
npm start        # http://localhost:4200
npm test         # unit tests
npm run build    # prerendered site in dist/portfolio/browser
```

## License

MIT
