import { createContext, useReducer } from 'react';
import MovieReducer from './MovieReducer';

const INIT_STATE = {
	movies: [],
	isLoading: false,
	error: false,
};

export const MovieContext = createContext(INIT_STATE);

const MovieContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(MovieReducer, INIT_STATE);

	return (
		<MovieContext.Provider
			value={{
				movies: state.movies,
				isLoading: state.isLoading,
				error: state.error,
				dispatch,
			}}
		>
			{children}
		</MovieContext.Provider>
	);
};

export default MovieContextProvider;
