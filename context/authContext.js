import { createContext, useReducer } from 'react';
import AuthReducer from './authReducer';

const initialState = {
	user: null,
	error: false,
};

export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AuthReducer, initialState);

	return (
		<AuthContext.Provider
			value={{
				user: state.user,
				error: state.error,
				dispatch,
			}}>
			{children}
		</AuthContext.Provider>
	);
};
