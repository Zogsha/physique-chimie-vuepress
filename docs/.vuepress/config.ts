import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance"
import theme from "./themeDefault";

export default defineUserConfig({
  lang: "fr-FR",
  title: "classBot_",
  description: "A demo for vuepress-theme-hope",

  base: "/physique-chimie-vuepress/",

  theme,
  plugins: [
    searchPlugin({
    }),
    mdEnhancePlugin({
      enableAll: true,
    }),
  ],
  extendsMarkdown:(md) => {
    md.use(require("markdown-it-abbr"))
  },
});
