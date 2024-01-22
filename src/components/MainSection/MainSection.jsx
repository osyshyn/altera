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
					<Animation delay={900} variant='slide-bottom'>
						<div className='main-section-content-buttons'>
							<button className='main-section-content-buttons-down main-button'>
								<svg
									className='down-arrow'
									width='16'
									height='18'
									viewBox='0 0 16 18'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<g id='SVG' clip-path='url(#clip0_218_11738)'>
										<path
											id='Vector'
											d='M8.9599 0.277253L8.70546 14.8126L9.53103 14.8258C9.70558 13.8891 10.2075 13.0326 10.9586 12.3896L13.8612 9.77656L15.0248 10.8997L7.79554 17.4076L0.832031 10.6856L2.03694 9.60089L4.75184 12.2216C5.52818 12.895 6.02038 13.8051 6.13956 14.7874L7.00085 14.8014L7.2731 0.25L8.9599 0.277253Z'
											fill='#141414'
										/>
									</g>
									<defs>
										<clipPath id='clip0_218_11738'>
											<rect
												width='15'
												height='18'
												fill='white'
												transform='translate(0.5)'
											/>
										</clipPath>
									</defs>
								</svg>
							</button>
							<button className='main-section-content-buttons-more main-button'>
								Learn More
							</button>
						</div>
					</Animation>
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
