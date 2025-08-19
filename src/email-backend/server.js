// Importa los módulos necesarios
const express = require('express'); // Framework para crear el servidor web
const nodemailer = require('nodemailer'); // Librería para enviar correos electrónicos
const cors = require('cors'); // Middleware para permitir solicitudes desde dominios diferentes (CORS)
const dotenv = require('dotenv'); // Para cargar variables de entorno desde un archivo .env

// Carga las variables de entorno del archivo .env
dotenv.config();

const app = express(); // Crea una instancia de la aplicación Express
const port = process.env.PORT || 3001; // Define el puerto del servidor, usando una variable de entorno o 3001 por defecto

// Middlewares
app.use(cors()); // Habilita CORS para permitir que tu frontend React (en un dominio diferente) acceda a este servidor
app.use(express.json()); // Habilita el parser de JSON para que el servidor pueda leer los datos enviados en formato JSON desde el frontend

// Configuración de Nodemailer (transporter)
// Aquí debes configurar tu servicio de correo (Gmail, Outlook, SendGrid, etc.)
// Es MUY IMPORTANTE que uses variables de entorno para las credenciales por seguridad.
// Crea un archivo .env en la misma carpeta que este archivo server.js
// Ejemplo de .env:
// EMAIL_USER=tu_email@gmail.com
// EMAIL_PASS=tu_contraseña_de_aplicación_o_contraseña_normal (para Gmail, es una contraseña de aplicación)
const transporter = nodemailer.createTransport({
    service: 'gmail', // Por ejemplo, 'gmail', 'Outlook365', etc.
    port: 465, // Puerto para conexiones seguras (SSL)
    secure: true, // Usa TLS para conexiones seguras
    auth: {
        user: process.env.EMAIL_USER, // Tu dirección de correo electrónico remitente
        pass: process.env.EMAIL_PASS // Tu contraseña de correo electrónico (o contraseña de aplicación si usas Gmail)
    },
    // Si tienes problemas con Gmail, puedes necesitar estas opciones:
    // secure: true, // Usa TLS
    // port: 465, // Puerto estándar para SMTPS
});

// Ruta POST para manejar el envío del formulario
app.post('/send-email', async (req, res) => {
    // Extrae los datos del cuerpo de la solicitud (enviados desde el formulario React)
    const { name, phone, email, service, message } = req.body;

    // Validación básica de los datos del formulario
    if (!name || !phone || !service) {
        return res.status(400).json({ message: 'Nombre, teléfono y servicio son campos obligatorios.' });
    }

    try {
        // Opciones del correo electrónico
        const mailOptions = {
            from: process.env.EMAIL_USER, // Tu dirección de correo electrónico remitente
            to: process.env.EMAIL_USER, // **CAMBIA ESTO** al correo donde quieres recibir los datos
            subject: `Nueva Consulta de ${name} - ${service}`, // Asunto del correo
            html: `
                <h2>Nueva Consulta de Cliente</h2>
                <p><strong>Nombre:</strong> ${name}</p>
                <p><strong>Teléfono:</strong> ${phone}</p>
                <p><strong>Email:</strong> ${email || 'No proporcionado'}</p>
                <p><strong>Servicio de Interés:</strong> ${service}</p>
                <p><strong>Mensaje:</strong> ${message || 'No proporcionado'}</p>
                <br>
                <p>Este mensaje fue enviado desde el formulario de contacto de tu sitio web.</p>
            `, // Contenido del correo en formato HTML
        };

        // Envía el correo electrónico
        await transporter.sendMail(mailOptions);
        console.log('Correo enviado exitosamente');
        // Envía una respuesta de éxito al frontend
        res.status(200).json({ message: '¡Correo enviado exitosamente!' });
    } catch (error) {
        // Si hay un error al enviar el correo, registra el error y envía una respuesta de error al frontend
        console.error('Error al enviar el correo:', error);
        res.status(500).json({ message: 'Error al enviar el correo electrónico. Inténtalo de nuevo más tarde.' });
    }
});

// Inicia el servidor
app.listen(port, () => {
    console.log(`Servidor backend escuchando en http://localhost:${port}`);
    console.log(`Asegúrate de configurar las variables de entorno EMAIL_USER y EMAIL_PASS en un archivo .env`);
});
