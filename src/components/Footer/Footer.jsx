import React from 'react';
import './Footer.scss';
import Animation from '../UI/Animation/Animation';

const Footer = () => {
	return (
		<div id='contact' className='footer'>
			<Animation>
				<div className='footer-content'>
					<div className='footer-content-top'>
						<img src='/img/logo.svg' alt='logo' />
					</div>
					<div className='footer-content-middle'>
						<div className='footer-content-middle-left'>
							<div className='footer-content-middle-left-title'>
								<div className='footer-content-middle-left-title-dot'></div>
								<div className='footer-content-middle-left-title-text'>
									Sign Up for Private Beta
								</div>
							</div>
							<form action='' className='footer-content-middle-left-form'>
								<input type='email' placeholder='Email' />
								<p>Type:</p>
								<div className='footer-content-middle-left-form-checkbox'>
									<input type='checkbox' />
									<p>Investor</p>
								</div>
								<div className='footer-content-middle-left-form-checkbox'>
									<input type='checkbox' />
									<p>Partner</p>
								</div>
								<button>Submit</button>
							</form>
						</div>
						<div className='footer-content-middle-right'>
							<div className='footer-content-middle-right-links'>
								<h5>Quick Links</h5>
								<a href='#about'>About</a>
								<a href='#building'>What We are building</a>
								<a href='#research'>Research</a>
								<a href='#founders'>Founders</a>
								<a href='#contact'>Contact</a>
							</div>
							<div className='footer-content-middle-right-links'>
								<h5>Documentation</h5>
								<a href='/'>Privacy Policy</a>
								<a href='/'>Terms of Use</a>
								<a href='/'>Company Documents</a>
								<a href='/'>Licenses</a>
							</div>
							<div className='footer-content-middle-right-links'>
								<h5>Social Media</h5>
								<a href='/'>LinkedIn</a>
								<a href='/'>Twitter</a>
							</div>
						</div>
					</div>
					<div className='footer-content-bottom'>
						<p>Copyright © 2024 Altera.All Rights Reserved.</p>
						<a href='#top'>
							<button>
								<svg
									className='up-arrow'
									xmlns='http://www.w3.org/2000/svg'
									width='14'
									height='18'
									viewBox='0 0 14 18'
									fill='none'
								>
									<g opacity='0.6' clip-path='url(#clip0_1_174)'>
										<path
											d='M6.48676 17.3125L6.471 3.45414C6.47075 3.22939 6.28846 3.0474 6.06374 3.04748C5.86313 3.04756 5.69457 3.19431 5.64747 3.38936C5.45699 4.1781 5.04278 4.89802 4.45125 5.46061L1.84122 8.07065L0.757812 6.98723L7.25833 0.486748L13.7424 6.97082L12.6589 8.05424L10.1309 5.52624C9.50108 4.96039 9.06611 4.21403 8.88203 3.39371C8.83591 3.18809 8.66015 3.03115 8.44947 3.03115C8.21772 3.03115 8.02983 3.21896 8.02983 3.4508L8.02998 17.3123L6.48676 17.3125Z'
											fill='#F3EFEF'
										/>
									</g>
									<defs>
										<clipPath id='clip0_1_174'>
											<rect
												width='17.1094'
												height='14'
												fill='white'
												transform='matrix(0 -1 1 0 -0.0078125 17.5508)'
											/>
										</clipPath>
									</defs>
								</svg>
							</button>
						</a>
					</div>
				</div>
			</Animation>
		</div>
	);
};

export default Footer;
