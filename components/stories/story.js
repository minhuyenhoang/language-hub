import { useCallback, useState } from 'react';
import Picker from '../reaction/picker';
import PickerButton from '../reaction/picker-button';
import ReactionButton from '../reaction/reaction-button';
import Tag from '../label/tag';

export default function Story({ story, reaction }) {
	return (
		<div>
			<div className='flex items-center justify-between'>
				<div className='flex space-x-4'>
					<img
						alt=''
						src='https://source.unsplash.com/100x100/?portrait'
						className='object-cover w-12 h-12 rounded-full shadow dark:bg-coolGray-500'
					/>
					<div className='flex flex-col space-y-1'>
						<a href='#' className='text-sm font-semibold'>
							{story.username}
						</a>
						<span className='text-xs dark:text-coolGray-400'>4 hours ago</span>
					</div>
				</div>
				<Tag />
			</div>
		</div>
	);
}
