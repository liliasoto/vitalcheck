# Endpoint: `GET /mensajes`

Permite recuperar información sobre todos los mensajes.

## Ejemplo de Solicitud
```http
GET /mensajes
```

## Respuesta Exitosa (Código 200 OK)
```json
[{"MensajeID":1,"UsuarioID":1,"ContactoID":2,"FechaHora":"2023-12-01T18:31:24.000Z","ContenidoMensaje":"Hola, hermano. Todo bien hoy."},{"MensajeID":2,"UsuarioID":2,"ContactoID":4,"FechaHora":"2023-12-01T18:31:24.000Z","ContenidoMensaje":"¡Hola mamá! ¿Cómo estás?"},{"MensajeID":3,"UsuarioID":3,"ContactoID":6,"FechaHora":"2023-12-01T18:31:24.000Z","ContenidoMensaje":"Buenas tardes, Carlos. Le envío los reportes de esta semana."},{"MensajeID":4,"UsuarioID":4,"ContactoID":8,"FechaHora":"2023-12-01T18:31:24.000Z","ContenidoMensaje":"María, acabo de recibir tus resultados. Todo parece estar bien."},{"MensajeID":5,"UsuarioID":5,"ContactoID":10,"FechaHora":"2023-12-01T18:31:24.000Z","ContenidoMensaje":"Hola Pedro, ¿cómo va todo?"},{"MensajeID":6,"UsuarioID":1,"ContactoID":1,"FechaHora":"2023-12-01T18:31:24.000Z","ContenidoMensaje":"Dr. Pérez, aquí tiene los reportes de esta semana."},{"MensajeID":7,"UsuarioID":2,"ContactoID":3,"FechaHora":"2023-12-01T18:31:24.000Z","ContenidoMensaje":"Dra. López, adjunto los datos de mi última medición."},{"MensajeID":8,"UsuarioID":3,"ContactoID":5,"FechaHora":"2023-12-01T18:31:24.000Z","ContenidoMensaje":"Dr. García, aquí tiene la información solicitada."},{"MensajeID":9,"UsuarioID":4,"ContactoID":7,"FechaHora":"2023-12-01T18:31:24.000Z","ContenidoMensaje":"Dra. Fernández, por favor revise estos resultados."},{"MensajeID":10,"UsuarioID":5,"ContactoID":9,"FechaHora":"2023-12-01T18:31:24.000Z","ContenidoMensaje":"Dr. Martínez, le envío los reportes actuales."}]
```

## Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
  {
    "errno": 404,
    "error": "not_found",
    "error_description": "Not found."
  }
  ```

- Código 500 Internal Server Error:
  ```json
  {
    "errno": 500,
    "error": "internal_error",
    "error_description": "Ocurrió un problema para procesar la solicitud"
  }
  ``` 
