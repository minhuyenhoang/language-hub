import { useCallback, useState } from 'react';
import Picker from '../reaction/picker';
import PickerButton from '../reaction/picker-button';
import ReactionButton from '../reaction/reaction-button';
import Tag from '../label/tag';
import Status from '../label/status';

export default function Question() {
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

	return (
		<div className='group flex flex-col p-6 space-y-6 overflow-hidden rounded-lg shadow-md relative hover:bg-gray-50'>
			<div className='flex items-center justify-between'>
				<div className='flex space-x-4'>
					<img
						alt=''
						src='https://source.unsplash.com/100x100/?portrait'
						className='object-cover w-12 h-12 rounded-full shadow dark:bg-coolGray-500'
					/>
					<div className='flex flex-col space-y-1'>
						<a href='#' className='text-sm font-semibold'>
							Leroy Jenkins
						</a>
						<span className='text-xs dark:text-coolGray-400'>4 hours ago</span>
					</div>
				</div>
				<div className='flex space-x-2'>
					<Tag />
					<Status />
				</div>
			</div>
			<div>
				<h2 className='mb-1 text-xl font-semibold'>
					Nam cu platonem posidonium sanctus debitis te
				</h2>
				<p className='text-sm dark:text-coolGray-400'>
					Eu qualisque aliquando mel, id lorem detraxit nec, ad elit minimum
					pri. Illum ipsum detracto ne cum. Mundi nemore te ius, vim ad illud
					atqui apeirian...
				</p>
			</div>
			<div className='flex flex-wrap justify-between'>
				<button
					aria-label='Bookmark this post'
					type='button'
					className='p-2 rounded-full border-gray-100 border-2 bg-white'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 512 512'
						className='w-4 h-4 fillCurrent'>
						<path d='M424,496H388.75L256.008,381.19,123.467,496H88V16H424ZM120,48V456.667l135.992-117.8L392,456.5V48Z'></path>
					</svg>
				</button>
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
			</div>
		</div>
	);
}
