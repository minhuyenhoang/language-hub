import Rec from './Rec';

export default function RecsBoard({ type }) {
	return (
		<div className='w-full pl-5 space-y-5 overflow-y-auto scroll-smooth pb-24'>
			<div className='text-white bg-sky-300 px-10 py-16 rounded-md'>
				<h1>Who loves books?</h1>
			</div>
			<div className='grid grid-cols-2 justify-items-center gap-6'>
				<Rec type={type} />
				<Rec type={type} />
				<Rec type={type} />
				<Rec type={type} />
			</div>
		</div>
	);
}
