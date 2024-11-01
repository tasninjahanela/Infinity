import React from 'react';

function CSR() {
	return (
		<>
			<div className="about-page">
				<section className="about-section">
					<div className="container">
						<h2>Corporate Social Responsibility</h2>
						<p>
							At Infinity IT Solution, we are committed to making a positive
							impact on society and the environment through innovative solutions
							and ethical business practices.
						</p>
					</div>
				</section>
			</div>
			<div className="csr-container">
				<section className="csr-intro">
					<h2>Our Commitment to Social Responsibility</h2>
					<p>
						We strive to be a responsible company by actively contributing to
						sustainable development and supporting communities through various
						CSR initiatives.
					</p>
					{/* Added Full Width Image */}
					<img
						src="/images/fullpage-csr.jpg"
						alt="CSR Intro Image"
						className="csr-intro-image"
					/>
				</section>

				<section className="csr-initiatives">
					<h2>Key CSR Initiatives</h2>
					<div className="csr-grid">
						{/* Initiative 1 */}
						<div className="csr-card">
							<img src="/images/education.jpg" alt="Education for All" />
							<div className="card-content">
								<h3>Education for All</h3>
								<p>
									We provide educational resources and technology to underserved
									communities to promote digital literacy and bridge the
									education gap.
								</p>
							</div>
						</div>

						{/* Initiative 2 */}
						<div className="csr-card">
							<img
								src="/images/environment.jpg"
								alt="Environmental Sustainability"
							/>
							<div className="card-content">
								<h3>Environmental Sustainability</h3>
								<p>
									We are committed to reducing our carbon footprint by adopting
									eco-friendly business practices and promoting green
									technologies.
								</p>
							</div>
						</div>

						{/* Initiative 3 */}
						<div className="csr-card">
							<img src="/images/community.jpg" alt="Community Engagement" />
							<div className="card-content">
								<h3>Community Engagement</h3>
								<p>
									Through volunteering and partnerships, we work closely with
									local communities to improve livelihoods and foster
									development.
								</p>
							</div>
						</div>
					</div>
				</section>

				<section className="csr-values">
					<h2>Our Core Values</h2>
					<div className="values-grid">
						<div className="value-card">
							<img src="/images/integrity.jpg" alt="Integrity" />
							<div className="value-content">
								<h4>Integrity</h4>
								<p>
									We ensure that all our actions are rooted in transparency and
									ethics, fostering trust with clients and communities.
								</p>
							</div>
						</div>

						<div className="value-card">
							<img src="/images/innovation.jpg" alt="Innovation" />
							<div className="value-content">
								<h4>Innovation</h4>
								<p>
									We leverage innovation to create sustainable solutions that
									address pressing social and environmental challenges.
								</p>
							</div>
						</div>

						<div className="value-card">
							<img src="/images/sustainability.jpg" alt="Sustainability" />
							<div className="value-content">
								<h4>Sustainability</h4>
								<p>
									Our focus on sustainability drives us to balance profitability
									with environmental and social responsibility.
								</p>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}

export default CSR;
