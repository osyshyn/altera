import React, { useState, useEffect } from 'react';
import './App.scss';
import {
	Header,
	MainSection,
	Research,
	Founders,
	Building,
	Footer,
} from './components';
import Preloader from './components/Preloader/Preloader';

function App() {
	const [isLoading, setIsLoading] = useState(true);
	const [onFade, setOnFade] = useState(false);
	const [textStart, setTextStart] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setOnFade(true);
		}, 9500);

		setTimeout(() => {
			setTextStart(true);
		}, 3000);

		setTimeout(() => {
			setIsLoading(false);
		}, 10000);
	}, []);

	return isLoading ? (
		<Preloader onFinish={onFade} textStart={textStart}/>
	) : (
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
