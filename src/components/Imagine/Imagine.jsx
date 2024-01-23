import React from 'react';
import'./Imagine.scss'
import Animation from '../UI/Animation/Animation';

const Imagine = () => {
	return (
		<div className='main-imagine'>
			<Animation>
				<h1 className='main-imagine-header'>
					Imagine having <span className='green-text'>friends</span> that can play any game with you and are <span className='green-text'>always online</span>
				</h1>
			</Animation>
			<div className='main-imagine-cards'>
				<Animation variant='slide-left'>
					<div className='main-imagine-cards-item card1'>
						<p className='card-text'>Team up with or play games alongside agents and friends.</p>
					</div>
				</Animation>
				<Animation>
					<div className='main-imagine-cards-item card2'>
						<p className='card-text'>
							Swap agents into any game and build up your relationship and their skills.
						</p>
					</div>
				</Animation>
				<Animation variant='slide-right'>
					<div className='main-imagine-cards-item card3'>
						<div className='main-imagine-cards-item-image'>
							<p className='card-text'>Explore a new genre of AI and Agent-first gaming experiences.</p>
						</div>
					</div>
				</Animation>
			</div>
		</div>
	);
};

export default Imagine;
