# Jeel Patel — Portfolio (Single Page)

This repository contains a single-page portfolio built with plain HTML, CSS and vanilla JavaScript. The site is now consolidated into `index.html` (home + About + Projects + Skills + Contact). The site includes:

- Responsive layout and dark theme
- Subtle 3D background (three.js) + particle layer
- Smooth scroll and section navigation
- Contact form (EmailJS)

## 📁 File Structure (after cleanup)

```
Portfolio/
├── index.html          # Single-page site (home + sections)
├── styles.css          # Main stylesheet
├── script.js           # Interactive behaviour (optimized)
├── bg.js               # three.js background (subtle 3D)
├── assets/             # images, resume, etc.
└── README.md           # This file
```

## 🚀 Run locally (recommended)

Open a terminal in the project folder and run one of the following (no build required):

Python 3 built-in server:
```powershell
cd "c:\Users\jeelp\.vscode\Jeel - Portfolio\Portfolio"
py -3 -m http.server 8000
# then open http://localhost:8000
```

Node (http-server) using Command Prompt to avoid PowerShell script policy prompts:
```powershell
cd "c:\Users\jeelp\.vscode\Jeel - Portfolio\Portfolio"
npx http-server -p 8000
# open http://localhost:8000
```

Or use the VS Code Live Server extension: open `index.html` and click "Go Live".

## ✅ Production checklist

- Optimize images (compress and serve webp where possible)
- Minify `styles.css` and `script.js` for faster load times
- Remove unused fonts/icons or use subset of FontAwesome
- Enable Brotli/Gzip on the server/CDN
- Add proper meta tags for SEO and social sharing (Open Graph)

## 🔧 Deployment

You can host this static site on GitHub Pages, Netlify, Vercel, or any static host. For GitHub Pages, push the repository and enable the Pages feature.

## 📝 Notes

- The standalone `about.html`, `projects.html`, `skills.html`, and `contact.html` files have been removed — their content is in `index.html` now.
- If you want to keep separate pages instead of a single-page layout, let me know and I can restore or re-split the content.

## Need help?

Tell me which improvements you'd like next (minify files, add a deployment config, add analytics, or a contact spam-protection step) and I'll implement them.

---

Made with ❤️ — enjoy!
