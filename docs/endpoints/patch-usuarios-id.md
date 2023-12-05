# Endpoint: `PATCH /usuarios{id}`

Permite reemplazar un dato de un usuario.

## Ejemplo de Solicitud
```http
PATCH /usuarios/6

Content-Type: application/json
{
    "Nombre":"Leyla"
}
```

## Respuesta Exitosa (Código 200 OK)
```json
{
    "status": 201,
    "message": "Successfull partial update'"
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
- Código 404 Not Found:

  ```json
  {
    "errno": 404,
    "error": "Not Found"
  }
  ```