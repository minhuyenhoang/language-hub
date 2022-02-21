import Link from 'next/link';
import { useState } from 'react';
import DropdownRecMenu from './dropdown-menu';

export default function LeftSideBar() {
	const [openDropdown, setOpenDropdown] = useState(false);
	const [select, setSelect] = useState('stories');

	return (
		<aside className='flex flex-col text-sm h-screen sticky w-72 font-medium'>
			<Link href='/'>
				<a
					className={`group px-1 pb-5 text-left flex items-center ${
						select === 'stories'
							? 'text-black'
							: 'text-gray-500 hover:text-black'
					}`}
					onClick={() => {
						setSelect('stories');
					}}>
					<span>📝 Stories</span>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className={`h-4 w-4 ml-1.5 ${
							select === 'stories'
								? 'text-black'
								: 'text-white group-hover:text-black'
						}`}
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M13 7l5 5m0 0l-5 5m5-5H6'
						/>
					</svg>
				</a>
			</Link>
			<button
				className={`group px-1 pb-5 text-left flex items-center ${
					select === 'recommendations' && openDropdown
						? 'text-black'
						: 'text-gray-500 hover:text-black'
				}`}
				onClick={() => {
					setOpenDropdown(!openDropdown);
					setSelect('recommendations');
				}}>
				<span>🌟 Recommendations</span>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className={`h-4 w-4 ml-1.5 ${
						select === 'recommendations' && openDropdown
							? 'text-black'
							: 'text-white group-hover:text-black'
					}`}
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M17 13l-5 5m0 0l-5-5m5 5V6'
					/>
				</svg>
			</button>
			{openDropdown === true && <DropdownRecMenu />}
			<Link href='/questions'>
				<a
					className={`group px-1 pb-5 text-left flex items-center ${
						select === 'questions'
							? 'text-black'
							: 'text-gray-500 hover:text-black'
					}`}
					onClick={() => {
						setSelect('questions');
					}}>
					<span>🤔 Questions</span>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className={`h-4 w-4 ml-1.5 ${
							select === 'questions'
								? 'text-black'
								: 'text-white group-hover:text-black'
						}`}
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M13 7l5 5m0 0l-5 5m5-5H6'
						/>
					</svg>
				</a>
			</Link>
			<Link href='/'>
				<a
					className={`group px-1 pb-5 text-left flex items-center ${
						select === 'topics'
							? 'text-black'
							: 'text-gray-500 hover:text-black'
					}`}>
					<span>💡 Topics</span>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-4 w-4 ml-1.5 text-white group-hover:text-black'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M13 7l5 5m0 0l-5 5m5-5H6'
						/>
					</svg>
				</a>
			</Link>
			<Link href='/'>
				<a
					className={`group px-1 pb-5 text-left flex items-center ${
						select === 'jokes' ? 'text-black' : 'text-gray-500 hover:text-black'
					}`}>
					<span>😆 Just For Fun</span>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-4 w-4 ml-1.5 text-white group-hover:text-black'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M13 7l5 5m0 0l-5 5m5-5H6'
						/>
					</svg>
				</a>
			</Link>
		</aside>
	);
}
