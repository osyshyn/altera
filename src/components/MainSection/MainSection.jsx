import React, { useState } from 'react';
import './MainSection.scss';
import Animation from '../UI/Animation/Animation';

const MainSection = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const openMenu = () => {
		setIsMenuOpen(true);
	};
	const CloseMenu = () => {
		setIsMenuOpen(false);
	};

	return (
		<div id='about' className='main'>
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
							<Animation variant='slide-right'>
						<button className='menu-button' onClick={openMenu}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='32'
								height='32'
								viewBox='0 0 32 32'
								fill='none'
							>
								<path
									d='M4 8H28M4 16H28M4 24H28'
									stroke='#96C196'
									stroke-width='2'
									stroke-linecap='round'
									stroke-linejoin='round'
								/>
							</svg>
						</button>
					</Animation>
						</div>
					</Animation>
					<Animation variant='slide-right'>
						<div className='main-section-header-navigation'>
							<a href='#about'>About</a>
							<a href='#building'>What We are building</a>
							<a href='#research'>Research</a>
							<a href='#founders'>Founders</a>
							<a href='#contact'>Contact</a>
						</div>
					</Animation>
					
				</div>
				<div className={`main-section-menu ${isMenuOpen ? 'open' : ''}`}>
					<div className="main-section-menu-logo">

					<div className='main-section-menu-button' onClick={CloseMenu}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='20'
							height='16'
							viewBox='0 0 20 16'
							fill='#96C8A2'
						>
							<path
								d='M19.5078 8.57987L3.67261 8.59788C3.41579 8.59817 3.20785 8.80642 3.20794 9.06316C3.20802 9.29235 3.37571 9.48493 3.59858 9.53874C4.49984 9.75636 5.32245 10.2296 5.96529 10.9054L8.94764 13.8872L7.70968 15.125L0.281923 7.69838L7.69093 0.290528L8.92889 1.52838L6.04029 4.41652C5.39372 5.13612 4.54089 5.63305 3.60356 5.84336C3.3686 5.89605 3.18928 6.09685 3.18928 6.33754C3.18928 6.60231 3.40388 6.81697 3.66878 6.81697L19.5076 6.8168L19.5078 8.57987Z'
								fill='#F3EFEF'
							/>
						</svg>
					</div>
					<img src='/img/logo.svg' alt='logo' />
					<div className="main-section-menu-empty"></div>
					</div>
					<div className='main-section-menu-content'>
						<a href='#about' onClick={CloseMenu}>About</a>
						<a href='#building' onClick={CloseMenu}>What We are building</a>
						<a href='#research' onClick={CloseMenu}>Research</a>
						<a href='#founders' onClick={CloseMenu}>Founders</a>
						<a href='#contact' onClick={CloseMenu}>Contact</a>
					</div>
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
							<a href='#building'>
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
							</a>
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
		</div>
	);
};

export default MainSection;
