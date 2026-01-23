import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Accueil',
      href: getPermalink('/'),
    },
    {
      text: 'Guide',
      href: getPermalink('/guide'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'Produits',
      href: getPermalink('/produits'),
    },
  ],
  actions: [{ text: 'Recevoir le guide', href: '/#newsletter' }],
};

// Footer simplifié - le contenu est maintenant directement dans Footer.astro
export const footerData = {
  links: [],
  secondaryLinks: [],
  socialLinks: [],
  footNote: '',
};
