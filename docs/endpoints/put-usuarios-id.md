# Endpoint: `PUT /usuarios{id}`

Permite reemplazar un usuario.
Sólo se puede hacer en usuarios que no estén ya relacionados.

## Ejemplo de Solicitud
```http
PUT /usuarios/6

Content-Type: application/json
{
    "Nombre":"Andreas",
    "Apellido":"López",
    "CorreoElectronico":"andrea.lopez@email.com",
    "Edad":21,
    "Peso":"50.60",
    "Estatura":"176.00",
    "Sexo":"F"
}
```

## Respuesta Exitosa (Código 200 OK)
```json
{
    "status": 201,
    "message": "Updated successfully"
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


