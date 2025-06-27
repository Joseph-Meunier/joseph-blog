// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';


// https://astro.build/config
export default defineConfig({
	site: 'https://Joseph-Meunier.github.io',
	base: '/',
	integrations: [mdx(), sitemap()],
	markdown: {
		shikiConfig: {
			theme: 'one-dark-pro',
		}
	},
	// Configuration pour les erreurs (sans redirects)
	build: {
		assets: 'assets'
	}
});
