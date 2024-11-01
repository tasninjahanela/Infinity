import { StoreProvider } from 'easy-peasy';
import store from '../store';
import MainLayout from '../layouts';
import '../assets/css/style.css';
import '../assets/scss/bootstrap.scss';

function MyApp({ Component, pageProps }) {
	return (
		<StoreProvider store={store}>
			<MainLayout>
				<Component {...pageProps} />
			</MainLayout>
		</StoreProvider>
	);
}

export default MyApp;
