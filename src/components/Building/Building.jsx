import React from 'react';
import './Building.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const Building = () => {
	return (
		<div className='building'>
			<div className='building-left'>
				<img className='building-left-img' src='/img/flower.png' alt='flower' />
				<div className='building-left-title'>
					<div className='building-left-title-first'>
						<div className='building-left-title-first-dot'></div>
						<div className='building-left-title-first-text'>What We Are</div>
					</div>
					<div className='building-left-title-second'>Building</div>
				</div>
				<div className='building-left-empty'></div>
			</div>
			<div className='building-right'>
				<div className='building-right-top'></div>
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
				<div className='building-right-bottom'>
					<p>Creating entirely new game experiences</p>
					<img src='/img/jumper.png' alt='' />
				</div>
			</div>
		</div>
	);
};

export default Building;
