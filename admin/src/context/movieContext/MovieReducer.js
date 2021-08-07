import {
	GET_MOVIES_FAILURE,
	GET_MOVIES_START,
	GET_MOVIES_SUCCESS,
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

const MovieReducer = (state, action) => {
	const { type, payload } = action;

	switch (type) {
		// GET
		case GET_MOVIES_START: {
			return {
				movies: [],
				isLoading: true,
				error: false,
			};
		}

		case GET_MOVIES_SUCCESS: {
			return {
				movies: payload,
				isLoading: false,
				error: false,
			};
		}

		case GET_MOVIES_FAILURE: {
			return {
				movies: [],
				isLoading: false,
				error: true,
			};
		}

		// CREATE
		case CREATE_MOVIES_START: {
			return {
				...state,
				isLoading: true,
				error: false,
			};
		}

		case CREATE_MOVIES_SUCCESS: {
			return {
				movies: [...state.movies, payload],
				isLoading: false,
				error: false,
			};
		}

		case CREATE_MOVIES_FAILURE: {
			return {
				...state,
				isLoading: false,
				error: true,
			};
		}

		// UPDATE
		case UPDATE_MOVIES_START: {
			return {
				...state,
				isLoading: true,
				error: false,
			};
		}

		case UPDATE_MOVIES_SUCCESS: {
			return {
				movies: state.movies.map((movie) =>
					movie._id === payload._id ? payload : movie
				),
				isLoading: false,
				error: false,
			};
		}

		case UPDATE_MOVIES_FAILURE: {
			return {
				...state,
				isLoading: false,
				error: true,
			};
		}

		// DELETE
		case DELETE_MOVIES_START: {
			return {
				...state,
				isLoading: true,
				error: false,
			};
		}

		case DELETE_MOVIES_SUCCESS: {
			return {
				movies: state.movies.filter((movie) => movie._id !== payload),
				isLoading: false,
				error: false,
			};
		}

		case DELETE_MOVIES_FAILURE: {
			return {
				...state,
				isLoading: false,
				error: true,
			};
		}

		default:
			return state;
	}
};

export default MovieReducer;
