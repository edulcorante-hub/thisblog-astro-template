// Importa il glob loader
import { glob } from "astro/loaders";
// Importa utilità da `astro:content`
import { z, defineCollection } from "astro:content";
// Definisci un `loader` e uno `schema` per ogni raccolta
const blog = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/blog" }),
    schema: z.object({
      title: z.string(),
      pubDate: z.date().default(() => new Date()),
      description: z.string(),
      author: z.string(),
      lang: z.string().optional(), //temporary optional
      image: z.object({
        url: z.string(),
        alt: z.string()
      }),
      tags: z.array(z.string())
    })
});
const projects = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/projects" }),
    schema: z.object({
      title: z.string(),
      pubDate: z.date().default(() => new Date()),
      stack: z.array(z.string()).optional(),
      lang: z.string().optional(), //temporary optional
      description: z.string(),
      author: z.string(),
      image: z.object({
        url: z.string(),
        alt: z.string()
      }),
      link: z.string().optional(), //temporary optional
      github: z.string().optional(), //temporary optional
      categories: z.array(z.string())
    })
});
// Esporta un singolo oggetto `collections` per registrare le tue raccolte
export const collections = { blog, projects };