import React from 'react';

function Blog() {
	return (
		<>
			<div className="container-fluid blog py-5">
				<div className="container py-5">
					<div
						className="text-center mx-auto mb-5 wow fadeInUp"
						data-wow-delay="0.1s"
						style={{ maxWidth: '900px' }}>
						<h4 className="text-primary">Our Blog</h4>
						<h1 className="display-6 mb-4">Join Us For New Blog</h1>
						<p className="mb-0">
							Dolor sit amet consectetur, adipisicing elit. Ipsam, beatae
							maxime. Vel animi eveniet doloremque reiciendis soluta iste
							provident non rerum illum perferendis earum est architecto dolores
							vitae quia vero quod incidunt culpa corporis, porro doloribus.
							Voluptates nemo doloremque cum.
						</p>
					</div>
					<div className="row g-4 justify-content-center">
						<div
							className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
							data-wow-delay="0.1s">
							<div className="blog-item">
								<div className="blog-img">
									<img
										src="/images/blog-1.png"
										className="img-fluid w-100"
										alt=""
									/>
									<div className="blog-info">
										<span>
											<i className="fa fa-clock"></i> Dec 01.2024
										</span>
										<div className="d-flex">
											<span className="me-3">
												{' '}
												3 <i className="fa fa-heart"></i>
											</span>
											<a href="#" className="text-white">
												0 <i className="fa fa-comment"></i>
											</a>
										</div>
									</div>
								</div>
								<div className="blog-content text-dark border p-4 ">
									<h5 className="mb-4">
										Dolor, sit amet consectetur adipisicing
									</h5>
									<p className="mb-4">
										Lorem ipsum dolor sit amet consectur adip sed eiusmod amet
										consectur adip.
									</p>
									<a className="btn btn-light rounded-pill py-2 px-4" href="#">
										Read More
									</a>
								</div>
							</div>
						</div>
						<div
							className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
							data-wow-delay="0.3s">
							<div className="blog-item">
								<div className="blog-img">
									<img
										src="/images/blog-2.png"
										className="img-fluid w-100"
										alt=""
									/>
									<div className="blog-info">
										<span>
											<i className="fa fa-clock"></i> Dec 01.2024
										</span>
										<div className="d-flex">
											<span className="me-3">
												{' '}
												3 <i className="fa fa-heart"></i>
											</span>
											<a href="#" className="text-white">
												0 <i className="fa fa-comment"></i>
											</a>
										</div>
									</div>
								</div>
								<div className="blog-content text-dark border p-4 ">
									<h5 className="mb-4">
										Dolor, sit amet consectetur adipisicing
									</h5>
									<p className="mb-4">
										Lorem ipsum dolor sit amet consectur adip sed eiusmod amet
										consectur adip.
									</p>
									<a className="btn btn-light rounded-pill py-2 px-4" href="#">
										Read More
									</a>
								</div>
							</div>
						</div>
						<div
							className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
							data-wow-delay="0.5s">
							<div className="blog-item">
								<div className="blog-img">
									<img
										src="/images/blog-3.png"
										className="img-fluid w-100"
										alt=""
									/>
									<div className="blog-info">
										<span>
											<i className="fa fa-clock"></i> Dec 01.2024
										</span>
										<div className="d-flex">
											<span className="me-3">
												{' '}
												3 <i className="fa fa-heart"></i>
											</span>
											<a href="#" className="text-white">
												0 <i className="fa fa-comment"></i>
											</a>
										</div>
									</div>
								</div>
								<div className="blog-content text-dark border p-4 ">
									<h5 className="mb-4">
										Dolor, sit amet consectetur adipisicing
									</h5>
									<p className="mb-4">
										Lorem ipsum dolor sit amet consectur adip sed eiusmod amet
										consectur adip.
									</p>
									<a className="btn btn-light rounded-pill py-2 px-4" href="#">
										Read More
									</a>
								</div>
							</div>
						</div>
						<div
							className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
							data-wow-delay="0.7s">
							<div className="blog-item">
								<div className="blog-img">
									<img
										src="/images/blog-4.png"
										className="img-fluid w-100"
										alt=""
									/>
									<div className="blog-info">
										<span>
											<i className="fa fa-clock"></i> Dec 01.2024
										</span>
										<div className="d-flex">
											<span className="me-3">
												{' '}
												3 <i className="fa fa-heart"></i>
											</span>
											<a href="#" className="text-white">
												0 <i className="fa fa-comment"></i>
											</a>
										</div>
									</div>
								</div>
								<div className="blog-content text-dark border p-4 ">
									<h5 className="mb-4">
										Dolor, sit amet consectetur adipisicing
									</h5>
									<p className="mb-4">
										Lorem ipsum dolor sit amet consectur adip sed eiusmod amet
										consectur adip.
									</p>
									<a className="btn btn-light rounded-pill py-2 px-4" href="#">
										Read More
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Blog;
