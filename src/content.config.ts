import { defineCollection, reference, z } from "astro:content";
import { glob } from "astro/loaders";

// Define your collection(s)
const news = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/news" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    relatedPosts: z.array(reference("news")),
  }),
});

// Register the collection in a single exported object
export const collections = { news };
