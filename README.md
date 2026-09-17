# Maison Flottante

Site vitrine React anonymisé, créé à partir d'un projet client réel afin d'être présenté dans un portfolio.

Le projet met en avant une expérience de séjour insolite à bord d'un yacht, sans afficher le nom, les textes précis, les photos réelles ou les informations identifiantes du projet d'origine.

## Objectif

Cette version sert de démonstration portfolio. Elle permet de montrer :

- la création d'une interface web immersive ;
- l'intégration d'un site vitrine en React ;
- une structure responsive ;
- une galerie d'images cohérente ;
- une mise en page moderne pour un hébergement touristique ;
- un projet prêt à être déployé sur Netlify.

## Technologies

- React
- Vite
- Tailwind CSS
- ESLint

## Installation

Installer les dépendances :

```bash
npm install
```

## Lancement en local

Démarrer le serveur de développement :

```bash
npm run dev
```

Le site sera disponible sur l'adresse locale indiquée dans le terminal.

## Vérification du code

Lancer ESLint :

```bash
npm run lint
```

## Build de production

Générer la version de production :

```bash
npm run build
```

Les fichiers générés se trouvent dans le dossier `dist`.

## Prévisualisation du build

Après un build, prévisualiser la version de production :

```bash
npm run preview
```

## Structure du projet

```text
src/
  App.jsx
  main.jsx
  index.css
  data/
    boatStayData.js

public/
  images/
  favicon.svg
```

## Modifier le contenu

Les données principales du site sont dans :

```text
src/data/boatStayData.js
```

Ce fichier permet de modifier :

- les cabines ;
- les informations importantes ;
- les images de la galerie ;
- les services ;
- les textes courts associés aux cartes.

Les grandes sections de la page sont dans :

```text
src/App.jsx
```

C'est dans ce fichier que l'on peut modifier :

- le menu ;
- le hero ;
- les textes de présentation ;
- les sections ;
- les boutons ;
- le footer.

Les images utilisées par la version portfolio sont dans :

```text
public/images/
```

## Anonymisation

Cette version ne doit pas contenir d'informations permettant d'identifier le projet client d'origine.

À éviter dans cette version :

- nom réel du bateau ou du client ;
- adresse précise ;
- prénoms ou histoire personnelle ;
- photos réelles du lieu ;
- liens de réservation réels ;
- textes commerciaux exacts du site original.

Les contenus sont volontairement génériques ou remplacés par du texte de démonstration.

## Déploiement Netlify

Paramètres recommandés :

- Build command : `npm run build`
- Publish directory : `dist`

Le site peut rester sur une URL Netlify gratuite ou être relié à un sous-domaine / domaine de portfolio.

Exemple :

```text
https://maison-flottante-demo.netlify.app/
```

Pour un portfolio professionnel, il est aussi possible de lier cette page depuis le site principal du portfolio avec un titre du type :

```text
Maison Flottante - Site vitrine React pour un hébergement insolite
```

## Note portfolio

Ce projet est une version anonymisée d'un travail client. Il est présenté uniquement pour illustrer les compétences en intégration React, design d'interface, responsive web design et déploiement de site statique.
