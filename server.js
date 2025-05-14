const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuración básica de CORS
app.use(cors());

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'Modulo administardor/')));

// Ruta principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'iniciarsesion.html'));
});

// Servidor HTTP estándar (Render/Vercel lo vuelve HTTPS)
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
