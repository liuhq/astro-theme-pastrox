import { z, defineCollection } from 'astro:content'

const postCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string().default('This is a description.@ ^_^ @.'),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    pinned: z.boolean().optional(),
  }),
})

const aboutCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
  }),
})

export const collections = {
  posts: postCollection,
  about: aboutCollection,
}
