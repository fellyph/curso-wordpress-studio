---
source_id: overview
locale: es
counterpart: ../en/overview.md
workshop_track: core
stability: stable
section_order: definition|core-path|boundary|account|truth
---
# Descripción general de WordPress Studio

## Qué es Studio

WordPress Studio es una aplicación de escritorio gratuita y de código abierto para crear y desarrollar sitios WordPress de forma local. Proporciona WordPress, PHP, una base de datos, HTTPS y un dominio local sin exigir que los participantes configuren un servidor manualmente.

Está disponible para macOS, Windows y Linux. La referencia editorial de este proyecto es la versión estable 1.17.0.

## Recorrido principal del workshop

El workshop utiliza solamente lo necesario para crear un primer sitio:

1. Definir un brief breve y una CTA.
2. Crear un sitio con el Blueprint **Quick Start**.
3. Planificar y construir con **Studio Code**.
4. Inspeccionar y ajustar el resultado en el **Site Editor**.
5. Registrar feedback con **Annotate**.
6. Compartir y actualizar un **Preview Site**.

CLI, Sync, MCP, Liberate, plugins personalizados y la publicación en producción quedan fuera del ejercicio principal.

## Límite entre local y remoto

El sitio local es el espacio de construcción y revisión. Un Preview es una copia pública y temporal de `wp-content`, no un alojamiento permanente ni una sincronización continua. Sync y la publicación permanente son acciones remotas independientes.

## Cuenta de WordPress.com

Puedes crear sitios locales sin conectar una cuenta. Iniciar sesión en WordPress.com habilita Preview Sites, Studio Code y las integraciones remotas. Studio Code también requiere un método de pago guardado para prevenir abusos, aunque continúa siendo gratuito durante la beta y está sujeto a límites mensuales.

## Fuente de verdad

Consulta [Estado actual](current-state.md) para versiones, modelos y diferencias de interfaz. Antes de cada workshop, revisa la [documentación oficial](https://developer.wordpress.com/docs/developer-tools/studio/) y el [changelog](https://developer.wordpress.com/docs/developer-tools/studio/changelog/).
