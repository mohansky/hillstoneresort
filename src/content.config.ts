import { defineCollection, z, type CollectionEntry } from "astro:content";
import { file, glob } from "astro/loaders";

const optionsSchema = z.object({
  name: z.string(),
  title: z.string(),
  description: z.string(),
  basepath: z.string(),
  ogImageURL: z.string(),
  keywords: z.array(z.string()),
  author: z.object({
    name: z.string(),
    email: z.string(),
    url: z.string(),
  }),
  footnote1: z.string(),
  footnote: z.string(),
  copyright: z.string(),
  email: z.string(),
  heroslider: z.array(
    z.object({
      id: z.number(),
      title: z.string(),
      link: z.string(),
      image: z.string().optional(),
      blurDataURL: z.string().optional(),
    })
  ),
  links: z.array(
    z.object({
      text: z.string(),
      link: z.string(),
    })
  ),
  processtitle: z.string(),
  servicessubtitle2: z.string(),
});

// Services Schema
const servicesSchema = z.object({
  title: z.string(),
  subtitle: z.string(),
  subtitle3: z.string(),
  description: z.array(z.string()),
  toolstitle: z.string(),
  toolsitems: z.array(
    z.object({
      name: z.string(),
      icon: z.string(),
    })
  ),
});

 

// Define collections

const options = defineCollection({
  loader: file("src/content/options/index.yml"),
  schema: optionsSchema
});

const services = defineCollection({
  loader: file("src/content/services/index.yml"),
  schema: servicesSchema
});

 

// Infer the types from the schema 
type OptionsSchema = z.infer<typeof optionsSchema>;
type ServicesSchema = z.infer<typeof servicesSchema>;

// Collection entry types 
type OptionsCollection = CollectionEntry<"options">;
type ServicesCollection = CollectionEntry<"services">;

export const collections = { options, services  };

// Exports
export { options,   optionsSchema,  };
export type { 
  OptionsSchema,
  ServicesSchema, 
  OptionsCollection,
  ServicesCollection
};