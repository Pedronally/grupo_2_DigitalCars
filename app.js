const express = require("express");
const path = require("path");
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/index.html'))
});

app.get('/detalleDeProducto', (req, res) => {
    res.sendFile(path.join(__dirname, './views/detalleDeProducto.html'))
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'))
});

app.listen(3050, () => console.log("Tamo Activo"));
