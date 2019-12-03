const express = require('express');

const app = express();


const { config } = require('./config/index');
const moviesApi = require('./routes/movies.js');

moviesApi(app);


app.listen(config.port, () => {
    console.log(`Servidor corriendo en http://localhost:${config.port}`);
});