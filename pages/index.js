import StoriesBoard from '../components/stories/stories-board';

export default function Home({ stories }) {
	return <StoriesBoard stories={stories} />;
}

export async function getStaticProps() {
	const res = await fetch('http://localhost:4000/api/stories/');
	const stories = await res.json();

	return {
		props: {
			stories: stories,
		},
	};
}
