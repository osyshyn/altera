import React, { useState, useEffect } from 'react';
import './Preloader.scss';
import { RandomReveal } from 'react-random-reveal';
import {TypeAnimation} from 'react-type-animation'

const Preloader = ({ onFinish, textStart }) => {
	return (
		<div className={`preloader ${onFinish ? 'fadeOut' : ''}`}>
			<div className='preloader-background'></div>
			<div className='preloader-content'>
				<RandomReveal isPlaying duration={3} characters='Altera' />
			</div>
			{textStart ? (<TypeAnimation
				sequence={[
					'MIT neuroscientists, ai researchers, developers, and professors accelerating towards and a future with digital human beings'
				]}
				speed={60}
				style={{ fontSize: '2em' }}
			/>) : (<></>)}
		</div>
	);
};

export default Preloader;
