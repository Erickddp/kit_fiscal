# KIT Fiscal Contable – Landing y Automatización

Este repositorio contiene el código fuente de un sitio web listo para desplegar para comercializar el **KIT Fiscal Contable** por **$99 MXN**. El sitio está construido con **Next.js 14** utilizando el nuevo *App Router* y se apoya en **Tailwind CSS** para el estilo. Incluye un formulario de soporte integrado que envía la solicitud a Make (Integromat) y un segundo formulario para solicitar asesorías adicionales.

## Tabla de contenidos

1. [Requisitos](#requisitos)
2. [Instalación y ejecución local](#instalación-y-ejecución-local)
3. [Configuración](#configuración)
4. [Despliegue en Vercel](#despliegue-en-vercel)
5. [Automatización en Make](#automatización-en-make)
6. [Estructura del proyecto](#estructura-del-proyecto)
7. [Personalización de contenidos e imágenes](#personalización-de-contenidos-e-imágenes)

## Requisitos

Para ejecutar este proyecto necesitarás tener instalados en tu entorno de desarrollo:

* [Node.js](https://nodejs.org/) 18 o superior.
* [pnpm](https://pnpm.io/), [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/) para gestionar dependencias.

## Instalación y ejecución local

1. Clona o descomprime este repositorio.
2. Accede a la carpeta del proyecto:

   ```bash
   cd kit-site
   ```
3. Instala las dependencias:

   ```bash
   npm install
   # o
   yarn install
   # o
   pnpm install
   ```
4. Crea un archivo `.env.local` en la raíz del proyecto y define las variables de entorno descritas en el apartado [Configuración](#configuración).

5. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

6. Abre tu navegador en `http://localhost:3000` para ver el sitio en acción.

## Configuración

El sitio utiliza variables de entorno para funcionar correctamente. Crea un archivo `.env.local` en la raíz del proyecto (puedes partir del archivo `.env.example`) y define:

| Variable                        | Descripción                                                                                                                                                                          |
|---------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `NEXT_PUBLIC_CHECKOUT_URL`      | URL de checkout del proveedor de pagos (por ejemplo, LemonSqueezy o Gumroad). Se utiliza en el botón "Comprar ahora".                                                               |
| `NEXT_PUBLIC_DOWNLOAD_URL`      | Enlace de descarga directa del ZIP con el kit. Se muestra en la página de agradecimiento por si el proveedor no envía el enlace automáticamente.                                     |
| `NEXT_PUBLIC_SUPPORT_POLICY_URL`| (Opcional) Enlace a una página de política de soporte o preguntas frecuentes externa.                                                                                                |
| `MAKE_SUPPORT_WEBHOOK_URL`      | URL del webhook configurado en Make para las solicitudes de soporte. Se utiliza en el API route `/api/support` para reenviar los datos.                                             |
| `MAKE_UPSELL_WEBHOOK_URL`       | URL del webhook configurado en Make para las solicitudes de asesoría adicional. Se utiliza en el API route `/api/upsell`.                                                            |
| `NEXT_PUBLIC_SUPPORT_EMAIL`     | (Opcional) Correo electrónico de contacto que se mostrará en la página de agradecimiento.                                                                                           |

> **Importante:** sólo las variables que comienzan con `NEXT_PUBLIC_` estarán disponibles en el navegador. Las variables `MAKE_SUPPORT_WEBHOOK_URL` y `MAKE_UPSELL_WEBHOOK_URL` se usan en el servidor y no serán expuestas al cliente.

## Despliegue en Vercel

El proyecto está listo para desplegar en [Vercel](https://vercel.com/):

1. **Importar proyecto:** crea un nuevo proyecto en Vercel y selecciona este repositorio.
2. **Configurar variables de entorno:** en la sección *Environment Variables* define las variables mencionadas arriba. Es fundamental que no subas el webhook de Make al cliente; Vercel lo mantendrá como variable de entorno del servidor.
3. **Deploy:** ejecuta el despliegue. El sitio quedará accesible en tu dominio de Vercel. Puedes configurar un dominio personalizado si lo deseas.

## Automatización en Make

El directorio `make/` contiene un archivo [`blueprint.md`](make/blueprint.md) con instrucciones paso a paso para crear los flujos en Make y un archivo de ejemplo [`blueprint.json`](make/blueprint.json) que ilustra cómo podría verse un blueprint exportado. En resumen:

1. **Escenario “Support Request”:** recibe las solicitudes del formulario de soporte mediante un webhook, guarda la información en Google Sheets, envía un correo de confirmación y opcionalmente crea una tarea en Trello/Notion. Coloca la URL del webhook en `MAKE_SUPPORT_WEBHOOK_URL`.
2. **Escenario “Upsell Request”:** similar al anterior pero para las solicitudes de asesoría adicional. Usa la variable `MAKE_UPSELL_WEBHOOK_URL`.

Configura y activa ambos escenarios en tu cuenta de Make antes de lanzar el sitio en producción. Si prefieres usar otro servicio para correos o base de datos, ajusta los módulos según tus herramientas.

## Estructura del proyecto

```
kit-site/
├── app/
│   ├── api/
│   │   ├── support/
│   │   │   └── route.ts         # API route que reenvía las solicitudes de soporte a Make
│   │   └── upsell/
│   │       └── route.ts         # API route que reenvía las solicitudes de asesoría a Make
│   ├── success/
│   │   └── page.tsx             # Página de agradecimiento con instrucciones, soporte y upsell
│   ├── page.tsx                 # Landing principal con hero, contenido, soporte y FAQ
│   ├── layout.tsx               # Layout raíz que importa estilos globales
│   └── globals.css              # Estilos globales utilizando Tailwind
├── components/
│   ├── Hero.tsx                 # Sección superior con título, descripción, precio e imagen
│   ├── Tabs.tsx                 # Pestañas para mostrar las diferentes secciones del kit
├──├── FAQAccordion.tsx          # Acordeón de preguntas frecuentes
│   ├── SupportForm.tsx          # Formulario para la solicitud de soporte incluida
│   ├── UpsellForm.tsx           # Formulario para solicitar asesoría adicional
│   └── Footer.tsx               # Pie de página con disclaimer y CTA final
├── public/
│   ├── hero.png                 # Imagen abstracta para el hero
│   ├── library.png              # Imagen abstracta de biblioteca (no utilizada por defecto)
│   └── contracts.png            # Imagen abstracta de contratos (no utilizada por defecto)
├── assets/
│   └── prompts.txt              # Prompts utilizados para generar las imágenes
├── make/
│   ├── blueprint.md             # Documentación paso a paso de los flujos en Make
│   └── blueprint.json           # Ejemplo de blueprint en formato JSON
├── .env.example                 # Ejemplo de variables de entorno
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
├── tsconfig.json
└── package.json
```

## Personalización de contenidos e imágenes

* **Textos:** todos los textos se encuentran en los componentes dentro de `components/` y `app/`. Puedes modificar las preguntas frecuentes, las descripciones o los titulares según tus necesidades.
* **Imágenes:** las ilustraciones abstractas se almacenan en `public/`. Puedes reemplazarlas por tus propias imágenes o generar otras nuevas. Asegúrate de no incluir texto dentro de las imágenes, tal y como marcan las reglas.
* **Estilo:** si deseas personalizar la paleta de colores o tipografía, modifica `tailwind.config.js` o añade clases CSS en `globals.css`.

## Licencia

Este proyecto se entrega como base para vender tu propio kit fiscal contable. Eres libre de modificar y adaptar el código a tus necesidades. No olvides revisar las políticas de licencia de cualquier dependencia o servicio externo que utilices.#   k i t _ f i s c a l  
 