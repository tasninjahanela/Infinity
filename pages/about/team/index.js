import React from 'react';

function Team() {
	return (
		<>
			<section className="teamSection">
				<h2>Our Team</h2>
				<div className="teamContainer">
					<div className="teamMember">
						<img src="/images/about/team2.jpg" alt="Team Member 1" />
						<h3>John Doe</h3>
						<p>CEO</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
							tincidunt.
						</p>
						<div className="contact">
							<a href="mailto:john.doe@example.com">
								<i className="fas fa-phone"></i>
							</a>
							<a href="tel:+15551234567">
								<i className="fas fa-envelope"> </i>
							</a>
							<a
								href="https://facebook.com/johndoe"
								target="_blank"
								rel="noreferrer">
								<i className="fab fa-facebook-f"></i>
							</a>
							<a
								href="https://linkedin.com/in/johndoe"
								target="_blank"
								rel="noreferrer">
								<i className="fab fa-linkedin-in"></i>
							</a>
						</div>
					</div>
					<div className="teamMember">
						<img src="/images/about/team2.jpg" alt="Team Member 2" />
						<h3>Jane Smith</h3>
						<p>CTO</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
							tincidunt.
						</p>
						<div className="contact">
							<a href="mailto:jane.smith@example.com">
								<i className="fas fa-phone"></i>
							</a>
							<a href="tel:+15552345678">
								<i className="fas fa-envelope"> </i>
							</a>
							<a
								href="https://facebook.com/janesmith"
								target="_blank"
								rel="noreferrer">
								<i className="fab fa-facebook-f"></i>
							</a>
							<a
								href="https://linkedin.com/in/janesmith"
								target="_blank"
								rel="noreferrer">
								<i className="fab fa-linkedin-in"></i>
							</a>
						</div>
					</div>
					<div className="teamMember">
						<img src="/images/about/team2.jpg" alt="Team Member 3" />
						<h3>Michael Johnson</h3>
						<p>Project Manager</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
							tincidunt.
						</p>
						<div className="contact">
							<a href="mailto:michael.johnson@example.com">
								<i className="fas fa-phone"></i>
							</a>
							<a href="tel:+15553456789">
								<i className="fas fa-envelope"> </i>
							</a>
							<a
								href="https://facebook.com/michaeljohnson"
								target="_blank"
								rel="noreferrer">
								<i className="fab fa-facebook-f"></i>{' '}
							</a>
							<a
								href="https://linkedin.com/in/michaeljohnson"
								target="_blank"
								rel="noreferrer">
								<i className="fab fa-linkedin-in"></i>
							</a>
						</div>
					</div>
					<div className="teamMember">
						<img src="/images/about/team2.jpg" alt="Team Member 4" />
						<h3>Emily Davis</h3>
						<p>Lead Developer</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
							tincidunt.
						</p>
						<div className="contact">
							<a href="mailto:emily.davis@example.com">
								<i className="fas fa-phone"></i>
							</a>
							<a href="tel:+15554567890">
								<i className="fas fa-envelope"> </i>
							</a>
							<a
								href="https://facebook.com/emilydavis"
								target="_blank"
								rel="noreferrer">
								<i className="fab fa-facebook-f"></i>
							</a>
							<a
								href="https://linkedin.com/in/emilydavis"
								target="_blank"
								rel="noreferrer">
								<i className="fab fa-linkedin-in"></i>
							</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Team;
