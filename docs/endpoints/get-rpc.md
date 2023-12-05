# Endpoint: `GET /rpc`

Permite recuperar información sobre todos los reportes de pulso cardiaco.

## Ejemplo de Solicitud
```http
GET /rpc
```

## Respuesta Exitosa (Código 200 OK)
```json
[{"ReporteID":1,"UsuarioID":1,"FechaHora":"2023-12-01T18:31:24.000Z","PulsacionesPorMinuto":72},{"ReporteID":2,"UsuarioID":2,"FechaHora":"2023-12-01T18:31:24.000Z","PulsacionesPorMinuto":68},{"ReporteID":3,"UsuarioID":3,"FechaHora":"2023-12-01T18:31:24.000Z","PulsacionesPorMinuto":80},{"ReporteID":4,"UsuarioID":4,"FechaHora":"2023-12-01T18:31:24.000Z","PulsacionesPorMinuto":75},{"ReporteID":5,"UsuarioID":5,"FechaHora":"2023-12-01T18:31:24.000Z","PulsacionesPorMinuto":88}]
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
