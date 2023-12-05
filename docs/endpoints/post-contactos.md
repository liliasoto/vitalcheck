# Endpoint: `POST /contactos`

Permite agregar un contacto.

## Ejemplo de Solicitud
```http
POST /contactos

Content-Type: application/json
{
    "UsuarioID": 1,
    "NombreContacto": "Dr. López",
    "CorreoContacto": "dr.lópez@email.com"
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

