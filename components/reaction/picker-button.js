export default function PickerButton({ togglePicker }) {
	function toggle() {
		togglePicker();
	}

	return (
		<button
			type='button'
			className='flex items-center p-1 space-x-1'
			onClick={toggle}>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='h-5 w-5 text-gray-500'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={1.5}
					d='M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
				/>
			</svg>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='h-6 w-6 text-gray-500'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={1.5}
					d='M12 6v6m0 0v6m0-6h6m-6 0H6'
				/>
			</svg>
			<span></span>
		</button>
	);
}
