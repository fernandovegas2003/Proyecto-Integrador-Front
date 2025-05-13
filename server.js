const express = require('express');
const path = require('path');
const cors = require('cors');
const https = require('https');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Rutas a tus archivos SSL
const sslOptions = {
  key: fs.readFileSync(path.join(__dirname, 'iqscore-key.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'iqscore-cert.pem')),
};

// Configuración básica de CORS
app.use(cors());

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'Modulo administardor')));

// Ruta principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'iniciarsesion.html'));
});

// Crear servidor HTTPS
https.createServer(sslOptions, app).listen(PORT, () => {
  console.log(`Servidor HTTPS corriendo en https://localhost:${PORT}`);
});
