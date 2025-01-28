// @ts-check
import { defineConfig } from "astro/config";

import icon from "astro-icon";

import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  experimental: {
    svg: true,
  },
  integrations: [
    icon(),
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
