import type {
  FocusSection,
  FooterContent,
  LandingHeroSection,
  LandingLink,
  ScreensSection,
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
    logoSrc: "/brand/logo-primary.webp",
  },
  navigation,
  headerAction: { label: "Ingresar como entrenador", href: "https://entrenemos.app/login" },
  hero,
  focus,
  screens,
  finalCta,
  footer,
};


