const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, World!, GET');
    console.log('Respuesta esperada: ', JSON.stringify({ message: 'ESP32 - Funcionando y conectado!', nombre: 'Sergio' }));
});

app.post('/post', (req, res) => {
    req.on('data', (data) => {
        console.log('Datos recibidos: ', data.toString());
    });
    res.send('Recibido, POST');
});

app.put('/put', (req, res) => {
    req.on('data', (data) => {
        console.log('Datos actualizados: ', data.toString());
    });
    res.send('Datos actualizados, PUT');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});