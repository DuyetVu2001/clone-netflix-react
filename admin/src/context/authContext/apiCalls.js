import axios from 'axios';
import { API_URL } from '../../const';
import { loginFailure, loginStart, loginSuccess } from './AuthActions';

export const login = async (user, dispatch) => {
	dispatch(loginStart());
	try {
		const res = await axios.post(API_URL + '/auth/login', user);

		res.data.user.is_admin &&
			dispatch(loginSuccess({ ...res.data.user, token: res.data.accessToken }));
	} catch (error) {
		dispatch(loginFailure());
	}
};
