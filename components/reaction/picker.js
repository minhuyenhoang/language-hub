export default function Picker({ setReactions }) {
	const list = [
		'👍',
		'😍',
		'🙌',
		'🤩',
		'👏',
		'❤️',
		'🤣',
		'🔥',
		'😆',
		'💪',
		'🎉',
	];
	const emojis = list.map((emoji, index) => (
		<span
			className='rounded-full px-1 border-2 border-white hover:border-gray-100 cursor-pointer'
			key={index}
			onClick={() => {
				getSelectedEmoji(emoji);
			}}>
			<span>{emoji}</span>
		</span>
	));

	function getSelectedEmoji(emoji) {
		setReactions(emoji);
	}

	return (
		<div className='w-48 absolute bottom-16 right-24 bg-white rounded-md shadow'>
			<div className='grid grid-cols-5 grid-rows-3 p-4 justify-items-center gap-3'>
				{emojis}
			</div>
		</div>
	);
}
