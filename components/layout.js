import Header from './header';
import LeftSideBar from './left-menu/sidebar';
import RightSideBar from './right-menu/sidebar';
import LoginModal from './auth/login';
import RegisterModal from './auth/register';
import { useState } from 'react';

export default function Layout({ children }) {
	const [isLoginOpen, setIsLoginOpen] = useState(false);
	function toggleLoginModal(val) {
		setIsLoginOpen(val);
	}
	const [isSignupOpen, setIsSignupOpen] = useState(false);
	function toggleSignupModal(val) {
		setIsSignupOpen(val);
	}
	return (
		<>
			<Header openLogin={toggleLoginModal} openSignup={toggleSignupModal} />
			<LoginModal
				state={isLoginOpen}
				toggle={toggleLoginModal}
				openSignup={toggleSignupModal}
			/>
			<RegisterModal
				state={isSignupOpen}
				toggle={toggleSignupModal}
				openLogin={toggleLoginModal}
			/>
			<main className='flex h-screen px-5 justify-evenly fixed top-20 left-0 right-0 bottom-0 overflow-hidden'>
				<LeftSideBar />
				{children}
				<RightSideBar />
			</main>
		</>
	);
}
