import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		publishingDate: z.coerce.date(),
		lastUpdated: z.coerce.date().optional(),
		writingStartDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		IsPublished: z.boolean().optional(),
	}),
});

export const collections = { blog };
