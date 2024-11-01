import React from 'react';

function Career() {
	return (
		<div className="career-container">
			<h1>Join Our Team at Infinity IT Solution</h1>

			<div className="intro">
				<p>
					At Infinity IT Solution, we are constantly growing and evolving. We
					are looking for talented, innovative, and motivated individuals to
					join our dynamic team. If you have the passion to excel and want to be
					part of cutting-edge solutions, apply today!
				</p>
			</div>

			<div className="current-opening">
				<h2>Current Openings</h2>
				<div className="job-listing">
					{/* Job 1 */}
					<div className="job-card">
						<h2>Software Developer</h2>
						<p>
							<strong>Location:</strong> Dhaka, Bangladesh
						</p>
						<p>
							We are seeking a skilled software developer with expertise in
							JavaScript, React, and Node.js. You will work on developing
							high-quality software solutions for our clients and will be
							involved in every stage of the development lifecycle.
						</p>
						<a
							href="mailto:hr@infinityitsolution.com?subject=Application for Software Developer"
							className="apply-now">
							Apply Now
						</a>
					</div>

					{/* Job 2 */}
					<div className="job-card">
						<h2>Network Security Specialist</h2>
						<p>
							<strong>Location:</strong> Remote
						</p>
						<p>
							As a Network Security Specialist, you will be responsible for
							managing and securing our clients&apos; networks. You will need
							experience in firewalls, VPNs, and intrusion detection systems to
							safeguard critical infrastructures.
						</p>
						<a
							href="mailto:hr@infinityitsolution.com?subject=Application for Network Security Specialist"
							className="apply-now">
							Apply Now
						</a>
					</div>

					{/* Job 3 */}
					<div className="job-card">
						<h2>Project Manager</h2>
						<p>
							<strong>Location:</strong> Dhaka, Bangladesh
						</p>
						<p>
							We are looking for an experienced Project Manager to lead
							cross-functional teams in delivering client solutions. You will
							ensure that projects are completed on time, within scope, and on
							budget. Previous IT project management experience is a plus.
						</p>
						<a
							href="mailto:hr@infinityitsolution.com?subject=Application for Project Manager"
							className="apply-now">
							Apply Now
						</a>
					</div>
				</div>
			</div>

			<div className="training">
				<h2>Training and Development Jobs</h2>
				<div className="job-listing">
					{/* Training Job 1 */}
					<div className="job-card">
						<h2>Intern - Software Development</h2>
						<p>
							<strong>Location:</strong> Dhaka, Bangladesh
						</p>
						<p>
							Are you a fresh graduate or a junior developer looking to gain
							experience in software development? Join our internship program
							where you will learn about software development using JavaScript,
							React, and Node.js while working on real projects.
						</p>
						<a
							href="mailto:hr@infinityitsolution.com?subject=Application for Software Development Intern"
							className="apply-now">
							Apply Now
						</a>
					</div>

					{/* Training Job 2 */}
					<div className="job-card">
						<h2>IT Security Trainee</h2>
						<p>
							<strong>Location:</strong> Remote
						</p>
						<p>
							Our IT Security Training program will equip you with the skills
							needed to secure networks and data. You will work alongside our
							expert security team, learning the tools and practices needed to
							protect against cyber threats.
						</p>
						<a
							href="mailto:hr@infinityitsolution.com?subject=Application for IT Security Trainee"
							className="apply-now">
							Apply Now
						</a>
					</div>
				</div>

				{/* Company Values Section */}
				<div className="values-section">
					<h2>Our Core Values</h2>
					<div className="values-grid">
						{/* Value 1 */}
						<div className="value-card">
							<h3>Innovation</h3>
							<p>
								We embrace innovation and continuously strive to bring the
								latest technologies to our clients, ensuring their success in a
								rapidly evolving digital world.
							</p>
						</div>

						{/* Value 2 */}
						<div className="value-card">
							<h3>Integrity</h3>
							<p>
								We operate with transparency and uphold the highest ethical
								standards. Our clients trust us because of our commitment to
								honesty and integrity.
							</p>
						</div>

						{/* Value 3 */}
						<div className="value-card">
							<h3>Teamwork</h3>
							<p>
								Our collaborative environment fosters teamwork, allowing our
								employees to thrive and deliver exceptional results. We believe
								in working together to achieve common goals.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Career;
