# 🌐 Maged Morshed — Portfolio

> A fully responsive personal portfolio website — modern design, smooth animations,
> and a native Arabic RTL experience. Hosted free on **GitHub Pages** with
> automatic deployment on every update.

[![Pages](https://img.shields.io/badge/GitHub%20Pages-Live-success?logo=github)]()
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)]()
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)]()
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)]()

---

## ✨ Features

- 🎨 **Modern dark "Deep Space" theme** with Galaxy / iPhone-inspired aurora colors
- 🌙 **Dark / Light mode** with automatic visitor preference saving
- ⌨️ **Dynamic typing effect** for role headlines
- 📊 **Animated counters** and smooth scroll-reveal animations
- 📱 **100% responsive** — flawless on mobile, tablet, and desktop
- 🚀 **Zero heavy libraries** — pure HTML, CSS & JS for blazing-fast loading
- 🧩 **Central config** — edit your name and links from a single place (`js/main.js`)
- 🔄 **Auto deployment** via GitHub Actions on every push

## 🗂️ Project Structure

```
maged-portfolio/
├── index.html              # Main page
├── css/
│   └── style.css           # Styles (colors, animations, responsiveness)
├── js/
│   └── main.js             # Central config + interactions
├── .github/
│   └── workflows/
│       └── deploy-pages.yml  # Auto-deploy workflow
├── LICENSE                 # MIT License
└── README.md               # This file
```

## 🛠️ Customization

All your data lives in one place — open `js/main.js` and edit the `SITE_CONFIG` object:

```js
const SITE_CONFIG = {
  brand: "Maged Morshed",      // Site logo text
  name: "Maged Morshed",       // ← Your full name
  roles: ["Frontend Developer"], // ← Your roles (typing effect)
  email: "you@example.com",    // ← Your email
  socials: { github: "...", linkedin: "..." },  // ← Your links
};
```

Empty values automatically hide their cards — the site only shows real data.

To edit sections, open `index.html` and find the section you want
(`About` / `Skills` / `Projects` / `Contact`).

To change colors, edit the `:root` variables at the top of `css/style.css`.

## 🚀 Deployment

The site deploys automatically via **GitHub Pages**:

1. Go to **Settings ← Pages** in the repository
2. Source: **GitHub Actions**
3. Every push to `main` deploys instantly to:
   `https://magedmorshed173-ai.github.io/maged-portfolio/`

## 🖥️ Run Locally

```bash
# Open directly in your browser
open index.html

# Or run a local server (optional)
python3 -m http.server 8000
# then visit http://localhost:8000
```

## 📄 License

Released under the [MIT License](LICENSE) — free to use and modify.

---

<p align="center">Made with ❤️ — feedback and stars are always welcome</p>
