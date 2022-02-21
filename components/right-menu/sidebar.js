import FilterStories from './filter/filterStories';
import FilterQuestions from './filter/filterQuestions';
import LatestRec from './latest/latest-rec';
import LatestQuestions from './latest/latest-questions';
import { useRouter } from 'next/router';
import FilterByLabel from './filter/filterByLabel';

export default function RightSideBar() {
	const router = useRouter();
	const pathname = router.pathname;

	function getSegment(path) {
		const segments = path.split('/');
		return segments[2];
	}

	return (
		<aside className='flex flex-col w-96 pl-5 space-y-5 overflow-y-auto scroll-smooth pb-24'>
			{pathname === '/' && <FilterStories />}
			{pathname === '/questions' && <FilterQuestions />}
			{pathname.includes('/recommendations') === true && (
				<FilterByLabel type={getSegment(pathname)} />
			)}
			{pathname.includes('/recommendations') !== true && <LatestRec />}
			{pathname !== '/questions' && <LatestQuestions />}
		</aside>
	);
}
