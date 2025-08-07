const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Carpeta pública donde está blink.bin
app.use('/firmware', express.static('public/firmware'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});