import type {
  AudienceProfile,
  FocusSection,
  FooterContent,
  LandingHeroSection,
  LandingLink,
  ScreensSection,
  PlansSection,
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
  title: "Una experiencia conectada entre mobile y web.",
  description:
    "Entrenemos no es una sola pantalla: combina una experiencia mobile enfocada en el atleta y una plataforma web orientada a la gestión del entrenador.",
  mobileTitle: "App mobile para el momento de entrenar",
  mobileDescription:
    "Rutina activa, registro, historial y señales de progreso en una experiencia más directa.",
  webTitle: "Panel web para organizar, seguir y decidir",
  webDescription:
    "Una capa de gestión donde el entrenador puede ver mejor a sus atletas y trabajar con más orden.",
  features: [
    {
      title: "Atleta y entrenador comparten contexto",
      description: "La misma información se usa para entrenar y para acompañar mejor.",
    },
    {
      title: "El sistema prioriza claridad por sobre ruido",
      description: "Cada bloque de información tiene un propósito concreto dentro del proceso.",
    },
    {
      title: "Arquitectura pensada para crecer",
      description: "Se puede expandir sin perder la lógica central de acompañamiento y progreso.",
    },
  ],
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
  eyebrow: "Listo para el siguiente paso",
  title: "Entrenemos para ordenar, acompañar y progresar.",
  description:
    "Unite hoy a la plataforma que conecta a entrenadores y atletas para llevar un registro claro, ordenado y efectivo de cada entrenamiento.",
  primaryAction: { label: "Ver propuesta completa", href: "#inicio" },
  secondaryAction: { label: "Escribir a soporte", href: "mailto:soporte@entrenemos.app" },
};

const footer: FooterContent = {
  description:
    "Landing pública del ecosistema Entrenemos. Diseñada para iterar rápido hoy y portarse fácil mañana.",
  contact: "soporte@entrenemos.app",
  links: [
    { label: "Inicio", href: "#inicio" },
    { label: "Enfoque", href: "#enfoque" },
    { label: "Ecosistema", href: "#ecosistema" },
    { label: "Visión", href: "#vision" },
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
  plans,
  finalCta,
  footer,
};
