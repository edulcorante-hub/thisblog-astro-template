# ThisBlog — Astro Template by Edulcorante

A minimalist and atmospheric blog theme built with [Astro](https://astro.build/).  
It’s designed to be calm, fast, and fully customizable — ideal for personal sites, journals, or creative projects.

---

## 🌿 Features

- Minimal design focused on readability and calm aesthetics  
- Support for Markdown and MDX posts  
- Custom components for:
  - `LastProject`
  - `PinnedPost`
  - `RandomQuote`
  - `RecentPosts`
  - `Floating dark mode toggle`
- SEO-friendly with dynamic meta tags  
- Responsive layout, lightweight CSS  
- Easily adaptable for personal or thematic use  

---

## 🛠️ Getting Started

### 1. Clone this repository

```bash
git clone https://github.com/yourusername/edulcorante.git
cd edulcorante
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Then open http://localhost:4321
 in your browser.

## ⚙️ Configuration

In src/pages/index.astro, you’ll find frontmatter constants such as:

const pageTitle = "This blog";
const description = "Sample description";
const url = "https://example.com";


Replace these values with your own project information.

## 🖋️ Content Structure

/src/pages/ → main pages and layouts

/src/components/ → Astro components (quotes, posts, etc.)

/public/ → static assets

/styles/ → global and modular stylesheets

## 💡 Notes

This template is intentionally neutral — no external dependencies or APIs.
You can extend it with your own design system, MDX enhancements, or custom routing.

### 📄 License

MIT © 2025 Edulcorante

