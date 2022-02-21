export default function DropdownLabelMenu({ type }) {
	const countries = [
		'🇫🇷 French',
		'🇩🇪 German',
		'🇮🇹 Italian',
		'🇵🇹 Portuguese',
		'🇪🇸 Spanish',
	];

	const status = ['✅ Answered', '❌ Not yet'];

	const level = ['😊 Beginner', '🤓 Intermediate', '🧠 Advanced'];

	function getList(type) {
		switch (type) {
			case 'tag':
				return countries;
			case 'status':
				return status;
			case 'level':
				return level;
		}
	}

	const list = getList(type);

	const menu = list.map((item, index) => (
		<button key={index} className='text-left hover:text-black'>
			{item}
		</button>
	));

	return (
		<div className='flex flex-col space-y-4 pl-6 text-gray-400'>{menu}</div>
	);
}
