/**
 * Spanish copy. Transcreated, not translated (Brand Guidelines, 05 · rule 10).
 * Offer names, module names and company names stay in English.
 */
import type { Copy } from './en';

const es: Copy = {
  meta: {
    htmlLang: 'es',
    ogLocale: 'es_ES',
    langName: 'Español',
  },

  ui: {
    skip: 'Ir al contenido',
    menu: 'Menú',
    close: 'Cerrar',
    mainNav: 'Principal',
    nav: {
      advisory: 'Advisory',
      ai: 'AI in Practice',
      lab: 'The Lab',
      notes: 'Notas',
      about: 'Sobre mí',
    },
    cta: 'Hablemos',
    langLabel: 'Idioma',
    themeDark: 'Cambiar al tema oscuro',
    themeLight: 'Cambiar al tema claro',
    newTab: '(se abre en una pestaña nueva)',
    minRead: 'min de lectura',
    home: 'Inicio',
  },

  footer: {
    signature: 'Probado antes de *aconsejado.*',
    about: 'Rosso Consulting es la consultora y el laboratorio de Marco Rosso, operador, asesor y builder en tecnología hotelera.',
    work: 'Trabajo',
    read: 'Leer',
    contact: 'Contacto',
    location: 'Lugano, Suiza',
    languages: 'Trabajo en inglés, italiano y español',
    privacy: 'Privacidad',
    rights: 'Rosso Consulting',
  },

  cta: {
    title: 'Trae tu *pregunta*.',
    body: 'La primera conversación no se factura y dura unos treinta minutos. La forma del trabajo viene después.',
    button: 'Hablemos',
    or: 'O escríbeme a',
  },

  status: {
    testing: 'Testing',
    live: 'Live',
    venture: 'Venture',
    closed: 'Cerrado',
  },

  home: {
    seo: {
      title: 'Marco Rosso · Operador, asesor y builder en tecnología hotelera',
      description:
        'Dirijo lo digital y la automatización en un grupo hotelero, asesoro a empresas de tecnología hotelera y construyo con IA en mi propio laboratorio. Ayudo a los fundadores a crecer y a los hoteles a poner la IA a trabajar.',
    },
    hero: {
      label: 'Marco Rosso · Lugano',
      words: ['Opero.', 'Asesoro.', 'Construyo.'],
      intro:
        'Dirijo lo digital y la automatización en un grupo hotelero, asesoro a empresas de tecnología hotelera y construyo con IA en mi propio laboratorio. Ayudo a los fundadores a crecer y a los hoteles a poner la IA a trabajar.',
      secondary: 'Ver el Lab',
    },
    offers: [
      {
        key: 'advisory',
        audience: 'Para empresas de hotel tech',
        name: 'Advisory',
        text: 'Producto, go-to-market, posicionamiento y las presentaciones adecuadas.',
      },
      {
        key: 'ai',
        audience: 'Para hoteles',
        name: 'AI in Practice',
        text: 'El trabajo hecho con IA, y el método se queda contigo.',
      },
      {
        key: 'lab',
        audience: 'Para curiosos',
        name: 'The Lab',
        text: 'Lo que estoy probando ahora, lo que funcionó y lo que no.',
      },
    ],
    namesHeading: 'Puestos de asesor, clientes y el grupo hotelero que ayudo a dirigir',
    sides: {
      label: '01 — Tres lados',
      title: 'Una persona, tres lados de la *mesa*.',
      intro:
        'En hostelería hay pocas personas que compren tecnología como operador, asesoren a las empresas que la venden y construyan con IA por sí mismas. Yo hago las tres cosas, y cada lado mantiene honestos a los otros dos.',
      portraitAlt: 'Retrato de Marco Rosso',
      caption: 'Marco Rosso, Lugano',
      tabsLabel: 'Los tres lados de mi trabajo',
      items: [
        {
          key: 'operator',
          tab: 'Operador',
          seat: 'Del lado del hotel',
          line: 'La compro y la uso.',
          body: 'Desde 2024 soy Chief Digital Strategy & Business Automation Officer de Planhotel Hospitality Group: estrategia digital, automatización y adopción de IA dentro de un grupo hotelero real. Sé qué se adopta, qué se ignora y por qué.',
          proof: ['Planhotel Hospitality Group', 'Desde 2024'],
        },
        {
          key: 'advisor',
          tab: 'Asesor',
          seat: 'Del lado del proveedor',
          line: 'Ayudo a las empresas que la venden.',
          body: 'Casi una década en puestos comerciales en Triptease, SiteMinder, Cloudbeds y Canary Technologies, de account executive a director global. Hoy asesoro a cuatro empresas de tecnología hotelera. Los fundadores tienen la mirada del que compra y la del que vende.',
          proof: ['Canary Technologies', 'RoomPriceGenie', 'LobbyAI', 'Snapfix'],
        },
        {
          key: 'builder',
          tab: 'Builder',
          seat: 'En el banco de trabajo',
          line: 'Construyo con IA, yo mismo.',
          body: 'Nunca aprendí a programar y, aun así, creé y lancé Astia Web, un servicio de webs para hoteles y pequeños negocios, con la IA como equipo de desarrollo. Con el mismo método nacieron las marcas y las webs de Hotel Association Zanzibar, THE VIEW Lugano y Francorosso.',
          proof: ['Astia Web', 'Hotel Association Zanzibar', 'THE VIEW Lugano', 'Francorosso'],
        },
      ],
    },
    signature: {
      title: 'Probado antes de *aconsejado.*',
      promise:
        'Cada recomendación se apoya en algo que he gestionado, vendido, construido o probado. Si algo no lo he probado, lo digo, y me ofrezco a probarlo.',
    },
    wheel: {
      label: '02 — Cómo encaja todo',
      title: 'Cada línea de trabajo alimenta a las *demás*.',
      intro:
        'Asesoramiento para las empresas que construyen tecnología hotelera, trabajo práctico para los hoteles que la usan, y un laboratorio que produce las pruebas que ambos necesitan.',
      centre: 'Cada vuelta hace la siguiente más creíble.',
      replay: 'Reproducir',
      nodes: [
        {
          key: 'lab',
          name: 'The Lab',
          text: 'Pruebo cosas nuevas con IA en problemas reales. Cada experimento, salga bien o no, se convierte en una Field Note.',
        },
        {
          key: 'proof',
          name: 'Pruebas',
          text: 'Field Notes y casos documentados. Los hoteles compran a quien se ve que ya lo ha hecho.',
        },
        {
          key: 'ai',
          name: 'AI in Practice',
          text: 'Trabajo pagado dentro de los hoteles, y la prueba directa de lo que los operadores adoptan de verdad.',
        },
        {
          key: 'advisory',
          name: 'Advisory',
          text: 'Los fundadores reciben esas pruebas. A cambio aportan una visión del mercado, problemas que merece la pena resolver y, de vez en cuando, un socio para una venture.',
        },
      ],
    },
    lab: {
      title: 'Qué hay en el Lab *ahora*.',
      intro: 'El Lab solo muestra lo que existe hoy.',
      link: 'Ver el Lab',
    },
    notes: {
      label: '03 — Notas',
      title: 'Notas *recientes*.',
      link: 'Leer las notas',
    },
  },

  advisory: {
    seo: {
      title: 'Advisory para fundadores e inversores en tecnología hotelera · Rosso Consulting',
      description:
        'Asesoramiento continuo para fundadores, equipos directivos e inversores en tecnología hotelera, de alguien que la ha vendido, ha hecho crecer a quienes la venden y hoy la compra.',
    },
    hero: {
      label: 'Para empresas de tecnología hotelera',
      title: 'Un sitio en la mesa del *fundador*.',
      standfirst:
        'He vendido tecnología hotelera, he hecho crecer los equipos que la venden y hoy la compro. Fundadores y equipos directivos reciben esa mirada como asesoramiento continuo, franco y práctico.',
      secondary: 'Ver el portfolio',
    },
    deal: {
      heading: 'Los dos lados del acuerdo',
      items: [
        {
          when: '2015–2024',
          line: 'La vendí.',
          text: 'De account executive a Head of Sales EMEA en Triptease, y después SiteMinder, Cloudbeds y Canary Technologies.',
        },
        {
          when: '80+ personas',
          line: 'Hice crecer los equipos que la venden.',
          text: 'Organizaciones comerciales que pasaron de unas pocas personas a más de 80, en EMEA y a nivel global.',
        },
        {
          when: 'Desde 2024',
          line: 'Hoy la compro.',
          text: 'Chief Digital Strategy & Business Automation Officer de Planhotel Hospitality Group.',
        },
      ],
    },
    areas: {
      title: 'Donde la mirada del operador cambia las *decisiones*.',
      items: [
        {
          name: 'Producto',
          text: 'Qué adoptarán de verdad los hoteles, dónde encaja la IA en el roadmap y cómo juzga un operador un producto.',
        },
        {
          name: 'Go-to-market',
          text: 'Cliente ideal, precios y paquetes, proceso de venta, expansión en EMEA y programas de partners.',
        },
        {
          name: 'Posicionamiento',
          text: 'Relato, mensajes y marco competitivo, contrastados con la forma de pensar de quien compra en un hotel.',
        },
        {
          name: 'Red',
          text: 'Presentaciones a grupos hoteleros, partners tecnológicos e inversores, cuando sirven a ambas partes.',
        },
      ],
    },
    portfolio: {
      label: '01 — Portfolio actual',
      title: 'Cuatro empresas, ningún *solapamiento*.',
      intro: 'Un solo puesto por categoría, para que ninguna empresa del portfolio compita con otra.',
      cols: { company: 'Empresa', category: 'Categoría', role: 'Rol', focus: 'Foco' },
      visit: 'Visitar',
      items: {
        canary: {
          category: 'Plataforma de gestión de huéspedes para hoteles',
          role: 'GTM Strategic Advisor',
          focus: 'Expansión en Europa y alianzas',
        },
        rpg: {
          category: 'Revenue management para hoteles independientes',
          role: 'Advisory Board',
          focus: 'Dirección de producto y tendencias del sector',
        },
        lobbyai: {
          category: 'Agentes de IA para reservas de grupos en hoteles y viajes',
          role: 'Advisory Board',
          focus: 'Go-to-market, estrategia comercial y la perspectiva del operador',
        },
        snapfix: {
          category: 'Gestión de operaciones y mantenimiento para hoteles',
          role: 'Advisory Board',
          focus: 'Feedback de producto y go-to-market',
        },
      },
      note: 'Las relaciones se declaran y no revendo nada.',
    },
    formats: {
      title: 'Cómo trabajamos *juntos*.',
      shape: 'Formato',
      cadence: 'Frecuencia',
      items: [
        {
          name: 'Advisory board seat',
          shape: 'Asesor continuo del fundador y del equipo directivo.',
          cadence: 'Sesiones regulares, y disponibilidad entre una y otra.',
        },
        {
          name: 'Strategic GTM advisor',
          shape: 'Un encargo concreto, como una región o un programa de alianzas.',
          cadence: 'Según el encargo.',
        },
        {
          name: 'Investor support',
          shape: 'Llamadas de experto, due diligence o un rol estable de asesor sectorial para un fondo.',
          cadence: 'Por llamada, por proyecto o trimestral.',
        },
        {
          name: 'Charlas y paneles',
          shape: 'Eventos del sector, con ideas del Lab y de la experiencia como operador.',
          cadence: 'Selectiva.',
        },
      ],
    },
    investors: {
      label: 'Para inversores',
      title: 'Veo el acuerdo desde el asiento del que compra y del que *vende*.',
      body: 'Un juicio rápido y franco sobre una empresa o una tesis, desde el lado del operador y desde el del proveedor. Puede empezar con una sola llamada y crecer hacia una due diligence o un rol sectorial estable.',
      items: ['Llamadas de experto', 'Due diligence comercial', 'Asesor sectorial para un fondo'],
    },
    independence: {
      title: 'Independiente por *diseño*.',
      items: [
        {
          name: 'Primero, declarar',
          text: 'Si el producto de una empresa del portfolio puede ser relevante para ti, te lo digo desde el principio.',
        },
        {
          name: 'Información separada',
          text: 'La información de los clientes nunca llega a las empresas del portfolio, ni al revés.',
        },
        {
          name: 'Los mismos criterios para cada proveedor',
          text: 'Una empresa del portfolio en evaluación se puntúa con la misma rúbrica que cualquier otro proveedor.',
        },
      ],
      footnote: 'Cualquiera de las partes puede terminar la relación si un conflicto no se puede gestionar con honestidad.',
    },
    seats: {
      title: 'Dónde estoy sumando *puestos*.',
      intro: 'Categorías cercanas al portfolio actual, sin solaparse con él.',
      categories: ['Sistemas de gestión hotelera (PMS)', 'Distribución', 'F&B y TPV', 'Gestión de personal', 'Datos de huéspedes', 'Pagos'],
      lookFor: 'Qué busco',
      criteria: [
        'La mirada del operador cambia las decisiones de la empresa. El encaje es real, no decorativo.',
        'En el portfolio no hay ya un competidor directo.',
        'El fundador quiere que le reten, no que le aplaudan.',
        'Las condiciones protegen el trabajo independiente: IP, alcance de la no competencia y no captación se acuerdan por escrito.',
      ],
    },
    cta: {
      title: 'Trae tu *pregunta*.',
      body: 'Treinta minutos, sin coste. La forma del puesto viene después.',
    },
  },

  ai: {
    seo: {
      title: 'AI in Practice: trabajo real hecho con IA, para hoteles · Rosso Consulting',
      description:
        'Los hoteles consiguen trabajo real hecho con IA, y se quedan con el método. Brand bibles, SOPs y auditorías construidas con tu equipo y revisadas por alguien que conoce los hoteles.',
    },
    hero: {
      label: 'Para hoteles',
      title: 'De hablar de IA a herramientas que un hotel *usa*.',
      standfirst:
        'Los hoteles no necesitan otra presentación sobre IA. Necesitan los SOPs escritos, la brand bible terminada, la auditoría hecha, y un equipo que sepa hacer la siguiente.',
      secondary: 'Ver el Build menu',
    },
    promise: {
      label: 'La promesa',
      text: 'Lo construyo con tu equipo, usando IA, y el método se queda *con vosotros*.',
    },
    who: {
      title: 'Para quién es',
      text: 'Hoteles independientes, pequeños grupos y empresas familiares: propietarios, directores y jefes de departamento que quieren resultados de la IA sin contratar un equipo digital. Empiezo con hoteles en Suiza e Italia.',
    },
    why: {
      title: 'Por qué contigo, no para ti',
      text: 'Los hoteles compran trabajo terminado, no teoría. Producir el entregable real con tu equipo significa tener la herramienta ya y aprender el método por el camino. Los cursos de IA dejan poco, y las agencias se quedan el know-how.',
    },
    alongside:
      'La IA cubre los trabajos que ningún software hace bien. Funciona junto a las herramientas que tu hotel ya usa, no contra ellas.',
    path: {
      label: '01 — Start, Build, Stay',
      title: 'Tres pasos, y puedes parar después de *cualquiera*.',
      steps: [
        {
          key: 'start',
          step: 'Start',
          name: 'AI Opportunity Workshop',
          meta: 'Media jornada, presencial o en remoto',
          text: 'Media jornada para encontrar dónde la IA ahorra tiempo o genera ingresos, departamento por departamento.',
          details: [
            { k: 'Antes', v: 'Un cuestionario breve y un vistazo a tus herramientas y documentos actuales.' },
            { k: 'Durante', v: 'Un recorrido con la propiedad o la dirección y los jefes de departamento, con demostraciones en directo sobre tu propio material.' },
            { k: 'Después', v: 'En una semana, un AI Opportunity Map: casos de uso ordenados por valor y esfuerzo, con tres primeros proyectos recomendados.' },
          ],
        },
        {
          key: 'build',
          step: 'Build',
          name: 'Proyectos de alcance cerrado',
          meta: 'Uno o varios módulos, cada uno a precio fijo',
          text: 'Los entregables que un hotel más necesita, producidos con IA y revisados por alguien que conoce los hoteles.',
          details: [
            { k: 'Elige', v: 'Cualquier módulo del Build menu de abajo.' },
            { k: 'Entrega', v: 'Escuchar, construir con IA, revisar, traspasar.' },
            { k: 'Te quedas', v: 'Cada proyecto termina con un kit de traspaso y una sesión de trabajo con el equipo.' },
          ],
        },
        {
          key: 'stay',
          step: 'Stay',
          name: 'AI Advisory',
          meta: 'Mensual',
          text: 'Una sesión de trabajo al mes para seguir poniendo la IA en práctica.',
          details: [
            { k: 'Revisar', v: 'Qué está funcionando y cuánto ahorra.' },
            { k: 'Elegir', v: 'El siguiente caso de uso, con la dirección.' },
            { k: 'Repetir', v: 'Si hace falta, las auditorías de nuevo cada trimestre.' },
          ],
        },
      ],
    },
    menu: {
      title: 'El Build *menu*.',
      intro: 'Elige uno o varios módulos. Cada uno se define contigo y se presupuesta a precio fijo.',
      gets: 'Qué recibes',
      inputs: 'De qué parto',
      keeps: 'Qué te quedas',
      testingNote: 'Terminándose en el Lab. Pregúntame qué está listo hoy.',
      liveNote: 'Ya en uso con clientes.',
      modules: [
        {
          key: 'brand-bible',
          name: 'Brand Bible',
          status: 'live',
          short: 'La historia, la voz y las reglas visuales del establecimiento, por escrito y listas para usar.',
          gets: 'Historia, posicionamiento y voz del establecimiento; el lenguaje de cada punto de contacto con el huésped; reglas visuales y dirección de imagen.',
          inputs: 'Entrevistas, materiales existentes y reseñas de huéspedes.',
          keeps: 'Un kit de prompts para escribir con la voz de la marca.',
          note: '',
        },
        {
          key: 'sop-library',
          name: 'SOP Library',
          status: '',
          short: 'Los procedimientos de cada departamento en un solo formato, en los idiomas del equipo.',
          gets: 'Procedimientos operativos estándar para cada departamento, en un formato coherente y en los idiomas en los que trabaja tu equipo.',
          inputs: 'Entrevistas, recorridos y manuales existentes.',
          keeps: 'La plantilla y los prompts para escribir y actualizar los SOPs.',
          note: '',
        },
        {
          key: 'distribution-audit',
          name: 'Distribution Consistency Audit',
          status: 'testing',
          short: 'Cada incoherencia entre tus OTAs, web, motor de reservas y páginas trade, y dónde corregirla.',
          gets: 'Cada discrepancia entre OTAs, web, motor de reservas, metabuscadores y páginas de turoperadores y trade (nombres de habitaciones, descripciones, servicios, restaurantes, políticas), con qué corregir y dónde.',
          inputs: 'Los listados públicos, más las exportaciones de las extranets cuando las hay.',
          keeps: 'Una checklist y un flujo para repetirla.',
          note: 'Cubre contenido, no tarifas. La paridad tarifaria ya está bien cubierta por herramientas especializadas. Las incoherencias de contenido no, y se acumulan cada vez que algo cambia en el hotel.',
        },
        {
          key: 'guest-sentiment',
          name: 'Guest Sentiment Report',
          status: 'testing',
          short: 'Lo que dicen los huéspedes en todas las plataformas, convertido en acciones por departamento.',
          gets: 'Temas, tendencias y acciones por departamento, a partir de las reseñas en todas las plataformas.',
          inputs: 'Reseñas públicas y exportaciones de encuestas.',
          keeps: 'Un flujo trimestral repetible.',
          note: '',
        },
        {
          key: 'search-ai-visibility',
          name: 'Search & AI Visibility Audit',
          status: 'testing',
          short: 'Cómo describen tu hotel los buscadores y los asistentes de IA, y cómo corregirlos.',
          gets: 'Cómo encuentran y describen el hotel los buscadores y los asistentes de IA, y qué arreglar para que lo hagan bien.',
          inputs: 'Tu web, tus listados y las respuestas de los asistentes de IA.',
          keeps: 'Prompts de seguimiento y una checklist.',
          note: '',
        },
        {
          key: 'custom-workflows',
          name: 'Custom workflows',
          status: '',
          short: 'Para los trabajos que ningún software hace bien.',
          gets: 'Por ejemplo, respuestas a reseñas con la voz del hotel, plantillas de comunicación con huéspedes, informes para la dirección o material de onboarding para el personal.',
          inputs: 'Definidos en el workshop.',
          keeps: 'Un flujo documentado, y formación para el equipo.',
          note: '',
        },
      ],
    },
    delivery: {
      title: 'Cómo se entrega cada *proyecto*.',
      steps: [
        { name: 'Escuchar', text: 'Entender el hotel, su equipo y el material que ya existe.' },
        { name: 'Construir con IA', text: 'Borradores rápidos, iterar con el equipo, pulir hasta que esté bien.' },
        { name: 'Revisar', text: 'Alguien que conoce los hoteles revisa cada resultado antes de entregarlo.' },
        { name: 'Traspasar', text: 'Tu equipo es dueño del resultado, de los prompts y del flujo de trabajo.' },
      ],
    },
    work: {
      label: '02 — Ya en práctica',
      title: 'Marcas y webs construidas *así*.',
      items: [
        {
          kind: 'Strategic advisor · 2026',
          name: 'Hotel Association Zanzibar',
          text: 'Un logo renovado y nuevos activos digitales, una guía de marca completa y una web nueva.',
          more: 'En curso: el programa digital más amplio de la asociación, con HAZ Digital y un portal para socios.',
        },
        {
          kind: 'Cliente · Hotel, Lugano',
          name: 'THE VIEW Lugano',
          text: 'Proyectos de marca, web y operaciones para el hotel, hechos con el mismo método asistido por IA.',
          more: '',
        },
        {
          kind: 'Cliente · Agencia de viajes, Lugano',
          name: 'Francorosso',
          text: 'Un logo nuevo, una guía de marca con activos visuales y una web completamente renovada.',
          more: '',
        },
      ],
    },
    terms: {
      fee: {
        title: 'Alcance cerrado, precio fijo',
        items: [
          'Cada encargo se define conversando y se presupuesta a precio fijo. Nunca por horas.',
          'El alcance se acuerda por escrito antes de empezar.',
          'La primera conversación no se factura y dura unos treinta minutos.',
          'Stay es un retainer mensual.',
        ],
      },
      data: {
        title: 'Tu material sigue siendo tuyo',
        items: [
          'El material del hotel se usa solo para el encargo.',
          'El material confidencial solo entra en herramientas con protección de datos de nivel empresarial.',
          'La mayoría de los módulos no necesita ningún dato personal de huéspedes.',
          'Los entregables y los flujos de trabajo pertenecen al hotel.',
        ],
      },
    },
    cta: {
      title: 'Trae tu *pregunta*.',
      body: 'Empezamos con una conversación. Si hay encaje, el AI Opportunity Workshop es el primer paso de pago.',
    },
  },

  lab: {
    seo: {
      title: 'The Lab: donde se prueban las ideas · Rosso Consulting',
      description:
        'Donde pruebo lo que la IA hace posible, antes de recomendarlo. El Lab produce pruebas, servicios y, de vez en cuando, una empresa.',
    },
    hero: {
      label: 'The Lab',
      title: 'Donde se *prueban* las ideas.',
      standfirst:
        'Aquí pruebo lo que la IA hace posible en problemas reales, antes de recomendarlo a nadie. De aquí salen pruebas, servicios y, de vez en cuando, una empresa.',
      button: 'Leer las notas',
    },
    story: {
      quote:
        'Nunca aprendí a programar y, aun así, creé y lancé Astia Web a base de prompts, pruebas e iteraciones hasta que estuvo bien. Me enseñó más en unos meses que años de lectura.',
      who: 'Marco Rosso',
    },
    path: {
      title: 'Del experimento a la *empresa*.',
      stages: [
        {
          key: 'testing',
          stage: 'Experimento',
          verb: 'Probarlo',
          text: 'Un problema real, probado con IA sobre material real. Se comparte como Field Note, sea cual sea el resultado.',
        },
        {
          key: 'live',
          stage: 'Servicio',
          verb: 'Ofrecerlo',
          text: 'Cuando funciona una y otra vez, se convierte en un módulo Build de AI in Practice.',
        },
        {
          key: 'venture',
          stage: 'Venture',
          verb: 'Que vuele solo',
          text: 'Cuando supera el venture test, se convierte en una empresa con marca propia: a Rosso Consulting company.',
        },
      ],
    },
    now: {
      label: '01 — El Lab hoy',
      title: 'Lo que existe *hoy*.',
      filterLabel: 'Filtrar por estado',
      all: 'Todos',
      legend: {
        testing: 'En construcción o en prueba con material real.',
        live: 'En uso, con clientes.',
        venture: 'Funcionando con marca propia.',
      },
      empty: 'Ahora mismo no hay nada con este estado.',
      items: [
        {
          key: 'astia',
          status: 'venture',
          name: 'Astia Web',
          text: 'Webs para hoteles y pequeños negocios: guía de marca, web a medida, cada cambio y cada idioma por CHF 150 al mes por web. Construida y gestionada con IA, con clientes de pago.',
          endorsement: 'A Rosso Consulting company',
          link: 'Visitar Astia Web',
        },
        {
          key: 'brand-sites',
          status: 'live',
          name: 'Guías de marca y webs hechas con IA',
          text: 'El método detrás de los trabajos para Hotel Association Zanzibar, THE VIEW Lugano y Francorosso, que hoy se ofrece como módulos Build en AI in Practice.',
          endorsement: '',
          link: 'Ver AI in Practice',
        },
        {
          key: 'audit-toolkit',
          status: 'testing',
          name: 'Kit de auditorías con IA',
          text: 'Coherencia de la distribución, sentimiento de los huéspedes y visibilidad en buscadores y asistentes de IA, preparándose como módulos Build.',
          endorsement: '',
          link: '',
        },
      ],
    },
    test: {
      title: 'El venture test. Tienen que cumplirse *las cuatro*.',
      items: [
        { name: 'Necesidad repetida', text: 'El problema se repite en muchos clientes, de forma parecida.' },
        { name: 'Entrega estandarizada', text: 'Se puede ofrecer como servicio estándar, no como trabajo a medida.' },
        { name: 'Números que cuadran', text: 'La economía funciona a la escala que permite el mercado.' },
        { name: 'Mejor con marca propia', text: 'El mercado confía más en ello bajo un nombre propio.' },
      ],
    },
    run: {
      title: 'Cómo funciona un *experimento*.',
      steps: [
        { name: 'Una sola pregunta', text: 'Escribir antes de empezar qué debe demostrar el experimento.' },
        { name: 'Material real', text: 'Probar con contenido y datos reales de un hotel, no con demos.' },
        { name: 'Tiempo limitado', text: 'Fijar una fecha límite, para que el esfuerzo sea proporcional a la pregunta.' },
        { name: 'Decidir y compartir', text: 'Convertirlo en servicio, o cerrarlo y quedarse con la lección. Después, escribir la Field Note.' },
      ],
    },
    cta: {
      title: '¿Tienes un problema que merece la pena *probar*?',
      body: 'Si tienes algo que debería ponerse a prueba con material real, me interesa escucharlo.',
      secondary: 'Leer las notas',
    },
  },

  notes: {
    seo: {
      title: 'Notas: Field Notes y ensayos de Marco Rosso',
      description:
        'Notas breves sobre lo que probé, lo que funcionó y lo que no, y ensayos más largos sobre distribución hotelera, venta directa e IA.',
    },
    hero: {
      label: 'Notas',
      title: 'Lo que probé, lo que funcionó y lo que *no*.',
      standfirst:
        'Las Field Notes son notas breves desde el Lab: una cosa probada y lo que me enseñó. Una nueva cada dos semanas, aquí y en LinkedIn.',
    },
    langNote: 'Las notas están escritas en inglés.',
    fieldNotes: {
      title: 'Field Notes',
      noteLabel: 'Field Note',
      empty: 'Las primeras Field Notes están en camino. Sígueme en LinkedIn o suscríbete por RSS.',
    },
    essays: {
      title: 'Ensayos',
      intro: 'Textos más largos sobre distribución, venta directa e IA en hoteles.',
    },
    follow: 'Seguir en LinkedIn',
    rss: 'Feed RSS',
  },

  article: {
    back: 'Todas las notas',
    related: 'Seguir leyendo',
    essay: 'Ensayo',
    fieldNote: 'Field Note',
    authorTitle: 'Escrito por Marco Rosso',
    authorBio: 'Operador, asesor y builder en tecnología hotelera. Dirijo lo digital y la automatización en Planhotel Hospitality Group, asesoro a empresas de tecnología hotelera y construyo con IA en mi propio laboratorio.',
    progress: 'Progreso de lectura',
  },

  about: {
    seo: {
      title: 'Sobre Marco Rosso · Rosso Consulting',
      description:
        'Marco Rosso es operador hotelero, asesor en tecnología hotelera y builder, con base en Lugano, Suiza.',
    },
    hero: {
      label: 'Sobre mí',
      title: 'La historia, con mis propias *palabras*.',
      standfirst:
        'Trabajo en la hostelería desde tres lados. Dirijo lo digital y la automatización en un grupo hotelero, asesoro a las empresas que construyen tecnología hotelera y construyo con IA yo mismo. Rosso Consulting es donde todo eso se junta.',
      portraitAlt: 'Retrato de Marco Rosso',
    },
    story: [
      'Crecí en la hostelería. Mi abuelo fundó Francorosso International y Planhotel Hospitality Group, así que los hoteles eran el idioma de casa mucho antes de ser mi trabajo.',
      'Después de EHL me pasé al otro lado de la mesa. Durante casi una década vendí tecnología hotelera e hice crecer a quienes la venden, en Triptease, SiteMinder, Cloudbeds y Canary Technologies: de account executive a dirigir equipos comerciales en EMEA y a nivel global.',
      'En 2024 volví a operar. Como Chief Digital Strategy & Business Automation Officer de Planhotel Hospitality Group, hoy compro el tipo de software que antes vendía, y veo cada día lo que los hoteles adoptan de verdad.',
      'Luego la IA cambió lo que una sola persona puede hacer. Nunca aprendí a programar y, aun así, creé y lancé Astia Web, un servicio de webs para hoteles y pequeños negocios, a base de prompts, pruebas e iteraciones hasta que estuvo bien. Me enseñó más en unos meses que años de lectura.',
      'Rosso Consulting junta esos lados. Asesoro a los fundadores que construyen tecnología hotelera, ayudo a los hoteles a poner la IA a trabajar y mantengo un laboratorio donde pruebo las ideas antes de recomendarlas a nadie. Si estás pensando en lo que viene, me gustaría escucharlo.',
    ],
    path: {
      label: '01 — El camino',
      title: 'De las raíces a *hoy*.',
      items: [
        { key: 'roots', stage: 'Raíces', title: 'Una familia hotelera', text: 'Francorosso International y Planhotel, fundadas por mi abuelo.' },
        { key: 'seller', stage: 'Ventas', title: 'Casi una década en SaaS hotelero', text: 'Triptease, SiteMinder, Cloudbeds, Canary Technologies.' },
        { key: 'operator', stage: 'Operador', title: 'De vuelta a dirigir hoteles', text: 'Planhotel Hospitality Group, desde 2024.' },
        { key: 'builder', stage: 'Builder', title: 'La IA como equipo', text: 'Astia Web, construida sin saber programar.' },
        { key: 'now', stage: 'Hoy', title: 'Rosso Consulting', text: 'Advisory, AI in Practice y el Lab.' },
      ],
    },
    numbers: [
      { value: 4, suffix: '', text: 'empresas SaaS de hostelería, de account executive a director global' },
      { value: 80, suffix: '+', text: 'personas en organizaciones comerciales que crecieron desde unas pocas' },
      { value: 4, suffix: '', text: 'puestos de asesor activos en empresas de tecnología hotelera' },
      { value: 3, suffix: '', text: 'idiomas de trabajo: inglés, italiano y español' },
    ],
    career: {
      title: 'Trayectoria',
      items: [
        { years: '2024–hoy', org: 'Planhotel Hospitality Group', role: 'Chief Digital Strategy & Business Automation Officer' },
        { years: '2023–2024', org: 'Canary Technologies', role: 'Director of Sales & GTM EMEA' },
        { years: '2020–2023', org: 'Cloudbeds', role: 'Director, Inside Sales & CSM (Global)' },
        { years: '2019–2020', org: 'SiteMinder', role: 'Senior Regional Sales Manager, Spain' },
        { years: '2015–2019', org: 'Triptease', role: 'De Account Executive a Head of Sales EMEA' },
      ],
      alsoTitle: 'Además',
      also: [
        'Asesor de Canary Technologies, RoomPriceGenie, LobbyAI y Snapfix',
        'Strategic advisor de la Hotel Association Zanzibar',
        'Fundador de Astia Web',
      ],
    },
    education: {
      title: 'Formación',
      items: [
        { years: '2024–2025', org: 'Harvard Business School', what: 'Executive Education: Program for Leadership Development' },
        { years: '2011–2015', org: 'EHL Lausanne', what: 'BSc International Hospitality Management' },
        { years: '2010', org: 'Cornell University', what: 'Diploma in Hospitality & Revenue Management' },
      ],
    },
    principles: {
      label: '02 — Principios',
      title: 'Cómo *trabajo*.',
      items: [
        { name: 'Probado antes de aconsejado', text: 'Solo recomiendo lo que he gestionado, vendido, construido o probado. Si no lo he probado, lo digo, y me ofrezco a probarlo.' },
        { name: 'Primero, declarar', text: 'Si el producto de una empresa a la que asesoro puede ser relevante para un cliente, declaro la relación desde el principio.' },
        { name: 'Información separada', text: 'La información de los clientes nunca llega a las empresas que asesoro, ni al revés.' },
        { name: 'Los mismos criterios para cada proveedor', text: 'Una empresa del portfolio en evaluación se puntúa con la misma rúbrica que cualquier otro proveedor.' },
        { name: 'Alcance cerrado, precio fijo', text: 'Conoces el coste antes de empezar, y cualquier cambio de alcance se acuerda por escrito.' },
        { name: 'Una persona revisa cada resultado de la IA', text: 'La IA hace el borrador. Alguien que conoce los hoteles lo revisa todo antes de entregarlo.' },
        { name: 'El resultado es tuyo', text: 'Entregables, prompts y flujos de trabajo se quedan contigo. No me guardo nada para crear dependencia.' },
        { name: 'Cuidado con los datos', text: 'Tu material se usa solo para el encargo, y solo en herramientas con una protección de datos adecuada.' },
        { name: 'Decir que no cuando no encaja', text: 'Un no claro protege la reputación que trae el siguiente sí.' },
        { name: 'Compartir lo que aprendo', text: 'Las Field Notes muestran lo que probé y lo que me enseñó, para que veas el razonamiento detrás del resultado.' },
      ],
    },
    bios: {
      title: 'Para organizadores de eventos y *prensa*.',
      intro: 'Biografías aprobadas, en tercera persona. Elige la extensión y cópiala.',
      copy: 'Copiar',
      copied: 'Copiado',
      items: [
        { key: 'line', tab: 'Una línea', text: 'Marco Rosso es operador hotelero, asesor en tecnología hotelera y builder.' },
        {
          key: 'short',
          tab: '30 palabras',
          text: 'Marco Rosso es Chief Digital Strategy & Business Automation Officer de Planhotel Hospitality Group, asesor de empresas de tecnología hotelera como Canary Technologies y RoomPriceGenie, y fundador de Rosso Consulting.',
        },
        {
          key: 'medium',
          tab: '60 palabras',
          text: 'Marco Rosso trabaja en la hostelería desde tres lados. Es Chief Digital Strategy & Business Automation Officer de Planhotel Hospitality Group y asesora a Canary Technologies, RoomPriceGenie, LobbyAI y Snapfix. Antes de volver a la operación en 2024, pasó casi una década vendiendo tecnología hotelera en Triptease, SiteMinder, Cloudbeds y Canary. Con Rosso Consulting asesora a fundadores, ayuda a los hoteles a usar la IA y crea nuevas empresas.',
        },
        {
          key: 'long',
          tab: '120 palabras',
          text: 'Marco Rosso creció en la hostelería: su abuelo fundó Francorosso International y Planhotel Hospitality Group. Tras graduarse en EHL Lausanne, pasó casi una década vendiendo tecnología hotelera y haciendo crecer equipos en Triptease, SiteMinder, Cloudbeds y Canary Technologies, llevando organizaciones comerciales de unas pocas personas a más de 80. En 2024 volvió al lado operativo como Chief Digital Strategy & Business Automation Officer de Planhotel Hospitality Group. Asesora a Canary Technologies, RoomPriceGenie, LobbyAI y Snapfix, es strategic advisor de la Hotel Association Zanzibar y, con Rosso Consulting, ayuda a los hoteles a poner la IA a trabajar. También fundó Astia Web, un servicio de webs construido y gestionado con IA. Estudió en EHL, Cornell y Harvard Business School.',
        },
      ],
    },
  },

  contact: {
    seo: {
      title: 'Hablemos · Rosso Consulting',
      description:
        'Trae tu pregunta. La primera conversación no se factura y dura unos treinta minutos.',
    },
    hero: {
      label: 'Hablemos',
      title: 'Trae tu *pregunta*.',
      standfirst:
        'La primera conversación no se factura y dura unos treinta minutos. Cuéntame en qué estás trabajando. La forma del trabajo viene después.',
    },
    form: {
      title: 'Escríbeme',
      name: 'Tu nombre',
      email: 'Email',
      org: 'Empresa u hotel',
      optional: 'opcional',
      role: 'Eres',
      rolePlaceholder: 'Elige una opción',
      roles: [
        'Fundador o equipo directivo de una empresa de tecnología hotelera',
        'Propietario, director o jefe de departamento de un hotel',
        'Inversor',
        'Organizador de un evento',
        'Otra cosa',
      ],
      message: '¿De qué te gustaría hablar?',
      messageHelp: 'Con unas líneas basta.',
      submit: 'Enviar',
      sending: 'Enviando',
      required: 'Rellena este campo.',
      invalidEmail: 'Introduce un email válido.',
      successTitle: 'Gracias. Tu mensaje está en camino.',
      successBody: 'Leo personalmente cada mensaje y te responderé por email.',
      error: 'Algo ha fallado y el mensaje no se ha enviado. Inténtalo de nuevo o escríbeme directamente.',
      privacy: 'Uso tus datos solo para responderte.',
      privacyLink: 'Aviso de privacidad',
      honeypot: 'Deja este campo vacío',
    },
    direct: {
      title: 'O escríbeme directamente',
      email: 'Email',
      linkedin: 'LinkedIn',
      where: 'Dónde',
      whereValue: 'Lugano, Suiza. Trabajo en toda la región EMEA.',
    },
    next: {
      title: 'Qué pasa *después*.',
      steps: [
        { name: 'Conversación', text: 'Primero escucho, y si no encaja lo digo claramente.' },
        { name: 'Nota de alcance', text: 'Una página: el problema, el resultado, qué entra y qué no.' },
        { name: 'Propuesta', text: 'Un precio fijo para el alcance acordado.' },
        { name: 'Entrega', text: 'Escuchar, construir, revisar, traspasar.' },
        { name: 'Caso documentado', text: 'Con tu permiso, una nota breve sobre lo que se hizo.' },
      ],
    },
  },

  privacy: {
    seo: {
      title: 'Aviso de privacidad · Rosso Consulting',
      description: 'Cómo trata Rosso Consulting los datos personales que compartes a través de esta web.',
    },
    title: 'Aviso de *privacidad*.',
    updated: 'Última actualización: octubre de 2026',
    sections: [
      {
        h: 'Quién es responsable',
        p: 'Marco Rosso, Rosso Consulting, Lugano, Suiza. Para cualquier pregunta sobre tus datos, escribe a marco@rossoconsulting.ch.',
      },
      {
        h: 'Qué recojo',
        p: 'Solo lo que envías con el formulario de contacto: tu nombre, tu email, la empresa u hotel si lo indicas, la opción que eliges y tu mensaje. Como cualquier alojamiento web, Netlify también trata datos técnicos como las direcciones IP para servir y proteger la web.',
      },
      {
        h: 'Para qué',
        p: 'Para leer tu mensaje, responderte y preparar el trabajo que acordemos después. Nada de listas de marketing ni de cesiones para fines de terceros.',
      },
      {
        h: 'Dónde se tratan',
        p: 'La web y el formulario están alojados en Netlify, Inc., en Estados Unidos, y los mensajes llegan a mi bandeja de correo. Por eso los datos pueden tratarse fuera de Suiza y de la UE, con las garantías que ofrecen esos proveedores.',
      },
      {
        h: 'Cuánto tiempo',
        p: 'El tiempo necesario para atender tu consulta y el encargo que pueda seguir. Después se eliminan.',
      },
      {
        h: 'Cookies y seguimiento',
        p: 'Esta web no usa cookies de seguimiento ni scripts de analítica o publicidad. Si cambias entre el tema claro y el oscuro, esa preferencia se guarda solo en tu navegador. Las fuentes se sirven desde esta web, no desde terceros.',
      },
      {
        h: 'Tus derechos',
        p: 'Según la Ley Federal suiza de Protección de Datos y, cuando se aplique, el RGPD, puedes pedir ver, corregir o eliminar tus datos, u oponerte a su uso. Escribe a marco@rossoconsulting.ch.',
      },
    ],
  },

  notFound: {
    seo: { title: 'Página no encontrada · Rosso Consulting', description: 'Esta página no existe.' },
    label: '404',
    title: 'Esta página no *existe*.',
    text: 'Puede que se moviera al rehacer la web. Estos son buenos sitios para empezar:',
  },
};

export default es;
