export interface Avis {
    auteur: string;
    note: number;
    texte: string;
    date: string;
  }
  
  export interface Projet {
    titre: string;
    description: string;
    image: string;
    annee: number;
  }
  
  export interface Vendeur {
    slug: string;
    prenom: string;
    nom: string;
    titre: string;
    photo: string;
    anciennete: number; // en années
    depuis: number; // année de début
    description: string;
    specialites: string[];
    telephone: string;
    email: string;
    zone: string;
    projets: Projet[];
    avis: Avis[];
    certifications: string[];
    chiffres: { label: string; valeur: string }[];
  }
  
  export const vendeurs: Vendeur[] = [
    {
      slug: "julien-hacquard",
      prenom: "Julien",
      nom: "HACQUARD",
      titre: "Chef des ventes",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
      anciennete: 7,
      depuis: 2019,
      description:
        "Passionné par l'aménagement intérieur depuis plus de 7 ans, Julien accompagne chaque client avec une attention particulière aux détails et une écoute totale. Il transforme vos envies en espaces fonctionnels et esthétiques, en alliant modernité et chaleur humaine. Son approche ? Comprendre votre mode de vie avant de vous proposer la cuisine de vos rêves.",
      specialites: ["Cuisine ouverte", "Cuisines sur-mesure", "Petits espaces", "Rénovation de cuisines anciennes"],
      telephone: "+33 3 39 53 06 60",
      email: "j.hacquard@ecocuisine-belfort.fr",
      zone: "Andelnans",
      projets: [
        {
          titre: "Cuisine ouverte en chêne massif",
          description: "Rénovation complète d'une cuisine de 22m² avec îlot central et verrière.",
          image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
          annee: 2024,
        },
        {
          titre: "Appartement haussmannien",
          description: "Réinterprétation moderne d'une cuisine classique avec moulures et marbre blanc.",
          image: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80",
          annee: 2023,
        },
        {
          titre: "Maison contemporaine Plouzané",
          description: "Cuisine minimaliste sur-mesure avec rangements optimisés du sol au plafond.",
          image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&q=80",
          annee: 2023,
        },
      ],
      avis: [
        {
          auteur: "Hakiki Kimou",
          note: 5,
          texte: `Une première visite pour moi dans ce magasin, un accueil chaleureux de l'équipe, j'ai été accueillie par le responsable JULIEN qui a été à l'écoute, disponible et bienveillant. Il fut de bon conseil.
Un grand merci pour les techniciens Bruno et Christopher pour leur professionnalisme, un travail soigné, leur bonne humeur et leur gentillesse. Ils sont aussi de bon conseil.
Merci à Eco cuisine d'Andelnans.`,
          date: "",
        },
        {
          auteur: "Berthon Jm",
          note: 5,
          texte: "Très bonne écoute de Julien, il sait proposer, trouver des solutions sans jamais dépasser les budgets impartis. Un vrai pro qui connait le monde de la cuisine. Derrière, une structure réactive, des poseurs de qualité donc bonne voir très bonne prestation dans son ensemble. Nous sommes heureux du résultat équivalent aux vues 3D transmises. Au plaisir de travailler sur d'autres projets.",
          date: "",
        },
        {
          auteur: "Ed'",
          note: 5,
          texte: `Très bon cuisiniste. Julien, le commercial est très sympathique. De la conception à la livraison, le suivi est très bon. A l'écoute de la moindre des questions ou demande. Très bon travail des poseurs. La pose est soignée. Bruno et Christopher font du bon travail et sont bien sympathiques également. Bonne expérience chez Ecocuisine Andelnans.`,
          date: "",
        },
      ],
      certifications: ["Qualibat RGE", "Cuisiniste Expert Ecocuisine", "Formation Blum Legrabox"],
      chiffres: [
        { label: "Projets réalisés", valeur: "200+" },
        { label: "Clients satisfaits", valeur: "98%" },
        { label: "Note Google", valeur: "4.9★" },
        { label: "Années d'expérience", valeur: "7 ans" },
      ],
    },
    {
      slug: "aoued-baghdadia",
      prenom: "Thomas",
      nom: "Bernard",
      titre: "Expert cuisine & aménagement intérieur",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
      anciennete: 12,
      depuis: 2012,
      description:
        "Menuisier de formation, Thomas a rejoint Ecocuisine il y a 12 ans pour mettre son savoir-faire artisanal au service de projets modernes. Sa connaissance approfondie des matériaux lui permet de conseiller ses clients avec précision et honnêteté. Il est particulièrement reconnu pour ses réalisations dans les maisons contemporaines et les lofts.",
      specialites: ["Style industriel", "Bois & matières naturelles", "Grands espaces", "Rénovation"],
      telephone: "+33 6 98 76 54 32",
      email: "thomas.bernard@ecocuisine.fr",
      zone: "Brest & Presqu'île de Crozon",
      projets: [
        {
          titre: "Loft industriel Brest",
          description: "Cuisine-bar de 35m² avec comptoir en béton ciré et structure métallique.",
          image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80",
          annee: 2024,
        },
        {
          titre: "Villa vue mer",
          description: "Cuisine ouverte en bois de noyer avec vue panoramique sur la rade de Brest.",
          image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
          annee: 2024,
        },
        {
          titre: "Rénovation corps de ferme",
          description: "Intégration d'une cuisine rustique contemporaine dans une ancienne ferme bretonne.",
          image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80",
          annee: 2022,
        },
      ],
      avis: [
        {
          auteur: "Laurent B.",
          note: 5,
          texte: "Thomas connaît son métier sur le bout des doigts. Il nous a conseillés avec pertinence sur les matériaux et le résultat est absolument magnifique. Un vrai artisan.",
          date: "Avril 2024",
        },
        {
          auteur: "Isabelle G.",
          note: 5,
          texte: "Nous avons fait appel à Thomas pour une rénovation complète. Son professionnalisme et sa passion pour le bois se ressentent dans chaque détail. Bravo !",
          date: "Février 2024",
        },
        {
          auteur: "Marc T.",
          note: 4,
          texte: "Très bon suivi du projet du début à la fin. Thomas est quelqu'un de fiable et passionné. Je recommande sans hésitation.",
          date: "Décembre 2023",
        },
      ],
      certifications: ["Brevet Professionnel Menuisier", "Cuisiniste Expert Ecocuisine", "Certification Häfele"],
      chiffres: [
        { label: "Projets réalisés", valeur: "350+" },
        { label: "Clients satisfaits", valeur: "97%" },
        { label: "Note Google", valeur: "4.8★" },
        { label: "Années d'expérience", valeur: "12 ans" },
      ],
    },
  ];
  
  export function getVendeurBySlug(slug: string): Vendeur | undefined {
    return vendeurs.find((v) => v.slug === slug);
  }