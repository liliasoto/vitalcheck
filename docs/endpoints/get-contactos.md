# Endpoint: `GET /contactos`

Permite recuperar información sobre todos los contactos.

## Ejemplo de Solicitud
```http
GET /contactos
```

## Respuesta Exitosa (Código 200 OK)
```json
[{"ContactoID":1,"UsuarioID":1,"NombreContacto":"Dr. Pérez","CorreoContacto":"dr.perez@email.com"},{"ContactoID":2,"UsuarioID":1,"NombreContacto":"Hermano Juan","CorreoContacto":"hermano.juan@email.com"},{"ContactoID":3,"UsuarioID":2,"NombreContacto":"Dra. López","CorreoContacto":"dra.lopez@email.com"},{"ContactoID":4,"UsuarioID":2,"NombreContacto":"Madre Ana","CorreoContacto":"madre.ana@email.com"},{"ContactoID":5,"UsuarioID":3,"NombreContacto":"Dr. García","CorreoContacto":"dr.garcia@email.com"},{"ContactoID":6,"UsuarioID":3,"NombreContacto":"Esposa Carlos","CorreoContacto":"esposa.carlos@email.com"},{"ContactoID":7,"UsuarioID":4,"NombreContacto":"Dra. Fernández","CorreoContacto":"dra.fernandez@email.com"},{"ContactoID":8,"UsuarioID":4,"NombreContacto":"Hija María","CorreoContacto":"hija.maria@email.com"},{"ContactoID":9,"UsuarioID":5,"NombreContacto":"Dr. Martínez","CorreoContacto":"dr.martinez@email.com"},{"ContactoID":10,"UsuarioID":5,"NombreContacto":"Amigo Pedro","CorreoContacto":"amigo.pedro@email.com"}]
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
