import {
	GET_LISTS_FAILURE,
	GET_LISTS_START,
	GET_LISTS_SUCCESS,
	CREATE_LISTS_START,
	CREATE_LISTS_SUCCESS,
	CREATE_LISTS_FAILURE,
	UPDATE_LISTS_START,
	UPDATE_LISTS_SUCCESS,
	UPDATE_LISTS_FAILURE,
	DELETE_LISTS_START,
	DELETE_LISTS_SUCCESS,
	DELETE_LISTS_FAILURE,
} from '../contextConst';

const ListReducer = (state, action) => {
	const { type, payload } = action;

	switch (type) {
		// GET
		case GET_LISTS_START: {
			return {
				lists: [],
				isLoading: true,
				error: false,
			};
		}

		case GET_LISTS_SUCCESS: {
			return {
				lists: payload,
				isLoading: false,
				error: false,
			};
		}

		case GET_LISTS_FAILURE: {
			return {
				lists: [],
				isLoading: false,
				error: true,
			};
		}

		// CREATE
		case CREATE_LISTS_START: {
			return {
				...state,
				isLoading: true,
				error: false,
			};
		}

		case CREATE_LISTS_SUCCESS: {
			return {
				lists: [...state.lists, payload],
				isLoading: false,
				error: false,
			};
		}

		case CREATE_LISTS_FAILURE: {
			return {
				...state,
				isLoading: false,
				error: true,
			};
		}

		// UPDATE
		case UPDATE_LISTS_START: {
			return {
				...state,
				isLoading: true,
				error: false,
			};
		}

		case UPDATE_LISTS_SUCCESS: {
			return {
				lists: state.lists.map((list) =>
					list._id === payload._id ? payload : list
				),
				isLoading: false,
				error: false,
			};
		}

		case UPDATE_LISTS_FAILURE: {
			return {
				...state,
				isLoading: false,
				error: true,
			};
		}

		// DELETE
		case DELETE_LISTS_START: {
			return {
				...state,
				isLoading: true,
				error: false,
			};
		}

		case DELETE_LISTS_SUCCESS: {
			return {
				lists: state.lists.filter((list) => list._id !== payload),
				isLoading: false,
				error: false,
			};
		}

		case DELETE_LISTS_FAILURE: {
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

export default ListReducer;
