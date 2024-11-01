import React from 'react';

function Features() {
	return (
		<>
			<div className="container-fluid feature overflow-hidden">
				<div className="container">
					<div className="row g-5 pt-5">
						<div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
							<div
								className="feature-img RotateMoveLeft h-100"
								style={{ objectFit: 'cover' }}>
								<img
									src="/images/features-1.png"
									className="img-fluid w-100 h-100"
									alt=""
								/>
							</div>
						</div>
						<div className="col-lg-6 wow fadeInRight" data-wow-delay="0.1s">
							<h4 className="text-primary">Fearutes</h4>
							<h1 className="display-6 mb-4">
								Trusted by Thousands of Happy Clients
							</h1>
							<p className="mb-4">
								With over 6,560 satisfied clients and 285 successfully completed
								projects, INFINITY IT SOLUTION has earned a reputation for
								delivering exceptional IT and security services. Hear what our
								clients have to say about how our tailored solutions helped
								their businesses thrive. Your success is our mission!
							</p>
							<div className="row g-4">
								<div className="col-6">
									<div className="d-flex">
										<i className="fas fa-newspaper fa-4x text-primary"></i>
										<div className="d-flex flex-column ms-3">
											<h2 className="mb-0 fw-bold">285</h2>
											<small className="text-dark">Created Projects</small>
										</div>
									</div>
								</div>
								<div className="col-6">
									<div className="d-flex">
										<i className="fas fa-users fa-4x text-primary"></i>
										<div className="d-flex flex-column ms-3">
											<h2 className="mb-0 fw-bold">6560</h2>
											<small className="text-dark">Happy Clients</small>
										</div>
									</div>
								</div>
							</div>
							<div className="my-4">
								<a href="#" className="btn btn-primary rounded-pill py-3 px-5">
									Read More
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Features;
