import { defineConfig } from "iles";
import pwa from "@islands/pwa";
export default defineConfig({
  modules: [
    pwa({
      manifestFilename: "pwa-manifest.json",
      mode: "development",
      base: "/",
      includeAssets: ["favicon.svg"],
      manifest: {
        name: "Iles PWA",
        short_name: "Iles PWA",
        theme_color: "#ffffff",
        description: "PWA made with Iles",
        display: "standalone",
        background_color: "#ffffff",
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "maskable-icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,svg,ico,png,avif,json,xml,html}"],
      },
    }),
  ],
});
