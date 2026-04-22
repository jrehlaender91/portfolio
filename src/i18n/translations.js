// All user-facing strings live here. Each language mirrors the same shape.
// JSX stays out of this file — components compose it using these pieces.

export const LANGUAGES = ['en', 'es']
export const DEFAULT_LANGUAGE = 'es'

export const translations = {
  en: {
    meta: {
      htmlLang: 'en',
      title: 'Jorge Rehlaender — Interdisciplinary Professional',
      description:
        'Jorge Rehlaender — interdisciplinary professional working across music, acoustics, education, and technology.',
    },
    nav: {
      home: 'Home',
      menu: 'Menu',
      languageLabel: 'Language',
      links: [
        { href: '#about', label: 'About' },
        { href: '#work', label: 'Work' },
        { href: '#experience', label: 'Experience' },
        { href: '#education', label: 'Education' },
        { href: '#writing', label: 'Writing' },
        { href: '#contact', label: 'Contact' },
      ],
    },
    hero: {
      eyebrow: 'Portfolio · 2026',
      firstName: 'Jorge',
      lastName: 'Rehlaender',
      // Segments for the lede: plain text vs. emphasized words.
      ledeBefore: 'An interdisciplinary professional working at the intersection of ',
      ledeWords: ['sound', 'space', 'learning', 'systems'],
      ledeJoiners: [', ', ', ', ', and '],
      ledeAfter:
        ' — building experiences where each discipline sharpens the others.',
      disciplines: ['Music', 'Acoustics', 'Education', 'Technology'],
      ctaPrimary: 'See selected work',
      ctaGhost: 'Get in touch',
      scroll: 'scroll',
      location: 'Monterrey · Remote',
    },
    about: {
      eyebrow: '01 — About',
      titleA: 'Four disciplines,',
      titleB: 'one practice.',
      lede:
        'I work where sound, space, learning, and systems overlap. My background sits between music, marketing, and acoustic design for art and entertainment — wherever those fields meet is where I keep finding the interesting problems.',
      body:
        'I run Vacío (acoustic design), teach at Tecnológico de Monterrey, and have led digital marketing for B2B consulting and travel brands. Melómano at heart: the craft comes from listening first, and building only what makes the work better.',
      pillars: [
        {
          key: 'music',
          tag: 'Music',
          title: 'Performance & composition',
          body: 'Digital Music Production engineer; years of listening and making shape how I teach, design, and market around sound.',
        },
        {
          key: 'acoustics',
          tag: 'Acoustics',
          title: 'Rooms, materials, measurement',
          body: 'Through Vacío I design acoustic products and spaces — translating physics into environments that feel honest and intelligible.',
        },
        {
          key: 'education',
          tag: 'Education',
          title: 'Teaching & curriculum',
          body: 'Faculty at Tec de Monterrey — I design blocks on sonic creativity and songwriting, with consistently +9.0 student satisfaction.',
        },
        {
          key: 'technology',
          tag: 'Technology',
          title: 'Tools that serve the craft',
          body: 'Digital marketing, web, and analytics — from B2B growth at Sintec to this site. Tech when it makes the work better, never as spectacle.',
        },
      ],
    },
    work: {
      eyebrow: '02 — Selected work',
      titleA: 'Projects where two disciplines',
      titleB: 'meet in the middle.',
      listLabel: 'Selected projects',
      projects: [
        {
          index: '01',
          year: '2015 — Now',
          title: 'Vacío',
          tags: ['Music', 'Acoustics'],
          blurb: 'Founder and project manager of an acoustic design studio — ten years building products, e-commerce, CRM, content and brand around how people experience sound in a space.',
          meta: 'Studio / Business',
        },
        {
          index: '02',
          year: '2020 — Now',
          title: 'Curriculum design · Tec de Monterrey',
          tags: ['Music', 'Education'],
          blurb: 'Designing and teaching blocks on Sonic Creativity and Songwriting Analysis & Creation for the Digital Music Production program — sustained +9.0 student satisfaction.',
          meta: 'Curriculum',
        },
        {
          index: '03',
          year: '2018 — 2022',
          title: 'B2B marketing at Sintec',
          tags: ['Technology', 'Business'],
          blurb: 'Led digital growth for a top management consulting firm in Latin America: 225k sessions, 9.46% CTR, and 56+ published pieces per year across blog, email, and paid.',
          meta: 'Case study',
        },
        {
          index: '04',
          year: '2026',
          title: 'rehlaender.mx',
          tags: ['Music', 'Technology'],
          blurb: 'This site. Hand-built in React + Vite, bilingual by design, deployed continuously on Vercel. A writing and work space for the coming years.',
          meta: 'Product',
        },
      ],
    },
    experience: {
      eyebrow: '03 — Experience',
      titleA: 'A path that keeps',
      titleB: 'folding back on itself.',
      items: [
        {
          period: '2015 — Now',
          role: 'Founder / Project Manager',
          org: 'Vacío',
          notes: 'Acoustic design business: products, e-commerce, CRM, content strategy, and client projects.',
        },
        {
          period: '2020 — Now',
          role: 'Faculty · Contract Professor',
          org: 'Tecnológico de Monterrey',
          notes: 'Teaching blocks on Sonic Creativity and Songwriting Analysis & Creation for Digital Music Production.',
        },
        {
          period: '2018 — 2022',
          role: 'Analyst → Marketing Coordinator',
          org: 'Sintec Consulting',
          notes: 'Led B2B digital marketing: content, SEO, email, paid, analytics. 225k sessions, 9.46% CTR, 56+ pieces/year.',
        },
        {
          period: '2017 — 2018',
          role: 'Digital Marketing Coordinator',
          org: 'Directrips',
          notes: 'Owned digital acquisition and content for a travel-tech platform.',
        },
      ],
    },
    education: {
      eyebrow: '04 — Education',
      titleA: 'Degrees and',
      titleB: 'certifications.',
      degreesLabel: 'Degrees',
      certsLabel: 'Certifications',
      degrees: [
        {
          period: '2023 — 2024',
          title: 'MBA in Arts Innovation',
          org: 'The Global Leaders Institute',
        },
        {
          period: '2020 — 2021',
          title: 'Master in Social Innovation',
          org: 'Learning by Helping',
        },
        {
          period: '2010 — 2015',
          title: 'Engineering in Digital Music Production',
          org: 'Tecnológico de Monterrey',
        },
      ],
      certifications: [
        'Pro Tools Specialist',
        'Chartmetric Certified',
        'Google Tag Manager',
        'Digital Marketing',
        'Marketing for Musicians',
      ],
    },
    writing: {
      eyebrow: '05 — Writing',
      titleA: 'Notes on listening,',
      titleAEmphasis: 'listening',
      titleB: 'teaching, and making.',
      minutes: (n) => `${n} min read`,
      posts: [
        {
          date: 'Soon',
          title: 'A space to start writing',
          kind: 'Invitation',
          excerpt: 'This section is a placeholder on purpose. I plan to use it to think out loud about music, acoustics, teaching, and the business around them — come back soon.',
          minutes: 1,
        },
      ],
    },
    contact: {
      eyebrow: '06 — Contact',
      titleA: 'Let\u2019s build something',
      titleB: 'worth listening to.',
      sub: 'Teaching, consulting, acoustic design, or a project that crosses two of my disciplines — I\u2019m open to conversations. No form, just a direct line.',
      cta: 'Write me',
      channels: [
        { label: 'Email', value: 'jrehlaender91@gmail.com', href: 'mailto:jrehlaender91@gmail.com' },
        { label: 'LinkedIn', value: 'in/jrehlaender', href: 'https://www.linkedin.com/in/jrehlaender/' },
        { label: 'GitHub', value: '@jrehlaender91', href: 'https://github.com/jrehlaender91/' },
        { label: 'Location', value: 'Monterrey · Remote', href: null },
      ],
    },
    footer: {
      built: 'Built in React · crafted with care',
    },
  },

  es: {
    meta: {
      htmlLang: 'es',
      title: 'Jorge Rehlaender — Profesional Interdisciplinario',
      description:
        'Jorge Rehlaender — profesional interdisciplinario que trabaja entre música, acústica, educación y tecnología.',
    },
    nav: {
      home: 'Inicio',
      menu: 'Menú',
      languageLabel: 'Idioma',
      links: [
        { href: '#about', label: 'Perfil' },
        { href: '#work', label: 'Trabajo' },
        { href: '#experience', label: 'Experiencia' },
        { href: '#education', label: 'Formación' },
        { href: '#writing', label: 'Escritos' },
        { href: '#contact', label: 'Contacto' },
      ],
    },
    hero: {
      eyebrow: 'Portafolio · 2026',
      firstName: 'Jorge',
      lastName: 'Rehlaender',
      ledeBefore: 'Un profesional interdisciplinario que trabaja en la intersección del ',
      ledeWords: ['sonido', 'espacio', 'aprendizaje', 'sistemas'],
      // Each noun gets its own article; Spanish joins the last item with "y" and no comma.
      ledeJoiners: [', el ', ', el ', ' y los '],
      ledeAfter:
        ' — construyendo experiencias donde cada disciplina afila a las demás.',
      disciplines: ['Música', 'Acústica', 'Educación', 'Tecnología'],
      ctaPrimary: 'Ver trabajo seleccionado',
      ctaGhost: 'Hablemos',
      scroll: 'desliza',
      location: 'Monterrey · Remoto',
    },
    about: {
      eyebrow: '01 — Perfil',
      titleA: 'Cuatro disciplinas,',
      titleB: 'una sola práctica.',
      lede:
        'Trabajo donde se cruzan el sonido, el espacio, el aprendizaje y los sistemas. Mi formación vive entre la música, la mercadotecnia y el diseño acústico para el arte y el entretenimiento — ahí es donde siempre encuentro los problemas interesantes.',
      body:
        'Dirijo Vacío (diseño acústico), doy clase en el Tecnológico de Monterrey y he liderado marketing digital para consultoría B2B y marcas de viajes. Melómano de cabo a rabo: el oficio empieza por escuchar, y solo construyo lo que mejora el trabajo.',
      pillars: [
        {
          key: 'music',
          tag: 'Música',
          title: 'Interpretación y composición',
          body: 'Ingeniero en Producción Musical Digital; años de escuchar y hacer moldean cómo enseño, diseño y comunico alrededor del sonido.',
        },
        {
          key: 'acoustics',
          tag: 'Acústica',
          title: 'Salas, materiales, medición',
          body: 'A través de Vacío diseño productos y espacios acústicos — traduzco la física a entornos honestos e inteligibles.',
        },
        {
          key: 'education',
          tag: 'Educación',
          title: 'Enseñanza y currículo',
          body: 'Profesor de cátedra en el Tec de Monterrey — diseño bloques de Creatividad Sonora y Análisis y Creación de Canciones con evaluación +9.0.',
        },
        {
          key: 'technology',
          tag: 'Tecnología',
          title: 'Herramientas al servicio del oficio',
          body: 'Marketing digital, web y analítica — del crecimiento B2B en Sintec a este sitio. Tecnología cuando mejora el trabajo, nunca como espectáculo.',
        },
      ],
    },
    work: {
      eyebrow: '02 — Trabajo seleccionado',
      titleA: 'Proyectos donde dos disciplinas',
      titleB: 'se encuentran a medio camino.',
      listLabel: 'Proyectos seleccionados',
      projects: [
        {
          index: '01',
          year: '2015 — Hoy',
          title: 'Vacío',
          tags: ['Música', 'Acústica'],
          blurb: 'Fundador y project manager de un estudio de diseño acústico — diez años construyendo productos, e-commerce, CRM, contenido y marca alrededor de cómo la gente experimenta el sonido en un espacio.',
          meta: 'Estudio / Negocio',
        },
        {
          index: '02',
          year: '2020 — Hoy',
          title: 'Diseño de cátedra · Tec de Monterrey',
          tags: ['Música', 'Educación'],
          blurb: 'Diseño e impartición de bloques de Creatividad Sonora y Análisis y Creación de Canciones para la carrera de Producción Musical Digital — evaluación sostenida de +9.0.',
          meta: 'Currículo',
        },
        {
          index: '03',
          year: '2018 — 2022',
          title: 'Marketing B2B en Sintec',
          tags: ['Tecnología', 'Negocios'],
          blurb: 'Lideré el crecimiento digital de una de las principales consultoras de gestión de Latinoamérica: 225k sesiones, 9.46% CTR y más de 56 piezas publicadas al año en blog, email y paid.',
          meta: 'Caso de estudio',
        },
        {
          index: '04',
          year: '2026',
          title: 'rehlaender.mx',
          tags: ['Música', 'Tecnología'],
          blurb: 'Este sitio. Hecho a mano en React + Vite, bilingüe por diseño y desplegado continuamente en Vercel. Un espacio de trabajo y escritura para los próximos años.',
          meta: 'Producto',
        },
      ],
    },
    experience: {
      eyebrow: '03 — Experiencia',
      titleA: 'Un camino que siempre',
      titleB: 'se pliega sobre sí mismo.',
      items: [
        {
          period: '2015 — Hoy',
          role: 'Fundador / Project Manager',
          org: 'Vacío',
          notes: 'Negocio de diseño acústico: productos, e-commerce, CRM, estrategia de contenido y proyectos con cliente.',
        },
        {
          period: '2020 — Hoy',
          role: 'Profesor de Cátedra',
          org: 'Tecnológico de Monterrey',
          notes: 'Imparto bloques de Creatividad Sonora y Análisis y Creación de Canciones para Producción Musical Digital.',
        },
        {
          period: '2018 — 2022',
          role: 'Analista → Coordinador de Marketing',
          org: 'Sintec Consulting',
          notes: 'Lideré marketing digital B2B: contenido, SEO, email, paid y analítica. 225k sesiones, 9.46% CTR, 56+ piezas al año.',
        },
        {
          period: '2017 — 2018',
          role: 'Coordinador de Marketing Digital',
          org: 'Directrips',
          notes: 'Responsable de adquisición digital y contenido para una plataforma travel-tech.',
        },
      ],
    },
    education: {
      eyebrow: '04 — Formación',
      titleA: 'Grados y',
      titleB: 'certificaciones.',
      degreesLabel: 'Grados',
      certsLabel: 'Certificaciones',
      degrees: [
        {
          period: '2023 — 2024',
          title: 'MBA en Arts Innovation',
          org: 'The Global Leaders Institute',
        },
        {
          period: '2020 — 2021',
          title: 'Máster en Innovación Social',
          org: 'Learning by Helping',
        },
        {
          period: '2010 — 2015',
          title: 'Ingeniería en Producción Musical Digital',
          org: 'Tecnológico de Monterrey',
        },
      ],
      certifications: [
        'Pro Tools Specialist',
        'Chartmetric Certified',
        'Google Tag Manager',
        'Marketing Digital',
        'Marketing para Músicos',
      ],
    },
    writing: {
      eyebrow: '05 — Escritos',
      titleA: 'Notas sobre escuchar,',
      titleAEmphasis: 'escuchar',
      titleB: 'enseñar y construir.',
      minutes: (n) => `${n} min de lectura`,
      posts: [
        {
          date: 'Pronto',
          title: 'Un espacio para empezar a escribir',
          kind: 'Invitación',
          excerpt: 'Esta sección está vacía a propósito. Planeo usarla para pensar en voz alta sobre música, acústica, enseñanza y el negocio alrededor — vuelve pronto.',
          minutes: 1,
        },
      ],
    },
    contact: {
      eyebrow: '06 — Contacto',
      titleA: 'Construyamos algo',
      titleB: 'que valga la pena escuchar.',
      sub: 'Docencia, consultoría, diseño acústico, o un proyecto que cruce dos de mis disciplinas — estoy abierto a conversaciones. Sin formulario, línea directa.',
      cta: 'Escríbeme',
      channels: [
        { label: 'Correo', value: 'jrehlaender91@gmail.com', href: 'mailto:jrehlaender91@gmail.com' },
        { label: 'LinkedIn', value: 'in/jrehlaender', href: 'https://www.linkedin.com/in/jrehlaender/' },
        { label: 'GitHub', value: '@jrehlaender91', href: 'https://github.com/jrehlaender91/' },
        { label: 'Ubicación', value: 'Monterrey · Remoto', href: null },
      ],
    },
    footer: {
      built: 'Construido en React · hecho con cuidado',
    },
  },
}
