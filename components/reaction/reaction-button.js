export default function ReactionButton({ reactions, togglePicker }) {
	const list = reactions.map((emoji, index) => (
		<span key={index}>{emoji}</span>
	));

	function toggle() {
		togglePicker();
	}

	return (
		<button
			type='button'
			className='flex items-center p-1 space-x-1'
			onClick={toggle}>
			{list}
			<span>{list.length}</span>
		</button>
	);
}
