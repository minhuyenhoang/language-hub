import { useContext } from 'react';
import { AuthContext } from '../context/authContext';

export default function Header({ openLogin, openSignup }) {
	const { user } = useContext(AuthContext);
	return (
		<nav className='flex justify-between p-5 pr-5w-screen'>
			<div>Lingo</div>
			{user !== null ? (
				<img
					alt=''
					src='https://source.unsplash.com/100x100/?portrait'
					className='object-cover w-12 h-12 rounded-full shadow dark:bg-coolGray-500'
				/>
			) : (
				<div className='text-xs font-medium space-x-2'>
					<button
						className='px-3 py-2 bg-gray-100 rounded-full'
						onClick={() => openLogin(true)}>
						Login
					</button>
					<button
						className='px-3 py-2 bg-black text-white rounded-full'
						onClick={() => openSignup(true)}>
						Sign up
					</button>
				</div>
			)}
		</nav>
	);
}
