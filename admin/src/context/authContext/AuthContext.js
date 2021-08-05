import { createContext, useEffect, useReducer } from 'react';
import { loginSuccess } from './AuthActions';
import AuthReducer from './AuthReducer';
import { INIT_STATE } from './const';

export const AuthContext = createContext(INIT_STATE);

const AuthContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AuthReducer, INIT_STATE);

	useEffect(() => {
		localStorage.setItem('user', JSON.stringify(state.user));
	}, [state]);

	return (
		<AuthContext.Provider
			value={{
				user: state.user,
				isLoading: state.isLoading,
				dispatch,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;
