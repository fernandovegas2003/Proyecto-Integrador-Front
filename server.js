const express = require('express');
const path = require('path');
const cors = require('cors'); // <--- importar cors

const app = express();
const PORT = process.env.PORT || 3000;

// Configuración básica de CORS (permite todas las solicitudes)
app.use(cors());

// Servir archivos estáticos desde la carpeta "Modulo administardor"
app.use(express.static(path.join(__dirname, 'Modulo administardor')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
