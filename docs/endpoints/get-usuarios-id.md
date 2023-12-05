# Endpoint: `GET /usuarios/{id}`

Permite obtener información detallada sobre un usuario específico mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del usuario que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /usuarios/1
```

## Respuesta Exitosa (Código 200 OK)
```json
{
    "UsuarioID":1,
    "Nombre":"Juan",
    "Apellido":"Gómez",
    "CorreoElectronico":"juan.gomez@email.com",
    "Edad":35,
    "Peso":"75.50",
    "Estatura":"175.00",
    "Sexo":"M"
}
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

## Notas Adicionales

- Asegurate de incluir un ID válido en la solicitud para obtener la información
  sobre un tema en específico.