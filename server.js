const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Cambia aquí según la carpeta real
app.use(express.static(path.join(__dirname, 'Modulo administardor')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
