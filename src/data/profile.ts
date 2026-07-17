/**
 * =============================================================================
 *  SOURCE DE VÉRITÉ DU CONTENU DU CV
 * =============================================================================
 *  Tout le texte affiché sur le site provient de ce fichier unique.
 *  Contenu basé sur le CV réel de Nasr Allah ABA-HADDOU.
 * =============================================================================
 */

export const identity = {
  firstName: 'Nasr Allah',
  lastName: 'ABA-HADDOU',
  role: 'Data Analyst',
  roleVariants: ['Data Analyst', 'Data Scientist en devenir', 'Futur Alternant'],
  tagline:
    "Je transforme des données brutes en décisions claires. Étudiant ingénieur en Data Science, à la recherche d'une alternance Data Analyst pour la rentrée 2026.",
  location: 'Mobilité nationale (France) & internationale',
  availability: 'Disponible — Alternance rentrée 2026',
  email: 'abahaddounasrallah@gmail.com',
  phone: '+212 6 43 32 37 97',
  linkedin: 'https://www.linkedin.com/in/nasr-allah-aba-haddou-234a013a7/',
  github: 'https://github.com/sirnasr0',
  resumeUrl: '/CV_Nasr_Allah_ABA-HADDOU.pdf',
}

export const stats = [
  { value: '4', label: 'Projets data de bout en bout' },
  { value: '19', label: 'ans' },
  { value: '3', label: 'Régions ciblées en France' },
  { value: '2026', label: 'Rentrée en alternance visée' },
]

export const about = {
  paragraphs: [
    "Passionné d'informatique depuis l'enfance, j'ai construit une base solide en algorithmique, développement logiciel et mathématiques appliquées avant de me spécialiser en Data Science.",
    "J'aime le travail précis : nettoyer un jeu de données hétérogène, écrire une requête lisible, construire un dashboard clair que personne n'a besoin de m'expliquer deux fois.",
    "Admis au cycle ingénieur du CNAM en apprentissage, je recherche une alternance Data Analyst en Occitanie, Auvergne-Rhône-Alpes ou Provence-Alpes-Côte d'Azur pour mettre en pratique mes compétences en Machine Learning et analyse de données au sein d'une équipe tech.",
  ],
  highlights: [
    { label: 'Formation', value: 'Cycle Ingénieur CNAM — En apprentissage (2026-2029)' },
    { label: 'Rythme', value: '2 semaines entreprise / 2 semaines école' },
    { label: 'Zone visée', value: 'Occitanie · Auvergne-Rhône-Alpes · PACA' },
    { label: 'Langues', value: 'Arabe (natif), Français (courant), Anglais (courant)' },
  ],
}

export type SkillCategory = {
  id: string
  label: string
  description: string
  skills: { name: string; level: number }[]
}

// Couleur d'accent par compétence, inspirée de l'identité visuelle de chaque
// outil/langage (quand elle existe). Sert à colorer la barre de progression
// dans la section Compétences. Valeur par défaut : vert du thème (emerald).
export const skillColors: Record<string, string> = {
  Python: '#FFD43B', // jaune python
  SQL: '#4479A1', // bleu SQL
  Java: '#ED8B00', // orange/rouge Java
  C: '#5C6BC0', // bleu C
  'Pandas / NumPy': '#4DABCF', // bleu pandas/numpy
  'Scikit-learn': '#F7931E', // orange scikit-learn
  'TensorFlow / Keras': '#FF6F00', // orange tensorflow
  'Matplotlib / Seaborn': '#11557C', // bleu matplotlib
  'Power BI (DAX)': '#F2C811', // jaune power bi
  'Streamlit / Plotly': '#FF4B4B', // rouge streamlit
  'Excel avancé': '#217346', // vert excel
  PostgreSQL: '#336791', // bleu postgresql
  'Git / GitHub Actions': '#F05032', // orange git
  'Pytest (tests unitaires)': '#0A9EDC', // bleu pytest
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'langages',
    label: 'Langages & Requêtes',
    description: 'Extraire, transformer et interroger la donnée.',
    skills: [
      { name: 'Python', level: 85 },
      { name: 'SQL', level: 78 },
      { name: 'Java', level: 72 },
      { name: 'C', level: 68 },
    ],
  },
  {
    id: 'data-science',
    label: 'Data Science & Machine Learning',
    description: 'Analyser, modéliser et prédire à partir des données.',
    skills: [
      { name: 'Pandas / NumPy', level: 85 },
      { name: 'Scikit-learn', level: 75 },
      { name: 'TensorFlow / Keras', level: 65 },
      { name: 'Matplotlib / Seaborn', level: 78 },
    ],
  },
  {
    id: 'visualisation',
    label: 'Visualisation & BI',
    description: 'Rendre la donnée lisible et actionnable.',
    skills: [
      { name: 'Power BI (DAX)', level: 82 },
      { name: 'Streamlit / Plotly', level: 80 },
      { name: 'Excel avancé', level: 85 },
      { name: 'PostgreSQL', level: 75 },
    ],
  },
  {
    id: 'soft',
    label: 'Outils & Méthodes',
    description: 'Ce qui fait la différence en entreprise.',
    skills: [
      { name: 'Git / GitHub Actions', level: 78 },
      { name: 'Pytest (tests unitaires)', level: 72 },
      { name: 'Rigueur méthodologique', level: 88 },
      { name: 'Autonomie', level: 85 },
    ],
  },
]

export type Experience = {
  id: string
  company: string
  role: string
  period: string
  location: string
  description: string
  achievements: string[]
  tags: string[]
}

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    company: 'Conservatoire National des Arts et Métiers (CNAM)',
    role: 'Cycle Ingénieur — Informatique & Data Science',
    period: '2026 — 2029',
    location: 'Chalon-sur-Saône',
    description:
      'Admis au cycle ingénieur en apprentissage (2 semaines entreprise / 2 semaines école), en recherche active de la structure qui accueillera cette alternance Data Analyst.',
    achievements: [
      'Approfondissement du Machine Learning et de l\u2019analyse de données appliquée',
      'Formation pensée pour une mise en pratique immédiate en entreprise',
      'Recherche active d\u2019une alternance en Occitanie, AURA ou PACA',
    ],
    tags: ['Data Science', 'Machine Learning', 'Alternance'],
  },
  {
    id: 'exp-2',
    company: 'École Nationale des Sciences Appliquées (ENSA)',
    role: 'Cycle Préparatoire Ingénieur',
    period: '2023 — 2026',
    location: 'Tanger',
    description:
      "Formation généraliste exigeante en mathématiques, informatique et sciences de l'ingénieur, base technique de mes projets data personnels.",
    achievements: [
      'Mathématiques : analyse, algèbre, probabilités & statistiques',
      'Informatique : algorithmique avancée, langage C, bases de données',
      'Sciences : mécanique, électronique numérique et analogique',
    ],
    tags: ['Algorithmique', 'Bases de données', 'Mathématiques'],
  },
]

export type Certification = {
  id: string
  name: string
  issuer: string
  date: string
  credentialUrl?: string
}

export const certifications: Certification[] = [
  {
    id: 'cert-1',
    name: '3ème Place — Concours Régional d\u2019Informatique (Langage C)',
    issuer: 'Concours régional',
    date: 'Février 2023',
  },
  {
    id: 'cert-2',
    name: 'Formation en Robotique',
    issuer: 'Creative Kids, Larache',
    date: '2017 — 2019',
  },
  {
    id: 'cert-3',
    name: 'Baccalauréat Sciences Mathématiques A — Mention Très Bien',
    issuer: 'Lycée, Larache',
    date: 'Juillet 2023',
  },
]

export type Project = {
  id: string
  title: string
  description: string
  problem: string
  approach: string
  result: string
  tags: string[]
  link?: string
  repo?: string
}

export const projects: Project[] = [
  {
    id: 'proj-1',
    title: 'Scouting Analysis — Pipeline Data & Dashboard Interactif',
    description:
      'Pipeline complet de collecte, nettoyage et visualisation de données de scouting sportif, avec dashboard interactif déployé en ligne.',
    problem:
      'Fusion de sources multiples avec champs texte hétérogènes : formats numériques mixtes, virgule décimale française, données structurées à extraire depuis du texte libre.',
    approach:
      'Pipeline Python/Pandas, exploration statistique, dashboard Streamlit (filtres dynamiques, KPIs, fiches radar chart, export CSV), fonctions de nettoyage testées avec Pytest et intégration continue GitHub Actions.',
    result:
      'Score composite (z-scores) pour l\u2019aide à la décision, identifiant automatiquement les profils sous-cotés.',
    tags: ['Python', 'Pandas', 'Streamlit', 'Pytest', 'GitHub Actions'],
    repo: 'https://github.com/sirnasr0/fm26-analytics',
  },
  {
    id: 'proj-2',
    title: 'TCL Lyon Transit Analytics — Pipeline & Dashboard Décisionnel',
    description:
      "Pipeline data et dashboard décisionnel construits à partir des données GTFS du réseau de transport de Lyon.",
    problem:
      "Anomalies d'horaires de nuit (ex : 24:07:00) et absence de vue exploitable pour le pilotage du réseau.",
    approach:
      'Intégration des données GTFS sur PostgreSQL, création de vues optimisées, nettoyage DAX pour normaliser les horaires, modélisation many-to-many avec filtrage croisé bidirectionnel.',
    result:
      'Dashboard interactif avec cartographie dynamique du réseau (Bing Maps), KPIs et courbe de trafic horaire.',
    tags: ['PostgreSQL', 'Power BI', 'DAX', 'Bing Maps'],
    repo: 'https://github.com/sirnasr0/lyon-transport-analytics',
  },
  {
    id: 'proj-3',
    title: 'Chess.com Analytics Dashboard',
    description:
      'Pipeline et dashboard Power BI construits à partir de parties extraites via l\u2019API Chess.com.',
    problem: 'Données JSON brutes (résultats, ouvertures, différentiel d\u2019Elo) non exploitables directement.',
    approach:
      "Extraction de ~1200 parties via l'API REST, nettoyage et export en dataset exploitable, dashboard Power BI en 3 pages.",
    result:
      "KPIs globaux, suivi de progression d'Elo filtrable, analyse des ouvertures et du taux de réussite.",
    tags: ['Python', 'API REST', 'Power BI', 'Power Query'],
    repo: 'https://github.com/sirnasr0/chess-analytics-dashboard',
  },
  {
    id: 'proj-4',
    title: 'Modèle de Classification d\u2019Images — Vision par Ordinateur',
    description:
      'Conception d\u2019un CNN sur CIFAR-10 avec comparaison d\u2019architectures.',
    problem: 'Classifier des images en 10 catégories avec une précision robuste.',
    approach:
      'Comparaison d\u2019architectures (VGG-like, ResNet simplifié), analyse des erreurs par matrice de confusion.',
    result: '85% de précision obtenue sur CIFAR-10.',
    tags: ['Python', 'TensorFlow', 'Keras', 'OpenCV'],
  },
]

export type TimelineItem = {
  id: string
  date: string
  title: string
  subtitle: string
  description: string
  type: 'formation' | 'experience' | 'certification'
}

export const timeline: TimelineItem[] = [
  {
    id: 'tl-1',
    date: 'Juillet 2023',
    title: 'Baccalauréat Sciences Mathématiques A — Mention Très Bien',
    subtitle: 'Lycée, Larache',
    description: 'Obtention du Baccalauréat avec mention Très Bien.',
    type: 'certification',
  },
  {
    id: 'tl-2',
    date: '2023 — 2026',
    title: 'Cycle Préparatoire Ingénieur',
    subtitle: 'ENSA — Tanger',
    description: 'Mathématiques, algorithmique avancée, langage C, bases de données.',
    type: 'formation',
  },
  {
    id: 'tl-3',
    date: 'Février 2023',
    title: '3ème place — Concours Régional d\u2019Informatique',
    subtitle: 'Langage C',
    description: 'Distinction obtenue lors d\u2019un concours régional d\u2019algorithmique.',
    type: 'certification',
  },
  {
    id: 'tl-4',
    date: '2024 — 2026',
    title: 'Projets data personnels de bout en bout',
    subtitle: 'Scouting Analysis, TCL Lyon, Chess.com, Vision par Ordinateur',
    description: 'Construction de pipelines data et dashboards interactifs en autonomie.',
    type: 'formation',
  },
  {
    id: 'tl-5',
    date: '2026',
    title: 'Admission — Cycle Ingénieur Data Science',
    subtitle: 'CNAM — Chalon-sur-Saône',
    description: 'Admission en apprentissage (2026-2029), recherche d\u2019alternance en cours.',
    type: 'formation',
  },
  {
    id: 'tl-6',
    date: '2026',
    title: 'Recherche d\u2019alternance Data Analyst',
    subtitle: 'Prochaine étape',
    description:
      "À la recherche d'une équipe data pour la rentrée 2026, en Occitanie, AURA ou PACA.",
    type: 'formation',
  },
]

export const navigation = [
  { id: 'hero', label: 'Accueil' },
  { id: 'about', label: 'À propos' },
  { id: 'skills', label: 'Compétences' },
  { id: 'experience', label: 'Formation' },
  { id: 'certifications', label: 'Distinctions' },
  { id: 'projects', label: 'Projets' },
  { id: 'timeline', label: 'Parcours' },
  { id: 'contact', label: 'Contact' },
]
