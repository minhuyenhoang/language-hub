import { Fragment, useRef, useContext } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { login } from '../../lib/auth';
import { AuthContext } from '../../context/authContext';

export default function LoginModal({ state, toggle, openSignup }) {
	const username = useRef();
	const password = useRef();
	const { error, dispatch } = useContext(AuthContext);

	const handleClick = (e) => {
		e.preventDefault();
		login(
			{
				username: username.current.value,
				password: password.current.value,
			},
			dispatch
		);
		if (!error) toggle(false);
	};

	return (
		<Transition appear show={state} as={Fragment}>
			<Dialog
				as='div'
				className='fixed inset-0 z-10 overflow-y-auto'
				onClose={() => {
					toggle(false);
				}}>
				<div className='min-h-screen px-4 text-center'>
					<Transition.Child
						as={Fragment}
						enter='ease-out duration-300'
						enterFrom='opacity-0'
						enterTo='opacity-100'
						leave='ease-in duration-200'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'>
						<Dialog.Overlay className='fixed inset-0 bg-black opacity-30' />
					</Transition.Child>

					{/* This element is to trick the browser into centering the modal contents. */}
					<span
						className='inline-block h-screen align-middle'
						aria-hidden='true'>
						&#8203;
					</span>

					<Transition.Child
						as={Fragment}
						enter='ease-out duration-300'
						enterFrom='opacity-0 scale-95'
						enterTo='opacity-100 scale-100'
						leave='ease-in duration-200'
						leaveFrom='opacity-100 scale-100'
						leaveTo='opacity-0 scale-95'>
						<div className='inline-block w-full max-w-md p-6 overflow-hidden text-center text-lg align-middle transition-all transform bg-white shadow-xl rounded-2xl'>
							<Dialog.Title>Login to start exploring ✌️</Dialog.Title>
							<form
								className='flex flex-col py-6 space-y-3'
								onSubmit={handleClick}>
								<input
									className='p-3 border-gray-200 border-2 rounded-md bg-gray-100 focus:bg-white focus:outline-black'
									placeholder='Username'
									ref={username}
								/>
								<input
									className='p-3 border-gray-200 border-2 rounded-md bg-gray-100 focus:bg-white focus:outline-black'
									placeholder='Password'
									ref={password}
								/>
								<button className='p-3 bg-black text-white rounded-md'>
									Login
								</button>
							</form>
							<div className='text-xs flex flex-col space-y-1'>
								<p className='text-blue-500'>Forgot your password? </p>
								<p>
									New to LanguageHub?{' '}
									<span
										onClick={() => {
											toggle(false);
											openSignup(true);
										}}
										className='text-blue-500 cursor-pointer'>
										Sign up now!
									</span>
								</p>
							</div>
						</div>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition>
	);
}
