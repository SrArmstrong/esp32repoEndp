const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/firmware/version', (req, res) => {
    res.json({
        version: "1.0",
        url: "http://192.168.1.75:3000/firmware/blink.bin",
        checksum: "2a5d4c...",
        mandatory: false
    });
});

// Carpeta pública donde está blink.bin
app.use('/firmware', express.static('public/firmware'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});