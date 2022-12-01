const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('hello, there, estou aqui!');
});

app.listen(3000, () => {
    console.log('server is running');
})