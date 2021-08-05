import { LOGIN_FAILURE, LOGIN_START, LOGIN_SUCCESS, LOGOUT } from './const';

const AuthReducer = (state, action) => {
	const { type, payload } = action;

	switch (type) {
		case LOGIN_START: {
			return {
				...state,
				user: null,
				isLoading: true,
			};
		}

		case LOGIN_SUCCESS: {
			return {
				...state,
				user: payload,
				isLoading: false,
				error: false,
			};
		}

		case LOGIN_FAILURE: {
			return {
				...state,
				user: null,
				isLoading: false,
				error: true,
			};
		}

		case LOGOUT: {
			return {
				...state,
				user: null,
			};
		}

		default:
			return state;
	}
};

export default AuthReducer;
