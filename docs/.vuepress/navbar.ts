import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: 'Cours',
    prefix : "/constitution-et-transformation-de-la-matiere/",
      children: [
        {
          text: 'Prévoir l’état final d’un système, siège d’une transformation chimique',
          prefix : "prevoir-letat-final-dun-systemesiege-dune-transformation-chimique/",
          children: [
                {
                  text: "Evolution spontanée d'un système chimique",
                  link: 'evolution-spontanee-dun-systeme-chimique/introduction.md',
                },
                {
                  text: "Acides et bases",
                  link: 'acides-et-bases/introduction.md',
                },
                {
                  text: "Piles et électrolyse",
                  link: 'piles-et-electrolyse/introduction.md',
                },
          ],
        },
        {
          text: 'Déterminer la composition d’un système par des méthodes physiques et chimiques',
          children: [
            {
              text: 'Déterminer la composition d’un système par des méthodes physiques et chimiques',
              link : "determiner-la-composition-dun-systeme-par-des-methodes-physiques-et-chimiques/README.md"
            },
          ],
        },
        {
          text: 'Modéliser l’évolution temporelle d’un système,siège d’une transformation',
          children: [
            {
              text: 'Modéliser l’évolution temporelle d’un système,siège d’une transformation',
              link : "modeliser-levolution-temporelle-dun-systemesiege-dune-transformation/README.md"
            },
          ],
        },
        {
          text: 'Élaborer des stratégies en synthèse organique',
          children: [
            {
              text: 'Élaborer des stratégies en synthèse organique',
              link : "elaborer-des-strategies-en-synthese-organique/README.md"
            },
          ],
        },
      ],
  },
]);

