const express = require('express');
const MoviesService = require('./../services/movies');

const {
    movieIdSchema,
    createMovieSchema,
    updateMovieSchema
} = require('./../utils/schemas/movies.js');

const validationHandler = require('./../utils/middlewares/validationHandler');

function  moviesApi (app) {
    const router = express.Router();
    app.use("/api/movies", router);

    const moviesService = new MoviesService();

    router.get('/', async (req, res, next) => {
        const { tags } = req.query;

        try {
            const movies = await moviesService.getMovies({ tags });

            res.status(200).json({
                data: movies,
                message: 'movies listed'
            })
        } catch(err) {
            next(err);
        }
    });

    
    router.get('/:movieId', validationHandler({ movieId: movieIdSchema }, 'params'),
    async (req, res, next) => {
        const { movieId } = req.params;

        try {
            const movie = await moviesService.getMovie({movieId});

            res.status(200).json({
                data: movie,
                message: 'movies retrieved'
            })
        } catch(err) {
            next(err);
        }
    });

    router.post('/', validationHandler(createMovieSchema), async (req, res, next) => {
        const { body: movie } = req;
        try {
            const createMovieId = await moviesService.createMovie({ movie });

            res.status(201).json({
                data: createMovieId,
                message: 'movie created'
            })
        } catch(err) {
            next(err);
        }
    });



router.put('/:movieId', 
        validationHandler({ movieId: movieIdSchema }, 'params'),
        validationHandler(updateMovieSchema), async (req, res, next) => {
    const { body: movie } = req;
    const { movieId } = req.params; 
    try {
        const updateMovieId = await moviesService.updateMovie( {
             movieId,
             movie
        })

        res.status(200).json({
            data: updateMovieId,
            message: 'movie updated'
        })
    } catch(err) {
        next(err);
    }
});



router.delete('/:movieId', 
validationHandler({ movieId: movieIdSchema }, 'params'),    
async (req, res, next) => {
    const { movieId } = req.params;

    try {
        const deleteMovie = await moviesService.deleteMovie({ movieId });

        res.status(200).json({
            data: deleteMovie,
            message: 'movie deleted'
        })
    } catch(err) {
        next(err);
    }
});

}


module.exports = moviesApi;