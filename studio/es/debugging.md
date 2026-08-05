---
source_id: debugging
locale: es
counterpart: ../en/debugging.md
workshop_track: challenge
stability: stable
section_order: log|display|database|xdebug|challenge|safety
---
# Depuración en WordPress Studio

## Log de depuración

Habilita `WP_DEBUG_LOG` en los ajustes del sitio para registrar errores en `wp-content/debug.log`. Reproduce el problema, analiza la evidencia y deshabilita el registro innecesario después de la prueba.

## Mostrar errores

`WP_DEBUG_DISPLAY` muestra errores en la página y puede revelar rutas o detalles técnicos. Utilízalo solamente de forma local. Para demostraciones, prefiere el archivo de log y un fallo pequeño y controlado.

## phpMyAdmin

Studio proporciona phpMyAdmin para inspeccionar la base de datos local. No modifiques datos sin una exportación previa y no utilices ejemplos que contengan información real de clientes.

## Xdebug

Xdebug permite breakpoints e inspección detallada. La versión 1.17 añade un indicador para sitios con Xdebug habilitado. Este flujo requiere preparar el editor y queda fuera del ejercicio para principiantes.

## Desafío opcional

Los participantes experimentados pueden realizar una auditoría de rendimiento, SEO o accesibilidad, registrar evidencia reproducible, corregir un problema y volver a validar. No introduzcas errores en el sitio de otro participante.

## Seguridad

Logs, dumps y screenshots pueden contener rutas, tokens o datos personales. Revísalos antes de compartirlos y excluye los artefactos temporales de Preview con `.deployignore`.
