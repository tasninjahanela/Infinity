import React from 'react';

function Contact() {
	return (
		<>
			<div className="container-fluid bg-breadcrumb">
				<div
					className="container text-center py-5"
					style={{ maxWidth: '900px' }}>
					<h3 className="display-3 mb-4 wow fadeInDown" data-wow-delay="0.1s">
						Contact Us
					</h3>
				</div>
			</div>
			<div className="container-fluid contact py-5">
				<div className="container py-5">
					<div
						className="text-center mx-auto mb-5 wow fadeInUp"
						data-wow-delay="0.1s"
						style={{ maxWidth: '900px' }}>
						<h4 className="text-primary mb-4">Contact Us</h4>
						<h1 className="display-5 mb-4">Get In Touch With Us</h1>
						<p className="mb-0">
							At Infinity IT Solution, we value your feedback, inquiries, and
							suggestions. Whether you need more information about our services,
							want to discuss a project, or have any questions, feel free to
							reach out to us using the form below. Our team will respond
							promptly to assist you.
						</p>
					</div>
					<div className="row g-5 align-items-center">
						<div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
							<h2 className="display-5 mb-2">Our Contact Form</h2>
							<p className="mb-4">
								We’d love to hear from you! Whether you have a question, need
								assistance, or want to explore our services, feel free to reach
								out. Fill out the form below, and our team will get back to you
								shortly!
							</p>
							<form>
								<div className="row g-3">
									<div className="col-lg-12 col-xl-6">
										<div className="form-floating">
											<input
												type="text"
												className="form-control"
												id="name"
												placeholder="Your Name"
											/>
											<label for="name">Your Name</label>
										</div>
									</div>
									<div className="col-lg-12 col-xl-6">
										<div className="form-floating">
											<input
												type="email"
												className="form-control"
												id="email"
												placeholder="Your Email"
											/>
											<label for="email">Your Email</label>
										</div>
									</div>
									<div className="col-lg-12 col-xl-6">
										<div className="form-floating">
											<input
												type="phone"
												className="form-control"
												id="phone"
												placeholder="Phone"
											/>
											<label for="phone">Your Phone</label>
										</div>
									</div>
									<div className="col-lg-12 col-xl-6">
										<div className="form-floating">
											<input
												type="text"
												className="form-control"
												id="project"
												placeholder="Project"
											/>
											<label for="project">Your Project</label>
										</div>
									</div>
									<div className="col-12">
										<div className="form-floating">
											<input
												type="text"
												className="form-control"
												id="subject"
												placeholder="Subject"
											/>
											<label for="subject">Subject</label>
										</div>
									</div>
									<div className="col-12">
										<div className="form-floating">
											<textarea
												className="form-control"
												placeholder="Leave a message here"
												id="message"
												style={{ height: '160px' }}></textarea>
											<label for="message">Message</label>
										</div>
									</div>
									<div className="col-12">
										<button className="btn btn-primary w-100 py-3">
											Send Message
										</button>
									</div>
								</div>
							</form>
						</div>
						<div className="col-lg-6 wow fadeInRight" data-wow-delay="0.3s">
							<div className="d-flex align-items-center mb-4">
								<div
									className="bg-light d-flex align-items-center justify-content-center mb-3"
									style={{
										width: '90px',
										height: '90px',
										borderRadius: '50px',
									}}>
									<i className="fa fa-home fa-2x text-primary"></i>
								</div>
								<div className="ms-4">
									<h4>Addresses</h4>
									<p className="mb-0">Shewrapara, Mirpur, Dhaka</p>
								</div>
							</div>
							<div className="d-flex align-items-center mb-4">
								<div
									className="bg-light d-flex align-items-center justify-content-center mb-3"
									style={{
										width: '90px',
										height: '90px',
										borderRadius: '50px',
									}}>
									<i className="fa fa-map-marker-alt fa-2x text-primary"></i>
								</div>
								<div className="ms-4">
									<h4>Addresses</h4>
									<p className="mb-0">Shewrapara, Mirpur, Dhaka</p>
								</div>
							</div>
							<div className="d-flex align-items-center mb-4">
								<div
									className="bg-light d-flex align-items-center justify-content-center mb-3"
									style={{
										width: '90px',
										height: '90px',
										borderRadius: '50px',
									}}>
									<i className="fa fa-phone-alt fa-2x text-primary"></i>
								</div>
								<div className="ms-4">
									<h4>Mobile</h4>
									<p className="mb-0">+012 345 67890</p>
									<p className="mb-0">+012 345 67890</p>
								</div>
							</div>
							<div className="d-flex align-items-center mb-4">
								<div
									className="bg-light d-flex align-items-center justify-content-center mb-3"
									style={{
										width: '90px',
										height: '90px',
										borderRadius: '50px',
									}}>
									<i className="fa fa-envelope-open fa-2x text-primary"></i>
								</div>
								<div className="ms-4">
									<h4>Email</h4>
									<p className="mb-0">info@example.com</p>
									<p className="mb-0">info@example.com</p>
								</div>
							</div>
							<div className="d-flex align-items-center">
								<div className="me-4">
									<div
										className="bg-light d-flex align-items-center justify-content-center"
										style={{
											width: '90px',
											height: '90px',
											borderRadius: '50px',
										}}>
										<i className="fas fa-share fa-2x text-primary"></i>
									</div>
								</div>
								<div className="d-flex">
									<a
										className="btn btn-lg-square btn-primary rounded-circle d-flex align-items-center justify-content-center mx-1"
										href="">
										<i className="fab fa-facebook-f"></i>
									</a>
									<a
										className="btn btn-lg-square btn-primary rounded-circle d-flex align-items-center justify-content-center mx-1"
										href="">
										<i className="fab fa-twitter"></i>
									</a>
									<a
										className="btn btn-lg-square btn-primary rounded-circle d-flex align-items-center justify-content-center mx-1"
										href="">
										<i className="fab fa-instagram"></i>
									</a>
									<a
										className="btn btn-lg-square btn-primary rounded-circle d-flex align-items-center justify-content-center mx-1"
										href="">
										<i className="fab fa-linkedin-in"></i>
									</a>
								</div>
							</div>
						</div>
						<div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
							<div className="rounded h-100">
								<iframe
									className="rounded w-100"
									style={{ height: '160px' }}
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1694259649153!5m2!1sen!2sbd"
									loading="lazy"
									referrerpolicy="no-referrer-when-downgrade"></iframe>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Contact;
