import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/t-spe/": [
    {
      text: "Composition et transformation de la matière",
      prefix : "composition-et-transformation-de-la-matiere/",
      collapsable: true,
      children: "structure"
    },
    {
      text: "Mouvement et interactions",
      prefix : "mouvement-et-interactions/",
      collapsable: true,
      children: "structure"
    },
    {
      text: "Ondes et signaux",
      prefix : "ondes-et-signaux/",
      collapsable: true,
      children: "structure"
    },
    {
      text: "Energie : conversions et tarnsferts",
      prefix : "energie-conversions-et-transferts/",
      collapsable: true,
      children: "structure"
    },
  ],
});
