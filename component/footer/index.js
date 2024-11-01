import React from 'react';

function Footer() {
	return (
		<>
			<div
				className="container-fluid footer py-5 wow fadeIn"
				data-wow-delay="0.2s">
				<div className="container py-5">
					<div className="row g-5">
						<div className="col-md-6 col-lg-6 col-xl-3">
							<div className="footer-item d-flex flex-column">
								<h4 className="text-dark mb-4">Company</h4>
								<a href=""> Why Mailler?</a>
								<a href=""> Our Features</a>
								<a href=""> Our Portfolio</a>
								<a href=""> About Us</a>
								<a href=""> Our Blog & News</a>
								<a href=""> Get In Touch</a>
							</div>
						</div>
						<div className="col-md-6 col-lg-6 col-xl-3">
							<div className="footer-item d-flex flex-column">
								<h4 className="mb-4 text-dark">Quick Links</h4>
								<a href=""> About Us</a>
								<a href=""> Contact Us</a>
								<a href=""> Privacy Policy</a>
								<a href=""> Terms & Conditions</a>
								<a href=""> Our Blog & News</a>
								<a href=""> Our Team</a>
							</div>
						</div>
						<div className="col-md-6 col-lg-6 col-xl-3">
							<div className="footer-item d-flex flex-column">
								<h4 className="mb-4 text-dark">Services</h4>
								<a href=""> All Services</a>
								<a href=""> Promotional Emails</a>
								<a href=""> Product Updates</a>
								<a href=""> Email Marketing</a>
								<a href=""> Acquistion Emails</a>
								<a href=""> Retention Emails</a>
							</div>
						</div>
						<div className="col-md-6 col-lg-6 col-xl-3">
							<div className="footer-item d-flex flex-column">
								<h4 className="mb-4 text-dark">Contact Info</h4>
								<a href="">
									<i className="fa fa-map-marker-alt me-2"></i> 123 Street, New
									York, USA
								</a>
								<a href="">
									<i className="fas fa-envelope me-2"></i> info@example.com
								</a>
								<a href="">
									<i className="fas fa-phone me-2"></i> +012 345 67890
								</a>
								<a href="" className="mb-3">
									<i className="fas fa-print me-2"></i> +012 345 67890
								</a>
								<div className="d-flex align-items-center">
									<i className="fas fa-share fa-2x text-secondary me-2"></i>
									<a
										className="btn-square btn btn-primary rounded-circle d-flex align-items-center justify-content-center mx-1"
										href="">
										<i className="fab fa-facebook-f"></i>
									</a>
									<a
										className="btn-square btn btn-primary rounded-circle d-flex align-items-center justify-content-center mx-1"
										href="">
										<i className="fab fa-twitter"></i>
									</a>
									<a
										className="btn-square btn btn-primary rounded-circle d-flex align-items-center justify-content-center mx-1"
										href="">
										<i className="fab fa-instagram"></i>
									</a>
									<a
										className="btn-square btn btn-primary rounded-circle d-flex align-items-center justify-content-center mx-1"
										href="">
										<i className="fab fa-linkedin-in"></i>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="container-fluid copyright py-4">
				<div className="container">
					<div className="row g-4 align-items-center">
						<div className="col-md-6 text-center text-md-start mb-md-0">
							<span className="text-white">
								<a href="#">
									<i className="fas fa-copyright text-light me-2"></i>Infinity
								</a>
								, All right reserved.
							</span>
						</div>
						<div className="col-md-6 text-center text-md-end text-white">
							Designed By{' '}
							<a className="border-bottom" href="https://htmlcodex.com">
								Infinity
							</a>
						</div>
					</div>
				</div>
			</div>

			{/* Back to Top */}
			<a href="#" className="btn btn-primary btn-lg-square back-to-top">
				<i className="fa fa-arrow-up mt-2"></i>
			</a>
		</>
	);
}

export default Footer;
