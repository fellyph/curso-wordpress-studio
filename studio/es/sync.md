---
source_id: sync
locale: es
counterpart: ../en/sync.md
workshop_track: advanced
stability: stable
section_order: rule|requirements|connect|pull|push|database|deployignore|guardrails|workshop
---
# Studio Sync

## Regla principal

**Sync reemplaza los elementos seleccionados; no los fusiona.** Esto se aplica a Pull y Push. Los cambios paralelos pueden perderse.

## Requisitos

WordPress.com requiere un sitio con un plan compatible y acceso de administrador. Pressable requiere una conexión Jetpack compatible. Confirma la elegibilidad, el límite de 5 GB y el comportamiento del backup en la cuenta de demostración.

## Conectar un sitio

En la pestaña **Sync**, inicia sesión, selecciona **Connect site**, elige el entorno remoto y confirma. Utiliza solamente staging o un sitio desechable.

## Pull

Pull reemplaza archivos, carpetas o la base de datos seleccionados en el sitio local. Haz una copia local y comprueba los cambios remotos recientes antes de la operación.

## Push

Push reemplaza los elementos seleccionados en el entorno remoto. Selecciona solamente el tema, plugin o carpeta modificados. Confirma el destino y el backup antes de continuar.

## Base de datos

Incluir Database reemplaza la base de datos remota, con las excepciones documentadas para las tablas de usuarios. En WooCommerce, esto puede borrar pedidos, clientes e inventario creados después del último Pull. Una base de datos de producción nunca forma parte del ejercicio.

## `.deployignore`

Sync respeta `.deployignore` en la raíz del sitio y también excluye archivos internos de Studio. Revisa el conjunto real de archivos antes de enviarlo.

## Guardrails

- Utiliza un staging desechable.
- Realiza un Pull reciente y verifica el backup.
- Envía un componente cada vez sin Database.
- Coordina los cambios paralelos.
- Conoce el proceso de restauración antes de ejecutar.

## Uso en el workshop

No hay práctica de Sync en la sesión de cuatro horas. El cierre solamente presenta las opciones posteriores a Preview y refuerza que publicar requiere alojamiento y un flujo de aprobación independiente.
