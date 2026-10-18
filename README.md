# Fusion Foods Website

A responsive Fusion Foods marketing website with a rebuilt B2B homepage and a dedicated `/partnership/` page.

## Files

- `index.html` — updated homepage, uses `assets/home.css` and `assets/home.js`
- `partnership/index.html` — existing partnership page, uses `assets/style.css` and `assets/site.js`
- `assets/` — Fusion Foods logo, real facility photographs, illustrative packaging visuals, CSS, and JavaScript

## Run locally

Unzip the archive and open `index.html` in a browser. For reliable local routing, run a small local web server from the extracted folder, for example `python -m http.server 8000`, then open `http://localhost:8000/`.

Place the entire directory on your web host so the homepage is `/` and the partnership page is `/partnership/` (some hosts resolve directory index files automatically).

## Content / publishing notes

- The uploaded company document lists potato-chip manufacturing in Ragimakulapalle Village, Madanapalle, Andhra Pradesh, with a daily production capacity of **200 kg**. It states that FSSAI food-safety standards are followed; the website does not claim an independently verified certification or license number.
- The images showing the team and factory machinery are sourced from the supplied company document.
- The Classic Salted and Masala packaging images are illustrative brochure concepts; confirm current flavors and pack sizes before publication.
- Contact numbers follow the latest uploaded company document: **+91 62820 02884** and **+91 99516 22786**.
- The partnership enquiry form in `partnership/index.html` currently copies the entered lead information to the clipboard. It does not send enquiries to a server or CRM. Connect a backend and confirm consent/privacy language before public launch.
- Google Fonts are optional, with local system fallbacks.

## Homepage interactions

- Responsive mobile navigation
- Sticky header
- Two illustrative product/packaging variants
- Reduced-motion-friendly scroll reveals
- Direct contextual links to the partnership enquiry page

## Notes

`fusion-foods-homepage.html` outside this folder is also supplied as a *self-contained homepage preview* with embedded assets, CSS and JavaScript. For the full two-page site and working relative routes, deploy this ZIP.
