import React, { useState, useEffect } from 'react';
import './App.scss';
import {
	Header,
	MainSection,
	Research,
	Founders,
	Building,
	Footer,
	Imagine,
} from './components';
import Preloader from './components/Preloader/Preloader';

function App() {
	const [isLoading, setIsLoading] = useState(true);
	const [onFade, setOnFade] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setOnFade(true);
		}, 4000);

		setTimeout(() => {
			setIsLoading(false);
		}, 4500);
	}, []);

	return isLoading ? (
		<Preloader onFinish={onFade}/>
	) : (
		<div id='top' className='app-wrapper'>
			<Header />
			<MainSection />
			<Building />
			<Research />
			<Imagine />
			<Founders />
			<Footer />
		</div>
	);
}

export default App;
