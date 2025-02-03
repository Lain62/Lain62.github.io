// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';

// 3. Define your collection(s)
const gallery = defineCollection({
	loader: glob({ pattern: "*.md", base: "src/gallery/" }),
	schema: z.object({
		date: z.string(),
		image: z.string(),
		alt: z.string()
	})
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { gallery };
