import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  type: "content", 
  schema: z.object({
    title: z.string(),
    pubStatus: z.boolean(),
    pubDate: z.date(), 
    description: z.string(), 
    author: z.object({
      name: z.string(),
      image: z.object({
        url: z.string(),
        alt: z.string(),
      }),
    }).optional(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    readingTime: z.number().optional(),
  }),
});

export const collections = {
  posts: postsCollection,
};
