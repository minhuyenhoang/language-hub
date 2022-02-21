import Link from 'next/link';

export default function DropdownRecMenu() {
	return (
		<div className='pl-4'>
			<Link href='/recommendations/books'>
				<a className='group px-1 pb-5 text-left flex items-center text-gray-500 hover:text-black'>
					<span>📚 Books</span>
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
				<a className='group px-1 pb-5 text-left flex items-center text-gray-500 hover:text-black'>
					<span>🎓 Courses</span>
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
			<Link href='/recommendations/movies'>
				<a className='group px-1 pb-5 text-left flex items-center text-gray-500 hover:text-black'>
					<span>🍿 Movies</span>
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
			<Link href='/recommendations/music'>
				<a className='group px-1 pb-5 text-left flex items-center text-gray-500 hover:text-black'>
					<span>🎶 Music</span>
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
			<Link href='/recommendations/tv-shows'>
				<a className='group px-1 pb-5 text-left flex items-center text-gray-500 hover:text-black'>
					<span>📺 TV Shows</span>
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
		</div>
	);
}
