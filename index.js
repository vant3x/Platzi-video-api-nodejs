const express = require('express');
const app = express();

const { config } = require('./config/index');
const moviesApi = require('./routes/movies.js');


 const { logErrors, errorHandler, wrapErrors } = require('./utils/middlewares/errorHandlers');  

 const notFoundHandler = require('./utils/middlewares/notFoundHandler');

// body parser
app.use(express.json());

// routes
moviesApi(app);
// catch 404
app.use(notFoundHandler);

// middlewares de errores
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);  

app.listen(config.port, () => {
    console.log(`Servidor corriendo en http://localhost:${config.port}`);
});