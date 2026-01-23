import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Lösung',
      href: getPermalink('/#loesung'),
    },
    {
      text: 'Ergebnisse',
      href: getPermalink('/#ergebnisse'),
    },
    {
      text: 'Prototyp',
      href: getPermalink('/#prototyp'),
    },
    {
      text: 'Für wen',
      href: getPermalink('/#fuer-wen'),
    },
    {
      text: 'Ablauf',
      href: getPermalink('/#ablauf'),
    },
    {
      text: 'Pakete',
      href: getPermalink('/#pakete'),
    },
    {
      text: 'Demo',
      href: getPermalink('/#demo'),
    },
    {
      text: 'FAQ',
      href: getPermalink('/#faq'),
    },
    {
      text: 'Kontakt',
      href: getPermalink('/#kontakt'),
    },
  ],
  actions: [{ text: 'Prototyp anfragen', href: getPermalink('/#kontakt'), variant: 'primary' }],
};

export const footerData = {
  links: [
    {
      title: 'Navigation',
      links: [
        { text: 'Lösung', href: getPermalink('/#loesung') },
        { text: 'Ergebnisse', href: getPermalink('/#ergebnisse') },
        { text: 'Prototyp', href: getPermalink('/#prototyp') },
        { text: 'Für wen', href: getPermalink('/#fuer-wen') },
        { text: 'Ablauf', href: getPermalink('/#ablauf') },
        { text: 'Pakete', href: getPermalink('/#pakete') },
        { text: 'Demo', href: getPermalink('/#demo') },
        { text: 'FAQ', href: getPermalink('/#faq') },
        { text: 'Kontakt', href: getPermalink('/#kontakt') },
      ],
    },
    {
      title: 'Leistungen',
      links: [
        { text: 'Starter (Relaunch)', href: getPermalink('/#pakete') },
        { text: 'Pro (Relaunch + Lead Engine)', href: getPermalink('/#pakete') },
        { text: 'Premium (System + Skalierung)', href: getPermalink('/#pakete') },
      ],
    },
    {
      title: 'Kontakt',
      links: [
        { text: 'kontakt@topmaklerwebsites.de', href: 'mailto:kontakt@topmaklerwebsites.de' },
        { text: '+49 000 000000', href: 'tel:+49000000000' },
      ],
    },
  ],
  secondaryLinks: [],
  description: 'Moderne, mobile-first Makler-Websites für Agrar/Forst/Landwirtschaft – mit Prototyp in 7 Tagen.',
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },
    { ariaLabel: 'Website', icon: 'tabler:world', href: '#' },
  ],
  footNote: '© 2026 TopMaklerWebsites. Alle Rechte vorbehalten.',
};
