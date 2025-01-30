// astro.config.mjs
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import sitemap from "@astrojs/sitemap";
import { SITE } from "./src/config";
import mdx from "@astrojs/mdx";
import sanity from "@sanity/astro";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: SITE.website,

  integrations: [
    sanity({
      projectId: 'juew0ziu',
      dataset: 'production',
      // Set useCdn to false if you're building statically.
      useCdn: false,
      studioBasePath: '/admin',
    }),
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
    sitemap(),
    mdx()
  ],

  markdown: {
    remarkPlugins: [
      remarkToc,
      [
        remarkCollapse,
        {
          test: "Table of contents",
        },
      ],
    ],
    shikiConfig: {
      themes: { light: "min-light", dark: "night-owl" },
      wrap: true,
    },
  },

  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },

  scopedStyleStrategy: "where",
  
  adapter: cloudflare({
    imageService: 'cloudflare'
 }),

 output: 'server',
});