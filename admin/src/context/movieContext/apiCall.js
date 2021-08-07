import axios from 'axios';
import { API_URL } from '../../const';
import {
	getMoviesStart,
	getMoviesSuccess,
	getMoviesFailure,
	createMoviesStart,
	createMoviesSuccess,
	createMoviesFailure,
	updateMoviesStart,
	updateMoviesSuccess,
	updateMoviesFailure,
	deleteMoviesStart,
	deleteMoviesSuccess,
	deleteMoviesFailure,
} from './MovieActions';

// GET ALL MOVIES
export const getMovies = async (dispatch) => {
	dispatch(getMoviesStart());

	try {
		const res = await axios.get(API_URL + '/movies', {
			headers: {
				token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token,
			},
		});

		dispatch(getMoviesSuccess(res.data.movies));
	} catch (error) {
		dispatch(getMoviesFailure());
	}
};

// CREATE
export const createMovie = async (movie, dispatch) => {
	dispatch(createMoviesStart());

	try {
		const res = await axios.post(API_URL + '/movies', movie, {
			headers: {
				token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token,
			},
		});

		dispatch(createMoviesSuccess({ ...res.data.movies }));
	} catch (error) {
		dispatch(createMoviesFailure());
	}
};

// UPDATE
export const updateMovie = async (movie, dispatch) => {
	dispatch(updateMoviesStart());

	try {
		const res = await axios.put(API_URL + '/movies/' + movie._id, movie, {
			headers: {
				token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token,
			},
		});

		dispatch(updateMoviesSuccess({ ...res.data.movies }));
	} catch (error) {
		dispatch(updateMoviesFailure());
	}
};

// DELETE
export const deleteMovie = async (id, dispatch) => {
	dispatch(deleteMoviesStart());

	try {
		await axios.delete(API_URL + '/movies/' + id, {
			headers: {
				token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token,
			},
		});

		dispatch(deleteMoviesSuccess(id));
	} catch (error) {
		dispatch(deleteMoviesFailure());
	}
};
