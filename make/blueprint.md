# Diseño del flujo Make para el KIT Fiscal Contable

Este archivo describe las automatizaciones recomendadas en Make (anteriormente Integromat) para gestionar las solicitudes de soporte incluidas en el kit y las solicitudes de asesoría adicional. Para que funcionen deberás crear dos escenarios separados en tu cuenta de Make y configurar los webhooks correspondientes. A continuación se detallan los pasos para cada uno.

## Escenario 1 – Support Request

1. **Disparador:** *Webhook de Make*
   - Crea un **Custom Webhook** en Make llamado `support_request`.
   - Copia la URL del webhook y colócala en la variable de entorno `MAKE_SUPPORT_WEBHOOK_URL` en el proyecto Next.js. El formulario de soporte enviará los datos a esta URL.

2. **Google Sheets – Añadir fila**
   - Añade un módulo **Google Sheets › Add a Row** después del webhook.
   - Conecta tu cuenta de Google y selecciona una hoja de cálculo (o crea una nueva) con columnas como: Fecha, Nombre, Correo, Asunto, Categoría, Descripción, Order_ID.
   - Mapea los datos del webhook a las columnas correspondientes. Por ejemplo, usa `{{receivedAt}}` para la fecha y los campos del cuerpo JSON para el resto.

3. **Gmail – Enviar correo de confirmación**
   - Inserta un módulo **Gmail › Send an Email** después de Google Sheets.
   - Configura tu cuenta de Gmail (o utiliza cualquier módulo de correo compatible).
   - Remitente: tu dirección de correo profesional.
   - Destinatario: el correo recibido en el webhook.
   - Asunto: “Solicitud de soporte recibida – KIT Fiscal Contable”.
   - Cuerpo: Agradece la solicitud e indica que la respuesta se dará en un máximo de 48 horas hábiles.

4. **(Opcional) Crear tarea**
   - Si gestionas las solicitudes en Trello, Notion u otra herramienta, añade un módulo para crear una tarjeta o tarea. Utiliza la información del webhook para llenar el título y la descripción.

## Escenario 2 – Upsell Request

1. **Disparador:** *Webhook de Make*
   - Crea un webhook llamado `upsell_request` y coloca su URL en `MAKE_UPSELL_WEBHOOK_URL` en el proyecto Next.js.

2. **Google Sheets – Añadir fila**
   - Usa la misma hoja que el escenario de soporte o una distinta. Incluye campos: Fecha, Nombre, Correo, Asunto, Categoría, Descripción, Order_ID.

3. **Gmail – Enviar correo de confirmación**
   - Envia un correo informando que recibiste la solicitud de asesoría adicional y que pronto te pondrás en contacto para revisar los detalles y costos.

4. **(Opcional) Crear tarea**
   - Como en el escenario anterior, crea una tarjeta o tarea en tu gestor de proyectos para hacer seguimiento.

## Notas generales

* Asegúrate de activar los escenarios y probarlos con datos de prueba desde el formulario para verificar que las solicitudes se registran correctamente.
* Puedes personalizar los mensajes de correo y añadir condiciones (por ejemplo, distintos flujos según la categoría seleccionada).
* Si prefieres usar otro servicio de correo o base de datos, reemplaza los módulos de Gmail y Google Sheets por los de tu elección.