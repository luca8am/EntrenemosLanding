# Entrenemos Landing

Repositorio de la landing page pública de **Entrenemos**, la plataforma que conecta entrenadores y atletas para planificar, ejecutar y seguir entrenamientos.

Este repositorio todavía no contiene una implementación web. Su punto de partida son los recursos de marca y la documentación necesaria para que otro agente pueda definir el stack y construir la landing sin tener que relevar nuevamente los productos existentes.

## Contexto del ecosistema

- `../GymApp/gym_app`: aplicación mobile en Flutter orientada principalmente al atleta.
- `../EntrenemosWeb`: plataforma web en Next.js orientada a la gestión de entrenadores y sus atletas.
- Este repositorio: sitio público de presentación, adquisición y acceso al ecosistema.

## Documentación

- [Contexto de producto](docs/producto.md)
- [Identidad visual](docs/identidad-visual.md)
- [Brief de implementación](docs/brief-landing.md)
- [Instrucciones para agentes](AGENTS.md)

## Recursos disponibles

- `logo.png`: variante azul, recomendada como identidad principal.
- `logo2.png`: variante con tonos de piel, disponible como alternativa.

Ambos archivos son imágenes cuadradas de alta resolución. Antes de producción conviene exportar versiones optimizadas (WebP/AVIF), favicon y una variante horizontal con el nombre de la marca.

## Estado

Fase de preparación. No se eligió framework, proveedor de despliegue ni herramienta de analítica. Estas decisiones deben confirmarse antes de implementar.

