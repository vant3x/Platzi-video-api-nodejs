const express = require('express');
const app = express();

const { config } = require('./config/index');
const moviesApi = require('./routes/movies.js');


 const { logErrors, errorHandler } = require('./utils/middlewares/errorHandlers');  

// body parser
app.use(express.json());

moviesApi(app);

app.use(logErrors);
app.use(errorHandler);

app.listen(config.port, () => {
    console.log(`Servidor corriendo en http://localhost:${config.port}`);
});