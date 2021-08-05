/* ------------ACTIONS TYPE------------- */
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGOUT = 'LOGOUT';

/* ------------INIT STATE------------- */
export const INIT_STATE = {
	user: JSON.parse(localStorage.getItem('user')) || null,
	isLoading: false,
	error: false,
};
