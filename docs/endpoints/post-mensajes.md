# Endpoint: `POST /mensajes`

Permite agregar un mensaje.

## Ejemplo de Solicitud
```http
POST /mensajes

Content-Type: application/json
{
        "UsuarioID": 1,
        "ContactoID": 2,
        "ContenidoMensaje": "Hola, hermano. Todo bien hoy, saludos."
    }
```

## Respuesta Exitosa (Código 200 OK)
```json
{
    "status": 201,
    "message": "Created"
}
```

## Respuestas de Errores Posibles
- Código 400 Bad Request:

  ```json
  {
    "errno": 400,
    "error": "Bad Request"
  }
  ```
