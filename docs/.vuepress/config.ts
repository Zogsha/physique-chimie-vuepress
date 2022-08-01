import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import theme from "./theme";

export default defineUserConfig({
  lang: "fr-FR",
  title: "PC Berthelot",
  description: "A demo for vuepress-theme-hope",

  base: "/",

  theme,
  plugins: [
    searchPlugin({
      // your options
    }),
  ],
});
