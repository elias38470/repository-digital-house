const express = require('express');

const app = express();
const path = require('path');
const port = 4000;

app.use('/public', express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'));

});


app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'));

});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'));

});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})




