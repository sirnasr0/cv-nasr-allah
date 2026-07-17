# CV Interactif — Data Analyst

![React](https://img.shields.io/badge/React-18-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue)
![Vite](https://img.shields.io/badge/Vite-5-purple)
![Tailwind](https://img.shields.io/badge/TailwindCSS-3-38bdf8)

🔗 **[Voir le site en ligne](#)**

Site CV interactif en une page, conçu comme une expérience premium (inspiration Apple / Linear / Vercel / Framer) pour remplacer un CV PDF classique. Des micro-interactions soignées et un scroll fluide mettent en valeur mon parcours en Data Science et mes projets, tout en restant entièrement piloté par un seul fichier de contenu.

Projet réalisé pour m'entraîner à construire un produit web complet de bout en bout, avec une architecture pensée pour être maintenue facilement.

> 🎓 Projet personnel réalisé dans le cadre de ma recherche d'alternance en Data Science.

## 🎯 Objectifs

- Concevoir un CV qui se distingue d'un PDF classique par l'expérience, sans sacrifier la lisibilité de l'information
- Séparer strictement le contenu (un seul fichier `profile.ts`) de la mise en forme, pour pouvoir mettre à jour le CV sans toucher au code
- Piloter des animations de scroll (parallax, galerie horizontale, timeline progressive) avec GSAP + ScrollTrigger, synchronisées à un smooth scroll Lenis
- Garantir l'accessibilité (focus visible, respect des préférences de mouvement réduit) malgré la richesse des animations

## 🗂 Structure du projet

```text
cv-website/
├── README.md
├── package.json
├── index.html
├── tailwind.config.js
├── vite.config.ts
├── public/
│   ├── portrait.jpg
│   └── CV_Nasr_Allah_ABA-HADDOU.pdf   ← CV téléchargeable depuis le Hero
└── src/
    ├── main.tsx
    ├── App.tsx                        ← assemblage des sections
    ├── index.css                      ← design tokens globaux, resets
    ├── data/
    │   └── profile.ts                 ← 🔑 source unique de tout le contenu du site
    ├── lib/
    │   ├── useLenis.ts                 ← smooth scroll
    │   ├── useIsMobile.ts              ← breakpoints + prefers-reduced-motion
    │   └── cn.ts                       ← utilitaire de classNames
    └── components/
        ├── layout/                     ← Navbar, curseur personnalisé, barre de progression
        │   ├── Navbar.tsx
        │   ├── CustomCursor.tsx
        │   └── ScrollProgressBar.tsx
        ├── ui/                         ← briques réutilisables
        │   ├── MagneticButton.tsx
        │   ├── RevealText.tsx
        │   ├── GlowCard.tsx
        │   ├── SectionHeading.tsx
        │   └── Tag.tsx
        ├── three/
        │   └── HeroScene.tsx           
        └── sections/                   ← une section = un fichier
            ├── Hero.tsx
            ├── About.tsx
            ├── Skills.tsx
            ├── Experience.tsx
            ├── Certifications.tsx
            ├── Projects.tsx
            ├── Timeline.tsx
            ├── Contact.tsx
            └── Footer.tsx
```

## 🛠 Stack technique

- **Vite + React 18 + TypeScript** — base du projet
- **Tailwind CSS** — design system (couleurs, typographie, espacements)
- **Framer Motion** — micro-interactions, reveals, transitions
- **GSAP + ScrollTrigger** — animations pilotées par le scroll (parallax hero, galerie projets en scroll horizontal, ligne de timeline progressive)
- **Lenis** — smooth scroll premium, synchronisé avec GSAP
- **ESLint** — qualité de code

## 📱 Aperçu des sections

Le site est composé de 8 sections, chacune dans son propre composant, assemblées dans `App.tsx` :

| Section | Contenu |
|---|---|
| **Hero** | Nom, rôle animé (roulement de titres), accroche, chiffres clés, boutons "Voir mes projets" / "Me contacter" / "Télécharger mon CV" |
| **À propos** | Portrait, paragraphes de présentation, informations clés (formation, rythme d'alternance, zone visée, langues) |
| **Compétences** | Compétences groupées par catégorie avec barres de niveau colorées par outil |
| **Formation** | Parcours académique (CNAM, ENSA) sous forme de cartes détaillées |
| **Distinctions** | Certifications et distinctions obtenues |
| **Projets** | Galerie en scroll horizontal, chaque projet présenté en mini étude de cas (problème / approche / résultat) avec liens GitHub |
| **Parcours** | Timeline chronologique de bout en bout |
| **Contact** | Coordonnées et liens (email, téléphone, LinkedIn, GitHub) |

## 🚀 Installation

```bash
git clone https://github.com/sirnasr0/cv-interactif-data-analyst.git
cd cv-interactif-data-analyst
npm install
npm run dev
```

Le site est disponible sur `http://localhost:5173`.

Pour générer la version de production :

```bash
npm run build
npm run preview
```

## ⚠️ Mettre à jour le contenu

**Un seul fichier contient tout le contenu du site :**

```
src/data/profile.ts
```

Il suffit de remplacer les valeurs dans ce fichier — aucune autre modification de code n'est nécessaire, tout le rendu visuel s'adapte automatiquement (nombre de cartes, longueur des textes, etc.).

Sections du fichier à mettre à jour :

| Export | Contenu |
|---|---|
| `identity` | Nom, prénom, accroche, email, téléphone, réseaux, lien du CV PDF |
| `stats` | Chiffres clés affichés dans le Hero |
| `about` | Paragraphes de présentation + informations clés |
| `skillCategories` | Compétences groupées par catégorie, avec niveau (0–100) |
| `experiences` | Expériences professionnelles / stages |
| `certifications` | Certifications obtenues |
| `projects` | Projets, au format mini étude de cas (problème / approche / résultat / lien GitHub) |
| `timeline` | Parcours chronologique |
| `navigation` | Libellés du menu (généralement pas besoin d'y toucher) |

## 🎨 Notes de design

- **Palette** : blanc-sauge (`paper`), encre verte profonde (`ink`), vert émeraude (`emerald`) comme accent principal, menthe pâle (`signal`) pour les touches lumineuses.
- **Typographie** : Space Grotesk (titres), Inter (texte courant), IBM Plex Mono (dates, tags, données) — la monospace est utilisée comme signature visuelle pour tout ce qui est "donnée".
- **Accessibilité** : focus visible, `prefers-reduced-motion` respecté partout (désactive Lenis et les animations scrubbées).

## 🗺 Roadmap

- [ ] Déploiement en ligne (Vercel) et mise à jour du lien en haut du README
- [ ] Version anglaise du site
- [ ] Mode sombre
- [ ] Formulaire de contact fonctionnel (envoi d'email direct depuis le site)
- [ ] Ajout d'un blog / section articles pour partager les projets data en détail

## 📄 Licence

Ce projet est sous licence MIT — voir [LICENSE](LICENSE).

## 👤 Auteur

ABA-HADDOU Nasr ALLAH — [LinkedIn](https://www.linkedin.com/in/nasr-allah-aba-haddou-234a013a7/) · [GitHub](https://github.com/sirnasr0)
