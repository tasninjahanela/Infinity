import React from 'react';

function Testimonial() {
	return (
		<>
			<div className="container-fluid testimonial py-5">
				<div className="container">
					<div
						className="text-center mx-auto wow fadeInUp"
						data-wow-delay="0.1s"
						style={{ maxWidth: '900px' }}>
						<h4 className="text-primary">Testimonial</h4>
						<h1 className="display-6 mb-4">What Our Client Say About Us</h1>
						<p className="mb-0">
							Our experience with INFINITY IT SOLUTION has been nothing short of
							outstanding. Their expertise in IT and security solutions
							transformed our business operations. From consultation to
							implementation, the entire process was seamless and exceeded our
							expectations.
						</p>
					</div>
					<div
						className="testimonial-carousel owl-carousel wow zoomInDown"
						data-wow-delay="0.2s">
						<div
							className="testimonial-item"
							data-dot="<img className='img-fluid' src='/images/testimonial-img-1.jpg' alt=''>">
							<div className="testimonial-inner text-center p-5">
								<div className="d-flex align-items-center justify-content-center mb-4">
									<div
										className="testimonial-inner-img border border-primary border-3 me-4"
										style={{
											width: '100px',
											height: '100px',
											borderRadius: '50%',
										}}>
										<img
											src="/images/testimonial-img-1.jpg"
											className="img-fluid rounded-circle"
											alt=""
										/>
									</div>
									<div>
										<h5 className="mb-2">John Abraham</h5>
										<p className="mb-0">New York, USA</p>
									</div>
								</div>
								<p className="fs-7">
									Lorem ipsum dolor, sit amet consectetur adipisicing elit.
									Asperiores nemo facilis tempora esse explicabo sed!
									Dignissimos quia ullam pariatur blanditiis sed voluptatum.
									Totam aut quidem laudantium tempora. Minima, saepe earum!
								</p>
								<div className="text-center">
									<div className="d-flex justify-content-center">
										<i className="fas fa-star text-primary"></i>
										<i className="fas fa-star text-primary"></i>
										<i className="fas fa-star text-primary"></i>
										<i className="fas fa-star text-primary"></i>
										<i className="fas fa-star text-primary"></i>
									</div>
								</div>
							</div>
						</div>
						<div
							className="testimonial-item"
							data-dot="<img className='img-fluid' src='/images/testimonial-img-2.jpg' alt=''>">
							<div className="testimonial-inner text-center p-5">
								<div className="d-flex align-items-center justify-content-center mb-4">
									<div
										className="testimonial-inner-img border border-primary border-3 me-4"
										style={{
											width: '100px',
											height: '100px',
											borderRadius: '50%',
										}}>
										<img
											src="/images/testimonial-img-2.jpg"
											className="img-fluid rounded-circle"
											alt=""
										/>
									</div>
									<div>
										<h5 className="mb-2">John Abraham</h5>
										<p className="mb-0">New York, USA</p>
									</div>
								</div>
								<p className="fs-7">
									Lorem ipsum dolor, sit amet consectetur adipisicing elit.
									Asperiores nemo facilis tempora esse explicabo sed!
									Dignissimos quia ullam pariatur blanditiis sed voluptatum.
									Totam aut quidem laudantium tempora. Minima, saepe earum!
								</p>
								<div className="text-center">
									<div className="d-flex justify-content-center">
										<i className="fas fa-star text-primary"></i>
										<i className="fas fa-star text-primary"></i>
										<i className="fas fa-star text-primary"></i>
										<i className="fas fa-star text-primary"></i>
										<i className="fas fa-star text-primary"></i>
									</div>
								</div>
							</div>
						</div>
						<div
							className="testimonial-item"
							data-dot="<img className='img-fluid' src='/images/testimonial-img-3.jpg' alt=''>">
							<div className="testimonial-inner text-center p-5">
								<div className="d-flex align-items-center justify-content-center mb-4">
									<div
										className="testimonial-inner-img border border-primary border-3 me-4"
										style={{
											width: '100px',
											height: '100px',
											borderRadius: '50%',
										}}>
										<img
											src="/images/testimonial-img-3.jpg"
											className="img-fluid rounded-circle"
											alt=""
										/>
									</div>
									<div>
										<h5 className="mb-2">John Abraham</h5>
										<p className="mb-0">New York, USA</p>
									</div>
								</div>
								<p className="fs-7">
									Lorem ipsum dolor, sit amet consectetur adipisicing elit.
									Asperiores nemo facilis tempora esse explicabo sed!
									Dignissimos quia ullam pariatur blanditiis sed voluptatum.
									Totam aut quidem laudantium tempora. Minima, saepe earum!
								</p>
								<div className="text-center">
									<div className="d-flex justify-content-center">
										<i className="fas fa-star text-primary"></i>
										<i className="fas fa-star text-primary"></i>
										<i className="fas fa-star text-primary"></i>
										<i className="fas fa-star text-primary"></i>
										<i className="fas fa-star text-primary"></i>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Testimonial;
