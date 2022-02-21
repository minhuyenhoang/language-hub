import { useState } from 'react';
import DropdownLabelMenu from './dropdown-menu';

export default function FilterByLabel({ type }) {
	const [openDropdownTag, setOpenDropdownTag] = useState(false);
	const [openDropdownLevel, setOpenDropdownLevel] = useState(false);

	function setType(type) {
		switch (type) {
			case 'books':
				return 'Book';
			case 'courses':
				return 'Course';
			case 'movies':
				return 'Movie';
			case 'tv-shows':
				return 'TV Show';
			case 'music':
				return 'Music';
		}
	}

	const typeText = setType(type);

	return (
		<div className='flex flex-col text-sm space-y-4 border-2 border-gray-100 rounded-md divide-y-2 divide-gray-100'>
			<div className='flex items-center font-medium pl-5 pt-5'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='h-4 w-4'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z'
					/>
				</svg>
				<p className='ml-1.5'>{`Sort ${typeText} Recs Board`}</p>
			</div>
			<div className='grid gap-y-4 pl-5 pt-5 pb-5'>
				<div
					className='flex items-center group cursor-pointer text-gray-400'
					onClick={() => setOpenDropdownTag(!openDropdownTag)}>
					<span>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-4 w-4 text-black'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M7 20l4-16m2 16l4-16M6 9h14M4 15h14'
							/>
						</svg>
					</span>
					<span className='ml-1 group-hover:text-black'>Tag</span>
					<span>
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
								d='M17 13l-5 5m0 0l-5-5m5 5V6'
							/>
						</svg>
					</span>
				</div>
				{openDropdownTag === true && <DropdownLabelMenu type='tag' />}
				<div
					className='flex items-center group cursor-pointer text-gray-400'
					onClick={() => setOpenDropdownLevel(!openDropdownLevel)}>
					<span>⚡</span>
					<span className='ml-1 group-hover:text-black'> Level</span>
					<span>
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
								d='M17 13l-5 5m0 0l-5-5m5 5V6'
							/>
						</svg>
					</span>
				</div>
				{openDropdownLevel === true && <DropdownLabelMenu type='level' />}
			</div>
		</div>
	);
}
