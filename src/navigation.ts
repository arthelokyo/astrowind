import { getPermalink, getAsset } from './utils/permalinks';

// Barra secundaria debajo del navbar principal
export const secondaryNavData = {
  leftLinks: [
    { text: 'Alumni', href: getPermalink('/alumni') },
    { text: 'Títulos', href: getPermalink('/titulos') },
    { text: 'Promotores', href: getPermalink('/promotores') },
    { text: 'FAQs', href: getPermalink('/faqs') },
  ],
};

export const headerData = {
  links: [
    {
      text: 'El Instituto',
      links: [
        {
          text: 'Conócenos',
          href: getPermalink('/conocenos'),
        },
        {
          text: 'Nuestro Director',
          href: getPermalink('/director'),
        },
        {
          text: 'Consejo Académico Internacional',
          href: getPermalink('/consejo-academico-internacional'),
        },
        {
          text: 'Comité de Dirección',
          href: getPermalink('/comite-direccion'),
        },
        {
          text: 'Profesorado e Investigación',
          href: getPermalink('/profesorado-investigacion'),
        },
        {
          text: 'Acreditación y Reconocimiento',
          href: getPermalink('/acreditacion-reconocimiento'),
        },
        // {
        //   text: 'Empleo en el Instituto',
        //   href: getPermalink('/empleo-instituto'),
        // },
        {
          text: 'Fondo Verde y su acción social',
          href: getPermalink('/fondo-verde-accion-social'),
        },
      ]
    },
    {
      text: 'PostDoc',
      href: getPermalink('/postdoctorado'),
      links: [
        {
          text: 'Posdoctorado en Gestión y Gobernanza de Proyectos Ambientales',
          href: getPermalink('/postdoctorado/gestion-gobernanza-proyectos-ambientales'),
        },
        {
          text: 'Postdoctorado en Ciencias Aplicadas al Medio Ambiente',
          href: getPermalink('/postdoctorado/ciencias-aplicadas-medio-ambiente'),
        },
        {
          text: 'Postdoctorado en Sistemas de Gestión Medioambiental',
          href: getPermalink('/postdoctorado/sistemas-gestion-medioambiental'),
        },
        {
          text: 'Postdoctorado en Peritaje Judicial en materia de delitos ambientales',
          href: getPermalink('/postdoctorado/peritaje-judicial-delitos-ambientales'),
        },
        {
          text: 'Postdoctorado en Sistemas de Gestión de la Seguridad y Salud en el trabajo',
          href: getPermalink('/postdoctorado/sistemas-gestion-seguridad-salud-trabajo'),
        },
        {
          text: 'Postdoctorado en Ciencias de la Sostenibilidad',
          href: getPermalink('/postdoctorado/ciencias-sostenibilidad'),
        },
        {
          text: 'Postdoctorado en Ciencias de la Educación Ambiental',
          href: getPermalink('/postdoctorado/ciencias-educacion-ambiental'),
        },
      ],
    },
    {
      text: 'PhD',
      href: getPermalink('/phd'),
      links: [
        {
          text: 'Doctorado en Sostenibilidad',
          href: getPermalink('/phd/sostenibilidad'),
        },
        {
          text: 'Doctorado en Conservación y Restauración del Medio Natural',
          href: getPermalink('/phd/conservacion-restauracion-medio-natural'),
        },
        {
          text: 'Doctorado en Proyectos: Línea de Investigación en Medio Ambiente',
          href: getPermalink('/phd/proyectos-investigacion-medio-ambiente'),
        },
        {
          text: 'Doctorado en Administración de Negocios Sostenibles',
          href: getPermalink('/phd/administracion-negocios-sostenibles'),
        },
        {
          text: 'Doctorado en Educación Ambiental',
          href: getPermalink('/phd/educacion-ambiental'),
        },
        {
          text: 'Doctorado en Paisaje y Ambiente',
          href: getPermalink('/phd/paisaje-ambiente'),
        },
        {
          text: 'Doctorado en Ecoturismo y Turismo Sostenible',
          href: getPermalink('/phd/ecoturismo-turismo-sostenible'),
        },
        {
          text: 'Doctorado en Urbanismo y Arquitectura Sostenible',
          href: getPermalink('/phd/urbanismo-arquitectura-sostenible'),
        },
        {
          text: 'Doctorado en Energías Renovables',
          href: getPermalink('/phd/energias-renovables'),
        },
      ],
    },
    {
      text: 'Maestrías',
      href: getPermalink('/maestria'),
      links: [
        {
          text: 'Maestría en Medio Ambiente y Responsabilidad Social',
          href: getPermalink('/maestria/medio-ambiente-responsabilidad-social'),
        },
        {
          text: 'Maestría en Paisaje, Patrimonio y Estudios Territoriales',
          href: getPermalink('/maestria/paisaje-patrimonio-estudios-territoriales'),
        },
        {
          text: 'Maestría en Rehabilitación Ambiental Terrestre',
          href: getPermalink('/maestria/rehabilitacion-ambiental-terrestre'),
        },
        {
          text: 'Maestría en Ciencias de la Sostenibilidad',
          href: getPermalink('/maestria/ciencias-sostenibilidad'),
        },
        {
          text: 'Maestría en Hábitat, Urbanismo y Edificación Sostenible',
          href: getPermalink('/maestria/habitat-urbanismo-edificacion-sostenible'),
        },
        {
          text: 'Maestría en Sostenibilidad Turística y Ecoturismo',
          href: getPermalink('/maestria/sostenibilidad-turistica-ecoturismo'),
        },
        {
          text: 'Maestría en Gestión de Proyectos Ambientales',
          href: getPermalink('/maestria/gestion-proyectos-ambientales'),
        },
        {
          text: 'Maestría en Eficiencia Energética, Cambio Climático y Sostenibilidad',
          href: getPermalink('/maestria/eficiencia-energetica-cambio-climatico-sostenibilidad'),
        },
      ],
    },
    {
      text: 'Diplomados',
      href: getPermalink('/diplomados'),
    },
    {
      text: 'Proyectos',
      href: getPermalink('/proyectos'),
      links: [
        {
          text: 'Proyectos en América',
          href: getPermalink('/proyectos/america'),
        },
        {
          text: 'Proyectos en Asia',
          href: getPermalink('/proyectos/asia'),
        },
        {
          text: 'Proyectos en Europa',
          href: getPermalink('/proyectos/europa'),
        },
      ],
    },
    // {
    //   text: 'Widgets',
    //   href: '#',
    // },
  ],
  actions: [
    {
      text: 'Descargar',
      href: 'https://github.com/arthelokyo/astrowind',
      target: '_blank',
      variant: 'primary' as const,
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/fondo-verde-internacional' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/fondoverde' },
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://twitter.com/fondoverde' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/fondo.verde/' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
  ©2003 <span class="text-gray-500">FONDOVERDE</span>. Todos los derechos Reservados.
  `,
};
