import Image from 'next/image';
import Picker from '../reaction/picker';
import PickerButton from '../reaction/picker-button';
import ReactionButton from '../reaction/reaction-button';
import Tag from '../label/tag';
import { useState, useCallback } from 'react';
import Level from '../label/level';

export default function Rec({ type }) {
	const [show, setShow] = useState(false);
	const [selectedReactions, setSelectedReactions] = useState([]);

	const togglePicker = useCallback(() => {
		setShow(!show);
	}, [show]);

	const setReactions = useCallback(
		(emoji) => {
			setSelectedReactions([...selectedReactions, emoji]);
			setShow(!show);
		},
		[selectedReactions, show]
	);

	function setType(type) {
		switch (type) {
			case 'books':
				return (
					<button
						aria-label='Bookmark this book'
						type='button'
						className='p-2 rounded-full border-gray-100 border-2 bg-white'>
						<svg
							width='24'
							height='24'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'
							aria-labelledby='glassesIconTitle'
							stroke='#000'
							strokeLinecap='square'
							fill='none'
							color='#000'>
							<path
								strokeLinecap='round'
								d='M14 12c-.597-.667-1.264-1-2-1s-1.403.333-2 1'
							/>
							<path d='M20 12h2M2 12h2' />
							<circle cx='7' cy='12' r='3' />
							<circle cx='17' cy='12' r='3' />
						</svg>
					</button>
				);
			case 'movies':
			case 'tv-shows':
				return (
					<button
						aria-label='Save this post'
						type='button'
						className='p-2 rounded-full border-gray-100 border-2 bg-white'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='18'
							height='18'
							viewBox='0 0 15 15'
							fill='none'>
							<path
								d='M7.5 14.219A6.719 6.719 0 1 1 14.219 7.5 6.725 6.725 0 0 1 7.5 14.219Zm0-12.5A5.781 5.781 0 1 0 13.281 7.5 5.787 5.787 0 0 0 7.5 1.719Z'
								fill='#000'
							/>
							<path
								d='M6.681 10.769a1.25 1.25 0 0 1-1.25-1.25v-3.75a1.25 1.25 0 0 1 .675-1.087 1.25 1.25 0 0 1 1.281.088l2.681 1.875a1.25 1.25 0 0 1 0 2.025l-2.681 1.875a1.25 1.25 0 0 1-.706.225Zm0-5.288a.319.319 0 0 0-.138.031.3.3 0 0 0-.163.269v3.75a.3.3 0 0 0 .163.269.275.275 0 0 0 .306 0L9.53 7.925a.294.294 0 0 0 0-.488l-2.655-1.9a.275.275 0 0 0-.194-.056Z'
								fill='#000'
							/>
						</svg>
					</button>
				);
			case 'music':
				return (
					<button
						aria-label='Save this post'
						type='button'
						className='p-2 rounded-full border-gray-100 border-2 bg-white'>
						<svg
							width={15}
							height={15}
							viewBox='-0.648 0 18 18'
							data-name='14 - Headphone'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								data-name='Path 181'
								d='M.369 10.969V6.931C.369 3.522 3.596.8 7.523.8s7.154 2.722 7.154 6.131v4.039a.6.6 0 0 0 1.2 0V6.931C15.877 2.91 12.156-.4 7.523-.4S-.831 2.91-.831 6.931v4.039a.6.6 0 1 0 1.2 0Z'
								fillRule='evenodd'
							/>
							<path
								data-name='Path 182'
								d='M4.246 12.169a1.8 1.8 0 0 0-1.8-1.8H-.231a.6.6 0 0 0-.6.6V17a.6.6 0 0 0 .6.6h2.677a1.8 1.8 0 0 0 1.8-1.8Zm-1.2 0V15.8a.6.6 0 0 1-.6.6H.369v-4.831h2.077a.6.6 0 0 1 .6.6Z'
								fillRule='evenodd'
							/>
							<path
								data-name='Path 183'
								d='M15.877 10.969a.6.6 0 0 0-.6-.6H12.6a1.8 1.8 0 0 0-1.8 1.8V15.8a1.8 1.8 0 0 0 1.8 1.8h2.677a.6.6 0 0 0 .6-.6v-6.031Zm-1.2.6V16.4H12.6a.6.6 0 0 1-.6-.6v-3.631a.6.6 0 0 1 .6-.6Z'
								fillRule='evenodd'
							/>
						</svg>
					</button>
				);
		}
	}

	const saveBtn = setType(type);

	return (
		<div className='group flex flex-col p-6 space-y-6 overflow-hidden rounded-lg shadow-md relative hover:bg-gray-50'>
			<div className='flex items-center justify-between'>
				<div className='flex space-x-4 items-center'>
					<img
						alt=''
						src='https://source.unsplash.com/100x100/?portrait'
						className='object-cover w-12 h-12 rounded-full shadow dark:bg-coolGray-500'
					/>
					<a href='#' className='text-sm font-semibold'>
						Leroy Jenkins
					</a>
				</div>
			</div>
			<div>
				<img
					src='https://picsum.photos/536/354'
					alt=''
					className='object-cover w-full mb-4 h-60 sm:h-96'
				/>
				<h2 className='mb-1 text-xl font-semibold'>
					Nam cu platonem posidonium sanctus debitis te
				</h2>
			</div>
			<div className='flex justify-between'>
				<div className='flex space-x-2'>
					<Tag />
					<Level />
				</div>
				<div className='flex space-x-1'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-6 w-6 fill-yellow-400'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={1}
							d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
						/>
					</svg>
					<p>4.5</p>
				</div>
			</div>
			{/*<div className='flex flex-wrap justify-between'>
				{saveBtn}
				<div className='flex space-x-2 text-sm'>
					<div className='rounded-full border-gray-100 border-2 bg-white'>
						{selectedReactions.length === 0 ? (
							<PickerButton togglePicker={togglePicker} />
						) : (
							<ReactionButton
								reactions={selectedReactions}
								togglePicker={togglePicker}
							/>
						)}
					</div>
					<button className='flex items-center p-1 space-x-1.5 border-gray-100 border-2 bg-white rounded-full'>
						<span>💬</span>
						<span>283</span>
					</button>
				</div>
				{show === true && <Picker setReactions={setReactions} />}
			</div>*/}
		</div>
	);
}
