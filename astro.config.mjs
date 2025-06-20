// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';


// https://astro.build/config
export default defineConfig({
	site: 'https://Joseph-Meunier.github.io',
	base: '/joseph-blog',
	integrations: [mdx(), sitemap()],
	markdown: {
		shikiConfig: {
			// Choisissez un thème parmi les thèmes disponibles
			theme: 'one-dark-pro',
			// Ou utilisez un thème personnalisé
			// theme: 'github-light',
			// theme: 'github-dark',
			// theme: 'dracula',
			// theme: 'nord',
			// theme: 'one-dark-pro',
		}
	}
});
