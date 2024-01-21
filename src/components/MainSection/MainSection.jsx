import React from 'react';
import './MainSection.scss';

const MainSection = () => {
	return (
		<div className='main'>
			<div className='main-section'>
				<div className='main-section-header'>
					<div className='main-section-header-logo'>
						<img src='/img/logo.svg' alt='logo' />
						<div className='main-section-header-logo-text'>
							<p>
								Building digital human beings that live, love, and grow with us
							</p>
						</div>
					</div>
					<div className='main-section-header-navigation'>
						<a href='/'>About</a>
						<a href='/'>Research</a>
						<a href='/'>What We are building</a>
						<a href='/'>Founders</a>
						<a href='/'>Founders</a>
					</div>
				</div>
				<div className='main-section-content'>
					<h1 className='main-section-content-title'>
						Bringing agent games to life
					</h1>
					<p className='main-section-content-text'>
						We partner with game studios and developers to create previously
						impossible agent first gaming experiences
					</p>
					<div className='main-section-content-buttons'></div>
				</div>
				<img
					className='main-img'
					src='/img/ezgif.com-animated-gif-maker.gif'
					alt='gif'
					width='1278px'
					height='544px'
				/>
				<div className='main-section-about'>
					<div className='main-section-about-right'>
						<div className='main-section-about-right-border'></div>
					</div>
					<div className='main-section-about-center'>
						<div className='main-section-about-center-dot'></div>
						<div className='main-section-about-center-text'>About</div>
					</div>
					<div className='main-section-about-left'>
						<div className='main-section-about-left-border'></div>
					</div>
				</div>
			</div>
			<div className='main-bottom-section'>
				<img className='main-bottom-section-img' src='/img/land.png' alt='land' />
				<div className='main-bottom-section-border'>
					<div className='main-bottom-section-border-background'></div>
				</div>
				<div className='main-bottom-section-details'>
					<img
						className='main-bottom-section-details-img'
						src='/img/a16z.png'
						alt='a16z'
					/>
					<div className='main-bottom-section-details-line'></div>
					<div className='main-bottom-section-details-text'>
						Announcing our $2M Pre-Seed Round, Led by Andreesen Horowitz
					</div>
				</div>
			</div>
			<div className='main-imagine'>
				<h1>
					Imagine having friends that can play any game with you and are always
					online
				</h1>
				<div className='main-imagine-cards'>
					<div className='main-imagine-cards-item card1'>
						<p>Team up and play games with agents</p>
					</div>
					<div className='main-imagine-cards-item card2'>
						<p>
							Take your agent into any game and keep building up your connection
							and their skills
						</p>
					</div>
					<div className='main-imagine-cards-item card3'>
						<div className='main-imagine-cards-item-image'>
							<p>Explore an entirely new genre of agent-first games</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainSection;
