import { defineApp } from "iles";

export default defineApp({
  head({ frontmatter, site }) {
    return {
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/@inkline/inkline/dist/inkline.js",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/@inkline/inkline/dist/inkline.css",
        },
      ],
    };
  },
});
