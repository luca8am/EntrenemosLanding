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

La web usa **Inter Variable**, con fallback a tipografías de sistema. Mantener Inter como opción inicial. Los títulos pueden tener mayor peso y tracking ajustado, evitando mayúsculas extendidas y estética de gimnasio agresiva.

## Formas y profundidad

- Radios actuales: botones `10px`, inputs `12px`, paneles `14px`, cards `18px`, diálogos `20px` y bloques destacados `24px`.
- Bordes sutiles blancos al 6–10%.
- Sombras oscuras amplias y suaves.
- Composición modular tipo bento para explicar beneficios o capturas del producto.

## Movimiento

Usar entradas cortas y discretas (150–400 ms). El movimiento debe reforzar jerarquía y feedback. Respetar `prefers-reduced-motion` y evitar animaciones continuas que compitan con el mensaje.

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

