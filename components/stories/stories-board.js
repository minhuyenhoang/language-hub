import StoryCard from './storyCard';

const seed = [
	{
		_id: '0',
		story: 'First Story',
		reactions: ['😆', '❤️'],
	},
];

export default function StoriesBoard({ stories }) {
	let list = seed.map((el) => {
		let reaction = [];
		el.reactions.forEach((element) => {
			reaction.push(element.reaction);
		});
		return (
			<StoryCard key={el.story._id} story={el.story} reaction={reaction} />
		);
	});
	return (
		<div className='w-full pl-5 space-y-5 overflow-y-auto scroll-smooth pb-24'>
			<div className='border-black border-2 px-10 py-16 rounded-md'>
				<h1>
					Connect with fellow language learners and share your learning journey
				</h1>
			</div>
			<div className='flex flex-col items-center'>{list}</div>
		</div>
	);
}
