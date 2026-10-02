import type {
  AudienceProfile,
  FocusSection,
  FooterContent,
  LandingHeroSection,
  LandingLink,
  ScreensSection,
  PlansSection,
  VisionSection,
} from "./landing-types";

const navigation: LandingLink[] = [
  { label: "Enfoque", href: "#enfoque" },
  { label: "Ecosistema", href: "#ecosistema" },
  { label: "Visión", href: "#vision" },
];

const hero: LandingHeroSection = {
  title: "La nueva forma de entrenar.",
  description:
    "Entrenemos conecta tu rutina, cada sesión y tu progreso en una misma app, para que atletas y entrenadores compartan el proceso.",
  primaryAction: { label: "Probá cómo funciona", href: "#training-demo-start" },
};

const focus: FocusSection = {
  eyebrow: "Nuestro enfoque",
  title: "No te disperses al entrenar.",
  description:
    "Rutinas en planillas, consultas por WhatsApp, registros en notas y chequeos físicos que se pierden. Cuando el proceso está fragmentado, entrenadores y atletas pierden claridad.",
  solutionTitle: "Todo el proceso de entrenar y registrar. En un único sistema.",
  solutionDescription:
    "Entrenemos conecta la planificación del entrenador con cada sesión, registro y avance del atleta.",
  manifestoBrand: "Entrenemos.",
  manifestoLead: "El sistema operativo para",
  trainersLabel: "entrenadores",
  athletesLabel: "atletas",
  platformClaim: "Una plataforma",
  protagonistsClaim: "Dos protagonistas",
  objectiveClaim: "Un mismo objetivo:",
  progressClaim: "progresar",
};

const audienceProfiles: AudienceProfile[] = [
  {
    id: "atleta",
    trigger: "Sos atleta",
    kicker: "Para atletas",
    title: "Entrená con más claridad, registro y acompañamiento.",
    description:
      "La experiencia mobile acompaña el día a día del entrenamiento para que la rutina, el historial y el progreso tengan sentido juntos.",
    points: [
      {
        title: "Rutina visible",
        description: "Sabés qué toca hoy y cómo se conecta con tu objetivo.",
      },
      {
        title: "Historial ordenado",
        description: "Tu trabajo no se pierde; queda registrado y fácil de revisar.",
      },
      {
        title: "Contexto compartido",
        description: "Tu entrenador puede acompañarte con mejor información.",
      },
    ],
  },
  {
    id: "entrenador",
    trigger: "Sos entrenador",
    kicker: "Para entrenadores",
    title: "Organizá atletas, rutinas y seguimiento en un mismo sistema.",
    description:
      "La plataforma web ayuda a gestionar mejor el trabajo, personalizar el acompañamiento y leer el progreso sin depender de herramientas dispersas.",
    points: [
      {
        title: "Gestión más ordenada",
        description: "Rutinas, atletas y seguimiento viven en una misma base de trabajo.",
      },
      {
        title: "Decisiones con contexto",
        description: "El avance individual y grupal se entiende con más claridad.",
      },
      {
        title: "Mejor vínculo de trabajo",
        description: "La comunicación acompaña el proceso en vez de correr por afuera.",
      },
    ],
  },
];

const screens: ScreensSection = {
  eyebrow: "Ecosistema",
  title: "Un mismo proceso, compartido entre atleta y entrenador.",
  description:
    "El entrenador planifica y asigna desde la web. El atleta lleva esa rutina a cada sesión desde la app, registra lo que hizo y evalúa cómo se sintió. Así, ambos cuentan con más contexto para entender el progreso y preparar lo que sigue.",
  independentNote:
    "¿Entrenás por tu cuenta? También podés usar Entrenemos para organizar, registrar y seguir tu propio proceso.",
  slides: [
    {
      id: "planificar",
      label: "Planificá",
      role: "Entrenador · Web",
      roleTone: "trainer",
      title: "El camino queda planificado.",
      description: "Crea la rutina, organiza sus días, suma los ejercicios necesarios y la asigna al atleta.",
      media: {
        src: "/product/ecosystem/web-create-template.png",
        alt: "Creación de una plantilla de rutina en la plataforma web de Entrenemos",
        kind: "web",
        crop: "web-create-template",
        width: 1920,
        height: 884,
      },
    },
    {
      id: "entrenar",
      label: "Entrená",
      role: "Atleta · App",
      roleTone: "athlete",
      title: "La rutina llega a la sesión.",
      description:
        "El atleta encuentra sus días, ejercicios y series desde la app y lleva la planificación al momento de entrenar.",
      media: {
        src: "/product/ecosystem/mobile-routine-landing.png",
        alt: "Rutina del atleta organizada por días y ejercicios en la app",
        kind: "mobile",
        crop: "mobile-routine",
        width: 1170,
        height: 2406,
      },
    },
    {
      id: "registrar",
      label: "Registrá",
      role: "Atleta · App",
      roleTone: "athlete",
      title: "Cada serie suma contexto.",
      description: "El atleta registra peso, repeticiones, series, RIR y notas mientras avanza con su entrenamiento.",
      media: {
        src: "/product/ecosystem/mobile-register-landing.png",
        alt: "Registro de una serie con peso, repeticiones y RIR durante el entrenamiento",
        kind: "mobile",
        crop: "mobile-register",
        width: 1170,
        height: 2406,
      },
    },
    {
      id: "evaluar",
      label: "Evaluá",
      role: "Atleta · App",
      roleTone: "athlete",
      title: "La sesión también deja sensaciones.",
      description:
        "Al finalizar, el atleta evalúa cansancio, ánimo, motivación y dificultad como parte de su seguimiento.",
      media: {
        src: "/product/ecosystem/mobile-evaluate-landing.png",
        alt: "Resumen de una sesión con evaluaciones de dificultad, ánimo y cansancio",
        kind: "mobile",
        crop: "mobile-evaluate",
        width: 1170,
        height: 2406,
      },
    },
    {
      id: "continuar",
      label: "Continuá",
      role: "Proceso compartido",
      roleTone: "shared",
      title: "El historial prepara lo que sigue.",
      description:
        "El atleta consulta su recorrido y el entrenador revisa la actividad, los registros y las evaluaciones para decidir cómo continuar según su análisis.",
      media: {
        src: "/product/ecosystem/mobile-history-month-landing.png",
        alt: "Historial mensual de actividad del atleta",
        kind: "mobile",
        crop: "mobile-history-month",
        width: 1170,
        height: 2406,
      },
    },
  ],
};

const vision: VisionSection = {
  eyebrow: "Nuestra visión",
  title: "Acompañar también es parte de entrenar.",
  description:
    "Un entrenador no solo prepara rutinas. También observa, escucha y busca entender qué necesita cada atleta para sostener su proceso. Entrenemos se encarga de organizar tu trabajo y establecer la comunicación optima para que entrenadores y atletas entrenen mejor.",
  principles: [
    {
      label: "01 — Entender",
      title: "Más que saber si entrenó",
      description:
        "Cada registro ayuda a comprender qué ocurrió durante la sesión: qué pudo completar el atleta, cómo se sintió y qué dificultades encontró.",
    },
    {
      label: "02 — Acompañar",
      title: "Información para estar presente",
      description:
        "El entrenador puede revisar el proceso, conversar directamente con el atleta y contar con más contexto para decidir cómo continuar.",
    },
    {
      label: "03 — Sostener",
      title: "Constancia que se construye",
      description:
        "El atleta puede registrar su recorrido, reconocer su continuidad y comprender que cada entrenamiento forma parte de un proceso más grande.",
    },
  ],
  closing:
    "Entrenemos convierte rutinas, registros, sensaciones y conversaciones en un proceso que atleta y entrenador pueden comprender y construir juntos.",
  finalStatement:
    "La experiencia y el criterio siguen siendo humanos. La tecnología les da un lugar donde trabajar mejor.",
};

const plans: PlansSection = {
  eyebrow: "Planes mensuales",
  title: "Planes mensuales para entrenadores.",
  description: "Empezá gratis por 1 mes y elegí el plan según tu cantidad de alumnos.",
  plans: [
    {
      name: "Básico",
      price: "Gratis",
      subtitle: "Gratis por 1 mes. Hasta 5 alumnos.",
      features: [
        "Para empezar sin barreras",
        "Empezá con tu grupo inicial",
        "Ideal para probar el servicio",
      ],
      actionLabel: "Empezar gratis",
      actionHref: "#contacto",
      highlight: true,
    },
    {
      name: "Coach",
      price: "$20.000",
      subtitle: "Mensual. Hasta 25 alumnos.",
      features: [
        "Para entrenadores en crecimiento",
        "Más espacio para tus alumnos",
        "Orden para trabajar mejor",
      ],
      actionLabel: "Seleccionar plan",
      actionHref: "#contacto",
    },
    {
      name: "Pro",
      price: "$35.000",
      subtitle: "Mensual. Hasta 50 alumnos.",
      features: [
        "Para grupos más grandes",
        "Seguimiento más amplio",
        "Buen balance entre capacidad y valor",
      ],
      actionLabel: "Seleccionar plan",
      actionHref: "#contacto",
    },
    {
      name: "Elite",
      price: "$60.000",
      subtitle: "Mensual. Hasta 100 alumnos.",
      features: [
        "Para equipos grandes",
        "Más capacidad de trabajo",
        "Para entrenadores que crecen fuerte",
      ],
      actionLabel: "Seleccionar plan",
      actionHref: "#contacto",
    },
    {
      name: "Personalizado",
      price: "Consultar",
      subtitle: "Más de 100 alumnos.",
      features: [
        "Soporte prioritario",
        "Límites a medida",
        "Integración personalizada",
      ],
      actionLabel: "Contactar soporte",
      actionHref: "mailto:soporte@entrenemos.app",
      isContact: true,
    },
  ],
};

const finalCta = {
  eyebrow: "Planes para entrenadores",
  title: "Probá Entrenemos en tu asesoría.",
  description:
    "Empezá con 15 días gratis para gestionar hasta 5 alumnos. Después, elegí el plan que acompañe el tamaño de tu equipo.",
  secondaryAction: { label: "Escribir a soporte", href: "mailto:soporte@entrenemos.app" },
};

const footer: FooterContent = {
  description:
    "Entrenamiento, seguimiento y contexto compartido en un mismo lugar.",
  contact: "soporte@entrenemos.app",
  instagram: {
    label: "@entrenemos.8am",
    href: "https://www.instagram.com/entrenemos.8am/",
  },
  appLinks: [
    { label: "App Store", href: "https://apps.apple.com/app/entrenemos/id6782174564" },
    { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.entrenemos.app" },
  ],
  links: [
    { label: "Inicio", href: "#inicio" },
    { label: "Enfoque", href: "#enfoque" },
    { label: "Ecosistema", href: "#ecosistema" },
    { label: "Visión", href: "#vision" },
    { label: "Planes para entrenadores", href: "#planes-entrenadores" },
  ],
  legalLinks: [
    { label: "Política de privacidad", href: "https://www.8am-dev.com/entrenemos/privacy" },
    { label: "Términos y condiciones", href: "https://www.8am-dev.com/entrenemos/terms" },
  ],
};

export const landingContent = {
  brand: {
    name: "Entrenemos",
    logoSrc: "/brand/logo-primary.png",
  },
  navigation,
  headerAction: { label: "Ir al login", href: "/login" },
  hero,
  focus,
  audience: {
    eyebrow: "Atletas y entrenadores",
    title: "Dos perspectivas distintas, un mismo proceso.",
    description:
      "Entrenemos trata el entrenamiento como una invitación compartida: claridad para quien entrena y mejor contexto para quien acompaña.",
    profiles: audienceProfiles,
  },
  screens,
  vision,
  plans,
  finalCta,
  footer,
};


