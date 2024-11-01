import React from 'react';

function Project() {
	return (
		<>
			<div class="project-container">
				<h1>Our Completed Projects</h1>
				<div class="projects-grid">
					{/* Project 1 */}
					<div class="project-card">
						<img
							src="/images/about/project/access-control.png"
							alt="Access Control System"
						/>
						<h2>Access Control System for XYZ Corporation</h2>
						<p>
							We successfully implemented a robust access control system for XYZ
							Corporation, enhancing their security measures and ensuring
							smooth, unauthorized access prevention across their facilities.
						</p>
					</div>

					{/* Project 2 */}
					<div class="project-card">
						<img
							src="/images/about/project/security-surveillance.png"
							alt="Biometric Security"
						/>
						<h2>Biometric Security Solutions for ABC Bank</h2>
						<p>
							Our team provided biometric security solutions to ABC Bank,
							ensuring high-level security for their sensitive areas. The
							project involved setting up biometric scanners at all key access
							points.
						</p>
					</div>

					{/* Project 3 */}
					<div class="project-card">
						<img
							src="/images/about/project/fire-alarm-detection.png"
							alt="Fire Alarm System"
						/>
						<h2>Fire Alarm System for DEF Factory</h2>
						<p>
							We deployed an advanced fire alarm system at DEF Factory,
							integrating heat detectors and real-time alerts to ensure maximum
							fire safety compliance and protection of personnel and assets.
						</p>
					</div>

					{/* Project 4 */}
					<div class="project-card">
						<img
							src="/images/about/project/server-instalation.png"
							alt="Network Security Solutions"
						/>
						<h2>Network Security for GHI Enterprises</h2>
						<p>
							Our network security solutions at GHI Enterprises helped secure
							their critical infrastructure by implementing firewalls,
							monitoring systems, and encryption protocols, protecting their
							data and systems from cyber threats.
						</p>
					</div>

					{/* Project 5 */}
					<div class="project-card">
						<img
							src="/images/about/project/wireless-lan.png"
							alt="ACCA AMA System"
						/>
						<h2>ACCA AMA System for JKL University</h2>
						<p>
							We provided ACCA AMA solutions for JKL University, enabling
							automated student attendance tracking, resource management, and
							access control across all departments, improving operational
							efficiency.
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default Project;
