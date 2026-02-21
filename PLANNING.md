# Product Backlog: erickddp.com Premium Evolution

Este documento detalla la hoja de ruta para transformar el sitio actual en una plataforma de servicios automatizados de alto nivel.

## Fase 1: Refactorización Visual (UI Premium)
*Enfoque: Estética High-End Tech y experiencia fluida.*

- [ ] **Configuración de Tipografía & Base:**
    - Instalación e integración de **Geist Sans/Mono** (Vercel).
    - Refactorización de `tailwind.config.js` con tokens de diseño premium (Efecto Glass, sombras profundas, paleta oscura refinada).
- [ ] **Core UI con Shadcn/ui:**
    - Inicialización de componentes base.
    - Personalización de estilos para que coincidan con la estética "Tech".
- [ ] **Animaciones de Interfaz:**
    - Implementación de **Framer Motion** para transiciones de página y micro-interacciones en botones/cards.
    - Layouts adaptables con entradas suaves.

## Fase 2: Integración de API & Automatización (IA + FinTech)
*Enfoque: Procesos robustos, invisibles y seguros.*

- [ ] **Puente de Automatización (Server Actions):**
    - Migración de formularios actuales (`UpsellForm`, `SupportForm`) de API Routes convencionales a **Next.js Server Actions**.
    - Conexión segura con Webhooks de **Make.com**.
- [ ] **Pasarela de Pagos Premium:**
    - Integración de SDK (**Stripe o Mercado Pago**).
    - Creación de componentes de Checkout "Embedded" para evitar redirecciones.
    - Lógica de validación en tiempo real (Success/Failure) integrada en la UI.
- [ ] **Dashboard de Cliente (MVP):**
    - Estructura base para el área privada de clientes.
    - Visualización de "Estado de Cuenta" o "Progreso de Automatización".

## Fase 3: Sistema de Contenido Dinámico & SEO
*Enfoque: Autoridad técnica y escalabilidad de contenido.*

- [ ] **Arquitectura MDX:**
    - Configuración de `next-mdx-remote` o similar.
    - Creación de la estructura de carpetas para el blog técnico/contable.
- [ ] **Blog Engine:**
    - Templates de lectura premium con soporte para resaltado de sintaxis y componentes interactivos dentro del texto.
- [ ] **Optimización SEO:**
    - Generación dinámica de Metadatos y Sitemap.

---
**Arquitecto Responsable:** Antigravity (IA Solutions Architect)
**Estado:** Pendiente de Validación
