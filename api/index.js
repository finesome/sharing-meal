const express = require('express');
const app = express();
const api = require('./routes/api');
const port = process.env.port || 8080;

// middlewares
app.use(express.static('public'));

// router
app.use('/api', api);

app.get('/', (req, res) => {
    res.send('Hello from API!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
