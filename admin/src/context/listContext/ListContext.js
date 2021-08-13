import { createContext, useReducer } from 'react';
import ListReducer from './ListReducer';

const INIT_STATE = {
	lists: [],
	isLoading: false,
	error: false,
};

export const ListContext = createContext(INIT_STATE);

const ListContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(ListReducer, INIT_STATE);

	return (
		<ListContext.Provider
			value={{
				lists: state.lists,
				isLoading: state.isLoading,
				error: state.error,
				dispatch,
			}}
		>
			{children}
		</ListContext.Provider>
	);
};

export default ListContextProvider;
