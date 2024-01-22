import React, { useState } from 'react';
import './Building.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import SwiperCore from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import Animation from '../UI/Animation/Animation';

SwiperCore.use([Pagination]);

const Building = () => {
	const [activeSlideIndex, setActiveSlideIndex] = useState(0);

	const handleSlideChange = swiper => {
		setActiveSlideIndex(swiper.realIndex);
	};

	return (
		<Animation>
			<div id='building' className='building'>
				<div className='building-left'>
					<Animation variant='slide-top' delay={600}>
						<img
							className='building-left-img'
							src='/img/flower.png'
							alt='flower'
						/>
					</Animation>
					<div className='building-left-title'>
						<Animation variant='slide-left' delay={600}>
							<div className='building-left-title-first'>
								<div className='building-left-title-first-dot'></div>
								<div className='building-left-title-first-text'>
									What We Are
								</div>
							</div>
							<div className='building-left-title-second'>Building</div>
						</Animation>
					</div>
					<div className='building-left-empty'></div>
				</div>
				<div className='building-right'>
					<div className='building-right-top'></div>
					<Animation variant='slide-right' delay={600}>
						<div className='building-right-middle'>
							<Swiper
								modules={[Pagination]}
								slidesPerView={'auto'}
								spaceBetween={30}
								loop={true}
								pagination={{
									clickable: true,
								}}
								className='building-right-middle-swiper'
								onSlideChange={handleSlideChange}
							>
								<SwiperSlide className='card1'></SwiperSlide>
								<SwiperSlide className='card2'></SwiperSlide>
								<SwiperSlide className='card3'></SwiperSlide>
							</Swiper>
						</div>
					</Animation>
					<div className='building-right-bottom'>
						<p>
							{activeSlideIndex === 0
								? 'The infrastructure for a new class of games built around AI as a first principle'
								: activeSlideIndex === 1
								? 'Benchmarks that objectively measure agentic performance in gaming'
								: activeSlideIndex === 2
								? 'A computational neuroscience approach towards agent performance and cost reduction'
								: ''}
						</p>
						<Animation delay={600}>
							<img src='/img/jumper.png' alt='' />
						</Animation>
					</div>
				</div>
			</div>
		</Animation>
	);
};

export default Building;
