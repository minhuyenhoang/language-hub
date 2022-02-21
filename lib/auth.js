import axios from 'axios';

export async function login(credentials, dispatch) {
	dispatch({ type: 'LOGIN_START' });
	try {
		const user = await axios.post(
			'http://localhost:4000/api/auth/login',
			credentials
		);
		dispatch({ type: 'LOGIN_SUCCESS', payload: user.data });
	} catch (err) {
		dispatch({ type: 'LOGIN_FAILURE', payload: err });
	}
}
