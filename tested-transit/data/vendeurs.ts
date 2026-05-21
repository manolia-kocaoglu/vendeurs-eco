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
      prenom: "Julien !!",
      nom: "HACQUARD",
      titre: "Chef des ventes",
      photo: "/images/julien.jpeg",
      anciennete: 18,
      depuis: 2008,
      description:
        `Julien est un concepteur vendeur confirmé ayant une écoute active et une maîtrise de son métier.
Grâce à son expérience, il saura trouver l’implantation correspondante à vos attentes. 
Julien est un « communiquant » et aime allier efficacité et convivialité.`,
      specialites: ["Jour de repos le mercredi"],
      telephone: "+33 3 39 53 06 60",
      email: "j.hacquard@ecocuisine-belfort.fr",
      zone: "Andelnans",
      projets: [
        {
          titre: "",
          description: "",
          image: "/cuisines/julien/julien1.PNG",
          annee: "",
        },
        {
          titre: "",
          description: "",
          image: "/cuisines/julien/julien2.PNG",
          annee: "",
        },
        {
          titre: "",
          description: "",
          image: "/cuisines/julien/julien3.PNG",
          annee: "",
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
      chiffres: [
        { label: "Clients satisfaits", valeur: "98%" },
        { label: "Note Google", valeur: "4.9★" },
        { label: "d'ancienneté", valeur: "18 ans" },
      ],
    },
    {
      slug: "aoued-baghdadia",
      prenom: "Aoued",
      nom: "BAGHDADIA",
      titre: "Concepteur vendeur",
      photo: "/images/aoued.png",
      anciennete: 10,
      depuis: 2016,
      description:
        `Aoued aime faire plaisir à ses clients en faisant preuve d’écoute, il met tout en œuvre pour répondre à vos attentes de la meilleure des façons.
  C’est un « bon vivant » qui apprécie de travailler dans une ambiance conviviale.`,
      specialites: ["Jour de repos le lundi"],
      telephone: "+33 3 39 53 06 60",
      email: "a.baghdadia@ecocuisine-belfort.fr",
      zone: "Andelnans",
      projets: [
        {
          titre: "",
          description: "",
          image: "/cuisines/aoued/aoued2.jpg",
          annee: "",
        },
        {
          titre: "",
          description: "",
          image: "/cuisines/aoued/aoued3.jpg",
          annee: "",
        },
        {
          titre: "",
          description: "",
          image: "/cuisines/aoued/aoued4.jpg",
          annee: "",
        },
        {
          titre: "",
          description: "",
          image: "/cuisines/aoued/aoued5.jpg",
          annee: "",
        },
      ],
      avis: [
        
        {
          auteur: "Metou Vinez",
          note: 5,
          texte: "Bonjour Mr Baghdadia , On vient de rentrer de l’Afrique, on découvre notre cuisine aujourd’hui c’est magnifique, on est vraiment content et merci pour cette belle expérience poseur et métreur les meilleurs, je leur tire mon chapeau excellents👌🏼👌🏼👌🏼",
          date: "",
        },
        {
          auteur: "Mine Coree",
          note: 5,
          texte: "Je suis absolument ravie de mon expérience avec Monsieur BAGHDADIA. Du début à la fin, tout a été parfaitement maîtrisé. Monsieur BAGHDADIA ( le cuisiniste ) a fait preuve d’un grand professionnalisme, d’une excellente écoute et de conseils très pertinents, en tenant compte à la fois de mes envies et des contraintes techniques. Il m’a aidée tout au long en étant toujours très réactif. ",
          date: "",
        },
        {
          auteur: "Vincent Mignerey",
          note: 5,
          texte: "Tout s'est bien passé, de l'accueil, l'écoute du projet, la prise en compte des demandes, le devis, la pose et tous les éléments qui peuvent faire que nous ne pouvons qu'être satisfait du service proposé! Merci",
          date: "",
        },
      ],
      chiffres: [
        { label: "Clients satisfaits", valeur: "98%" },
        { label: "Note Google", valeur: "4.9★" },
        { label: "d'ancienneté", valeur: "10 ans" },
      ],
    },
    {
      slug: "emilie-mougin",
      prenom: "Emilie",
      nom: "MOUGIN",
      titre: "Conceptrice vendeuse",
      photo: "/images/emilie.jpg",
      anciennete: 10,
      depuis: 2016,
      description:
        `Emilie aime créer une relation privilégiée avec ses clients en faisant preuve d’empathie et d’écoute.
Du fait de sa personnalité naturelle, elle attache beaucoup d’importance à la convivialité en créant des moments agréables.
Emilie prend plaisir à mettre en valeur chaque projet comme si c&#39;était le sien.`,
      specialites: ["Jour de repos le jeudi"],
      telephone: "+33 3 39 53 06 60",
      email: "e.mougin@ecocuisine-belfort.fr",
      zone: "Andelnans",
      projets: [
        {
          titre: "",
          description: "",
          image: "/cuisines/emilie/emilie1.jpg",
          annee: "",
        },
        {
          titre: "",
          description: "",
          image: "/cuisines/emilie/emilie4.jpg",
          annee: "",
        },
        {
          titre: "",
          description: "",
          image: "/cuisines/emilie/emilie3.jpg",
          annee: "",
        },
        {
          titre: "",
          description: "",
          image: "/cuisines/emilie/emilie2.jpg",
          annee: "",
        },
        {
          titre: "",
          description: "",
          image: "/cuisines/emilie/emilie5.jpg",
          annee: "",
        },
      ],
      avis: [
        {
          auteur: "Pauline Petetin",
          note: 5,
          texte: `Nous recommandons cette enseigne, et tenons à souligner le professionnalisme, l’investissement et la disponibilité d’Emilie MOUGIN. Elle nous a accompagné des le départ, en se déplaçant à la maison pour prendre des mesures et nous proposer un plan adapté à nos demandes, que cela soit sur la teinte, les matériaux, la disposition ect. Tout s’est déroulé parfaitement de la conception à la pose, dont la rapidité et le professionnalisme du cuisiniste est également a souligner.
Il est appréciable de confier ce projet à une personne aussi investie que l’est Émilie.`,
          date: "",
        },
        {
          auteur: "Alexis Vion",
          note: 5,
          texte: "Super expérience avec Ecocuisine tout au long du projet. Emilie a su répondre à nos attentes que ce soit en terme de fonctionnalités et d’originalité de la cuisine mais également au niveau du budget. Les délais ont été respectés et la pose s’est très bien déroulée avec 2 poseurs au top, Christopher et Johnathan. Merci à toute l’équipe. 👍",
          date: "",
        },
        {
          auteur: "Jéross !",
          note: 5,
          texte: `Un grand merci à Émilie pour son professionnalisme et sa créativité ! Elle a su parfaitement comprendre nos envies et nos besoins pour concevoir une cuisine à la fois pratique et esthétique. Toujours à l’écoute, réactive et pleine de bonnes idées, elle a rendu ce projet très agréable du début à la fin.
Nous sommes ravis du résultat ! Merci encore Émilie ! 👏
Et Vraiment un grand coup de cœur pour Christopher et John ! Deux personnes super gentilles, souriantes et très pros. La pose est impeccable, ils ont fait un travail magnifique. Merci à vous deux, vous êtes au top ! 🙌😊
Je recommande les yeux fermés !!!`,
          date: "",
        },
      ],
      chiffres: [
        { label: "Clients satisfaits", valeur: "98%" },
        { label: "Note Google", valeur: "4.9★" },
        { label: "d'ancienneté", valeur: "10 ans" },
      ],
    },
    {
      slug: "maxime-amstutz",
      prenom: "Maxime",
      nom: "AMSTUTZ",
      titre: "Concepteur vendeur",
      photo: "/images/maxime.jpg",
      anciennete: 7,
      depuis: 2019,
      description:
        `Maxime est toujours à l’écoute de ses clients, à un contact agréable, fait preuve de patience et de calme en toutes circonstances ! 
Il incarne la « force tranquille ».`,
      specialites: ["Jour de repos le lundi"],
      telephone: "+33 3 81 31 10 00",
      email: "m.amstutz@ecocuisine-montbeliard.fr",
      zone: "Taillecourt",
      projets: [
        {
          titre: "",
          description: "",
          image: "/cuisines/maxime/maxime5.jpeg",
          annee: "",
        },
        {
          titre: "",
          description: "",
          image: "/cuisines/maxime/maxime2.jpeg",
          annee: "",
        },
        {
          titre: "",
          description: "",
          image: "/cuisines/maxime/maxime4.jpeg",
          annee: "",
        },
        {
          titre: "",
          description: "",
          image: "/cuisines/maxime/maxime3.jpeg",
          annee: "",
        },
        {
          titre: "",
          description: "",
          image: "/cuisines/maxime/maxime1.jpeg",
          annee: "",
        },
      ],
      avis: [
        {
          auteur: "Claude Chavanne",
          note: 5,
          texte: `Changement de mon plan de travail existant.
Très bon travail par l'équipe de pose. Accueil, vente et très bon suivi de notre vendeur Maxime.
`,
          date: "",
        },
        {
          auteur: "Diego Titi",
          note: 5,
          texte: "Commerciale, métreur et poseurs au top. Poses identique au plan un grand merci pour notre cuisine installée en temps et en heure. Bravo Ecocuisine Taillecourt tout particulièrement Maxime",
          date: "",
        },
        {
          auteur: "Marie-Laure Samyn",
          note: 5,
          texte: "Contente d’avoir commandé ma cuisine chez eux. Le commercial très professionnel et très sympathique. L’équipe de poseurs est très professionnel aussi et très minutieux. Travail très propre. Je recommande",
          date: "",
        },
      ],
      chiffres: [
        { label: "Clients satisfaits", valeur: "98%" },
        { label: "Note Google", valeur: "4.9★" },
        { label: "d'ancienneté", valeur: "8 ans" },
      ],
    },
    {
      slug: "frederic-guedat",
      prenom: "Frédéric",
      nom: "GUEDAT",
      titre: "Concepteur vendeur",
      photo: "/images/fred.png",
      anciennete: 20,
      depuis: 2006,
      description:
        `Frédéric est un concepteur vendeur consciencieux et méthodique.
Il est organisé et a à cœur que tout soit bien réalisé et que vous n’ayez aucunes mauvaises surprises.
Du fait de son expérience et son aisance avec le logiciel de dessin, il vous proposera toujours la réalisation du projet face à vous et ce au 1 er rendez-vous !`,
      specialites: ["Jour de repos le lundi"],
      telephone: "+33 3 81 31 10 00",
      email: "f.guedat@ecocuisine-montbeliard.fr",
      zone: "Taillecourt",
      projets: [
        {
          titre: "",
          description: "",
          image: "/cuisines/fred/fred3.jpg",
          annee: "",
        },
        {
          titre: "",
          description: "",
          image: "/cuisines/fred/fred2.jpg",
          annee: "",
        },
        {
          titre: "",
          description: "",
          image: "/cuisines/fred/fred1.jpg",
          annee: "",
        },
      ],
      avis: [
        {
          auteur: "Huot Raphaël",
          note: 5,
          texte: `Frederic a su mettre en forme notre projet de cuisine. Le rendu final est conforme à la réalisation 3D et à la cuisine que nous voulions. Le travail du poseur est impeccable. Le délai de livraison et de montage ont été respectés. Les imprévus (non imputable à eco cuisine) ont été gérés comme il se doit par le responsable d’agence et Frederic.
C’est donc en toute confiance que je vouxs recommande Eco cuisine exincourt.`,
          date: "",
        },
        {
          auteur: "Angélique Simon",
          note: 5,
          texte: "Vendeur, métreur et poseur à l’écoute et de bons conseils. Plusieurs changements dans la conception de la cuisine, Frédéric a été très réactif. Le métreur nous a proposé des modifications judicieuses et le monteur a travaillé rapidement, soigneusement et discrètement. Nous recommandons Ecocuisine Taillecourt. toute l’équipe est très professionnelle et les cuisines de bonnes qualités.",
          date: "",
        },
        {
          auteur: "Corentin",
          note: 5,
          texte: `Nous avons eu Frédéric, il a su écouter nos besoin et nous conseiller, un travail de qualité et remarquable, je ne peut que recommandé!
Très satisfaits de notre nouvelle cuisine ! La pose a été faite avec beaucoup de soin par Aurélien, un travail impeccable. La conception réalisée par Frédéric correspond parfaitement à nos attentes : pratique, esthétique et exactement comme imaginée. Eco Cuisine offre vraiment un service de qualité. Nous recommandons vivement !`,
          date: "",
        },
      ],
      chiffres: [
        { label: "Clients satisfaits", valeur: "98%" },
        { label: "Note Google", valeur: "4.9★" },
        { label: "d'ancienneté", valeur: "20 ans" },
      ],
    },
    {
      slug: "yohann-thiebaut",
      prenom: "Yohann",
      nom: "THIEBAUT",
      titre: "Concepteur vendeur",
      photo: "/images/yohann.png",
      anciennete: 20,
      depuis: 2006,
      description:
        `Yohann est un concepteur vendeur impliqué dans son travail.
Il aime créer une relation privilégiée avec ses clients en faisant preuve d’empathie et d’écoute.
Son expérience lui permet d’être réactif et saura vous proposer un projet complet, de qualité, le jour même.`,
      specialites: ["Jour de repos le mardi"],
      telephone: "+33 3 81 31 10 00",
      email: "y.thiebaut@ecocuisine-montbeliard.fr",
      zone: "Taillecourt",
      projets: [
        {
          titre: "",
          description: "",
          image: "/cuisines/yohann/yohann1.jpg",
          annee: "",
        },
        {
          titre: "",
          description: "",
          image: "/cuisines/yohann/yohann2.jpg",
          annee: "",
        },
        {
          titre: "",
          description: "",
          image: "/cuisines/yohann/yohann3.jpg",
          annee: "",
        },
      ],
      avis: [
        {
          auteur: "Nicolas",
          note: 5,
          texte: `Nous remercions Yohann THIEBAUD pour son accueil chaleureux mais également pour le temps qui nous a accorder afin de réaliser notre projet cuisine.
Nos souhaits et nos attentes ont été respecté. Un grand merci également au poseur pour son travail de qualité.
Nous sommes très contents du résultat final.
Nous vous recommandons vivement leurs services.`,
          date: "",
        },
        {
          auteur: "Samuela Lisciani",
          note: 5,
          texte: "Je suis plus que satisfaite de la cuisine choisie chez Ecocuisine. J'ai pu tout choisi, plan de travail, meubles, couleur, poignées, électroménager. Yohann est un vendeur aux petits soins pour ses clients. On a pu adapter la hauteur du plan de travail à ma taille, il m'a aiguillée pour le choix du carrelage. C'est un conseiller au top et à l'écoute, je vous le recommande vivement. La cuisine est de haute qualité. Vous pouvez y aller les yeux fetmés",
          date: "",
        },
        {
          auteur: "Lydie CURTIT",
          note: 5,
          texte: `Je recommande ce magasin, ma cuisine est superbe, le montage a été réalisé en un temps record. Une attention particulière à Yohann, qui a été à l'écoute de mes attentes, et m'a bien conseillé.`,
          date: "",
        },
      ],
      chiffres: [
        { label: "Clients satisfaits", valeur: "98%" },
        { label: "Note Google", valeur: "4.9★" },
        { label: "d'ancienneté", valeur: "20 ans" },
      ],
    },

  ];
  
  export function getVendeurBySlug(slug: string): Vendeur | undefined {
    return vendeurs.find((v) => v.slug === slug);
  }
  