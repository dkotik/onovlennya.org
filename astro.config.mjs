import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import astroI18next from "astro-i18next";
// const target = "docs";
// https://astro.build/config
// legacy: { // this may be required for ESM import to work in regular markdown
//     astroFlavoredMarkdown: true,
// },

import mdx from "@astrojs/mdx";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: "https://onovlennya.org",
  // base: '/docs',
  // outDir: target,
  publicDir: "src/public",
  // trailingSlash: "never",
  server: {
    port: 8081
  },
  build: {
    format: "file"
  },
  experimental: {
    integrations: true // required for compress and robotsTxt
  },
  integrations: [
    svelte(),
    astroI18next({
      baseLanguage: "ua",
      i18next: {
        debug: true,
        // convenient during development to check for missing keys
        // ns: ["common", "forms"],
        defaultNS: "common",
        // translation keys will be retrieved in the common.json file by default
        supportedLngs: ["ua", "ru", "en"],
        resourcesPath: "src/locales" // resourcesPath 	?string (src/resources/locales/) 	The path to your translation files
      }
    }),
    compress({
      // path: target,
      // logger: 0, // default 2
      css: false // html: false,
      // js: false,
      // img: false,
      // svg: false
    }),
    robotsTxt({
      sitemapBaseFileName: "sitemap-index",
      // default 'sitemap-index'
      policy: [
        // https://github.com/alextim/astro-lib/tree/main/packages/astro-robots-txt#readme
        {
          userAgent: "*",
          allow: "/",
          crawlDelay: 10,
          // cleanParam: "ref /articles/",
          disallow: ["/assets/"]
        }
      ]
    }),
    sitemap({
      // https://docs.astro.build/en/guides/integrations-guide/sitemap/
      serialize(item) {
        if (/^https\:\/\/onovlennya\.org\/ru\/SKIP\/$/.test(item.url)) {
          console.warn(" ! [SKIP] Skipped in sitemap:", item.url);
          return undefined;
        }

        if (/^https\:\/\/onovlennya\.org\/.*\/$/.test(item.url)) {
          // ends with slash, but must end in .html
          item.url = item.url.substr(0, item.url.length - 1) + ".html";
        } // console.log(item.url);

        return item;
      },

      i18n: {
        entryLimit: 10000,
        changefreq: "weekly",
        priority: 0.7,
        // lastmod: new Date("2022-02-24"),
        defaultLocale: "ua",
        // All urls that don't contain `es` or `fr` after `site` will be treated as default locale, i.e. `en`
        locales: {
          ua: "uk-UA",
          ru: "ru-RU",
          en: "en-US"
          // The `defaultLocale` value must present in `locales` keys
        }
      }
    }),
    mdx(),
    image()
  ],
  output: "static"
});
