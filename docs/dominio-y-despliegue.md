# Dominio y despliegue

## Decisión aprobada — 3 de octubre de 2026

La landing pública se prepara para `https://landing.entrenemos.app`, como proyecto independiente de EntrenemosWeb. Se sirve desde `/` en ese subdominio, sin `basePath` ni proxy entre aplicaciones. El acceso para entrenadores conserva `https://entrenemos.app/login`.

`src/lib/marketing/site-config.ts` centraliza la URL. La consumen metadataBase, Open Graph, canonical de la home, sitemap, la referencia al sitemap en robots y los datos estructurados WebSite y Organization. Las imágenes sociales y el logo se resuelven en el subdominio.

La configuración SEO de EntrenemosWeb todavía declara `https://www.entrenemos.app`. Esa URL pertenece al producto web vecino; esta decisión cambia solamente el destino público de la landing independiente. No se modificaron los repositorios vecinos.

## Publicación pendiente

El usuario confirmó que este repositorio ya tiene un proyecto funcionando en Vercel. Reutilizarlo; no crear otro proyecto. Los nameservers públicos consultados el 3 de octubre de 2026 son `dean.ns.cloudflare.com` y `connie.ns.cloudflare.com`: el DNS se administra en Cloudflare, aunque el dominio se haya comprado en Namecheap.

La comprobación pública de esta pasada encontró que `landing.entrenemos.app` y `home.entrenemos.app` ya resuelven a direcciones de Cloudflare y ambos responden HTTP 404, con cabecera `server: cloudflare`. Esto no permite identificar el destino de origen ni distinguir registros individuales de un wildcard. Revisar los registros existentes y la asignación de dominios en Vercel antes de reemplazarlos.

1. Publicar los cambios en la rama conectada al proyecto existente de Vercel y comprobar que el nuevo deployment termina correctamente. No necesita variables de entorno para definir el dominio.
2. Agregar `landing.entrenemos.app` en Settings → Domains de ese proyecto.
3. En Cloudflare → `entrenemos.app` → DNS → Records, crear o ajustar un CNAME con nombre `landing`, el destino exacto indicado por Vercel, TTL Auto y estado DNS only (nube gris). No cambiar los nameservers ni los registros del dominio raíz, `www` o correo.
4. Esperar la validación del dominio y HTTPS. Verificar la home, el acceso al login, `/robots.txt`, `/sitemap.xml` y `/brand/social-card.png` en el dominio publicado.
5. Comprobar que canonical y metadata social usan `https://landing.entrenemos.app/` y registrar el sitemap del subdominio en Search Console.

Referencia: [Dominios personalizados de Vercel](https://vercel.com/docs/domains/working-with-domains/add-a-domain).

El push puede disparar el despliegue automático del proyecto existente si la integración Git está habilitada. La preparación local no configura DNS ni confirma el estado del deployment remoto. No se agrega una redirección desde `www.entrenemos.app`, porque ese dominio figura en la configuración del producto web.

`home.entrenemos.app` es opcional. Si se decide usarlo, agregarlo al mismo proyecto, configurar su CNAME y establecer en Vercel una redirección permanente hacia `https://landing.entrenemos.app`. No publicar dos copias independientes de la landing. Esta dirección alternativa no se configuró en esta pasada.

Referencia: [Cloudflare con Vercel](https://vercel.com/kb/guide/cloudflare-with-vercel).

## Relevamiento de EntrenemosWeb

Revisión del código local el 3 de octubre de 2026:

- `src/app/landing/page.tsx` importa `LoginPage` desde `@/app/login/page` y lo renderiza. Es una ruta existente que muestra el login; no contiene esta landing ni redirige al subdominio.
- `src/middleware.ts` considera públicas las rutas que comienzan con `/landing`; `src/lib/routing/publicRoutes.ts` reserva el segmento `landing`.
- Hay enlaces a `/landing` en `src/app/athlete-only/page.tsx`, `src/components/marketing/AthleteOnlyActions.tsx`, `src/app/support/page.tsx`, `src/components/legal/PublicLegalPage.tsx` y `src/app/account-deletion/page.tsx`.
- `next.config.ts` y `vercel.json` no configuran rewrites ni redirects para conectar esta landing.
- `SEO_SETUP.md` incluye como pendiente crear una página de marketing. `docs/CSS_ARCHITECTURE_PLAN.md` propone integrar una landing en ese repositorio con estilos separados, cuando esté lista para integrar. Son planes documentados, no una conexión implementada con este proyecto.

Actualizar esos enlaces o convertir `/landing` en una redirección al subdominio queda para una tarea posterior en EntrenemosWeb. No se realizó en esta pasada.
