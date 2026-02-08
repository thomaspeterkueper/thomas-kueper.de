import { defineCollection, z } from 'astro:content';

const romane = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    genre: z.string().optional(),
    description: z.string().optional(),
    status: z.string().optional(),
    order: z.number().optional(),
    erscheinungsjahr: z.number().optional(),
    saga: z.string().optional(),
    cover: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

const philosophie = defineCollection({
  type: 'content',
  schema: z.object({}).passthrough(),
});

const sachbuecher = defineCollection({
  type: 'content',
  schema: z.object({}).passthrough(),
});

export const collections = { romane, philosophie, sachbuecher };
