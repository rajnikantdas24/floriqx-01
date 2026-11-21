# Sasico – IT Solution (React version)

Vite + React 18 + React Router 6 conversion of the HTML template. CSS, images and content are unchanged.

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build -> dist/  (host with an SPA fallback to index.html)
```

## Routes (old file -> new route)
| Old file | Route |
|---|---|
| index.html | `/` |
| index-onepage.html | `/index-onepage` |
| about.html | `/about` |
| solution.html | `/solution` |
| case-study.html | `/case-study` |
| resource.html | `/resource` |
| contact.html | `/contact` |

## Structure
```
public/assets/        css (style.css + vendor), images, menuspy – served as-is, so the CSS is untouched
src/
  App.jsx             routes
  layouts/MainLayout  preloader, dark-mode button, video popup, mobile menu, search, header, footer, AOS
  components/common/  Header, Footer, NavMenu, MobileMenu, SearchPopup, Preloader, DarkModeButton,
                      VideoPopup, Counter, SwiperBox
  sections/<page>/    one component per <section> of the original pages (markup unchanged)
  pages/              each page = list of sections
  data/               menus.js, swiperConfigs.js (same options as the old main.js)
  hooks/useOnePage    scroll-spy for /index-onepage
```

## What replaced main.js
Preloader, Swiper (brand/project/testi), sticky header, scroll-to-top, smooth anchor scroll, mobile menu,
search popup, active menu, dark mode (localStorage), AOS, video popup, counters, Bootstrap tabs and the
one-page MenuSpy are all ported 1:1 (see the components above).

## Notes
* Content is kept exactly as in the template, including the stray headings `brand sec` / `googel map`
  (they are in the original HTML – remove them from `sections/shared/BrandSec.jsx` and
  `sections/contact/GoogelMapSec.jsx` if they are only placeholders).
* Forms (search, contact) are static like in the template – they have no backend.
* The preloader shows when the app first loads (not on every in-app page change).
* Pinned to the versions of the bundled vendor files: Swiper 11.0.7, Bootstrap 5.3.8, AOS 2.3.4.
