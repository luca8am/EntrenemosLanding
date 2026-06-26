import type {
  AudienceProfile,
  FooterContent,
  LandingCard,
  LandingHeroSection,
  LandingLink,
  ScreensSection,
} from "./landing-types";

const navigation: LandingLink[] = [
  { label: "Problema", href: "#problema" },
  { label: "Solución", href: "#solucion" },
  { label: "Atletas y entrenadores", href: "#audiencia" },
  { label: "Ecosistema", href: "#ecosistema" },
];

const hero: LandingHeroSection = {
  eyebrow: "Entrenamiento conectado",
  title: "Todo tu entrenamiento. Un mismo equipo.",
  description:
    "Planificá rutinas, registrá cada sesión y seguí el progreso con el contexto que atletas y entrenadores necesitan para sostener el proceso.",
  primaryAction: { label: "Conocer la propuesta", href: "#solucion" },
  secondaryAction: { label: "Ver el ecosistema", href: "#ecosistema" },
  notes: [
    "Pensado para atletas y entrenadores",
    "Seguimiento con contexto compartido",
    "Diseño claro para sostener la constancia",
  ],
  statusLabel: "Entrenemos",
  statusValue: "Progreso claro y compartido",
  floatingCards: [
    { label: "Rutina activa", value: "Lo que toca hoy, sin ruido" },
    { label: "Seguimiento", value: "Sesiones, notas y progreso" },
    { label: "Acompañamiento", value: "Entrenar con alguien del otro lado" },
  ],
};

const problemCards: LandingCard[] = [
  {
    title: "La planificación queda separada del momento de entrenar.",
    description: "La rutina existe, pero no siempre aparece clara cuando hace falta ejecutarla.",
  },
  {
    title: "El seguimiento se pierde entre chats, notas y mensajes sueltos.",
    description: "La conversación acompaña, pero cuesta transformarla en un proceso ordenado.",
  },
  {
    title: "El progreso aparece en partes, no como una historia completa.",
    description: "Sin contexto, sostener hábitos y tomar decisiones se vuelve más difícil.",
  },
];

const solutionCards: LandingCard[] = [
  {
    label: "Planificar",
    title: "Rutinas claras para objetivos concretos.",
    description: "La estructura del trabajo vive en un solo lugar y se entiende rápido.",
    tone: "accent",
  },
  {
    label: "Entrenar",
    title: "Una app pensada para ejecutar y registrar.",
    description: "El atleta sabe qué hacer, qué registrar y cómo viene avanzando.",
  },
  {
    label: "Progresar",
    title: "Datos útiles para ajustar sin perder lo humano.",
    description: "El entrenador gana contexto y el atleta gana claridad para sostener el proceso.",
  },
];

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

const finalCta = {
  eyebrow: "Listo para el siguiente paso",
  title: "Entrenemos para ordenar, acompañar y progresar.",
  description:
    "Esta landing ya evita claims inventados y deja espacio para definir el CTA final cuando estén cerradas las decisiones comerciales y de acceso.",
  primaryAction: { label: "Ver propuesta completa", href: "#inicio" },
  secondaryAction: { label: "Escribir a soporte", href: "mailto:soporte@entrenemos.app" },
};

const footer: FooterContent = {
  description:
    "Landing pública del ecosistema Entrenemos. Diseñada para iterar rápido hoy y portarse fácil mañana.",
  contact: "soporte@entrenemos.app",
  links: [
    { label: "Inicio", href: "#inicio" },
    { label: "Problema", href: "#problema" },
    { label: "Solución", href: "#solucion" },
    { label: "Ecosistema", href: "#ecosistema" },
  ],
};

export const landingContent = {
  brand: {
    name: "Entrenemos",
    subtitle: "Entrenamiento conectado",
    logoSrc: "/brand/logo-primary.png",
  },
  navigation,
  headerAction: { label: "Ir al login", href: "/login" },
  hero,
  problem: {
    eyebrow: "El problema",
    title: "Planificar, entrenar y seguir el progreso sigue estando demasiado fragmentado.",
    description:
      "Entrenemos busca reunir planificación, ejecución, datos y conversación para que ambas partes entiendan mejor qué hacer y cómo evoluciona el proceso.",
    cards: problemCards,
    closing:
      "La idea no es prometer magia. La idea es hacer más claro el trabajo que ya sostiene el progreso real.",
  },
  solution: {
    eyebrow: "La solución",
    title: "Una experiencia conectada para atletas y entrenadores.",
    description:
      "La app mobile acompaña la ejecución. La plataforma web organiza, da seguimiento y ayuda a decidir con mejor contexto.",
    cards: solutionCards,
  },
  audience: {
    eyebrow: "Atletas y entrenadores",
    title: "Dos perspectivas distintas, un mismo proceso.",
    description:
      "Entrenemos trata el entrenamiento como una invitación compartida: claridad para quien entrena y mejor contexto para quien acompaña.",
    profiles: audienceProfiles,
  },
  screens,
  finalCta,
  footer,
};
