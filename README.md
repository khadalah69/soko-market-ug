# Soko Market

A responsive, dependency-free storefront starter for an e-commerce marketplace, built with HTML, CSS, and vanilla JavaScript.

## Run locally

Open `index.html` in a modern browser. Product imagery and web fonts are loaded from external URLs, so those assets need an internet connection. The storefront itself does not require a build step or package installation.

## Included

- Responsive homepage with category navigation and product highlights.
- Product catalog with live search, category, maximum-price, and rating filters, plus sorting.
- Prices displayed in Ugandan shillings (UGX), with an expanded electronics catalog including Bluetooth speakers, a soundbar, a smart TV, a laptop, and a camera.
- Shopping cart with quantity controls, a subtotal, free-delivery threshold, and browser-local cart persistence.
- Client-side registration form with basic browser validation.
- Wishlist toggles and a newsletter signup demo.
- Browser-local demo admin dashboard for adding, editing, and removing catalog products.

## Production integration

This is a frontend foundation, not a production commerce backend. Registration currently validates in the browser and creates a temporary, in-memory demo account; it does not transmit or persist the submitted password. Replace that flow with a server-backed identity provider before accepting accounts. Likewise, connect product inventory, orders, delivery, and a compliant payment provider before accepting purchases. Cart contents are stored in this browser's local storage and are not synchronized across devices.

Product prices and the free-delivery threshold are illustrative UGX demo values, not live merchant prices or exchange-rate conversions.

The admin dashboard is intentionally a local demo, not an authenticated management system: anyone who can open the storefront can edit its catalog in that browser. Catalog edits use local storage and do not publish to other shoppers. Never deploy this demo panel as a live admin tool without replacing it with server-side authentication, authorization, and a persistent product API.

## Free static hosting

The storefront can be hosted as a static site on a free provider subdomain, for example GitHub Pages (`*.github.io`), Cloudflare Pages (`*.pages.dev`), or Netlify (`*.netlify.app`). Publishing requires a provider account and a deployment destination. Static hosting does not turn the demo registration, admin panel, cart, or checkout into secure shared backend services.
