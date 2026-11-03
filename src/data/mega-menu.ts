import type { ImageMetadata } from 'astro';

import maestriaImage from '~/assets/images/fvi_maestrias_home.webp';
import phdImage from '~/assets/images/fvi_doctorados_home.webp';
import postdocImage from '~/assets/images/fvi_postdocs_home.webp';
import instituteImage from '~/assets/images/fvi-conocenos.webp';

export interface MegaContent {
  label: string;
  description: string;
  featureLabel: string;
  featureTitle: string;
  image: ImageMetadata;
}

export const megaContent: Record<string, MegaContent> = {
  'El Instituto': {
    label: 'El Instituto',
    description: 'Una comunidad académica que investiga, enseña y actúa frente a los desafíos ambientales.',
    featureLabel: 'Instituto',
    featureTitle: 'Conoce nuestra mirada sobre la sostenibilidad',
    image: instituteImage,
  },
  PostDoc: {
    label: 'PostDoc',
    description: 'Investigación avanzada para profesionales que convierten conocimiento en transformación.',
    featureLabel: 'Convocatoria 2026',
    featureTitle: 'Conoce nuestros Programas de Postdoctorado',
    image: postdocImage,
  },
  PhD: {
    label: 'PhD',
    description: 'Programas doctorales para quienes investigan el cambio y sus posibilidades.',
    featureLabel: 'Convocatoria 2026',
    featureTitle: 'Conoce nuestros Programas doctorales',
    image: phdImage,
  },
  Maestrías: {
    label: 'Maestrías',
    description: 'Formación de posgrado para transformar organizaciones y territorios.',
    featureLabel: 'Convocatoria 2026',
    featureTitle: 'Conoce nuestros Programas de Maestrías',
    image: maestriaImage,
  },
  Diplomados: {
    label: 'Diplomados',
    description: 'Formación especializada para ampliar tus conocimientos y fortalecer tu perfil profesional.',
    featureLabel: 'Formación especializada',
    featureTitle: 'Explora nuestros diplomados',
    image: maestriaImage,
  },
  Proyectos: {
    label: 'Proyectos',
    description: 'Iniciativas que convierten el conocimiento en soluciones sostenibles.',
    featureLabel: 'Impacto',
    featureTitle: 'Conoce los proyectos de Fondo Verde Institute',
    image: instituteImage,
  },
};

const descriptions: Record<string, string> = {
  Conócenos: 'Nuestra historia, propósito y comunidad.',
  'Nuestro Director': 'Liderazgo y visión institucional.',
  'Consejo Académico Internacional': 'Una red global de conocimiento.',
  'Comité de Dirección': 'Gobernanza para una acción rigurosa.',
  'Profesorado e Investigación': 'Personas e ideas que mueven el cambio.',
  'Acreditación y Reconocimiento': 'La confianza que respalda nuestro trabajo.',
  'Fondo Verde y su acción social': 'Conocimiento al servicio de la sociedad.',
  'Posdoctorado en Gestión y Gobernanza de Proyectos Ambientales':
    'Liderazgo estratégico para transformar proyectos ambientales.',
  'Postdoctorado en Ciencias Aplicadas al Medio Ambiente':
    'Investigación aplicada para resolver desafíos ambientales concretos.',
  'Postdoctorado en Sistemas de Gestión Medioambiental':
    'Diseño y mejora de sistemas para una gestión ambiental eficaz.',
  'Postdoctorado en Peritaje Judicial en materia de delitos ambientales':
    'Análisis especializado para la investigación de delitos ambientales.',
  'Postdoctorado en Sistemas de Gestión de la Seguridad y Salud en el trabajo':
    'Prevención y gestión integral de riesgos en entornos laborales.',
  'Postdoctorado en Ciencias de la Sostenibilidad': 'Investigación avanzada para impulsar soluciones sostenibles.',
  'Postdoctorado en Ciencias de la Educación Ambiental':
    'Innovación educativa para formar agentes de cambio ambiental.',
  'Doctorado en Sostenibilidad': 'Investigación doctoral sobre los grandes retos de la sostenibilidad.',
  'Doctorado en Conservación y Restauración del Medio Natural':
    'Ciencia y gestión para proteger y recuperar los ecosistemas.',
  'Doctorado en Proyectos: Línea de Investigación en Medio Ambiente':
    'Investigación rigurosa para diseñar soluciones ambientales de impacto.',
  'Doctorado en Administración de Negocios Sostenibles': 'Liderazgo empresarial orientado al desarrollo sostenible.',
  'Doctorado en Educación Ambiental': 'Investigación educativa para transformar la relación con el ambiente.',
  'Doctorado en Paisaje y Ambiente': 'Análisis del territorio para construir paisajes sostenibles.',
  'Doctorado en Ecoturismo y Turismo Sostenible':
    'Investigación para un turismo responsable y respetuoso del territorio.',
  'Doctorado en Urbanismo y Arquitectura Sostenible': 'Diseño de ciudades y espacios preparados para el futuro.',
  'Doctorado en Energías Renovables': 'Investigación para acelerar la transición hacia energías limpias.',
  'Maestría en Medio Ambiente y Responsabilidad Social':
    'Gestión ambiental y compromiso social para organizaciones responsables.',
  'Maestría en Paisaje, Patrimonio y Estudios Territoriales':
    'Comprensión del territorio, su patrimonio y sus transformaciones.',
  'Maestría en Rehabilitación Ambiental Terrestre': 'Herramientas para recuperar espacios naturales y productivos.',
  'Maestría en Ciencias de la Sostenibilidad': 'Formación interdisciplinaria para liderar el cambio sostenible.',
  'Maestría en Hábitat, Urbanismo y Edificación Sostenible':
    'Soluciones para construir entornos habitables y sostenibles.',
  'Maestría en Sostenibilidad Turística y Ecoturismo': 'Turismo de bajo impacto con beneficios para las comunidades.',
  'Maestría en Gestión de Proyectos Ambientales':
    'Planificación y ejecución de proyectos para el desarrollo sostenible.',
  'Maestría en Eficiencia Energética, Cambio Climático y Sostenibilidad':
    'Estrategias para reducir impactos y responder al cambio climático.',
  'Proyectos en América': 'Iniciativas sostenibles con impacto en América.',
  'Proyectos en Asia': 'Soluciones ambientales desarrolladas en Asia.',
  'Proyectos en Europa': 'Proyectos europeos que conectan innovación y sostenibilidad.',
  'Actualidad del Instituto': 'Noticias, eventos y vida académica.',
  Investigación: 'Hallazgos y proyectos sobre sostenibilidad.',
  'Opinión y análisis': 'Perspectivas para entender el cambio.',
  'Recursos para aprender': 'Materiales para seguir explorando.',
  Contacto: 'Conversemos sobre tus ideas y proyectos.',
};

export const getMegaDescription = (text = '') =>
  descriptions[text] || 'Explora esta línea de formación e investigación.';
