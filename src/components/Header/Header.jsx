import React from 'react';
import './Header.scss';

import Marquee from 'react-fast-marquee';

const Header = () => {
	return (
		<div className='header'>
			<div className='header-title'>
				<div className='header-title-dot'></div>
				<p>Welcome</p>
			</div>
			<div className='header-running-line'>
				<Marquee direction='right' speed='80' className='marquee-block'>
					<div className='header-running-line-text-wrapper'>
						<p className='running-text'>
							Announcing our $2M pre-seed fundraise, led by Andreesen Horowitz
						</p>
						<div className="vertical-line"></div>
						<p className='running-text'>
							We are ex-google ai and MIT professors shutting down our research
							lab to advance agent gaming
						</p>
						<div className="vertical-line"></div>
					</div>
				</Marquee>
			</div>
			<div className='header-button'>
				<button>EN</button>
			</div>
		</div>
	);
};

export default Header;
