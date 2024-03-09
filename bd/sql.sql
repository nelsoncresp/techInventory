-- Crear la tabla de productos
CREATE TABLE productos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    precio DECIMAL(10, 2) NOT NULL,
    stock INT NOT NULL
);

-- Insertar algunos productos de ejemplo
INSERT INTO productos (nombre, descripcion, precio, stock) VALUES
    ('Laptop', 'Laptop de última generación', 1200.00, 50),
    ('Teléfono inteligente', 'Teléfono con cámara de alta resolución', 600.00, 100),
    ('Tablet', 'Tablet ligera y potente', 300.00, 30);

-- Crear la tabla de usuarios (puedes personalizar según tus necesidades)
CREATE TABLE usuarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    correo VARCHAR(100) NOT NULL,
    contrasena VARCHAR(50) NOT NULL
);

-- Insertar un usuario de ejemplo
INSERT INTO usuarios (nombre, correo, contrasena) VALUES
    ('Usuario de Prueba', 'usuario@ejemplo.com', 'contraseña123');
