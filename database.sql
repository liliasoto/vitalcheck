CREATE DATABASE vitalcheck;

USE vitalcheck;

CREATE TABLE Usuarios (
    UsuarioID INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(50) NOT NULL,
    Apellido VARCHAR(50) NOT NULL,
    CorreoElectronico VARCHAR(100) UNIQUE NOT NULL,
    Edad INT,
    Peso DECIMAL(5,2),
    Estatura DECIMAL(5,2),
    Sexo VARCHAR(1)
);

CREATE TABLE ReportesPulsoCardiaco (
    ReporteID INT PRIMARY KEY AUTO_INCREMENT,
    UsuarioID INT,
    FechaHora TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PulsacionesPorMinuto INT,
    FOREIGN KEY (UsuarioID) REFERENCES Usuarios(UsuarioID)
);

CREATE TABLE ReportesNivelesOxigeno (
    ReporteID INT PRIMARY KEY AUTO_INCREMENT,
    UsuarioID INT,
    FechaHora TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    NivelesOxigeno DECIMAL(4,2),
    FOREIGN KEY (UsuarioID) REFERENCES Usuarios(UsuarioID)
);

CREATE TABLE Contactos (
    ContactoID INT PRIMARY KEY AUTO_INCREMENT,
    UsuarioID INT,
    NombreContacto VARCHAR(50) NOT NULL,
    CorreoContacto VARCHAR(100) NOT NULL,
    FOREIGN KEY (UsuarioID) REFERENCES Usuarios(UsuarioID)
);

CREATE TABLE Mensajes (
    MensajeID INT PRIMARY KEY AUTO_INCREMENT,
    UsuarioID INT,
    ContactoID INT,
    FechaHora TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ContenidoMensaje TEXT,
    FOREIGN KEY (UsuarioID) REFERENCES Usuarios(UsuarioID),
    FOREIGN KEY (ContactoID) REFERENCES Contactos(ContactoID)
);

INSERT INTO Usuarios (Nombre, Apellido, CorreoElectronico, Edad, Peso, Estatura, Sexo) 
VALUES 
('Juan', 'Gómez', 'juan.gomez@email.com', 35, 75.5, 175, 'M'),
('Ana', 'Martínez', 'ana.martinez@email.com', 28, 62.2, 160, 'F'),
('Carlos', 'López', 'carlos.lopez@email.com', 45, 80.0, 180, 'M'),
('María', 'Sánchez', 'maria.sanchez@email.com', 50, 68.8, 165, 'F'),
('Pedro', 'Rodríguez', 'pedro.rodriguez@email.com', 40, 90.3, 185, 'M');

INSERT INTO ReportesPulsoCardiaco (UsuarioID, PulsacionesPorMinuto) 
VALUES 
(1, 72),
(2, 68),
(3, 80),
(4, 75),
(5, 88);

INSERT INTO ReportesNivelesOxigeno (UsuarioID, NivelesOxigeno) 
VALUES 
(1, 98.5),
(2, 97.2),
(3, 96.8),
(4, 98.0),
(5, 95.5);

INSERT INTO Contactos (UsuarioID, NombreContacto, CorreoContacto) 
VALUES 
(1, 'Dr. Pérez', 'dr.perez@email.com'),
(1, 'Hermano Juan', 'hermano.juan@email.com'),
(2, 'Dra. López', 'dra.lopez@email.com'),
(2, 'Madre Ana', 'madre.ana@email.com'),
(3, 'Dr. García', 'dr.garcia@email.com'),
(3, 'Esposa Carlos', 'esposa.carlos@email.com'),
(4, 'Dra. Fernández', 'dra.fernandez@email.com'),
(4, 'Hija María', 'hija.maria@email.com'),
(5, 'Dr. Martínez', 'dr.martinez@email.com'),
(5, 'Amigo Pedro', 'amigo.pedro@email.com');

INSERT INTO Mensajes (UsuarioID, ContactoID, ContenidoMensaje) 
VALUES 
(1, 2, 'Hola, hermano. Todo bien hoy.'),
(2, 4, '¡Hola mamá! ¿Cómo estás?'),
(3, 6, 'Buenas tardes, Carlos. Le envío los reportes de esta semana.'),
(4, 8, 'María, acabo de recibir tus resultados. Todo parece estar bien.'),
(5, 10, 'Hola Pedro, ¿cómo va todo?'),
(1, 1, 'Dr. Pérez, aquí tiene los reportes de esta semana.'),
(2, 3, 'Dra. López, adjunto los datos de mi última medición.'),
(3, 5, 'Dr. García, aquí tiene la información solicitada.'),
(4, 7, 'Dra. Fernández, por favor revise estos resultados.'),
(5, 9, 'Dr. Martínez, le envío los reportes actuales.');


