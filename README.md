# Joseph Blog

This blog is a personal space where I share my journey, projects, and discoveries as a junior developer. It's built with [Astro](https://astro.build) and deployed on GitHub Pages.

## 🧩 Technologies Used

- **Astro**: Static site generator framework
- **MDX**: For writing enhanced articles (e.g., component integration or HTML tags)
- **GitHub Actions**: CI/CD (automatic build, test, and deployment to GitHub Pages)
- **WebP**: Optimized image format for the web
- **Lucide**: For icons

## 📂 Project Structure

Here's an overview of the folder and file organization:

```text
├── public/           # Static assets (images, favicon, etc.)
│ └── joseph-blog/    # (Prefix used for GitHub Pages deployment)
├── src/
│ ├── components/     # Astro components (e.g., Header, Footer, BaseHead, etc.)
│ ├── content/        # Content collections (Markdown or MDX articles)
│ │ └── blog/         # Blog posts
│ ├── layouts/        # Layouts (e.g., BlogPost.astro)
│ └── pages/          # Pages (index, about, etc.)
├── astro.config.mjs  # Astro configuration (site, base, integrations, etc.)
├── README.md         # This file
├── package.json      # Dependencies and scripts (npm, yarn, pnpm, etc.)
└── tsconfig.json     # TypeScript configuration (strict, types, etc.)
```

Astro automatically generates routes from files (`.astro` or `.md`) in the `src/pages/` directory.  
The `src/content/` directory contains your articles (e.g., under `blog/`), and you can use the `getCollection(...)` function (along with an optional validation schema) to retrieve them.  
For more details, check out the [official Astro Content Collections documentation](https://docs.astro.build/en/guides/content-collections/).

## 🧞 Commands

Run the following commands from the project root (in a terminal):

| Command (npm) (or yarn, pnpm) | Action (or equivalent) |
|:-------------------------------|:----------------------|
| `npm install` (or `yarn`, `pnpm i`) | Install dependencies (node_modules) |
| `npm run dev` (or `yarn dev`, `pnpm dev`) | Start development server (localhost:4321) |
| `npm run build` (or `yarn build`, `pnpm build`) | Build production site to `./dist` |
| `npm run preview` (or `yarn preview`, `pnpm preview`) | Preview build locally before deployment |
| `npm run astro …` (or `yarn astro …`, `pnpm astro …`) | Run CLI commands (e.g., `astro add`, `astro check`) |
| `npm run astro – –help` (or `yarn astro – –help`, `pnpm astro – –help`) | Display Astro CLI help |

## Credit

This theme is inspired by the lovely [Bear Blog](https://github.com/HermanMartinus/bearblog/) (by Herman Martinus) and has been adapted for my personal use.
