// Dateipfad: src/content.config.ts
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

const kontrakomologie = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    description: z.string().optional(),
    kategorie: z.enum(['pop', 'klassik', 'jazz']).optional(),
    richtung: z.enum(['text-zu-musik', 'musik-zu-text']).optional(),
    kuenstler: z.string().optional(),
    werk: z.string().optional(),
    jahr: z.number().optional(),
    order: z.number().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { romane, philosophie, sachbuecher, kontrakomologie };
