import React, { useRef, useEffect, useState } from 'react';
import s from './Animation.module.scss'

const Animation = ({children, variant='slide-bottom', delay=300, className}) => {
	const [isVisible, setIsVisible] = useState(false)

	const observer = useRef(null);
	const divRef = useRef(null);

	useEffect(() => {
		observer.current = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						setTimeout(() => {
							setIsVisible(true);
						}, delay);

						observer.current.unobserve(entry.target);
					}
				});
			},
			{
				threshold: 0.2,
			}
		);

		observer.current.observe(divRef.current);

		return () => observer.current.disconnect()
	}, [divRef, observer, setIsVisible]);

	return <div ref={divRef} className={`${s.animation} ${variant ? s[variant] : ''} ${className ? className : ''} ${isVisible ? s.active : ''}`}>
		{children}
	</div>;
};

export default Animation;
