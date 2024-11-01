import Link from 'next/link';
import React from 'react';

function Hero() {
	return (
		<>
			<div className="container-fluid header position-relative overflow-hidden p-0">
				<div className="hero-header overflow-hidden px-5">
					<div className="rotate-img">
						<img src="/images/sty-1.png" className="img-fluid w-100" alt="" />
						<div className="rotate-sty-2"></div>
					</div>
					<div className="row gy-5 align-items-center">
						<div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
							<h1
								className="display-5 text-dark mb-4 wow fadeInUp"
								data-wow-delay="0.3s">
								INFINITY IT SOLUTION
							</h1>{' '}
							<h3
								className="display-8 text-dark mb-4 wow fadeInUp"
								data-wow-delay="0.3s">
								Comprehensive Solutions for Your IT and Security Needs
							</h3>
							<p className="fs-6 mb-4 wow fadeInUp" data-wow-delay="0.5s">
								From cutting-edge network security to advanced automation, we
								deliver end-to-end solutions to empower your business. Whether
								it&apos;s securing your data, optimizing your infrastructure, or
								building smart systems, we provide the technology that drives
								success.
							</p>
							Explore Our Services |
							<Link legacyBehavior href="/contact-us/">
								<a data-wow-delay="0.7s"> Contact Us Today</a>
							</Link>
						</div>
						<div className="col-lg-6 wow fadeInRight" data-wow-delay="0.2s">
							<img
								src="/images/hero-right.png"
								className="img-fluid w-100 h-100"
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Hero;
