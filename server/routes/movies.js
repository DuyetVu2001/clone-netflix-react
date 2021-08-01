const express = require('express');
const router = express.Router();

const {
	getMovie,
	getRandomMovie,
	getAllMovie,
	createMovie,
	updateMovie,
	deleteMovie,
} = require('../controllers/MoviesController');
const verify = require('./verifyToken');

router.get('/', verify, getAllMovie);
router.get('/find/:id', verify, getMovie);
router.get('/random', verify, getRandomMovie);
router.post('/', verify, createMovie);
router.put('/:id', verify, updateMovie);
router.delete('/:id', verify, deleteMovie);

module.exports = router;
