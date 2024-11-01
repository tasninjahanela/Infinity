import React from 'react';
import Hero from './hero';
import About from './about';
import Services from './services';
import Products from './product';
import Testimonial from './testimonial';
import Features from './features';

function MainHome() {
	return (
		<div>
			<Hero />
			<About />
			<Services />
			<Products />
			<Features />
			<Testimonial />
		</div>
	);
}

export default MainHome;
