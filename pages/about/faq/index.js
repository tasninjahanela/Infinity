import React, { useState } from 'react';

function Faq() {
	const [activeIndex, setActiveIndex] = useState(null);

	const toggleFAQ = (index) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	return (
		<>
			<div className="container-fluid bg-breadcrumb">
				<div
					className="container text-center py-5"
					style={{ maxWidth: '900px' }}>
					<h3 className="display-3 mb-4 wow fadeInDown" data-wow-delay="0.1s">
						Frequently Asked Questions
					</h3>
				</div>
			</div>
			<div className="container-fluid contact py-5">
				<div className="row">
					<div className="col-lg-6">
						{/* FAQ Section - First column */}
						<div className="faq-section">
							<div className="faq-question" onClick={() => toggleFAQ(0)}>
								What services does Infinity IT Solution offer?
								<span className="toggle-icon">
									{activeIndex === 0 ? (
										<i class="fas fa-chevron-up"></i>
									) : (
										<i class="fas fa-chevron-down"></i>
									)}
								</span>
							</div>
							<div
								className={`faq-answer ${activeIndex === 0 ? 'active' : ''}`}
								style={{ maxHeight: activeIndex === 0 ? '300px' : '0' }}>
								<p>
									Infinity IT Solution offers a wide range of IT and security
									services, including network security solutions, biometric
									access systems, fire alarm systems, and IT consultancy. We
									specialize in providing customized IT solutions to meet your
									business&apos;s unique needs.
								</p>
							</div>
						</div>

						<div className="faq-section">
							<div className="faq-question" onClick={() => toggleFAQ(1)}>
								How do I request a consultation?
								<span className="toggle-icon">
									{activeIndex === 1 ? (
										<i class="fas fa-chevron-up"></i>
									) : (
										<i class="fas fa-chevron-down"></i>
									)}
								</span>
							</div>
							<div
								className={`faq-answer ${activeIndex === 1 ? 'active' : ''}`}
								style={{ maxHeight: activeIndex === 1 ? '300px' : '0' }}>
								<p>
									To request a consultation, simply fill out our contact form on
									the Contact Us page or call us at +880-123456789. Our team
									will be in touch to schedule a meeting that suits your
									convenience.
								</p>
							</div>
						</div>

						<div className="faq-section">
							<div className="faq-question" onClick={() => toggleFAQ(2)}>
								What is the turnaround time for project completion?
								<span className="toggle-icon">
									{activeIndex === 2 ? (
										<i class="fas fa-chevron-up"></i>
									) : (
										<i class="fas fa-chevron-down"></i>
									)}
								</span>
							</div>
							<div
								className={`faq-answer ${activeIndex === 2 ? 'active' : ''}`}
								style={{ maxHeight: activeIndex === 2 ? '300px' : '0' }}>
								<p>
									The turnaround time for a project depends on its complexity
									and requirements. Generally, small projects take 2-4 weeks,
									while larger projects can take a few months. During the
									consultation phase, we assess the timeline and keep you
									updated throughout the project lifecycle.
								</p>
							</div>
						</div>

						<div className="faq-section">
							<div className="faq-question" onClick={() => toggleFAQ(3)}>
								Does Infinity IT Solution offer maintenance and support?
								<span className="toggle-icon">
									{activeIndex === 3 ? (
										<i class="fas fa-chevron-up"></i>
									) : (
										<i class="fas fa-chevron-down"></i>
									)}
								</span>
							</div>
							<div
								className={`faq-answer ${activeIndex === 3 ? 'active' : ''}`}
								style={{ maxHeight: activeIndex === 3 ? '300px' : '0' }}>
								<p>
									Yes, we provide ongoing support and maintenance services to
									ensure your IT systems and security solutions remain
									up-to-date and function smoothly. We offer different support
									packages based on your needs.
								</p>
							</div>
						</div>

						<div className="faq-section">
							<div className="faq-question" onClick={() => toggleFAQ(4)}>
								What industries does Infinity IT Solution serve?
								<span className="toggle-icon">
									{activeIndex === 4 ? (
										<i class="fas fa-chevron-up"></i>
									) : (
										<i class="fas fa-chevron-down"></i>
									)}
								</span>
							</div>
							<div
								className={`faq-answer ${activeIndex === 4 ? 'active' : ''}`}
								style={{ maxHeight: activeIndex === 4 ? '300px' : '0' }}>
								<p>
									We serve a variety of industries, including healthcare,
									education, financial services, manufacturing, and government
									sectors. Our solutions are customized to meet the unique
									challenges faced by businesses in different industries.
								</p>
							</div>
						</div>
					</div>

					<div className="col-lg-6">
						{/* FAQ Section - Second column */}
						<div className="faq-section">
							<div className="faq-question" onClick={() => toggleFAQ(5)}>
								Does Infinity IT Solution offer emergency services?
								<span className="toggle-icon">
									{activeIndex === 5 ? (
										<i class="fas fa-chevron-up"></i>
									) : (
										<i class="fas fa-chevron-down"></i>
									)}
								</span>
							</div>
							<div
								className={`faq-answer ${activeIndex === 5 ? 'active' : ''}`}
								style={{ maxHeight: activeIndex === 5 ? '300px' : '0' }}>
								<p>
									Yes, we provide emergency services for critical situations to
									ensure your IT systems and security infrastructure are back up
									and running with minimal downtime.
								</p>
							</div>
						</div>

						<div className="faq-section">
							<div className="faq-question" onClick={() => toggleFAQ(6)}>
								How does Infinity IT Solution ensure data security?
								<span className="toggle-icon">
									{activeIndex === 6 ? (
										<i class="fas fa-chevron-up"></i>
									) : (
										<i class="fas fa-chevron-down"></i>
									)}
								</span>
							</div>
							<div
								className={`faq-answer ${activeIndex === 6 ? 'active' : ''}`}
								style={{ maxHeight: activeIndex === 6 ? '300px' : '0' }}>
								<p>
									We implement industry-leading security protocols, firewalls,
									and encryption technologies to ensure that your data is
									protected from unauthorized access and cyber threats.
								</p>
							</div>
						</div>

						<div className="faq-section">
							<div className="faq-question" onClick={() => toggleFAQ(7)}>
								Does Infinity IT Solution offer cloud solutions?
								<span className="toggle-icon">
									{activeIndex === 7 ? (
										<i class="fas fa-chevron-up"></i>
									) : (
										<i class="fas fa-chevron-down"></i>
									)}
								</span>
							</div>
							<div
								className={`faq-answer ${activeIndex === 7 ? 'active' : ''}`}
								style={{ maxHeight: activeIndex === 7 ? '300px' : '0' }}>
								<p>
									Yes, we offer cloud infrastructure and services, including
									storage, backup, and cloud-based applications, to help
									companies achieve digital transformation and improve
									efficiency.
								</p>
							</div>
						</div>

						<div className="faq-section">
							<div className="faq-question" onClick={() => toggleFAQ(8)}>
								Can Infinity IT Solution integrate with existing systems?
								<span className="toggle-icon">
									{activeIndex === 8 ? (
										<i class="fas fa-chevron-up"></i>
									) : (
										<i class="fas fa-chevron-down"></i>
									)}
								</span>
							</div>
							<div
								className={`faq-answer ${activeIndex === 8 ? 'active' : ''}`}
								style={{ maxHeight: activeIndex === 8 ? '300px' : '0' }}>
								<p>
									Yes, our team can integrate IT solutions with your existing
									infrastructure to ensure seamless operations and
									interconnectivity.
								</p>
							</div>
						</div>

						<div className="faq-section">
							<div className="faq-question" onClick={() => toggleFAQ(9)}>
								Does Infinity IT Solution provide remote support?
								<span className="toggle-icon">
									{activeIndex === 9 ? (
										<i class="fas fa-chevron-up"></i>
									) : (
										<i class="fas fa-chevron-down"></i>
									)}
								</span>
							</div>
							<div
								className={`faq-answer ${activeIndex === 9 ? 'active' : ''}`}
								style={{ maxHeight: activeIndex === 9 ? '300px' : '0' }}>
								<p>
									Yes, we offer remote support services for clients worldwide to
									help troubleshoot and resolve issues without needing an
									in-person visit.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Faq;
