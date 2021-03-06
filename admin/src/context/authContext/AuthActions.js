import {
	LOGIN_FAILURE,
	LOGIN_START,
	LOGIN_SUCCESS,
	LOGOUT,
} from '../contextConst';

// login
export const loginStart = () => ({
	type: LOGIN_START,
});

export const loginSuccess = (user) => ({
	type: LOGIN_SUCCESS,
	payload: user,
});

export const loginFailure = () => ({
	type: LOGIN_FAILURE,
});

// logout

export const logout = () => ({
	type: LOGOUT,
});
