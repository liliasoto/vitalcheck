# Endpoint: `POST /usuarios`

Permite agregar un usuario.

## Ejemplo de Solicitud
```http
POST /usuarios

Content-Type: application/json
{
    "Nombre":"Andrea",
    "Apellido":"Velez",
    "CorreoElectronico":"andrea.velez@email.com",
    "Edad":20,
    "Peso":"50.50",
    "Estatura":"175.00",
    "Sexo":"F"
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

