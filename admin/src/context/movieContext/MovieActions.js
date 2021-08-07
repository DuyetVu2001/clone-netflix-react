import {
	GET_MOVIES_START,
	GET_MOVIES_SUCCESS,
	GET_MOVIES_FAILURE,
	CREATE_MOVIES_START,
	CREATE_MOVIES_SUCCESS,
	CREATE_MOVIES_FAILURE,
	UPDATE_MOVIES_START,
	UPDATE_MOVIES_SUCCESS,
	UPDATE_MOVIES_FAILURE,
	DELETE_MOVIES_START,
	DELETE_MOVIES_SUCCESS,
	DELETE_MOVIES_FAILURE,
} from '../contextConst';

// GET
export const getMoviesStart = () => ({
	type: GET_MOVIES_START,
});

export const getMoviesSuccess = (movie) => ({
	type: GET_MOVIES_SUCCESS,
	payload: movie,
});

export const getMoviesFailure = () => ({
	type: GET_MOVIES_FAILURE,
});

// CREATE
export const createMoviesStart = () => ({
	type: CREATE_MOVIES_START,
});

export const createMoviesSuccess = (movie) => ({
	type: CREATE_MOVIES_SUCCESS,
	payload: movie,
});

export const createMoviesFailure = () => ({
	type: CREATE_MOVIES_FAILURE,
});

// UPDATE
export const updateMoviesStart = () => ({
	type: UPDATE_MOVIES_START,
});

export const updateMoviesSuccess = (movie) => ({
	type: UPDATE_MOVIES_SUCCESS,
	payload: movie,
});

export const updateMoviesFailure = () => ({
	type: UPDATE_MOVIES_FAILURE,
});

// DELETE
export const deleteMoviesStart = () => ({
	type: DELETE_MOVIES_START,
});

export const deleteMoviesSuccess = (id) => ({
	type: DELETE_MOVIES_SUCCESS,
	payload: id,
});

export const deleteMoviesFailure = () => ({
	type: DELETE_MOVIES_FAILURE,
});
