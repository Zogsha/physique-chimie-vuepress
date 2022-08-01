import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/constitution-et-transformation-de-la-matiere/": [
    {
      text: "Evolution spontanée d'un système chimique",
      prefix:
        "/constitution-et-transformation-de-la-matiere/prevoir-letat-final-dun-systemesiege-dune-transformation-chimique/evolution-spontanee-dun-systeme-chimique/",
      collapsable: true,
      children: [
        "introduction.md",
        "equilibre-chimique.md",
        "evolution-spontanee-dun-systeme-hors-equilibre-chimique.md",
      ],
    },
    {
      text: "Acides et bases",
      prefix:
        "/constitution-et-transformation-de-la-matiere/prevoir-letat-final-dun-systemesiege-dune-transformation-chimique/acides-et-bases/",
      collapsable: true,
      children: [
        "introduction.md",
        "les-acides-et-les-bases.md",
        "force-dun-acide-ou-dune-base.md",
      ],
    },
    {
      text: "Piles et électrolyse",
      prefix:
        "/constitution-et-transformation-de-la-matiere/prevoir-letat-final-dun-systemesiege-dune-transformation-chimique/piles-et-electrolyse/",
      collapsable: true,
      children: ["README.md"],
    },
  ],
});
