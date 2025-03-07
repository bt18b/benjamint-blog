// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import pdf from "astro-pdf"
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import pagefind from "astro-pagefind";

import alpine from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  build: {
    format: "file",
  },
  site: process.env.CI
    ? "https://benjamint.io"
    : "http://localhost:4321",
  integrations: [react(), mdx(), pdf({
    pages: {
      "/resume": "resume.pdf"
    }
  }), sitemap({
      filter: (page) => !page.includes("hidden__"),
  }), pagefind(), alpine()],
  vite: {
    plugins: [tailwindcss()],
    build: {
      rollupOptions: {
        external: "/pagefind/pagefind.js?url"
      }
    }
  }
});