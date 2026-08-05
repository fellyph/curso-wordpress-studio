---
source_id: ssl
locale: es
counterpart: ../en/ssl.md
workshop_track: core
stability: stable
section_order: purpose|trust|troubleshooting|workshop
---
# SSL en WordPress Studio

## HTTPS local

Studio crea dominios locales con HTTPS para que el entorno de desarrollo se comporte de forma más parecida a un sitio publicado. Esto ayuda a probar cookies seguras, redirecciones y funciones que necesitan un origen de confianza.

## Confiar en el certificado

El sistema operativo puede solicitar permiso para confiar en la autoridad de certificación local de Studio. Sigue el flujo mostrado por la aplicación y aprueba solamente certificados generados por la instalación de Studio en ese equipo.

## Solución de problemas

Si el navegador muestra una advertencia, confirma que se aceptó el certificado, reinicia Studio y el navegador, y comprueba que la fecha del sistema sea correcta. En dispositivos administrados, la instalación del certificado puede requerir asistencia del equipo de TI.

## Uso en el workshop

Los problemas de certificados deben resolverse durante el preflight. El ejercicio no reserva tiempo para políticas de dispositivos corporativos. El fallback consiste en demostrar el sitio en el equipo del facilitador y continuar la edición local sin compartir credenciales.
