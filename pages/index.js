import StoriesBoard from '../components/stories/stories-board';
import useSWR, { SWRConfig } from 'swr';

async function fetcher(url) {
	const res = await fetch(url);
	const data = await res.json();
	return data;
}

export default function Home() {
	const { data, error } = useSWR('/api/stories/', fetcher);

	if (error) return <div>failed to load</div>;
	if (!data) return <div>loading...</div>;

	/*return (
		<SWRConfig value={fallback}>
			<StoriesBoard stories={data} />
		</SWRConfig>
	);*/
	return <StoriesBoard stories={data} />;
	//return <div>data</div>;
}

/*export async function getServerSideProps() {
	const stories = await fetcher('http://localhost:3000/api/stories/');

	return {
		props: {
			fallback: {
				'/api/stories': stories,
			},
		},
	};
}*/
