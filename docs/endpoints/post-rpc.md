# Endpoint: `POST /rpc`

Permite agregar un Reporte de pulso cardiaco.

## Ejemplo de Solicitud
```http
POST /rpc

Content-Type: application/json
{
    "UsuarioID": 5,
    "PulsacionesPorMinuto": 73
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
