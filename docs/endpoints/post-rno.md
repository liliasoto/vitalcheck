# Endpoint: `POST /rno`

Permite agregar un Reporte de niveles de oxígeno.

## Ejemplo de Solicitud
```http
POST /rno

Content-Type: application/json
{
    "UsuarioID": 5,
    "NivelesOxigeno": "95.60"
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
