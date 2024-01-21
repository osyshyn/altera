import React, { useState } from 'react';
import './Founders.scss';
import Animation from '../UI/Animation/Animation'

const Founders = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const slides = [
		{
			id: 1,
			header: 'Meet our founders',
			count: '01',
			name: 'DR. ANDREW AHN, CSO',
			details: 'Scientist, Ritt professor at Columbia, and MIT PHD in math',
			text: 'Winner of the MIT Johnson Prize in Mathematics and ublished numerous times in top physics and math journals',
			backgroundImage: '/img/buildingBackgrounds/1.png',
		},
		{
			id: 2,
			header: 'Meet our founders',
			count: '02',
			name: 'SHUYING LUO, CTO',
			details: '8 years of building software and AI at Google',
			text: "Created the LLM powering the first AI version of GoogleSheets/Docs/Slides for 500k WAU's.",
			backgroundImage: '/img/buildingBackgrounds/2.png',
		},
		{
			id: 3,
			header: 'Meet our founders',
			count: '03',
			name: 'NICO CHRISTIE, CBO',
			details: 'Experienced tech entreprenuer and MIT MBA',
			text: 'Built a company from launch to ~200k users and $2M+ ARR as head of product, growth, and partnerships. Raised $15M over three venture rounds',
			backgroundImage: '/img/buildingBackgrounds/3.png',
		},
		{
			id: 4,
			header: 'Meet our founders',
			count: '04',
			name: 'DR. Robert Yang, CEO',
			details: 'COMPUTATIAONAL NEUROSCIENTIST, hEAD OF MIT MetaConscious Group',
			text: "WinLeader of MIT's MetaConscious Group. Raised over $3M to advance his research.",
			backgroundImage: '/img/buildingBackgrounds/4.png',
		},
	];

	const nextSlide = () => {
		setCurrentSlide(prevSlide => (prevSlide + 1) % slides.length);
	};

	const prevSlide = () => {
		setCurrentSlide(
			prevSlide => (prevSlide - 1 + slides.length) % slides.length
		);
	};

	return (
		<Animation>
		<div className='founders'>
			<div className='founders-tab'>
				<div className='founders-tab-left'>
					<div className='founders-tab-left-border'></div>
				</div>
				<div className='founders-tab-center'>
					<div className='founders-tab-center-dot'></div>
					<div className='founders-tab-center-text'>Founders</div>
				</div>
				<div className='founders-tab-right'>
					<div className='founders-tab-right-border'></div>
				</div>
			</div>
			<div className='slides-wrapper'>
				{slides.map((slide, index) => (
					<div
						key={index}
						className={`founders-main ${currentSlide === index ? '' : 'hide'}`}
						style={{
							backgroundImage: `url(${slide.backgroundImage})`,
						}}
					>
						<div className='founders-main-left'>
							<h1 className='founders-main-left-header'>{slide.header}</h1>
							<div className='founders-main-left-counter'>
								{slide.count} / 04
							</div>
							<div className='founders-main-left-name'>{slide.name}</div>
							<div className='founders-main-left-details'>{slide.details}</div>
							<div className='founders-main-left-quote'>
								<div className='founders-main-left-quote-img'>“</div>
								<div className='founders-main-left-quote-text'>
									{slide.text}
								</div>
							</div>
						</div>
						<div className='founders-main-right'></div>
					</div>
				))}
			</div>

			<div className='founders-bottom'>
				<div className='founders-bottom-block'>
					<div className='founders-bottom-block-border'></div>
				</div>
				<div className='founders-bottom-buttons'>
					<button onClick={prevSlide}>
						<img src='/img/left-arrow.svg' alt='' />
					</button>
					<button onClick={nextSlide}>
						<img src='/img/right-arrow.svg' alt='' />
					</button>
				</div>
			</div>
		</div>
		</Animation>
	);
};

export default Founders;
