# GHAR KA KHANA - Static Website (Demo)
This is a simple static website for GHAR KA KHANA (home-cooked meal delivery) built as a demo front-end.

## Files
- index.html (home)
- menu.html (menu / order)
- chef.html (become a chef)
- about.html
- contact.html
- styles.css (main stylesheet)
- script.js (front-end interactions)
- assets/ (placeholder images)

## How to run locally
1. Unzip the package.
2. Open `index.html` in a browser, or serve via a simple static server:
   - Python 3: `python -m http.server 8000`
   - Node (http-server): `npx http-server . -p 8000`
3. To connect to the backend, update AJAX/fetch endpoints in `script.js` to your API base URL.

## Deploy
- Deploy to Netlify / Vercel / GitHub Pages by connecting the repo.
- For Netlify, drag-and-drop the folder to Netlify dashboard or configure a repo.

## Notes
- This is a demo static front-end. Integrate with the backend APIs (auth, orders, payments) to enable full functionality.
