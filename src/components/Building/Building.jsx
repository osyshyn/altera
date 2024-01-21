import React from 'react';
import './Building.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import Animation from '../UI/Animation/Animation';

const Building = () => {
	return (
		<Animation>
			<div className='building'>
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
							>
								<SwiperSlide className='card1'></SwiperSlide>
								<SwiperSlide className='card2'></SwiperSlide>
								<SwiperSlide className='card3'></SwiperSlide>
							</Swiper>
						</div>
					</Animation>
					<div className='building-right-bottom'>
						<p>Creating entirely new game experiences</p>
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
