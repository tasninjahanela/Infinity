import Link from 'next/link';
import React from 'react';

function About() {
	return (
		<>
			<div className="container-fluid">
				<div className="container py-5">
					<div className="row g-5">
						<div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
							<div className="RotateMoveLeft">
								<img
									src="/images/about.png"
									className="img-fluid w-100"
									alt=""
								/>
							</div>
						</div>
						<div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
							<h4 className="mb-1 text-primary">About Us</h4>
							<h1 className="display-6 mb-4">
								Pioneers in IT Solutions & Network Security
							</h1>
							<p className="mb-4">
								At INFINITY IT SOLUTION, we specialize in delivering
								state-of-the-art IT infrastructure, network security, and
								automation solutions for businesses of all sizes. With a
								dedicated team of experts and a commitment to innovation, we
								provide tailored solutions to meet the evolving demands of the
								digital world. Our mission is to empower businesses by enhancing
								their security, efficiency, and technological capabilities,
								helping them stay ahead in today’s competitive landscape.
								Whether it&apos;s securing critical data, implementing
								cutting-edge security systems, or optimizing your IT operations,
								we are your trusted partner for success.
							</p>
							<Link legacyBehavior href="/about/">
								<a className="btn btn-primary rounded-pill py-3 px-5">
									About More
								</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default About;
