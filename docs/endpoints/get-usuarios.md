# Endpoint: `GET /usuarios`

Permite recuperar información sobre todos los usuarios.

## Ejemplo de Solicitud
```http
GET /usuarios
```

## Respuesta Exitosa (Código 200 OK)
```json
[
  {
    "UsuarioID":1,
    "Nombre":"Juan",
    "Apellido":"Gómez",
    "CorreoElectronico":"juan.gomez@email.com",
    "Edad":35,
    "Peso":"75.50",
    "Estatura":"175.00",
    "Sexo":"M"
  },
  {
    "UsuarioID":2,
    "Nombre":"Ana",
    "Apellido":"Martínez",
    "CorreoElectronico":"ana.martinez@email.com",
    "Edad":28,
    "Peso":"62.20",
    "Estatura":"160.00",
    "Sexo":"F"
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
