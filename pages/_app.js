import '../styles/globals.css';
import Layout from '../components/layout';
import { AuthContextProvider } from '../context/authContext';

function MyApp({ Component, pageProps }) {
	return (
		<AuthContextProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</AuthContextProvider>
	);
}

export default MyApp;
