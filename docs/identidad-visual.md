# Identidad visual

## Dirección

La identidad actual combina una interfaz oscura azul petróleo con superficies tipo bento y un azul luminoso como señal de acción. El resultado debe sentirse moderno y premium, pero también accesible y humano.

El símbolo muestra dos brazos unidos en un gesto de fuerza compartida. Refuerza colaboración, acompañamiento y esfuerzo en equipo; no debe comunicarse como competencia entre personas.

## Paleta principal

| Token sugerido | Color | Uso |
| --- | --- | --- |
| `--color-bg` | `#101B22` | Fondo general |
| `--color-surface` | `#1B262E` | Cards y paneles |
| `--color-surface-alt` | `#162028` | Gradientes y profundidad |
| `--color-highlight` | `#25313A` | Hover y superficies elevadas |
| `--color-primary` | `#0D93F2` | CTA, enlaces y foco |
| `--color-text` | `#FFFFFF` | Texto principal |
| `--color-text-secondary` | `#94A3B8` | Texto secundario |

Colores semánticos existentes: éxito `#10B981`, error `#EF4444` y advertencia `#F59E0B`. Usarlos por significado, no como decoración.

## Gradientes compatibles

- Fondo mobile: `#0F172A` a `#020617`, de esquina superior izquierda a inferior derecha.
- Acento mobile: `#2563EB` → `#3B82F6` → `#60A5FA`.
- Cards web: `#1B262E` → `#162028` a 135°.

Para la landing conviene partir de los tokens web y usar los gradientes mobile en halos o zonas hero, con moderación.

## Tipografía

La landing usa **Plus Jakarta Sans** como tipografía global, cargada y optimizada mediante `next/font`. Los pesos disponibles son 400, 500, 600, 700 y 800, con fallback a tipografías de sistema.

La familia se eligió por su equilibrio entre una presencia tecnológica y empresarial y una lectura cercana. Los títulos pueden usar mayor peso y tracking ajustado, evitando mayúsculas extendidas y una estética de gimnasio agresiva. Si una interfaz funcional necesitara otra familia por una razón concreta —por ejemplo código o datos tabulares— debe documentarse como excepción; actualmente no existen excepciones.

## Formas y profundidad

### Escala tipográfica

Los tokens `--font-size-hero`, `--font-size-section`, `--font-size-subsection` y `--font-size-feature-title` centralizan la jerarquía. El H1 del hero llega a 4,55 rem; los títulos H2 de secciones llegan a 3,25 rem. Visión y Planes usan la misma escala de sección. Los H3 de bloques usan escalas de subsección o de título destacado según su función. Los tamaños específicos de la demo y de navegación son excepciones de interfaz; los textos de la rutina no son encabezados de sección de la landing.

En Visión, la bajada se alinea al centro vertical del título en escritorio. El manifiesto de Enfoque conserva su énfasis editorial mediante párrafos, sin alterar la jerarquía de encabezados.

- Radios actuales: botones `10px`, inputs `12px`, paneles `14px`, cards `18px`, diálogos `20px` y bloques destacados `24px`.
- Bordes sutiles blancos al 6–10%.
- Sombras oscuras amplias y suaves.
- Composición modular tipo bento para explicar beneficios o capturas del producto.

## Movimiento

Usar entradas cortas y discretas (150–400 ms). El movimiento debe reforzar jerarquía y feedback. Respetar `prefers-reduced-motion` y evitar animaciones continuas que compitan con el mensaje.

## Sistema de continuidad de Visión

El circuito de `#vision` es un recurso identificable de la marca: dos recorridos bidireccionales conectan entrenador y atleta mediante un núcleo de Entrenemos. La retícula, los conectores y los símbolos de planificación, comunicación, registro y seguimiento deben sentirse precisos y tecnológicos sin convertirse en un dashboard ni en ciencia ficción.

En escritorio el circuito se desarrolla horizontalmente; en celular adopta un recorrido vertical. Entrenador y atleta conservan el mismo peso visual y las etiquetas siguen visibles para que el significado no dependa del color.

## Densidad del cierre

El footer es una superficie utilitaria, no una sección narrativa. Debe priorizar lectura rápida, targets táctiles claros y jerarquía contenida: franja social breve, navegación compacta, enlaces de descarga y barra legal. No usar títulos de escala hero, watermarks gigantes, scroll horizontal ni espacios verticales equivalentes a una pantalla.

## Cierre de Enfoque

El bloque final de `#enfoque` funciona como manifiesto de marca, no como una tarjeta informativa convencional. Su composición aprobada presenta:

- “Una plataforma. Dos protagonistas. Un mismo objetivo.” a la izquierda.
- “Progresar” como palabra de máximo énfasis a la derecha, en azul eléctrico, subrayada y con iluminación controlada.
- “Esto es Entrenemos” y “El sistema operativo para entrenadores y atletas” centrados debajo.
- El símbolo oficial como firma final.

En tablet y celular la composición pasa a flujo vertical. El efecto luminoso no tiene animación permanente.

## Logos

- `logo.png`: variante monocromática azul, alineada con la paleta digital. Usarla por defecto.
- `logo2.png`: variante humana en tonos de piel. Considerarla solo si se define una campaña o narrativa que la justifique.

Pendientes de marca:

- Definir cuál variante es oficial.
- Crear logotipo horizontal/símbolo + palabra “Entrenemos”.
- Exportar SVG o fuente vectorial original si existe.
- Preparar favicon, app icons y versiones para fondos claros/oscuros.
- Confirmar reglas de área de seguridad y tamaño mínimo.

## Fuente de los tokens

Paleta relevada el 22 de junio de 2026 desde:

- `../EntrenemosWeb/src/app/globals.css`
- `../GymApp/gym_app/lib/theme/app_colors.dart`
- `../GymApp/gym_app/lib/theme/app_gradients.dart`

