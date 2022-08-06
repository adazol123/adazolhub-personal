import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  loading: {
    color: "green",
    height: "5px",
  },
  /** CSS file configuration */
  css: [
    "~/assets/css/main.css",
    "~/assets/css/layout.css",
    "~/assets/css/style.css",
  ],
  /** Content files configuration */
  modules: ["@nuxt/content"],
  /** Tailwind CSS configuration */
  build: {
    postcss: {
      postcssOptions: require("./postcss.config.js"),
    },
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag: string) =>
        ["email", "email_label", "logo"].includes(tag),
    },
  },
  
});
