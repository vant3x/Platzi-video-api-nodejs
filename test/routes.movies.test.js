const assert = require('assert');
const proxyquire = require('proxyquire');

const { moviesMock, MoviesServiceMock } = require('./../utils/mocks/movies');
const testServer = require('./../utils/testServer');

describe('routes - movies', function() {
    const route = proxyquire('../routes/movies', {
        // reemplaza el servicio por el mock
        '../services/movies': MoviesServiceMock
    });

    const request = testServer(route);

    describe('GET /movies', function() {
        it('should respond with status 200', function(done) {
            request.get('/api/movies').expect(200, done);
        });

        it('should respond with the list of movies', function(done){
            request.get('/api/movies').end((err, res) => {
                assert.deepEqual(res.body, {
                    data: moviesMock,
                    message: 'movies listed'
                });
                // finaliza el test
                done();
            });
        });
    });
});