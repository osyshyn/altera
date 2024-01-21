import './App.scss';
import {
	Header,
	MainSection,
	Research,
	Founders,
	Building,
	Footer,
} from './components';

function App() {
	return (
		<div className='app-wrapper'>
			<Header />
			<MainSection />
			<Research />
			<Building />
			<Founders />
			<Footer />
		</div>
	);
}

export default App;
