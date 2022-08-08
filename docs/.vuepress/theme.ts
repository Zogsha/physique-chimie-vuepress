import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  hostname: "https://zogsha.github.io/physique-chimie-vuepress/",

  author: {
    name: "Aliosha Padovani",
  },

  iconAssets: "iconfont",

  logo: "/logo.svg",

  repo: "Zogsha/physique-chimie-vuepress",

  docsDir: "docs",
  docsBranch : "main",

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebar,

  displayFooter: false,

  darkmode: "toggle",
  fullscreen: true,
  themeColor: {
    blue: "#2196f3",
    red: "#f26d6d",
    orange: "#fb9b5f",
  },

  pageInfo: ["Date", "ReadingTime"],

  plugins: {
    readingTime :{
      wordPerMinute: 200,
    },
    mdEnhance: {
      container: true,
      sub: true,
      sup: true,
      footnote: true,
      mark: true,
      chart: true,
      echarts: true,
      flowchart: true,
      mermaid: true,
      tex: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
