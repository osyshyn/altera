import React from 'react';
import './Research.scss';
import Animation from '../UI/Animation/Animation'

const Research = () => {
	return (
		<Animation>
		<div className='research'>
			<div className='research-right'>
				<div className='research-right-title'>
					<div className='research-right-title-dot'></div>
					<p className='research-right-title-text'>Research</p>
				</div>
				<h1 className='research-right-header'>THE RESEARCH AND ALPHA</h1>
				<div className='research-right-text'>
					We are building on decades of computational neuroscience research to
					build digital human beings that live, love and grow with us. We shut
					down our applied research lab at MIT to advance and productize the
					leading agent research in gaming.
				</div>
			</div>
			<div className='research-left'>
				<div className='research-left-img'></div>
			</div>
		</div>
		</Animation>
	);
};

export default Research;
