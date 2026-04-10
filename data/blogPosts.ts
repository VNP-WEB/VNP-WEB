export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Les tendances du web design en 2026",
    excerpt: "Découvrez les dernières tendances qui vont façonner le design web cette année : animations fluides, minimalisme et intelligence artificielle.",
    content: `
      <p>Le monde du web design évolue constamment, et 2026 ne fait pas exception. Voici les tendances majeures qui redéfinissent la façon dont nous concevons les sites web.</p>
      <h2>1. Animations fluides et micro-interactions</h2>
      <p>Les animations ne sont plus un simple ajout esthétique. Elles guident l'utilisateur, améliorent l'expérience et rendent les interfaces plus intuitives.</p>
    `,
    author: "Vincent Dupont",
    date: "15 Mars 2026",
    category: "Design",
    image: "https://images.unsplash.com/photo-1637502875124-eb4a9843a2fa?w=800&q=80",
    readTime: "5 min",
  },
  {
    id: "2",
    title: "Pourquoi le SEO est crucial pour votre entreprise",
    excerpt: "Le référencement naturel n'est pas une option. Découvrez comment le SEO peut transformer votre visibilité en ligne et attirer de nouveaux clients.",
    content: `
      <p>Dans un monde où 93% des expériences en ligne commencent par un moteur de recherche, le SEO n'est plus optionnel. C'est une nécessité absolue pour toute entreprise qui souhaite être visible.</p>
      <h2>Qu'est-ce que le SEO ?</h2>
      <p>Le SEO (Search Engine Optimization) est l'ensemble des techniques visant à optimiser la visibilité d'un site web dans les résultats des moteurs de recherche comme Google.</p>
    `,
    author: "Sophie Martin",
    date: "12 Mars 2026",
    category: "SEO",
    image: "https://images.unsplash.com/photo-1691073112675-9685bc6779bf?w=800&q=80",
    readTime: "7 min",
  },
  {
    id: "3",
    title: "React vs Vue : Quel framework choisir en 2026 ?",
    excerpt: "Une comparaison détaillée des deux frameworks JavaScript les plus populaires pour vous aider à faire le bon choix pour votre projet.",
    content: `
      <p>Le choix d'un framework JavaScript est crucial pour la réussite de votre projet web. React et Vue sont les deux options les plus populaires. Analysons leurs forces et faiblesses.</p>
      <h2>React : Le géant de Facebook</h2>
      <p>React, développé par Meta (Facebook), domine le marché avec une communauté massive et un écosystème riche.</p>
    `,
    author: "Thomas Leblanc",
    date: "8 Mars 2026",
    category: "Développement",
    image: "https://images.unsplash.com/photo-1759884247173-3db27f7fafef?w=800&q=80",
    readTime: "6 min",
  },
  {
    id: "4",
    title: "E-commerce : Comment augmenter vos ventes en ligne",
    excerpt: "Des stratégies éprouvées pour optimiser votre boutique en ligne et booster vos conversions.",
    content: `
      <p>Avoir une boutique en ligne ne suffit pas. Pour réussir dans l'e-commerce, vous devez optimiser chaque aspect de l'expérience d'achat.</p>
      <h2>1. Optimisez vos fiches produits</h2>
      <p>Des photos de qualité professionnelle, des descriptions détaillées et des avis clients sont essentiels pour convaincre vos visiteurs.</p>
    `,
    author: "Marie Rousseau",
    date: "5 Mars 2026",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1694599048261-a1de00f0117e?w=800&q=80",
    readTime: "8 min",
  },
  {
    id: "5",
    title: "Sécurité web : Protégez votre site contre les cyberattaques",
    excerpt: "Les meilleures pratiques pour sécuriser votre site web et protéger vos données ainsi que celles de vos clients.",
    content: `
      <p>La sécurité web n'est pas un luxe, c'est une nécessité. Avec l'augmentation des cyberattaques, protéger votre site est plus important que jamais.</p>
      <h2>Les menaces principales</h2>
      <p>Les attaquants insèrent du code malveillant dans vos formulaires pour accéder à votre base de données.</p>
    `,
    author: "Alexandre Durand",
    date: "1 Mars 2026",
    category: "Sécurité",
    image: "https://images.unsplash.com/photo-1666698809123-44e998e93f23?w=800&q=80",
    readTime: "9 min",
  },
  {
    id: "6",
    title: "Performance web : Accélérez votre site",
    excerpt: "Chaque seconde compte. Découvrez comment optimiser la vitesse de votre site pour améliorer l'expérience utilisateur.",
    content: `
      <p>La vitesse de chargement de votre site a un impact direct sur vos conversions. Une étude montre qu'un délai d'une seconde réduit les conversions de 7%.</p>
      <h2>Techniques d'optimisation</h2>
      <p>Les images représentent souvent 50% du poids d'une page. Utilisez des formats modernes (WebP, AVIF) et du lazy loading.</p>
    `,
    author: "Lucas Bernard",
    date: "26 Février 2026",
    category: "Performance",
    image: "https://images.unsplash.com/photo-1769839271827-e7e287319dd4?w=800&q=80",
    readTime: "7 min",
  }
];