import { defineCollection, z } from "astro:content";
import { file, glob } from "astro/loaders";

const siteCollection = defineCollection({
  loader: file("src/content/site/index.yml"),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      title: z.string(),
      description: z.string(),
      basepath: z.string().url({ message: "Base path must be a valid URL" }),
      ogImageURL: image(),
      keywords: z.array(z.string()),
      author: z.object({
        name: z.string(),
        email: z.string().email({ message: "Must be a valid email address" }),
        url: z.string().url({ message: "URL must be valid" }),
      }),
      footnote1: z.string(),
      footnote: z.string(),
      copyright: z.string(),
      email: z.string().email({ message: "Must be a valid email address" }),
      hero: z.array(
        z.object({
          bgImage: image(),
          bgVideo: z.string().optional(),
          title: z.string(),
          subtitle: z.string(),
          btnText: z.string(),
          btnLink: z.string(),
        })
      ),
      links: z.array(
        z.object({
          text: z.string(),
          link: z.string(),
        })
      ),
      intro: z.array(z.string()),
      facilitiesTitle: z.string(),
      facilities: z.array(
        z.object({
          icon: z.string(),
          title: z.string(),
          description: z.string(),
        })
      ),
      directions: z.object({
        title: z.string(),
        description: z.string(),
        transportation: z.array(
          z.object({
            icon: z.string(),
            text: z.string(),
          })
        ),
        map: z.string(),
      }),
      contactTitle: z.string(),
      contactSubtitle: z.string(),
      contactInfo: z.array(
        z.object({
          link: z.string(),
          icon: z.string(),
          text: z.string(),
        })
      ),
      footerContact: z.array(
        z.object({
          link: z.string(),
          icon: z.string(),
          text: z.string(),
        })
      ),
      footerSocials: z.array(
        z.object({
          link: z.string(),
          icon: z.string(),
          text: z.string(),
        })
      ),
    }),
});

const roomsCollection = defineCollection({
  loader: glob({ pattern: ["*.mdx"], base: "src/content/rooms" }),
  schema: ({ image }) =>
    z.object({
      published: z.boolean().optional().default(true),
      id: z.number(),
      title: z.string().optional(),
      guest: z.string().optional(),
      bed: z.string().optional(),
      bath: z.string().optional(),
      description: z.string().optional(),
      price: z.string().optional(),
      image: image(),
    }),
});

export const collections = {
  siteCollection: siteCollection,
  roomsCollection: roomsCollection,
};
