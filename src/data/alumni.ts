export type AlumniCategory = 'Máster' | 'MBA' | 'Doctorado' | 'Postdoctorado' | 'Maestría' | 'Diplomado';

export interface AlumniRecord {
  name: string;
  category: AlumniCategory;
  program: string;
  year: number;
  project: string;
}

export const alumniRecords: AlumniRecord[] = [
  {
    name: 'Oscar Gallego Pérez',
    category: 'Máster',
    program: 'Máster Internacional en Periodismo Ambiental',
    year: 2012,
    project:
      'Un futuro medioambiental incierto para los Emiratos Árabes Unidos ¿Cómo se puede garantizar la sostenibilidad de la economía de uno de los países con mayor huella ecológica per cápita del mundo?.',
  },
  {
    name: 'Teófilo Vidal Aparicio',
    category: 'Máster',
    program: 'Máster Internacional en Proyectos Ambientales',
    year: 2012,
    project: 'Plan Municipal de Gestión Integral de Residuos Sólidos para el Área Urbana del Municipio de Concepción.',
  },
  {
    name: 'David Abad Vara',
    category: 'Máster',
    program: 'Máster Internacional en Derecho Ambiental',
    year: 2012,
    project: 'El Fracaso de Durbán y el futuro de la regulación del Cambio Climático.',
  },
  {
    name: 'Oscar Butto Giuggia',
    category: 'Máster',
    program: 'Máster Internacional en Biomasa y Biocombustibles',
    year: 2012,
    project: 'Sorgo Dulce para la Producción de Etanol en Uruguay.',
  },
  {
    name: 'Xavier Duran Ramírez',
    category: 'Máster',
    program: 'Máster Internacional en Periodismo Ambiental',
    year: 2012,
    project: 'Los Recursos Hídricos en Cataluña: pasado, presente y futuro.',
  },
  {
    name: 'Yakelin Cereceda Quintanilla',
    category: 'Máster',
    program: 'Máster Internacional en Proyectos Ambientales',
    year: 2012,
    project: 'Los nuevos Yachachiq de las zonas Periurbanas.',
  },
  {
    name: 'Daniel Francisco Sorichetti Salas',
    category: 'Máster',
    program: 'Máster Internacional en Energías Renovables',
    year: 2012,
    project:
      'Los Residuos Urbanos, una fuente de Energía Renovable y Sostenible: Caso de la Planta de Tratamiento de RSU de General Alvear (Mendoza) y de la futura producción de energía eléctrica a partir de Biogás.',
  },
  {
    name: 'Diana Espín García',
    category: 'Máster',
    program: 'Máster Internacional en Proyectos Ambientales',
    year: 2012,
    project:
      'Elaboración de harinas a partir de la Implementación de una Planta de Transformación (Cooker) de Desechos Generados a partir del Faenamiento Artesanal de pollos en las Zonas Norte y Sur de la ciudad de Quito.',
  },
  {
    name: 'Diego Meier Lasowski',
    category: 'Máster',
    program: 'Máster Internacional en Ecoturismo',
    year: 2012,
    project: 'Potenciales Turísticos en la Costa de la Provincia de Osorno (Chile).',
  },
  {
    name: 'Franklin Bucheli García',
    category: 'Máster',
    program: 'Máster Internacional en Derecho Ambiental',
    year: 2012,
    project:
      'Monitoreo de la Participación y Veeduría Ciudadana en la Aprobación de Instrumentos de Evaluación Ambiental por parte de la Autoridad Ambiental del Cantón Cuenca.',
  },
  {
    name: 'Heriberto Bustos Aparicio',
    category: 'Máster',
    program: 'Máster Internacional en Derecho Ambiental',
    year: 2012,
    project: 'Explotación minera y deterioro del medio ambiente: Caso Conga, Cajamarca-Perú.',
  },
  {
    name: 'Jose Rodriguez Pineda',
    category: 'Máster',
    program: 'Máster Internacional en Agricultura Ecológica',
    year: 2012,
    project:
      'Elaboración de un Compost Sólido, Líquido y su Evaluación en el Cultivo de Chile morrón bajo riego por Goteo en la Calona Guaimaca FM.',
  },
  {
    name: 'Eva Mayorgas Carrillo',
    category: 'Máster',
    program: 'Máster Internacional en Ecoturismo',
    year: 2012,
    project: 'Eco-Cabañas Turísticas "El Palancar".',
  },
  {
    name: 'Zaida Verna Bárcena',
    category: 'Máster',
    program: 'Máster Internacional en Periodismo Ambiental',
    year: 2012,
    project:
      'Comunicando para un Bienestar Ambiental y Social- Integración del Desarrollo Sostenible estratégico en el trabajo diario de Periodistas y Comunicadores.',
  },
  {
    name: 'Antonio Landriel Pedraza',
    category: 'Máster',
    program: 'Máster Internacional en Derecho Ambiental',
    year: 2012,
    project:
      'Análisis Jurídico Contextual de los Chaqueos e Incendios Forestales en Bolivia en Relación a su Incidencia sobre la Salud de la Población Boliviana.',
  },
  {
    name: 'Rubén Patricio Cevallos Diaz',
    category: 'Máster',
    program: 'Máster Internacional en Energías Renovables',
    year: 2012,
    project:
      'Diseño de una planta de generación de energía eléctrica a partir de energía solar, para el campus de la UIDE.',
  },
  {
    name: 'Lorena Anabel Medina Rivera',
    category: 'Máster',
    program: 'Máster Internacional en Proyectos Ambientales',
    year: 2012,
    project: 'Monitoreo de Plaguicidas en el Cultivo de Brócoli en Ecuador.',
  },
  {
    name: 'Karina Rodríguez Vásquez',
    category: 'Máster',
    program: 'Máster Internacional en Proyectos Ambientales',
    year: 2012,
    project: 'Plan de Manejo y Adecuación Ambiental en la Destilería Brugal & Co. S.A.',
  },
  {
    name: 'Aura Aydee García Quintero',
    category: 'Máster',
    program: 'Máster Internacional en Proyectos Ambientales',
    year: 2012,
    project: 'Escuelas de Agua.',
  },
  {
    name: 'Francisco Sánchez Morillo',
    category: 'Máster',
    program: 'Máster en Agricultura Ecológica',
    year: 2012,
    project: 'Proyecto Mejora de Explotación de Cereales y Legumbres en la Sierra Sur de Sevilla.',
  },
  {
    name: 'Jaume Pons Ruiz',
    category: 'Máster',
    program: 'Máster Internacional en Agricultura Ecológica',
    year: 2012,
    project: 'Caracterización Agronómica y Organoléptica de Variedades Locales de Lechuga de Producción Ecológica.',
  },
  {
    name: 'María del Villar Romano Blasco',
    category: 'Máster',
    program: 'Máster Internacional en Agricultura Ecológica',
    year: 2012,
    project:
      'Plan de Acción para la creación de un Fondo Multilateral para Proyectos de Agricultura Ecológica. Acción Agro-pedagógica coordinada para una transición global hacia una Agricultura Sostenible.',
  },
  {
    name: 'Roberto Menchaca Morales',
    category: 'Máster',
    program: 'Master Internacional en Agricultura Ecológica',
    year: 2012,
    project:
      'Evaluación de la Producción de Cacao y Alternativas de Certificación Orgánica para la Asociación de Productores Agroforestales de la Región Norte de la Amazonia de Bolivia.',
  },
  {
    name: 'Cesar Cuellar Paz',
    category: 'Máster',
    program: 'Máster en Proyectos Ambientales',
    year: 2012,
    project:
      'Estudio de abastecimiento de agua potable en los distritos 8 y 9 del municipio de cercado, Dpto. de Cochabamba.',
  },
  {
    name: 'Daniela Tapia Hinojosa',
    category: 'Máster',
    program: 'Máster en Proyectos Ambientales',
    year: 2012,
    project:
      'Certificación Turística dentro de la Operación Turística Comunitaria Isla Corazón, Comunidad Portovelo, Cantón San Jacinto, Provincia de Manabí -Ecuador.',
  },
  {
    name: 'Heike Frey',
    category: 'Máster',
    program: 'Máster en Ecoturismo',
    year: 2012,
    project: 'Turismo sin rastro – El portal de Ecoturismo y Turismo Responsable en Tenerife (Islas Canarias).',
  },
  {
    name: 'Carla Sofía Montalvo Calderón',
    category: 'Máster',
    program: 'Máster en Proyectos Ambientales',
    year: 2012,
    project: 'Estudio de Impacto Ambiental del Relleno Sanitario de Santo Domingo de los Tsáchilas.',
  },
  {
    name: 'Diego Ricardo Núñez Flores',
    category: 'Máster',
    program: 'Máster en Proyectos Ambientales',
    year: 2012,
    project: 'Estudio de Impacto Ambiental del Relleno Sanitario de Santo Domingo de los Tsáchilas.',
  },
  {
    name: 'Helen Paola Toledo Jaldin',
    category: 'Máster',
    program: 'Máster en Proyectos Ambientales',
    year: 2012,
    project: 'Gestión Integrada de Residuos Sólidos para la Ciudad de la Paz.',
  },
  {
    name: 'Saúl Humberto Gutierrez Claure',
    category: 'Máster',
    program: 'Máster en Proyectos Ambientales',
    year: 2012,
    project: 'Plan de Movilidad Urbana Sostenible Para la Ciudad de La Paz.',
  },
  {
    name: 'Holguer Efraín Parra Delgado',
    category: 'Máster',
    program: 'Máster en Energías Renovables',
    year: 2012,
    project: 'Investigación del potencial geotérmico en Ecuador.',
  },
  {
    name: 'Luis Alberto Pretell Paredes',
    category: 'Máster',
    program: 'Máster en Proyectos Ambientales',
    year: 2012,
    project: 'Caracterización de los sistemas de residuos sólidos en las diferentes regiones del Perú.',
  },
  {
    name: 'Juliana Gutiérrez Rúa',
    category: 'Máster',
    program: 'Máster en Proyectos Ambientales',
    year: 2012,
    project: 'La Agenda 21 Local: El Urbanismo Social a la Luz de la Agenda 21.',
  },
  {
    name: 'Victoria Freyssinier Ponce',
    category: 'Máster',
    program: 'Máster en Energías Renovables',
    year: 2012,
    project:
      'Panorama de las Póliticas Públicas en Energías Renovables: Un ejercicio de Política Pública comparada, Casos México y España.',
  },
  {
    name: 'Mari Pili Mesa',
    category: 'Máster',
    program: 'Máster en Tratamiento de Aguas',
    year: 2013,
    project:
      'Conceptualización, Diseño e Implementación de Planta de Tratamiento para Fábrica de Beneficio de Ganado para bienestar social, considerando condiciones ecológicas.',
  },
  {
    name: 'Analia Beatriz Villagrán',
    category: 'Máster',
    program: 'Máster Internacional en Educación Ambiental',
    year: 2013,
    project:
      'Sembrando Sueños en mi Barrio. Una experiencia de Educación Ambiental en la Zona Sudeste de la Ciudad de Salta.',
  },
  {
    name: 'Anayansi Aguilar Mendéz',
    category: 'Máster',
    program: 'Máster Internacional en Derecho Ambiental',
    year: 2013,
    project: 'La Flor del Espíritu Santo.',
  },
  {
    name: 'Cristian Marín Cajas',
    category: 'Máster',
    program: 'Máster Internacional en Energías Renovables',
    year: 2013,
    project:
      'Evaluación Técnica Económica y Comercial de Centrales de Generación no Convencional conectadas a sistemas de Distribución de Energía en las Provincias de Tungurahua Pastaza y Napo del Sistema Eléctrico.',
  },
  {
    name: 'Guadalupe García Vásquez',
    category: 'Máster',
    program: 'Máster Internacional en Energías Renovables',
    year: 2013,
    project:
      'Posibilidades Potenciales del Uso de Fuentes de Energía Renovables para la Generación de Energía Eléctrica en México, en Función de su Factibilidad Técnica, Económica, Social y ambiental.',
  },
  {
    name: 'Mariana Genoveva Pucheta',
    category: 'Máster',
    program: 'Máster Internacional en Tratamiento de Aguas',
    year: 2013,
    project: 'Sistema de Aprovechamiento de aguas pluviales para riego de parque.',
  },
  {
    name: 'Samuel García Arencibia',
    category: 'Máster',
    program: 'Máster Internacional en Agricultura Ecológica',
    year: 2013,
    project: 'Agricultura Ecológica en Canarias. Buscando el factor emancipador.',
  },
  {
    name: 'Cristina Del Pueyo Rodríguez',
    category: 'Máster',
    program: 'Máster Internacional en Derecho Ambiental',
    year: 2013,
    project:
      'Responsabilidad Social Empresarial Inherente al Derecho a la Salud y a un Medioambiente Saludable en Tanto Derechos Humanos.',
  },
  {
    name: 'Iratxe Aragón Nicolas',
    category: 'Máster',
    program: 'Máster Internacional en Ecoturismo',
    year: 2013,
    project: 'Agencia – Consultoría Ecoturismo Btripper.',
  },
  {
    name: 'Ivan Reig Cerdá',
    category: 'Máster',
    program: 'Máster Internacional en Ecoturismo',
    year: 2013,
    project: 'Apadrinamiento y Mecenazgo de elementos Naturales y Patrimoniales de Bocairent (Valencia).',
  },
  {
    name: 'Juan García Pando',
    category: 'Máster',
    program: 'Máster Internacional en Tratamiento de Aguas',
    year: 2013,
    project: 'Reutilización de aguas grises, para riego de jardines en el Aeropuerto Internacional El Alto.',
  },
  {
    name: 'Juan Soliz Cabrera',
    category: 'Máster',
    program: 'Máster Internacional en Energías Renovables',
    year: 2013,
    project:
      'Reducción del Consumo Energético mediante un Sistema de Ahorro de Energía en los Hogares de Santa Cruz de la Sierra – Bolivia.',
  },
  {
    name: 'Laura Cervera Graupera',
    category: 'Máster',
    program: 'Máster Internacional en Ecoturismo',
    year: 2013,
    project:
      'Evaluación del Potencial para el Desarrollo de Proyectos Eco Turísticos en la Región de Guanacaste, Costa Rica.',
  },
  {
    name: 'Natalie Antelo Seborga',
    category: 'Máster',
    program: 'Máster Internacional en Proyectos Ambientales',
    year: 2013,
    project:
      'Elaboración de un Plan Estratégico de Forestación y Conservación de Bosques como Mecanismo de Mitigación y Adaptación al Cambio Climático en la Zona del Chaco Boliviano de Tarija.',
  },
  {
    name: 'Carlos Erazo Vinueza',
    category: 'Máster',
    program: 'Máster Internacional en Energías Renovables',
    year: 2013,
    project:
      'Aplicación de Energía Solar Fotovoltaica para Vivienda Unifamiliar de bajo Consumo Energético, en el Valle de Tumbaco perteneciente al Distrito Metropolitano de Quito – Ecuador.',
  },
  {
    name: 'Edilio Vinces Moreira',
    category: 'Máster',
    program: 'Máster Internacional en Agricultura Ecológica',
    year: 2013,
    project:
      'La incidencia de los microorganismos eficientes, en el tiempo de descomposición de abonos de origen animal (gallinaza, cerdos, vacuno) dentro del área de investigación de la facultad de Agronomía de la Universidad Técnica de Manabí.',
  },
  {
    name: 'Martín Beatove',
    category: 'Máster',
    program: 'Máster Internacional en Energías Renovables',
    year: 2013,
    project: 'Educación sobre el Uso de Energías Renovables e Implementación en Hogares de Poblaciones Aisladas.',
  },
  {
    name: 'Mireya Rey Aznar',
    category: 'Máster',
    program: 'Máster Internacional en Educación Ambiental',
    year: 2013,
    project:
      'El Huerto Escolar como elemento de Desarrollo de Valores y Acciones Ambientales y de Salud en la Educación Preescolar.',
  },
  {
    name: 'Nuria Rosa Brinkmann',
    category: 'Máster',
    program: 'Máster Internacional en Derecho Ambiental',
    year: 2013,
    project: 'La Cuestión Energética en Brasil: Implicaciones Ambientales de la Gran Represa Belo Monte.',
  },
  {
    name: 'Tera Victor',
    category: 'Máster',
    program: 'Máster Internacional en Energías Renovables',
    year: 2013,
    project: 'El Uso de Micro Turbinas en la Generación de Energía Eléctrica para el Tratamiento de Agua Potable.',
  },
  {
    name: 'Victor Huerta Ramírez',
    category: 'Máster',
    program: 'Máster Internacional en Energías Renovables',
    year: 2013,
    project:
      'Optimización del Agua de Riego a Nivel Parcelario mediante Capacitación y Asistencia Técnica a los Agricultores del Valle de Huarmey, Ancash – Perú.',
  },
  {
    name: 'Carolina Mallo Reguera',
    category: 'Máster',
    program: 'Máster Internacional en Ecoturismo',
    year: 2013,
    project: 'Ventana Verde ante un Futuro Oscuro.',
  },
  {
    name: 'Eliodoro Marecos Ibarrola',
    category: 'Máster',
    program: 'Máster Internacional en Tratamiento de Aguas',
    year: 2013,
    project:
      'Determinación de la calidad de las aguas del Rio Paraguay. Tramo desde el Distrito de Limpio, altura de la desembocadura del rio Salado, hasta el Distrito de Villeta.',
  },
  {
    name: 'Fernand Mc Gras Brown',
    category: 'Máster',
    program: 'Máster Internacional en Energías Renovables',
    year: 2013,
    project: 'Análisis de Factibilidad de un Parque Híbrido (Eólico y Solar Fotovoltaico) de 15MW en Santa Lucía.',
  },
  {
    name: 'Gabriel Chanchí Golondrino',
    category: 'Máster',
    program: 'Máster Internacional en Energías Renovables',
    year: 2013,
    project: 'Estudio de Implantación de Energías Renovables en Viviendas de la Ciudad de Popayán-Cauca Colombia.',
  },
  {
    name: 'Jesús Barreras Lerma',
    category: 'Máster',
    program: 'Máster Internacional en Energía Solar',
    year: 2013,
    project:
      'Transición de Energía Eléctrica Convencional a Energía Renovable Fotovoltaica de una Casa Habitación de Interés Social en CD. Obregón, Sonora, México.',
  },
  {
    name: 'Jimmy Bolaños Carpio',
    category: 'Máster',
    program: 'Máster Internacional en Agricultura Ecológica',
    year: 2013,
    project:
      'Control de Gusano Cogollero (Spodoptera Frugiperda Sp.) en el Cultivo de Maíz (Zea Mays) mediante la Aplicación de Extractos Botánicos. San Cristóbal, Galápagos.',
  },
  {
    name: 'Luciano González Rodriguez',
    category: 'Máster',
    program: 'Máster Internacional en Energías Renovables',
    year: 2013,
    project: 'Generación de Energía Eléctrica a partir de RSU en Chubut, Argentina.',
  },
  {
    name: 'Mario Barahona Zúniga',
    category: 'Máster',
    program: 'Máster Internacional en Tratamiento de Aguas',
    year: 2013,
    project: 'Reutilización en Riego del Agua Residual Derivada de la Elaboración de Bebidas Gaseosas.',
  },
  {
    name: 'Natalia Veloz Goyes',
    category: 'Máster',
    program: 'Máster Internacional en Proyectos Ambientales',
    year: 2013,
    project:
      'Implementar una Red Integral de Rutas Turísticas al Volcán Chimborazo para la Parroquia San Andrés, Cantón Guano 2013.',
  },
  {
    name: 'Pablo Escudero Aznar',
    category: 'Máster',
    program: 'Máster Internacional en Proyectos Ambientales',
    year: 2013,
    project:
      'Evaluación del Impacto Ambiental, Social y Económico de Construcción de la Línea Ferroviaria de Alta Velocidad entre Elche y Murcia, España.',
  },
  {
    name: 'Raúl Guamán Sanaguano',
    category: 'Máster',
    program: 'Máster Internacional en Proyectos Ambientales',
    year: 2013,
    project:
      'Implementar una Red Integral de Rutas Turísticas al Volcán Chimborazo para la Parroquia San Andrés, Cantón Guano 2013.',
  },
  {
    name: 'Ricardo Villaverde Casas',
    category: 'Máster',
    program: 'Máster Internacional en Energías Renovables',
    year: 2013,
    project: 'Construcción de un Biodigestor A 3500 MSNM.',
  },
  {
    name: 'Yolanda Paucar Pérez',
    category: 'Máster',
    program: 'Máster Internacional en Cambios Climáticos y Valoración',
    year: 2013,
    project: 'Gestion Integral del Recurso Hídrico en la Microcuenca de Lucre.',
  },
  {
    name: 'Daniela Torezzan',
    category: 'Máster',
    program: 'Máster Internacional en Periodismo Ambiental',
    year: 2013,
    project:
      'La Zonificación de la información Socio Ambiental: Análisis de la Elección y Encuadramiento de las Fuentes por el Periódico A Gazeta y la Televisión Centro América.',
  },
  {
    name: 'Danny Alirio Villamizar Meneses',
    category: 'Máster',
    program: 'Máster Internacional en Derecho Ambiental',
    year: 2013,
    project: 'Las Utilidades Públicas Minera y Eléctrica frente a la Función Ecológica de la Propiedad.',
  },
  {
    name: 'Juan Muñoz Hormaechea',
    category: 'Máster',
    program: 'Máster Internacional en Periodismo Ambiental',
    year: 2013,
    project: "Implantación de la asignatura 'Educación ambiental' en el Currículo Escolar.",
  },
  {
    name: 'Nelson Andrés Mantilla Oliveros',
    category: 'Máster',
    program: 'Máster Internacional en Derecho Ambiental',
    year: 2013,
    project: 'Principio de Progresividad; Análisis Político y Propuesta Normativa.',
  },
  {
    name: 'Roberto Alejandro Guzmán Ávila',
    category: 'Máster',
    program: 'Máster Internacional en Biomasa y Biocombustibles',
    year: 2013,
    project:
      'Programa de Educación y Comunicación Ambiental en Comunidades de Santiago de los Caballeros Para su Desarrollo Sostenible.',
  },
  {
    name: 'Andrés Valverde Saavedra',
    category: 'Máster',
    program: 'Máster Internacional en Agricultura Ecológica',
    year: 2013,
    project: 'Evaluación de Rendimiento e Impacto Medioambiental en Cultivos de Cacao Tradicional y Ecológico.',
  },
  {
    name: 'Edgar Estuardo Menéndez Menéndez',
    category: 'Máster',
    program: 'Máster Internacional en Derecho Ambiental',
    year: 2013,
    project:
      'Ausencia de ley específica para el aprovechamiento y manejo sostenible de los recursos hídricos en Guatemala.',
  },
  {
    name: 'Eliana Jeanet Helbig',
    category: 'Máster',
    program: 'Máster Internacional en Energías Renovables',
    year: 2013,
    project:
      'Instalación de Energía Solar Térmica para la producción de Agua Caliente en Edificio Multifamiliar de la ciudad de Wetter (Ruhr).',
  },
  {
    name: 'María Angélica García Gereda',
    category: 'Máster',
    program: 'Máster Internacional en Derecho Ambiental',
    year: 2013,
    project:
      'Como mejorar el Cumplimiento del objetivo Establecido por la Ley 99 de 1993 para Aplicar el Principio de "El Que Contamina Paga" en Colombia.',
  },
  {
    name: 'Cícero Luís Doten Franco',
    category: 'Máster',
    program: 'Máster Internacional en Tratamiento de Aguas',
    year: 2013,
    project: 'Potabilización de aguas pluviales con ultrafiltración.',
  },
  {
    name: 'Hugo Alberto Vásquez Peña',
    category: 'Máster',
    program: 'Máster Internacional en Agricultura Ecológica',
    year: 2013,
    project:
      'Determinación de la Eficacia de metarhizium anisopliae para el Control de "SALIVAZO" (aeneolamia postica Walker) en Caña de Azúcar.',
  },
  {
    name: 'Leonardo Martinez Orozco',
    category: 'Máster',
    program: 'Máster Internacional en Periodismo Ambiental',
    year: 2013,
    project: 'Documental ambiental: Agua para siempre - Una experiencia de ciudad.',
  },
  {
    name: 'Luis Fernando Guzmán Bejarano',
    category: 'Máster',
    program: 'Máster Internacional en Tratamiento de Aguas',
    year: 2013,
    project: 'Reúso de aguas tratadas para el riego de forraje en el municipio de Comarapa.',
  },
  {
    name: 'Romeo Marta Barrón',
    category: 'Máster',
    program: 'Máster Internacional en Educación Ambiental',
    year: 2013,
    project:
      'Elaboración y validación de material didáctico destinado al Aprendizaje-servicio con contenidos vinculados al Desarrollo Agropecuario Sustentable, bajo el contexto de la Campaña "Agua para la Vida.',
  },
  {
    name: 'Rumiñahui Quindi Pichasaca',
    category: 'Máster',
    program: 'Máster Internacional en Tratamiento de Aguas',
    year: 2013,
    project:
      'Evaluación técnica de plantas de tratamiento de aguas residuales en zonas rurales. Aplicaciones en Sierra Sur del Ecuador.',
  },
  {
    name: 'Luis Ernesto Albán Gallardo',
    category: 'Máster',
    program: 'Máster Internacional en Agricultura Ecológica',
    year: 2013,
    project: 'Impacto ecológico y económico de dos sistemas de producción maiceros, en la zona de Mocache.',
  },
  {
    name: 'Alejandra Mejía Restrepo',
    category: 'Máster',
    program: 'Máster Internacional en Educación Ambiental',
    year: 2013,
    project:
      'Kit Galápagos; Herramienta de Educación no Formal para Trabajar con Grupos de Escolares de la parte Continental que visitan Galápagos.',
  },
  {
    name: 'Alfonso Botero Guzman',
    category: 'Máster',
    program: 'Máster Internacional en Proyectos Ambientales',
    year: 2013,
    project:
      ': Diseño de un Material Didáctico Multimedia (MDM) para el aprendizaje en temas medioambientales, como herramienta de Gestión, orientada a la regulación del Impacto Ambiental de los planes de desarrollo de las administraciones Públicas Municipales en la Provincia del Sumapaz, Departamento de Cundinamarca, Colombia.',
  },
  {
    name: 'Andrés Valverde Saavedra',
    category: 'Máster',
    program: 'Máster Internacional en Agricultura Ecológica',
    year: 2013,
    project: 'Evaluación de Rendimiento e Impacto Medioambiental en Cultivos de Cacao Tradicional y Ecológico.',
  },
  {
    name: 'Francisco Roberto Zegarra Azcui',
    category: 'Máster',
    program: 'Máster Internacional en Energías Renovables',
    year: 2013,
    project: 'Evaluación de la Hibridación del Sistema Aislado de Cobija a base de diesel a diesel-fotovoltaico.',
  },
  {
    name: 'Gabriel Hartstock',
    category: 'Máster',
    program: 'Máster Internacional en Energías Renovables',
    year: 2013,
    project: 'Eficiencia Energética y Uso de Energías Renovables en la Construcción.',
  },
  {
    name: 'Hernando Orozco Garces',
    category: 'Máster',
    program: 'Máster Internacional en Agricultura Ecológica',
    year: 2013,
    project:
      'Granja Agroecológica Auto sostenible con programas de Capacitación y Producción Orgánica, para mejorar la calidad de vida de las familias Vereda Las Palomas del Municipio de Ansermanuevo Valle del Cauca.',
  },
  {
    name: 'Jina Karin Sánchez Olivares',
    category: 'Máster',
    program: 'Máster Internacional en Derecho Ambiental',
    year: 2013,
    project:
      'Impacto Socio-Ambiental en Colombia con la entrada en Vigencia del Tratado de Libre Comercio con los Estados Unidos.',
  },
  {
    name: 'Jorge Guillermo Nuñez Raza',
    category: 'Máster',
    program: 'Máster Internacional en Agricultura Ecológica',
    year: 2013,
    project:
      'Establecimiento de un modelo de Sostenibilidad para la UNOCANT (Unión de Organizaciones Campesinas del Noroccidente de Tungurahua), mediante la Evaluación de cuatro Agro Ecosistemas de producción de Fresa y Cuyes.',
  },
  {
    name: 'Germán Alexis Lozano Blanco',
    category: 'Máster',
    program: 'Máster Internacional en Ecoturismo',
    year: 2013,
    project: 'Eco-experiencias en Ciudad Antigua, Santuario Arqueológico y natural de la Sierra Nevada de Santa Marta.',
  },
  {
    name: 'Nelly Esther Varela Gatty',
    category: 'Máster',
    program: 'Máster Internacional en Periodismo Ambiental',
    year: 2013,
    project:
      'Validar estrategias pedagógicas lúdicas, como herramientas para la concientización ambiental, aplicada en Instituciones Educativas Públicas Rurales de la Amazonia.',
  },
  {
    name: 'Rony Flores Ramírez',
    category: 'Máster',
    program: 'Máster Internacional en Ecoturismo',
    year: 2013,
    project:
      'Servicio de guiado en el Área de Conservación Regional Cordillera Escalera en los dos sitios turísticos: Cataratas de Ahuashiyacu y Ruta Turística Alto Shilcayo en el año del 2012.',
  },
  {
    name: 'Edgar Estuardo Menéndez Menéndez',
    category: 'Máster',
    program: 'Máster Internacional en Derecho Ambiental',
    year: 2013,
    project:
      'Ausencia de ley específica para el aprovechamiento y manejo sostenible de los recursos hídricos en Guatemala.',
  },
  {
    name: 'Jean Collie',
    category: 'Máster',
    program: 'Máster Internacional en Biomasa y Biocombustibles',
    year: 2013,
    project: 'Análisis de Potencialidad de 5 Cultivos Energéticos Leñosos en Castilla y León.',
  },
  {
    name: 'María Lucía Rosas Foschi',
    category: 'Máster',
    program: 'Máster Internacional en Ecoturismo',
    year: 2013,
    project: 'Evaluación del Potencial Turístico en el Municipio de Fúquene, departamento de Cundinamarca, Colombia.',
  },
  {
    name: 'Sergio Ricardo González Plaza',
    category: 'Máster',
    program: 'Máster Internacional en Biomasa y Biocombustibles',
    year: 2013,
    project:
      'Evaluación del Potencial de producción de Biogás por Codigestión Anaeróbica de Rúmen Bovino y Suero de quesería, mediante la re-utilización de Residuos Agrícolas provenientes de la Biomasa de la Xª Región, Chile.',
  },
  {
    name: 'Tatiana Jaramillo Orozco',
    category: 'Máster',
    program: 'Máster Internacional en Agricultura Ecológica',
    year: 2013,
    project:
      'Determinación de la productividad de la asociación Batata (Ipomoea batatas) y Berenjena (Solanum mellongena), establecida en huertas caseras en el municipio de Taganga, Departamento del Magdalena, Colombia.',
  },
  {
    name: 'Zoila Ayvar Bazán',
    category: 'Máster',
    program: 'Máster Internacional en Educación Ambiental',
    year: 2013,
    project: 'Educación ambiental sostenible para una escuela saludable.',
  },
  {
    name: 'Paul Makedonski Valdeavellano',
    category: 'Máster',
    program: 'Máster Internacional en Periodismo Ambiental',
    year: 2014,
    project: 'Buen Vivir: un programa de TV ambiental.',
  },
  {
    name: 'David Escorza Uribe',
    category: 'Máster',
    program: 'Máster Internacional en Energías Renovables',
    year: 2014,
    project: '18 de diciembre del 2014.',
  },
  {
    name: 'Edurne Baquero Arellano',
    category: 'Máster',
    program: 'Máster Internacional en Ecoturismo',
    year: 2014,
    project: 'Yaramaa.',
  },
  {
    name: 'Jorge Uzátegui Kolich',
    category: 'Máster',
    program: 'Máster Internacional en Agricultura Ecológica',
    year: 2014,
    project: 'Producción Orgánica de Palta (Persea americana M.).',
  },
  {
    name: 'Paula Andrea Arcila',
    category: 'Máster',
    program: 'Máster Internacional en Proyectos Ambientales',
    year: 2014,
    project:
      'Descripción de la Implementación del Arboloco (Montanoa Quadrangularis) como Alternativa Ecológica para la Recuperación del Suelo Erosionado y en la Sustitución de Materiales no Biodegradables y de Polímeros Altamente Contaminantes. Municipio de Gómez plata (Antioquia), 2014.',
  },
  {
    name: 'Pedro Martínez Villagrán',
    category: 'Máster',
    program: 'Máster Internacional en Agricultura Ecológica',
    year: 2014,
    project: 'Manejo Sostenible de Áreas Urbanas y Prácticas Culturales Agroecológicas.',
  },
  {
    name: 'Fernando Espejel Oscoy',
    category: 'Máster',
    program: 'Máster Internacional en Derecho Ambiental',
    year: 2014,
    project:
      'Los Riesgos al Medio Ambiente, Derivados del Sistema de Recolección de Residuos Sólidos Urbanos en la Ciudad De México.',
  },
  {
    name: 'Jorge Torres González',
    category: 'Máster',
    program: 'Máster Internacional en Educación Ambiental',
    year: 2014,
    project:
      'Comparación entre el impacto ambiental generado por la extracción de hidrocarburos y las medidas de compensación adoptadas en el municipio de Puerto Boyacá Departamento de Boyacá Colombia.',
  },
  {
    name: 'Juana Gómez Castrillón',
    category: 'Máster',
    program: 'Máster Internacional en Derecho Ambiental',
    year: 2014,
    project: 'Sistema de Fuentes del Derecho Internacional Ambiental.',
  },
  {
    name: 'Mónica Suárez Rivera',
    category: 'Máster',
    program: 'Máster Internacional en Educación Ambiental',
    year: 2014,
    project:
      'Estrategias para Fomentar Actitudes y Comportamientos de Educación Ambiental en los Niños y Niñas de Educación Inicial De La Unidad Educativa ¨Nuestra Señora de Fátima.',
  },
  {
    name: 'Montserrat Diez Alaez',
    category: 'Máster',
    program: 'Máster Internacional en Agricultura Ecológica',
    year: 2014,
    project: 'Manual de Acceso a la Agricultura Ecológica en Valladolid y en Castilla y León.',
  },
  {
    name: 'Nahia Villanueva López',
    category: 'Máster',
    program: 'Máster Internacional en Educación Ambiental',
    year: 2014,
    project: 'Conoce tu Entorno.',
  },
  {
    name: 'Yaisinio Gallardo Aparicio',
    category: 'Máster',
    program: 'Máster Internacional en Tratamiento de Aguas',
    year: 2014,
    project: 'Planta de tratamiento de aguas residuales Tarija – Cercado.',
  },
  {
    name: 'Alfredo Zuñiga Chipana',
    category: 'Máster',
    program: 'Máster Internacional en Derecho Ambiental',
    year: 2014,
    project:
      'Las Áreas Naturales Protegidas y la Limitación del Derecho de Propiedad y Posesión en el Santuario Histórico de Machupichu.',
  },
  {
    name: 'Álvaro de Jesús Martínez Peralta',
    category: 'Máster',
    program: 'Máster Internacional en Energías Renovables',
    year: 2014,
    project:
      'Estudio y Programa de la Eficiencia Energética en el Ambiente de Construcción del Centro de diseño e Innovación Tecnológico Industrial -Cditi-Sena.',
  },
  {
    name: 'Angel Daen Morales Garcia',
    category: 'Máster',
    program: 'Máster Internacional en Derecho Ambiental',
    year: 2014,
    project:
      'Prosecución Efectiva de los Delitos Ambientales en México como una Herramienta de Conservación de la Biodiversidad.',
  },
  {
    name: 'Antonio María Ortiz Códer',
    category: 'Máster',
    program: 'Máster Internacional en Biomasa y Biocombustibles',
    year: 2014,
    project:
      'Estudio Técnico-Económico para la Instalación de Central DE Biomasa Forestal en la Comunidad Autónoma de Extremadura (España).',
  },
  {
    name: 'Carlo José Morán Machado',
    category: 'Máster',
    program: 'Máster Internacional en Proyectos Ambientales',
    year: 2014,
    project:
      'Desarrollo de un Modelo de Agricultura Urbana Ecológica, de Intercambio y Comercialización en los Asentamientos Urbanos Precarios (AUP) del Municipio de San Salvador, El Salvador.',
  },
  {
    name: 'Diana Arévalo Illana',
    category: 'Máster',
    program: 'Máster Internacional en Agricultura Ecológica',
    year: 2014,
    project: 'Sistema de Información Geográfica para la Agricultura Ecológica de la Comunidad de Madrid.',
  },
  {
    name: 'Diego San Martín Villaverde',
    category: 'Máster',
    program: 'Máster Internacional en Derecho Ambiental',
    year: 2014,
    project:
      'Propuestas para un Eficiente Aparato Ambiental en el Perú: la Colaboración del Estado, las Empresas y las Personas.',
  },
  {
    name: 'Diego Fernando Veloz Goyes',
    category: 'Máster',
    program: 'Máster Internacional en Proyectos Ambientales',
    year: 2014,
    project:
      'Plan de Manejo Ambiental para Mejorar la Infraestructura Turística de "El Refugio José Ribas" en el Parque Nacional Cotopaxi, Ecuador.',
  },
  {
    name: 'Fabio Alberto Espinoza Montoya',
    category: 'Máster',
    program: 'Máster Internacional en Tratamiento de Aguas',
    year: 2014,
    project:
      'Diseño de la etapa de disminución de arsénico del agua en la población de Guayabo en Puriscal de San José de Costa Rica utilizando una resina de intercambio iónico.',
  },
  {
    name: 'Jaime David Rodriguez Rodriguez',
    category: 'Máster',
    program: 'Máster Internacional en Proyectos Ambientales',
    year: 2014,
    project: 'Guía Ambiental para el Reciclaje: Quijos, Vamos a Reciclar!.',
  },
  {
    name: 'Jorge Eduardo Chupillón Silva',
    category: 'Máster',
    program: 'Máster Internacional en Derecho Ambiental',
    year: 2014,
    project: 'Barreras Arancelarias Ambientales en el Comercio Exterior Vinculadas al Medio Ambiente.',
  },
  {
    name: 'María Alejandra Mendoza Araiza',
    category: 'Máster',
    program: 'Máster Internacional en Ecoturismo',
    year: 2014,
    project: 'Chakiñan del Colibrí Oferta Turística para una Estética de Vida.',
  },
  {
    name: 'Moisés Wilfredo García Estupinián',
    category: 'Máster',
    program: 'Máster Internacional en Proyectos Ambientales',
    year: 2014,
    project:
      'Conservación y Aprovechamiento Responsable de los Recursos Acuáticos de la Reserva de Biosfera Xiriualtique-Jiquilisco, El Salvador.',
  },
  {
    name: 'Pablo San Juan Mollá',
    category: 'Máster',
    program: 'Máster Internacional en Tratamiento de Aguas',
    year: 2014,
    project:
      'Estudio del Tratamiento Secundario y Terciario de Aguas Residuales Mediante Humedales Artificiales. Manual de diseño.',
  },
  {
    name: 'Ramiro Roberto Careaga Deheza',
    category: 'Máster',
    program: 'Máster Internacional en Tratamiento de Aguas',
    year: 2014,
    project:
      'Tratamiento de aguas residuales de una industria láctea mediante un reactor anaerobio de lecho de fangos UASB a escala piloto.',
  },
  {
    name: 'Rocio Magdaleno Gilabert',
    category: 'Máster',
    program: 'Máster Internacional en Proyectos Ambientales',
    year: 2014,
    project:
      'Diseño Ecológico Modelo de una Escuela Pública de Educación Primaria Para el Municipio de Ensenada, Baja California.',
  },
  {
    name: 'Yago Di Nella Dell´Agnolo',
    category: 'Máster',
    program: 'Máster Internacional en Proyectos Ambientales',
    year: 2014,
    project:
      'Diseño de una Ecogranja Socio-Educativa y de Reinclusión (Laboral) en Salud Mental y Discapacidad, desde el Enfoque de la Sustentabilidad Patagonia, Rep. Argentina.',
  },
  {
    name: 'Cristian Germán Álvarez Ingino',
    category: 'Máster',
    program: 'Máster Internacional en Ecoturismo',
    year: 2014,
    project: 'Piscinas Naturales y Reconstrucción del Paisaje Original.',
  },
  {
    name: 'Diana Carolina Sánchez Noriega',
    category: 'Máster',
    program: 'Máster Internacional en Derecho Ambiental',
    year: 2014,
    project:
      'Diversificación de Entidades Públicas Facultadas de Otorgar Permisos de Explotación y sus Repercusiones en el Medio Ambiente.',
  },
  {
    name: 'José León Castillo Medina',
    category: 'Máster',
    program: 'Máster Internacional en Energías Renovables',
    year: 2014,
    project:
      'Diseño de una Planta de Generación Eléctrica a partir de Energía Solar, para el Centro de Educación Preescolar Jardín de Niños Rolando E. Kattan Paredes, Ubicado en el Área Rural de la Aldea de Santa Rosa, Francisco Morazán.',
  },
  {
    name: 'José Vicente Pardo García',
    category: 'Máster',
    program: 'Máster Internacional en Biomasa y Biocombustibles',
    year: 2014,
    project:
      'Análisis de Eficiencia de los Métodos de Extracción de Biomasa Leñosa de los Montes del Arco Mediterráneo Peninsular Ibérico.',
  },
  {
    name: 'José Antonio Sánchez Pérez',
    category: 'Máster',
    program: 'Máster Internacional en Biomasa y Biocombustibles',
    year: 2014,
    project: 'Automatización de un Sistema de Arranque y paro en Línea Magnetrón.',
  },
  {
    name: 'Juan Carlos Ponce de León Iturry',
    category: 'Máster',
    program: 'Máster Internacional en Derecho Ambiental',
    year: 2014,
    project: 'Distonía Axiológica Ambiental.',
  },
  {
    name: 'Liliana Beatriz Farfán Vigil',
    category: 'Máster',
    program: 'Máster Internacional en Ecoturismo',
    year: 2014,
    project: 'Puesta en Valor de los Atractivos Turísticos del Balneario de Pucusana Lima-Perú.',
  },
  {
    name: 'Luz Angela Burbano Duque',
    category: 'Máster',
    program: 'Máster Internacional en Derecho Ambiental',
    year: 2014,
    project:
      'Perjuicio Causado por la Emisión de Gases de Aeronaves Operadas en Colombia, con Comparación entre las Zonas Rurales y Urbanas.',
  },
  {
    name: 'Manuel Parrilla Gil',
    category: 'Máster',
    program: 'Máster Internacional en Agricultura Ecológica',
    year: 2014,
    project: 'Cambio Climático, Dependencia del Petróleo, Energías Renovables y Seguridad Alimentaria.',
  },
  {
    name: 'Maria José Hun Och',
    category: 'Máster',
    program: 'Máster Internacional en Ecoturismo',
    year: 2014,
    project: 'Plan de Negocios Café Ecológico "Las Verapaces", Centro de Convergencia del Ecoturismo.',
  },
  {
    name: 'Mónica Bueno De Frutos',
    category: 'Máster',
    program: 'Máster Internacional en Ecoturismo',
    year: 2014,
    project: 'Ecoturismo en la Zona Norte de Nicaragua.',
  },
  {
    name: 'Rafael Ignacio Hidalgo Franco',
    category: 'Máster',
    program: 'Máster Internacional en Biomasa y Biocombustibles',
    year: 2014,
    project:
      'Estudio Técnico Económico para la Viabilidad de la Extracción del Aceite de Jatropha Transformado en Biodiesel con Fines de Exportación Caso: Santa Bárbara del Sotillo, Sector la Pica Monaguera, Maturín, Estado Monagas-Venezuela (Período 2013).',
  },
  {
    name: 'Victor Manuel Moraño Gómez',
    category: 'Máster',
    program: 'Máster Internacional en Ecoturismo',
    year: 2014,
    project: 'Ecoturismo Sevilla. Descubriendo la Sierra Norte.',
  },
  {
    name: 'Alberto Eulogio Arias Cáceres',
    category: 'Máster',
    program: 'Máster Internacional en Proyectos Ambientales',
    year: 2014,
    project:
      'Aplicación del Sistema de Información Geográfica (SIG) para el Ordenamiento Territorial Municipal del Distrito de San Lázaro – Paraguay.',
  },
  {
    name: 'Cristina Vilà Maré',
    category: 'Máster',
    program: 'Máster Internacional en Ecoturismo',
    year: 2014,
    project: 'Viabilidad de una Agencia de Viajes de Ecoturismo.',
  },
  {
    name: 'Mario Alberto Llinas Viloria',
    category: 'Máster',
    program: 'Máster Internacional en Biomasa y Biocombustibles',
    year: 2014,
    project:
      'Estudio de la Composición Química del Aceite Esencial de Lippia Alba Obtenido mediante Hidro destilación Asistida por la Radiación de Microondas.',
  },
  {
    name: 'Richard Martín McCrae',
    category: 'Máster',
    program: 'Máster Internacional en Periodismo Ambiental',
    year: 2014,
    project:
      'Retos ambientales urbanos en la ciudad de México: la eficacia y el potencial de los medios de comunicación.',
  },
  {
    name: 'Alicia Chávez Aguilar',
    category: 'Máster',
    program: 'Máster Internacional en Agricultura Ecológica',
    year: 2014,
    project: 'Alternativas no Convencionales en la Producción de Vegetales en Agricultura Urbana.',
  },
  {
    name: 'Azael González Zúñiga',
    category: 'Máster',
    program: 'Máster Internacional en Energías Renovables',
    year: 2014,
    project:
      'Implementación de Aplicaciones de Tecnologías de Información para la Difusión, Aprovechamiento y Consultoría de Productos y Servicios en la Implementación de Energías Renovables para el Diseño y Adecuación de Espacios en Pachuca, Hgo. México.',
  },
  {
    name: 'Juan José González López',
    category: 'Máster',
    program: 'Máster Internacional en Derecho Ambiental',
    year: 2014,
    project: 'Guía Jurídico-Práctica de Identificación de Infracciones en Materia de Caza.',
  },
  {
    name: 'Ludwing Giovanni Paez Solano',
    category: 'Máster',
    program: 'Máster Internacional en Derecho Ambiental',
    year: 2014,
    project: 'Procedimiento Sancionatorio Ambiental en Colombia.',
  },
  {
    name: 'Ramiro Antonio Arcia Lacayo',
    category: 'Máster',
    program: 'Máster Internacional en Biomasa y Biocombustibles',
    year: 2014,
    project: 'Anteproyecto de Laboratorio Experimental para la producción de Biodiesel a partir de Micro algas.',
  },
  {
    name: 'María Romero Jara',
    category: 'Máster',
    program: 'Máster Internacional en Educación Ambiental',
    year: 2014,
    project:
      'El Componente Educativo en la Capacitación de Guarda Parques de los Monumentos Naturales Cerro Kôi y Cerro Chororî.',
  },
  {
    name: 'Ivan Enguix Domenech',
    category: 'Máster',
    program: 'Máster Internacional en Energía Solar',
    year: 2014,
    project: 'Instalación de un Sistema Fotovoltaico en el Complejo Turístico rural "EL CAMPITO".',
  },
  {
    name: 'Juan Nieto Gimeno',
    category: 'Máster',
    program: 'Máster Internacional en Biomasa y Biocombustibles',
    year: 2014,
    project: 'Producción de pellets a partir de residuos de viñedos en Castilla –La Mancha, España..',
  },
  {
    name: 'Prem Jai Vidaurre De La Riva',
    category: 'Máster',
    program: 'Máster Internacional en Energías Renovables',
    year: 2014,
    project: 'Proyecto Piloto de Vivienda Familiar Sostenible.',
  },
  {
    name: 'Stephanie Christelle Lebot',
    category: 'Máster',
    program: 'Máster Internacional en Educación Ambiental',
    year: 2014,
    project: 'La Restauración reunionesa a la hora del Desarrollo Sostenible.',
  },
  {
    name: 'Alberto Carranza Ortiz',
    category: 'Máster',
    program: 'Máster Internacional en Tratamiento de Aguas',
    year: 2015,
    project:
      'Propuesta para la desinfección de las agua por el medio de reactores Ultravioleta en la Planta Potabilizadora de Chilibre.',
  },
  {
    name: 'Mariana Maresca Echaide',
    category: 'Máster',
    program: 'Máster Internacional en Agricultura Ecológica',
    year: 2015,
    project:
      'Diseño de un Vivero Familiar de Plantas Aromáticas y Medicinales con Enfoque Agroecológico en el Barrio Los Acantilados.',
  },
  {
    name: 'María Carolina Ulla',
    category: 'Máster',
    program: 'Máster Internacional en Derecho Ambiental',
    year: 2015,
    project:
      'El Impacto de los Mecanismos Jurídicos e Institucionales del Cambio Climático en América Latina y Argentina.',
  },
  {
    name: 'Eric Jean-François Guéret',
    category: 'Máster',
    program: 'Máster Internacional en Periodismo Ambiental',
    year: 2015,
    project: 'Promoción de la agricultura biológica por la web 2.0.',
  },
  {
    name: 'Marta Cardona Barber',
    category: 'Máster',
    program: 'Máster Internacional en Periodismo Ambiental',
    year: 2015,
    project: 'Boletín Informativo Bosc Valencià.',
  },
  {
    name: 'Maria González Díaz de Villegas',
    category: 'Máster',
    program: 'Máster Internacional en Agricultura Ecológica',
    year: 2015,
    project:
      'Manual práctico para el cultivo y la comercialización del Arándano en Cantabria, bajo los principios de la agricultura orgánica: Salud, Ecología, Equidad y Precaución.',
  },
  {
    name: 'Jairo Ruiz Muñoz',
    category: 'Máster',
    program: 'Máster Internacional en Tratamiento de Aguas',
    year: 2015,
    project: 'Agua limpia para el campo.',
  },
  {
    name: 'Juan Aguilar Chuquimia',
    category: 'Máster',
    program: 'Máster Internacional en Educación Ambiental',
    year: 2015,
    project: 'Mujeres Emprendedoras con Liderazgo en el Cuidado y Protección del Medio Ambiente.',
  },
  {
    name: 'Karol Monroy Peña',
    category: 'Máster',
    program: 'Máster Internacional en Derecho Ambiental',
    year: 2015,
    project: 'Las Licencias Ambientales en Colombia: Usos y Abusos.',
  },
  {
    name: 'Oscar Velarde Gómez',
    category: 'Máster',
    program: 'Máster Internacional en Tratamiento de Aguas',
    year: 2015,
    project: 'Planta de tratamiento de aguas residuales e industriales para la ciudad de Potosí.',
  },
  {
    name: 'Pedro Antezana',
    category: 'Máster',
    program: 'Máster Internacional en Agricultura Ecológica',
    year: 2015,
    project: 'Manejo y Conservación de la Vicuña con Enfoque de Medio Ambiente.',
  },
  {
    name: 'Raúl Chajtur Rivero',
    category: 'Máster',
    program: 'Máster Internacional en Agricultura Ecológica',
    year: 2015,
    project: 'Capacitación Ambiental de las Comunidades del Municipio de Riberalta, Bolivia.',
  },
  {
    name: 'Sara Suárez Vega',
    category: 'Máster',
    program: 'Máster Internacional en Tratamiento de Aguas',
    year: 2015,
    project:
      'Talleres de formación sobre el tratamiento del agua potable a nivel doméstico y su almacenamiento seguro (HWTS).',
  },
  {
    name: 'Sonia Andrade Pérez',
    category: 'Máster',
    program: 'Máster Internacional en Agricultura Ecológica',
    year: 2015,
    project: 'A Horta Na Porta.',
  },
  {
    name: 'Tamara Lillo Contreras',
    category: 'Máster',
    program: 'Máster Internacional en Educación Ambiental',
    year: 2015,
    project: 'Erfina.',
  },
  {
    name: 'Agustín Romero Silva',
    category: 'Máster',
    program: 'Máster Internacional en Derecho Ambiental',
    year: 2015,
    project:
      'La Implementación en Todas las Instancias Judiciales de la Figura de la Suplencia de la Queja en Materia Ambiental con la Finalidad de Cumplir con lo Previsto en el Artículo 25 del Pacto de San José.',
  },
  {
    name: 'Andrea Antezana Grundner',
    category: 'Máster',
    program: 'Máster Internacional en Proyectos Ambientales',
    year: 2015,
    project:
      'Recuperación y Disposición de Nitrato de Amonio para la Remediación de Suelos Degradados en la Planta de MAXAM - FANEXA, Bolivia.',
  },
  {
    name: 'Manuel Guamo Lema',
    category: 'Máster',
    program: 'Máster Internacional en Biomasa y Biocombustibles',
    year: 2015,
    project:
      'Estudio de Factibilidad para el Desarrollo de Lombricultura con el Aprovechamiento de Residuos Rurales en la Parroquia Manglar Alto.',
  },
  {
    name: 'Mónica del Carmen Beltrán Pastor',
    category: 'Máster',
    program: 'Máster Internacional en Derecho Ambiental',
    year: 2015,
    project:
      'Estudio de una Propuesta de Salida ante la Creciente Problemática Generada a Consecuencia de la Minería Ilegal e Informal en Madre de Dios.',
  },
  {
    name: 'Nelly Aguilar Rueda',
    category: 'Máster',
    program: 'Máster Internacional en Proyectos Ambientales',
    year: 2015,
    project:
      'Manejo de Residuos Sólidos Generados por el Proyecto Urbanístico PIENTA Municipio de Piedecuesta – Colombia.',
  },
  {
    name: 'Nury Galindo Marquina',
    category: 'Máster',
    program: 'Máster Internacional en Educación Ambiental',
    year: 2015,
    project:
      'Responsables hacia la Soberanía Alimentaria: un Estudio sobre la Efectividad de un Taller Participativo para Jóvenes Estudiantes en Jalisco, México.',
  },
  {
    name: 'Stephanie del Carmen Daboub Kattán',
    category: 'Máster',
    program: 'Máster Internacional en Derecho Ambiental',
    year: 2015,
    project: 'Protección del Derecho al Agua en El Salvador, su Reconocimiento como Derecho Humano.',
  },
  {
    name: 'Sabina Goldaracena Donatte',
    category: 'Máster',
    program: 'Máster Internacional en Periodismo Ambiental',
    year: 2015,
    project: 'Extractivismo y conflictos socio ambientales en Uruguay.',
  },
  {
    name: 'Bernardo Gilberto Coronel',
    category: 'Máster',
    program: 'Máster Internacional en Proyectos Ambientales',
    year: 2015,
    project:
      'Conservación de Bosques Indígenas como Mecanismo de Revitalización Cultural La comunidad Angaité de Santo Domingo, del Chaco paraguayo.',
  },
  {
    name: 'Francisco Marco Rubio',
    category: 'Máster',
    program: 'Máster Internacional en Agricultura Ecológica',
    year: 2015,
    project:
      "Sistematización de los Conocimientos de la Sabiduría Campesina en la Comarca de L'horta Nord de Valencia. Aplicación Práctica en el estudio del Contexto histórico, Cultural y Social.",
  },
  {
    name: 'Julio Zevallos Yana',
    category: 'Máster',
    program: 'Máster Internacional en Derecho Ambiental',
    year: 2015,
    project: 'Minería y Conflicto Socioambiental en la Región de Puno: Caso del Proyecto Santa Ana.',
  },
  {
    name: 'Lilian Franco García',
    category: 'Máster',
    program: 'Máster Internacional en Energías Renovables',
    year: 2015,
    project:
      'Uso De La Bicicleta Como Sistema Generador De Electricidad En La Ciudadela Educativa Colegio Académico En La Ciudad De Buga (Valle) Colombia.',
  },
  {
    name: 'Marina Lourdes Padilla Alvís',
    category: 'Máster',
    program: 'Máster Internacional en Proyectos Ambientales',
    year: 2015,
    project:
      'Medidas de mitigación para preservar la calidad del agua en la Prueba de Estanquidad, en los tanques de condensado de la Planta de gas de San Alberto, el Chaco Boliviano-Bolivia.',
  },
  {
    name: 'Oscar Ariza Galeano',
    category: 'Máster',
    program: 'Máster Internacional en Biomasa y Biocombustibles',
    year: 2015,
    project:
      'Evaluación de Recolección de Aceite Vegetal Usado en Restaurantes para la Producción de Biodiesel en la Ciudad de Facatativá – Colombia.',
  },
  {
    name: 'Silvana Pol Gray',
    category: 'Máster',
    program: 'Máster Internacional en Ecoturismo',
    year: 2015,
    project: 'Turismo Sostenible, una Oportunidad de Futuro.',
  },
  {
    name: 'Stephanie Ascencio Serrato',
    category: 'Máster',
    program: 'Máster Internacional en Educación Ambiental',
    year: 2015,
    project:
      'Estrategias Didácticas para la Educación Ambiental Guía para la Construcción de una Herramienta Didáctica: Jocticia. El Debate para la Educación Socio-Ambiental.',
  },
  {
    name: 'Beatriz Elena Osma Garcia',
    category: 'MBA',
    program: 'M.B.A en Administración del Turismo Sostenible,',
    year: 2012,
    project: 'Plan Maestro del parque Ecoturístico las Salinas.',
  },
  {
    name: 'Nicolas Villegas Cardona',
    category: 'MBA',
    program: 'M.B.A en',
    year: 2012,
    project: 'ECOFOREST Pozo Redondo – Sustitución de ganadería intensiva por reforestación ecoturística.',
  },
  {
    name: 'Rosa Ana Jiménez Expósito',
    category: 'MBA',
    program: 'M.B.A en Negocios Ambientales',
    year: 2012,
    project: 'Estado actual de la Arquitectura Sostenible.',
  },
  {
    name: 'Robinson Martín Usuga Rueda',
    category: 'MBA',
    program: 'M.B.A en',
    year: 2012,
    project: 'COINAM: Consultoría industrial y ambiental.',
  },
  {
    name: 'Marco Antonio Llanos Ramírez',
    category: 'MBA',
    program: 'M.B.A en Negocios Ambientales',
    year: 2012,
    project:
      'Sostenibilidad del Manejo Forestal Comunitario: Efectos económicos, sociales y ambientales. Caso Comunidad Nativa Callería – Ucayali.',
  },
  {
    name: 'Paul Christian Ramírez Nelson',
    category: 'MBA',
    program: 'M.B.A en Negocios Ambientales',
    year: 2012,
    project:
      'Manejo sostenible de un bosque comunal como alternativa a la deforestación y degradación de bosques en la Amazonía Peruana.',
  },
  {
    name: 'Pedro David Fuentes Vasquez',
    category: 'MBA',
    program: 'M.B.A en Administración Ambiental',
    year: 2012,
    project: 'Campos Libres de Envases Vacios de Agroquímicos.',
  },
  {
    name: 'William Patricio Espín Maldonado',
    category: 'MBA',
    program: 'M.B.A en Administración de Turismo Sostenible',
    year: 2012,
    project:
      'Plan de Desarrollo Turístico Sostenible para la ruta Turística Avenida de los Volcanes, Región Sierra Centro 2012 - 2017.',
  },
  {
    name: 'Basilio Alexander Vicens Murillo',
    category: 'MBA',
    program: 'M.B.A en',
    year: 2012,
    project: 'Escuela de Turismo Sostenible y Alternativo.',
  },
  {
    name: 'Danelys Coz López',
    category: 'MBA',
    program: 'M.B.A en',
    year: 2012,
    project: 'Desarrollo de una Micro-Empresa Cooperativa de Secado Solar de Frutas Tropicales en Cuba".',
  },
  {
    name: 'Gabriela Gómez Ferrufino',
    category: 'MBA',
    program: 'M.B.A en',
    year: 2012,
    project: 'Estrategias para el Logro de un Desarrollo Sostenible del Producto Turístico Misterios del Titikaka.',
  },
  {
    name: 'Nelly Paulina Avalos Silva',
    category: 'MBA',
    program: 'M.B.A en',
    year: 2012,
    project:
      'Desarrollo de una Normativa y Estrategias de Gestión Sostenible para la Operación Turística de los Centros de Turismo Comunitario en los Andes Centro del Ecuador".',
  },
  {
    name: 'María Alonso Blanco',
    category: 'MBA',
    program: 'M.B.A en',
    year: 2012,
    project: 'Creación de una empresa Consultora de Educación y Comunicación Ambiental.',
  },
  {
    name: 'Mario Javier Torres Mercado',
    category: 'MBA',
    program: 'M.B.A en',
    year: 2012,
    project: 'Protocolo para la Obtención de una Denominación de Origen Internacional para el "Maní Boliviano.',
  },
  {
    name: 'Alejandro Cújar Tovar',
    category: 'MBA',
    program: 'M.B.A en',
    year: 2012,
    project:
      'Producción de Fresa en Hidro-Organoponía en el Marco de la Agricultura Ecológica y el Biocomercio Sostenible',
  },
  {
    name: 'Fanny Guamán Bravo',
    category: 'MBA',
    program: 'M.B.A en Administración del Turismo Sostenible',
    year: 2012,
    project:
      'Planificación e Implementación de Políticas para el Desarrollo de Buenas Prácticas de Turismo Sostenible en el Centro Turístico y Cultural Kushi Waira- Vientos de Suerte',
  },
  {
    name: 'Bolivar Santiago Lara Vaca',
    category: 'MBA',
    program: 'M.B.A en Administración del Turismo Sostenible',
    year: 2012,
    project: 'Granja Agro-eco-turística "Carrillo Mashikuna Yachakkuna"',
  },
  {
    name: 'Vanesa Ccahua Gutiérrez',
    category: 'MBA',
    program: 'M.B.A en Administración del Turismo Sostenible,',
    year: 2013,
    project:
      'Centro para la Conservación de la Bioculturalidad y Ecología Amazónica en la Zona de Amortiguamiento de la Reserva Biosfera del Manu.',
  },
  {
    name: 'María González Díaz',
    category: 'MBA',
    program: 'M.B.A en Administración Ambiental,',
    year: 2013,
    project:
      'La configuración del uso del suelo en el estado de Guanajuato, México y su relación con el subsidio a la actividad agrícola y las políticas de conservación de ecosistemas y recursos naturales.',
  },
  {
    name: 'Michael Osina Torrez',
    category: 'MBA',
    program: 'M.B.A en Negocios Ambientales,',
    year: 2013,
    project: 'Creación de una Consultora de Servicios Ambientales "NatuTreatment".',
  },
  {
    name: 'José Eduardo Galindo Avila',
    category: 'MBA',
    program: 'M.B.A en Administración Ambiental,',
    year: 2013,
    project:
      'Análisis Comparativo del Costo de Oportunidad del Mantenimiento de los Ecosistemas Forestales en el Nor-Oeste Amazónico de Bolivia.',
  },
  {
    name: 'Joan Garin Elizalde Barat',
    category: 'MBA',
    program: 'M.B.A en Administración del Turismo sostenible,',
    year: 2013,
    project: 'YEJO Retreat, para la zona de Zhejiang (China).',
  },
  {
    name: 'Lorenzo Uche Tumo',
    category: 'MBA',
    program: 'M.B.A en Negocios Ambientales,',
    year: 2013,
    project: 'Negocio Ambiental del Cacao Silvestre de Mojos.',
  },
  {
    name: 'Ramiro Rodriguez A. Casal',
    category: 'MBA',
    program: 'M.B.A en Negocios Ambientales,',
    year: 2013,
    project: 'Hez de Malta y Adjuntos Pelletizados para Nutrición de Ganado Lechero.',
  },
  {
    name: 'Juan Aristizábal Pino',
    category: 'MBA',
    program: 'M.B.A en Negocios Ambientales,',
    year: 2013,
    project:
      'Plan de Negocios para crear una Empresa de Asesoría en Diseño Sostenible y Certificación LEED para Edificios Corporativos en Colombia.',
  },
  {
    name: 'Alexander Reyes Moreno',
    category: 'MBA',
    program: 'M.B.A en Administración Ambiental sostenible,',
    year: 2013,
    project:
      'Proyecto Ecosostenible con Cultivos Urbanos y Calentador Solar realizados con Materiales Reutilizables y Botellas Pet, basado en la Generación de Conciencia Ambiental, en la Comunidad Localidad N°8 Kennedy, de la Ciudad de Bogotá D.C.',
  },
  {
    name: 'Sebastián Gonzáles Montoya',
    category: 'MBA',
    program: 'M.B.A en Administración Ambiental sostenible,',
    year: 2013,
    project:
      'Propuesta de Gestión Ambiental para la Recuperación y Reciclaje de Materiales de Construcción y Demolición.',
  },
  {
    name: 'Tatiana Jasmin Lovric Gotz',
    category: 'MBA',
    program: 'M.B.A en Administración Ambiental sostenible,',
    year: 2013,
    project: 'Planta de Reciclaje Vertedero Potrerito.',
  },
  {
    name: 'Rosa Milagros Rivera García',
    category: 'MBA',
    program: 'M.B.A en Administración del Turismo sostenible,',
    year: 2013,
    project: 'Empresa Ecoturística para la observación y Nado con Tortugas Marinas en la Costa de Oaxaca.',
  },
  {
    name: 'Denise Echeverria Robert',
    category: 'MBA',
    program: 'M.B.A en Negocios Ambientales,',
    year: 2013,
    project: 'Estrategia de Biocomercio Sostenible para el aprovechamiento del Pargo Manchado (Lutjanus guttatus).',
  },
  {
    name: 'Cristian Morales Moncayo',
    category: 'MBA',
    program: 'M.B.A en Negocios Ambientales,',
    year: 2014,
    project: 'Implementación de una Granja Productora de Bioinsumos.',
  },
  {
    name: 'Lizzie Palomino Roggero',
    category: 'MBA',
    program: 'M.B.A en Administración Ambiental,',
    year: 2014,
    project: 'Restauración Ecológica en Zonas Rurales Metodología para Proyecto Piloto.',
  },
  {
    name: 'André de Almeida Mendonça',
    category: 'MBA',
    program: 'M.B.A en Administración Ambiental,',
    year: 2014,
    project:
      'Política Ambiental de Bahía Pesca S/A: Elaboración de Propuesta a Partir de una Evaluación del Ciclo de Vida del Pescado.',
  },
  {
    name: 'Cintia Romina Sosa Ramírez',
    category: 'MBA',
    program: 'M.B.A en Administración del Turismo Sostenible,',
    year: 2014,
    project: 'Proyectos de Turismo Rural Sostenible en Pueblos Deshabitados del Territorio Español.',
  },
  {
    name: 'Denise Lola Castrillo Guzmán',
    category: 'MBA',
    program: 'M.B.A en Administración Ambiental,',
    year: 2014,
    project: 'Impacto de las Políticas de Producción Más Limpia (PML) en la Industria Manufacturera en Bolivia.',
  },
  {
    name: 'Paula Andrea Giraldo Serna',
    category: 'MBA',
    program: 'M.B.A en Administración Ambiental,',
    year: 2014,
    project:
      'De Factibilidad para la Instalación de Plantas de Conversión de los Residuos Urbanos, en Fuente de Energía Eléctrica Renovable y Sostenible, Basuras por Energía.',
  },
  {
    name: 'Verónica Maribel Quilumba Gudiño',
    category: 'MBA',
    program: 'M.B.A en Negocios Ambientales,',
    year: 2014,
    project:
      'Empresa para la Elaboración de Productos y Subproductos del Guarango (Caesalpinia spinosa), como iniciativa de uso Sostenible de Especies Nativas y Fomento a la Forestación Productiva, Cantón Quito, Provincia de Pichincha.',
  },
  {
    name: 'Marcela Isabel Aguirre Flores',
    category: 'MBA',
    program: 'M.B.A en Administración del Turismo sostenible,',
    year: 2014,
    project: 'PACAJES: Turismo Sostenible del Pueblo.',
  },
  {
    name: 'Juan Daniel Naranjo Coronado',
    category: 'MBA',
    program: 'M.B.A en Administración Ambiental,',
    year: 2014,
    project:
      'Implementación de la Gestión Ambiental en los Procesos de Rehabilitación Sostenible de la Vivienda para su Adecuación hacia usos Comerciales.',
  },
  {
    name: 'Diana Carolina Grajales Bustos',
    category: 'MBA',
    program: 'M.B.A en Administración Ambiental,',
    year: 2014,
    project:
      'Valoración Económica de los Servicios Ambientales que Proveen los Cerros Orientales de Bogotá por Medio de la Metodología de Valoración Contingente.',
  },
  {
    name: 'Brenda Estella Durand Lira',
    category: 'MBA',
    program: 'M.B.A en Administración del Turismo sostenible,',
    year: 2014,
    project: 'Ruta del Café Misha. el Café más caro y raro del Mundo la Merced, Provincia de Chanchamayo-Perú.',
  },
  {
    name: 'Monica Moraes Lins de Barros',
    category: 'MBA',
    program: 'M.B.A en Administración Ambiental,',
    year: 2014,
    project:
      'Tratamiento de Relaves Mineros Contaminados con Plomo a través de Fitorremediación: El caso de la Mina San Vicente, SIMSA, Perú.',
  },
  {
    name: 'Elvira Emilia Rivera Tena',
    category: 'MBA',
    program: 'M.B.A en Administración Ambiental,',
    year: 2014,
    project:
      'Propuesta de Implementación de un Sistema Integrado de Gestión Ambiental, de Seguridad y Salud Ocupacional, para E.P.S Chavín S.A.',
  },
  {
    name: 'Jonathan Ruíz Lotero',
    category: 'MBA',
    program: 'M.B.A en Administración Ambiental,',
    year: 2014,
    project:
      'Primera aproximación a la identificación de los Factores Antropogénicos de Impacto Ambiental de las principales actividades del Turismo de Aventura en el sector de la Sabana de Bogotá y alrededores.',
  },
  {
    name: 'Vanesa Ccahua Gutiérrez',
    category: 'MBA',
    program: 'M.B.A en Administración del Turismo Sostenible,',
    year: 2014,
    project:
      'Centro para la Conservación de la Bioculturalidad y Ecología Amazónica en la Zona de Amortiguamiento de la Reserva Biosfera del Manu.',
  },
  {
    name: 'Germán Onofre Morocco',
    category: 'MBA',
    program: 'M.B.A en Negocios Ambientales,',
    year: 2015,
    project:
      'Producción de Barbasco (Lonchocarpus Nicou L.) en el Marco de la Agricultura Orgánica y el Biocomercio Sostenible en la región tropical de Puno para la Industria de Bioinsecticidas.',
  },
  {
    name: 'Iris Manzur Vaquerano',
    category: 'MBA',
    program: 'M.B.A en Administración del Turismo Sostenible,',
    year: 2015,
    project: 'Desarrollo De Plan Maestro 2015 Para El Operador De Turismo Mijiticas Tours.',
  },
  {
    name: 'Julio Tolentino Toro',
    category: 'MBA',
    program: 'M.B.A en Administración del Turismo Sostenible,',
    year: 2015,
    project:
      'Diagnóstico, Direccionamiento y Proyección Estratégica de la Actividad Turística de la Comunidad Atacameña de Coyo: Hacia la Construcción de un Modelo de Gestión Sostenible de Turismo Comunitario. San Pedro de Atacama, Región de Antofagasta, Chile.',
  },
  {
    name: 'Santiago García-Huidobro',
    category: 'MBA',
    program: 'M.B.A en Administración del Turismo Sostenible,',
    year: 2015,
    project: 'PLADETUR Comuna de Río Ibáñez.',
  },
  {
    name: 'Maria del Mar Furró Vidal',
    category: 'MBA',
    program: 'M.B.A en Administración del Turismo sostenible,',
    year: 2015,
    project: 'Consultoría de Implementación de Rutas de Turismo Responsable en destinos Maduros y emergentes.',
  },
  {
    name: 'Maria del Rocío Díaz Casado',
    category: 'MBA',
    program: 'M.B.A en Administración del Turismo sostenible,',
    year: 2015,
    project: 'Consultoría y Buscador Rural Tourist Experience.',
  },
  {
    name: 'Sandra Bucio Sánchez',
    category: 'MBA',
    program: 'M.B.A en Administración Ambiental,',
    year: 2015,
    project:
      'Apropiación Cultural de Indicadores de Eco – Eficiencia en el Consciente Colectivo de dos Unidades de Negocio con Climas Organizacionales Independientes.',
  },
  {
    name: 'Carmina Zuñiga Uribe',
    category: 'MBA',
    program: 'M.B.A en Administración Ambiental,',
    year: 2015,
    project:
      'La Sistematización de la Gestión Ambiental como Herramienta para el Cumplimiento de la Responsabilidad Social en Ayuntamiento de San Luis Potosí, México.',
  },
  {
    name: 'María José Prado García',
    category: 'MBA',
    program: 'M.B.A en Negocios Ambientales,',
    year: 2015,
    project: 'Consultoría Educacional Eco-Empleo.',
  },
  {
    name: 'Santiago García-Huidobro',
    category: 'MBA',
    program: 'M.B.A en Administración del Turismo Sostenible,',
    year: 2015,
    project: 'PLADETUR Comuna de Río Ibáñez.',
  },
];
