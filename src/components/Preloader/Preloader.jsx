import React from 'react';
import './Preloader.scss';
import { RandomReveal } from 'react-random-reveal';
// import Animation from '../UI/Animation/Animation';

const Preloader = ({ onFinish }) => {
	return (
		<div className={`preloader ${onFinish ? 'fadeOut' : ''}`}>
			<div className='preloader-background'></div>
			<div className='preloader-content'>
				<RandomReveal isPlaying duration={1.5} characters='ALTERA' />
			</div>
			{/* <Animation delay={1000}>
				<p className='text'>
					MIT neuroscientists, ai researchers, developers, and professors
					accelerating towards a future with digital human beings
				</p>
			</Animation> */}
		</div>
	);
};

export default Preloader;
