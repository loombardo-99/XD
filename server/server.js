const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Servidor Express rodando!');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});