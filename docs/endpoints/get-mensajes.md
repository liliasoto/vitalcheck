# Endpoint: `GET /mensajes`

Permite recuperar información sobre todos los mensajes.

## Ejemplo de Solicitud
```http
GET /mensajes
```

## Respuesta Exitosa (Código 200 OK)
```json
[
  {
    "MensajeID":1,
    "UsuarioID":1,
    "ContactoID":2,
    "FechaHora":"2023-12-01T18:31:24.000Z",
    "ContenidoMensaje":"Hola, hermano. Todo bien hoy."
  },
  {
    "MensajeID":2,
    "UsuarioID":2,
    "ContactoID":4,
    "FechaHora":"2023-12-01T18:31:24.000Z",
    "ContenidoMensaje":"¡Hola mamá! ¿Cómo estás?"
  }
]
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
