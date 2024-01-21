import React from 'react';
import './MainSection.scss';
import Animation from '../UI/Animation/Animation';

const MainSection = () => {
	return (
		<div className='main'>
			<div className='main-section'>
				<div className='main-section-header'>
					<Animation variant='slide-left'>
						<div className='main-section-header-logo'>
							<img src='/img/logo.svg' alt='logo' />
							<div className='main-section-header-logo-text'>
								<p>
									Building digital human beings that live, love, and grow with
									us
								</p>
							</div>
						</div>
					</Animation>
					<Animation variant='slide-right'>
						<div className='main-section-header-navigation'>
							<a href='/'>About</a>
							<a href='/'>Research</a>
							<a href='/'>What We are building</a>
							<a href='/'>Founders</a>
							<a href='/'>Founders</a>
						</div>
					</Animation>
				</div>
				<div className='main-section-content'>
					<Animation variant='slide-bottom'>
						<h1 className='main-section-content-title'>
							Bringing agent games to life
						</h1>
					</Animation>
					<Animation delay={600} variant='slide-bottom'>
						<p className='main-section-content-text'>
							We partner with game studios and developers to create previously
							impossible agent first gaming experiences
						</p>
					</Animation>
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
				<Animation variant='slide-left'>
					<img
						className='main-bottom-section-img'
						src='/img/land.png'
						alt='land'
					/>
				</Animation>
				<div className='main-bottom-section-border'>
					<div className='main-bottom-section-border-background'></div>
				</div>

				<div className='main-bottom-section-details'>
					<Animation variant='slide-right'>
						<img
							className='main-bottom-section-details-img'
							src='/img/a16z.png'
							alt='a16z'
						/>
					</Animation>

					<div className='main-bottom-section-details-line'></div>
					<Animation variant='slide-right' delay={600}>
						<div className='main-bottom-section-details-text'>
							Announcing our $2M Pre-Seed Round, Led by Andreesen Horowitz
						</div>
					</Animation>
				</div>
			</div>
			<div className='main-imagine'>
				<Animation>
					<h1 className='main-imagine-header'>
						Imagine having friends that can play any game with you and are
						always online
					</h1>
				</Animation>
				<div className='main-imagine-cards'>
					<Animation variant='slide-left'>
						<div className='main-imagine-cards-item card1'>
							<p>Team up and play games with agents</p>
						</div>
					</Animation>
					<Animation>
						<div className='main-imagine-cards-item card2'>
							<p>
								Take your agent into any game and keep building up your
								connection and their skills
							</p>
						</div>
					</Animation>
					<Animation variant='slide-right'>
						<div className='main-imagine-cards-item card3'>
							<div className='main-imagine-cards-item-image'>
								<p>Explore an entirely new genre of agent-first games</p>
							</div>
						</div>
					</Animation>
				</div>
			</div>
		</div>
	);
};

export default MainSection;
