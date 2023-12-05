# Endpoint: `GET /rno`

Permite recuperar información sobre todos los reportes de oxígeno en la sangre.

## Ejemplo de Solicitud
```http
GET /rno
```

## Respuesta Exitosa (Código 200 OK)
```json
[
  {
    "ReporteID":1,
    "UsuarioID":1,
    "FechaHora":"2023-12-01T18:31:24.000Z",
    "NivelesOxigeno":"98.50"
  },
  {
    "ReporteID":2,
    "UsuarioID":2,
    "FechaHora":"2023-12-01T18:31:24.000Z",
    "NivelesOxigeno":"97.20"
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
