const authRoute = require('./auth');
const userRoute = require('./users');
const movieRoute = require('./movies');
const listRoute = require('./lists');

function route(app) {
	app.use('/api/auth', authRoute);
	app.use('/api/users', userRoute);
	app.use('/api/movies', movieRoute);
	app.use('/api/lists', listRoute);
}

module.exports = route;
