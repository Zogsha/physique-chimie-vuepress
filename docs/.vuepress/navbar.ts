import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: 'Terminale',
    prefix: "/t-spe/",
    children: [
      {
        text: 'Composition et transformation de la matière',
        prefix: "composition-et-transformation-de-la-matiere/",
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
          {
            text: 'Déterminer la composition d’un système par des méthodes physiques et chimiques',
            link: "determiner-la-composition-dun-systeme-par-des-methodes-physiques-et-chimiques/README.md"
          },
          {
            text: 'Modéliser l’évolution temporelle d’un système chimique',
            link: "modeliser-levolution-temporelle-dun-systeme-chimique/README.md"
          },
          {
            text: 'Élaborer des stratégies en synthèse organique',
            link: "elaborer-des-strategies-en-synthese-organique/README.md"
          },
        ],
      },
      {
        text: 'Mouvements et interactions',
        prefix: "mouvements-et-interactions/",
        children: [
          {
            text: "Cinématique",
            link: 'cinematique/introduction.md',
          },
          {
            text: "Dynamique et mouvement dans un champ uniforme",
            link: 'dynamique-et-mouvement-dans-un-champ-uniforme/introduction.md',
          },
          {
            text: "Mouvement dans un champ non uniforme",
            link: 'mouvement-dans-un-champ-non-uniforme/introduction.md',
          },
        ],
      },
      {
        text: 'Energie : conversions et transferts',
        prefix: "energie-conversions-et-transferts/",
        children: [
          {
            text: "Décrire un système thermodynamique",
            link: 'decrire-un-systeme-thermodynamique/introduction.md',
          },
          {
            text: "Premier principe de la thermodynamique",
            link: 'premier-principe-de-la-thermodynamique/introduction.md',
          },
          {
            text: "Transferts thermiques",
            link: 'transferts-thermiques/introduction.md',
          },
        ],
      },
      {
        text: 'Ondes et signaux',
        prefix: "ondes-et-signaux/",
        children: [
          {
            text: "Lunette astronomique",
            link: 'lunette-astronomique/introduction.md',
          },
          {
            text: "Caractériser les phénomènes ondulatoires",
            link: 'caracteriser-les-phenomenes-ondulatoires/introduction.md',
          },
          {
            text: "Dynamique d'un système électrique",
            link: 'dynamique-dun-systeme-electrique/introduction.md',
          },
        ],
      },
    ],
  },
]);

