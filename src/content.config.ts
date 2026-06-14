import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const news = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/news" }),
  schema: z.object({
    date: z.coerce.date(),
    icon: z.string().optional(),
  }),
});

const talks = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/talks" }),
  schema: z.object({
    date: z.coerce.date(),
    title: z.string(),
    event: z.string().optional(),
    location: z.string().optional(),
    type: z.string().optional(),
    slides: z.string().optional(),
    video: z.string().optional(),
  }),
});

const publications = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/publications" }),
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    venue: z.string(),
    year: z.number(),
    doi: z.string().optional(),
    pdf: z.string().optional(),
    html: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { news, talks, publications };
