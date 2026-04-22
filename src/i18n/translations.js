// All user-facing strings live here. Each language mirrors the same shape.
// JSX stays out of this file — components compose it using these pieces.

export const LANGUAGES = ['en', 'es']
export const DEFAULT_LANGUAGE = 'en'

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
      location: 'Mexico City / Remote',
    },
    about: {
      eyebrow: '01 — About',
      titleA: 'Four disciplines,',
      titleB: 'one practice.',
      lede:
        'I work where sound, space, learning, and systems overlap. Every project I take on borrows from at least two of those domains — that\u2019s where the interesting problems live.',
      body:
        'My approach is quiet and pragmatic: study the constraints, measure what you can, and design for the people who will actually live with the result. I care about craft, but I care more about whether the thing works in the room, in the classroom, or in the shipping product.',
      pillars: [
        {
          key: 'music',
          tag: 'Music',
          title: 'Performance & composition',
          body: 'Years of practice shape how I listen — to instruments, to rooms, and to the people I teach or design for.',
        },
        {
          key: 'acoustics',
          tag: 'Acoustics',
          title: 'Rooms, materials, measurement',
          body: 'From impulse responses to room treatment, I translate physics into spaces that feel honest and intelligible.',
        },
        {
          key: 'education',
          tag: 'Education',
          title: 'Teaching & curriculum',
          body: 'I build courses that move from intuition to instrument — so students leave with craft, not just concepts.',
        },
        {
          key: 'technology',
          tag: 'Technology',
          title: 'Tools that serve the craft',
          body: 'Code, DSP, and the web — used as instruments. I build software when it makes the work better, never as a spectacle.',
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
          year: '2025',
          title: 'Room, Measured',
          tags: ['Acoustics', 'Technology'],
          blurb: 'A browser tool that turns a phone-captured sweep into a readable impulse response — designed for musicians, not engineers.',
          meta: 'Case study',
        },
        {
          index: '02',
          year: '2024',
          title: 'Ensemble Listening',
          tags: ['Music', 'Education'],
          blurb: 'A 12-week curriculum teaching ensemble awareness through listening exercises, recording review, and structured peer feedback.',
          meta: 'Curriculum',
        },
        {
          index: '03',
          year: '2024',
          title: 'Field School',
          tags: ['Education', 'Acoustics'],
          blurb: 'A portable acoustics lab for secondary schools — measurement hardware, lesson plans, and a scoring rubric that teachers actually use.',
          meta: 'Program',
        },
        {
          index: '04',
          year: '2023',
          title: 'Signal Practice',
          tags: ['Music', 'Technology'],
          blurb: 'A metronome and DSP sandbox built for rehearsal rooms with poor acoustics — stable, readable, and never in the way.',
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
          period: '2023 — Now',
          role: 'Independent practice',
          org: 'Music · Acoustics · Technology',
          notes: 'Consulting, teaching, and product work at the intersection of sound and learning.',
        },
        {
          period: '2021 — 2023',
          role: 'Faculty / Workshop lead',
          org: 'University & private studios',
          notes: 'Designed and taught curricula on performance, listening, and acoustic measurement.',
        },
        {
          period: '2018 — 2021',
          role: 'Musician & producer',
          org: 'Ensembles · Studios · Venues',
          notes: 'Performed and recorded across chamber, ensemble, and electronic contexts.',
        },
        {
          period: '2016 — 2018',
          role: 'Engineering & software',
          org: 'Tech teams',
          notes: 'Shipped web and DSP tooling. Where my technology practice started.',
        },
      ],
    },
    writing: {
      eyebrow: '04 — Writing',
      titleA: 'Notes on listening,',
      titleAEmphasis: 'listening',
      titleB: 'teaching, and making.',
      minutes: (n) => `${n} min read`,
      posts: [
        {
          date: '2026 · 03',
          title: 'What a room tells you before you play',
          kind: 'Essay',
          excerpt: 'On the pre-verbal part of acoustics — the things musicians notice about a space in the first ten seconds, and why they matter.',
          minutes: 7,
        },
        {
          date: '2025 · 11',
          title: 'Teaching listening, not just theory',
          kind: 'Notes',
          excerpt: 'Why most music curricula skip the most important skill, and a small sequence of exercises I use to re-introduce it.',
          minutes: 5,
        },
        {
          date: '2025 · 08',
          title: 'A web-first impulse response workflow',
          kind: 'Technical',
          excerpt: 'How browser APIs make decent acoustic measurement surprisingly approachable — and where the honest limitations begin.',
          minutes: 9,
        },
      ],
    },
    contact: {
      eyebrow: '05 — Contact',
      titleA: 'Let\u2019s build something',
      titleB: 'worth listening to.',
      sub: 'Teaching, consulting, or a project that crosses two of my disciplines — I\u2019m open to conversations. No form, just a direct line.',
      cta: 'Write me',
      channels: [
        { label: 'Email', value: 'jrehlaender91@gmail.com', href: 'mailto:jrehlaender91@gmail.com' },
        { label: 'LinkedIn', value: 'in/jorgerehlaender', href: 'https://www.linkedin.com/in/jrehlaender/' },
        { label: 'GitHub', value: '@jrehlaender', href: 'https://github.com/jrehlaender91/' },
        { label: 'Location', value: 'Mexico City · Remote', href: null },
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
      location: 'Ciudad de México / Remoto',
    },
    about: {
      eyebrow: '01 — Perfil',
      titleA: 'Cuatro disciplinas,',
      titleB: 'una sola práctica.',
      lede:
        'Trabajo donde se cruzan el sonido, el espacio, el aprendizaje y los sistemas. Cada proyecto que tomo toma prestado de al menos dos de esos campos — ahí es donde viven los problemas interesantes.',
      body:
        'Mi enfoque es tranquilo y pragmático: estudiar las limitaciones, medir lo que se pueda, y diseñar para las personas que van a convivir con el resultado. Me importa el oficio, pero me importa más si la cosa funciona en la sala, en el aula o en el producto final.',
      pillars: [
        {
          key: 'music',
          tag: 'Música',
          title: 'Interpretación y composición',
          body: 'Años de práctica moldean cómo escucho — a los instrumentos, a las salas, y a las personas a las que enseño o para las que diseño.',
        },
        {
          key: 'acoustics',
          tag: 'Acústica',
          title: 'Salas, materiales, medición',
          body: 'De respuestas al impulso a tratamiento acústico, traduzco la física a espacios honestos e inteligibles.',
        },
        {
          key: 'education',
          tag: 'Educación',
          title: 'Enseñanza y currículo',
          body: 'Construyo cursos que pasan de la intuición al instrumento — para que los estudiantes salgan con oficio, no solo con conceptos.',
        },
        {
          key: 'technology',
          tag: 'Tecnología',
          title: 'Herramientas al servicio del oficio',
          body: 'Código, DSP y la web — usados como instrumentos. Hago software cuando mejora el trabajo, nunca como espectáculo.',
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
          year: '2025',
          title: 'Sala, Medida',
          tags: ['Acústica', 'Tecnología'],
          blurb: 'Una herramienta web que convierte un barrido capturado con el teléfono en una respuesta al impulso legible — pensada para músicos, no para ingenieros.',
          meta: 'Caso de estudio',
        },
        {
          index: '02',
          year: '2024',
          title: 'Escucha en Conjunto',
          tags: ['Música', 'Educación'],
          blurb: 'Un currículo de 12 semanas que enseña conciencia de ensamble mediante ejercicios de escucha, revisión de grabaciones y retroalimentación estructurada entre pares.',
          meta: 'Currículo',
        },
        {
          index: '03',
          year: '2024',
          title: 'Escuela de Campo',
          tags: ['Educación', 'Acústica'],
          blurb: 'Un laboratorio de acústica portátil para secundarias — hardware de medición, planes de clase y una rúbrica que los profesores sí usan.',
          meta: 'Programa',
        },
        {
          index: '04',
          year: '2023',
          title: 'Práctica de Señal',
          tags: ['Música', 'Tecnología'],
          blurb: 'Un metrónomo y sandbox de DSP hechos para salas de ensayo con mala acústica — estables, legibles, y nunca en el camino.',
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
          period: '2023 — Hoy',
          role: 'Práctica independiente',
          org: 'Música · Acústica · Tecnología',
          notes: 'Consultoría, docencia y producto en la intersección del sonido y el aprendizaje.',
        },
        {
          period: '2021 — 2023',
          role: 'Docente / Tallerista',
          org: 'Universidad y estudios privados',
          notes: 'Diseñé e impartí currículos sobre interpretación, escucha y medición acústica.',
        },
        {
          period: '2018 — 2021',
          role: 'Músico y productor',
          org: 'Ensambles · Estudios · Foros',
          notes: 'Interpreté y grabé en contextos de cámara, ensamble y electrónicos.',
        },
        {
          period: '2016 — 2018',
          role: 'Ingeniería y software',
          org: 'Equipos de tecnología',
          notes: 'Envié herramientas web y de DSP. Ahí empezó mi práctica tecnológica.',
        },
      ],
    },
    writing: {
      eyebrow: '04 — Escritos',
      titleA: 'Notas sobre escuchar,',
      titleAEmphasis: 'escuchar',
      titleB: 'enseñar y construir.',
      minutes: (n) => `${n} min de lectura`,
      posts: [
        {
          date: '2026 · 03',
          title: 'Lo que una sala te dice antes de tocar',
          kind: 'Ensayo',
          excerpt: 'Sobre la parte pre-verbal de la acústica — las cosas que los músicos notan en una sala en los primeros diez segundos, y por qué importan.',
          minutes: 7,
        },
        {
          date: '2025 · 11',
          title: 'Enseñar a escuchar, no sólo teoría',
          kind: 'Notas',
          excerpt: 'Por qué la mayoría de los currículos musicales se saltan la habilidad más importante, y una pequeña secuencia de ejercicios que uso para reintroducirla.',
          minutes: 5,
        },
        {
          date: '2025 · 08',
          title: 'Un flujo de respuesta al impulso desde el navegador',
          kind: 'Técnico',
          excerpt: 'Cómo las APIs del navegador hacen la medición acústica sorprendentemente accesible — y dónde empiezan las limitaciones honestas.',
          minutes: 9,
        },
      ],
    },
    contact: {
      eyebrow: '05 — Contacto',
      titleA: 'Construyamos algo',
      titleB: 'que valga la pena escuchar.',
      sub: 'Docencia, consultoría, o un proyecto que cruce dos de mis disciplinas — estoy abierto a conversaciones. Sin formulario, línea directa.',
      cta: 'Escríbeme',
      channels: [
        { label: 'Correo', value: 'jrehlaender91@gmail.com', href: 'mailto:jrehlaender91@gmail.com' },
        { label: 'LinkedIn', value: 'in/jorgerehlaender', href: 'https://www.linkedin.com/in/jrehlaender/' },
        { label: 'GitHub', value: '@jrehlaender', href: 'https://github.com/jrehlaender91/' },
        { label: 'Ubicación', value: 'Ciudad de México · Remoto', href: null },
      ],
    },
    footer: {
      built: 'Construido en React · hecho con cuidado',
    },
  },
}
