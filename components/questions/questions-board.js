import Question from './question';

export default function QuestionsBoard() {
	return (
		<div className='w-full pl-5 space-y-5 overflow-y-auto scroll-smooth pb-24'>
			<div className='text-white bg-sky-300 px-10 py-16 rounded-md'>
				<h1>Struggle or Confused? Have a Question? Ask them here!</h1>
			</div>
			<div className='flex flex-col items-center'>
				<Question />
			</div>
		</div>
	);
}
