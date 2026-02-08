// Pfad: src/content/config.ts
// Erstellt am: 07.02.2026, 19:18

import { defineCollection, z } from 'astro:content';

const romane = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    saga: z.enum(['Baumeister', 'noχ¹ᐃ', 'Zereya']),
    erscheinungsjahr: z.number(),
    cover: z.string().optional(),
    tags: z.array(z.string()),
  }),
});

const philosophie = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    category: z.enum(['Omnizedenz', 'Resonanz-Ethik', 'AVI-Modell', 'Archetypen']),
    teaser: z.string(),
    status: z.enum(['Entwurf', 'Final', 'Archiviert']),
    letztes_update: z.date(),
    tags: z.array(z.string()).default([]),
  }),
});

const sachbuecher = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    genre: z.string().optional(),
    description: z.string().optional(),
    journal: z.string().optional(),
    type: z.enum(['paper', 'monograph', 'research']),
    doi: z.string().optional(),
    abstract: z.string().optional(),
    status: z.string().optional(),
    order: z.number().optional(),
    datum: z.date().optional(),
  }),
});

export const collections = { romane, philosophie, sachbuecher };