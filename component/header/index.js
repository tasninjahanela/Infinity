import React, { useEffect, useState } from 'react';
import Link from 'next/link';

function Header() {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		// Add scroll event listener
		window.addEventListener('scroll', handleScroll);
		// Cleanup the event listener on component unmount
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<>
			<div className="container-fluid header position-relative overflow-hidden p-0">
				<nav
					className={`navbar navbar-expand-lg fixed-top navbar-light px-4 px-lg-5 py-3 py-lg-0 ${
						isScrolled ? 'scrolled' : 'transparent'
					}`}>
					<Link legacyBehavior href="/">
						<a className="navbar-brand p-0">
							<img src="/images/logo.png" alt="Logo" />
						</a>
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarCollapse">
						<span className="fa fa-bars"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarCollapse">
						<div className="navbar-nav ms-auto py-0">
							<Link href="/" legacyBehavior>
								<a className="nav-item nav-link active">Home</a>
							</Link>
							<div className="nav-item dropdown">
								<Link href="#" legacyBehavior>
									<a
										className="nav-link dropdown-toggle"
										data-bs-toggle="dropdown">
										Services
									</a>
								</Link>
								<div className="dropdown-menu m-0">
									<Link href="feature.html" legacyBehavior>
										<a className="dropdown-item">Access Control System</a>
									</Link>
									<Link href="feature.html" legacyBehavior>
										<a className="dropdown-item">Security & Surveillance</a>
									</Link>
									<Link href="pricing.html" legacyBehavior>
										<a className="dropdown-item">Time Attendance System</a>
									</Link>
									<Link href="blog.html" legacyBehavior>
										<a className="dropdown-item">
											Biometric Security Solutions
										</a>
									</Link>
									<Link href="service.html" legacyBehavior>
										<a className="dropdown-item">
											Fire Alarm & Detection System
										</a>
									</Link>
									<Link href="intrusion.html" legacyBehavior>
										<a className="dropdown-item">Intrusion Detection System</a>
									</Link>
									<Link href="signage.html" legacyBehavior>
										<a className="dropdown-item">Digital Signage Solutions</a>
									</Link>
									<Link href="smart-building.html" legacyBehavior>
										<a className="dropdown-item">Smart Building Automation</a>
									</Link>
									<Link href="fiber.html" legacyBehavior>
										<a className="dropdown-item">Fiber Optic Solutions</a>
									</Link>
									<Link href="wireless.html" legacyBehavior>
										<a className="dropdown-item">Enterprise Wireless LAN</a>
									</Link>
									<Link href="network-security.html" legacyBehavior>
										<a className="dropdown-item">Network Security Solutions</a>
									</Link>
									<Link href="backup.html" legacyBehavior>
										<a className="dropdown-item">
											Data Backup and Recovery Solutions
										</a>
									</Link>
									<Link href="cloud.html" legacyBehavior>
										<a className="dropdown-item">
											Cloud Infrastructure Solutions
										</a>
									</Link>
									<Link href="power.html" legacyBehavior>
										<a className="dropdown-item">
											Power Backup Solutions (UPS & Generators)
										</a>
									</Link>
									<Link href="environment.html" legacyBehavior>
										<a className="dropdown-item">
											Environmental Monitoring Systems
										</a>
									</Link>
									<Link href="energy.html" legacyBehavior>
										<a className="dropdown-item">Energy Management Solutions</a>
									</Link>
									<Link href="hvac.html" legacyBehavior>
										<a className="dropdown-item">
											HVAC Systems for Data Centers
										</a>
									</Link>
									<Link href="traffic.html" legacyBehavior>
										<a className="dropdown-item">
											Network Traffic Management Solutions
										</a>
									</Link>
									<Link href="lan.html" legacyBehavior>
										<a className="dropdown-item">LAN/WAN Optimization</a>
									</Link>
									<Link href="asset.html" legacyBehavior>
										<a className="dropdown-item">
											IT Asset Management Solutions
										</a>
									</Link>
									<Link href="virtualization.html" legacyBehavior>
										<a className="dropdown-item">Virtualization Solutions</a>
									</Link>
									<Link href="disaster.html" legacyBehavior>
										<a className="dropdown-item">Disaster Recovery Solutions</a>
									</Link>
									<Link href="managed-it.html" legacyBehavior>
										<a className="dropdown-item">Managed IT Services</a>
									</Link>
									<Link href="power-supply.html" legacyBehavior>
										<a className="dropdown-item">
											Redundant Power Supply Solutions
										</a>
									</Link>
									<Link href="conference.html" legacyBehavior>
										<a className="dropdown-item">Digital Conference Systems</a>
									</Link>
									<Link href="remote.html" legacyBehavior>
										<a className="dropdown-item">Remote Monitoring Solutions</a>
									</Link>
									<Link href="iptv.html" legacyBehavior>
										<a className="dropdown-item">IPTV Solutions</a>
									</Link>
									<Link href="cybersecurity.html" legacyBehavior>
										<a className="dropdown-item">Cybersecurity Solutions</a>
									</Link>
									<Link href="bms.html" legacyBehavior>
										<a className="dropdown-item">
											Building Management System (BMS)
										</a>
									</Link>
									<Link href="lighting.html" legacyBehavior>
										<a className="dropdown-item">Lighting Control System</a>
									</Link>
									<Link href="network-infra.html" legacyBehavior>
										<a className="dropdown-item">
											Network Infrastructure Management
										</a>
									</Link>
								</div>
							</div>
							<Link href="/product" legacyBehavior>
								<a className="nav-item nav-link">Product</a>
							</Link>
							<div className="nav-item dropdown">
								<Link href="/about" legacyBehavior>
									<a
										className="nav-link dropdown-toggle"
										data-bs-toggle="dropdown">
										About
									</a>
								</Link>
								<div className="dropdown-menu m-0">
									<Link href="/about/team" legacyBehavior>
										<a className="dropdown-item">Leadership Team</a>
									</Link>
									<Link href="/about/whyChooseUs" legacyBehavior>
										<a className="dropdown-item">Why Choose Us?</a>
									</Link>
									<Link href="/about/portfolio" legacyBehavior>
										<a className="dropdown-item">PostFolio</a>
									</Link>
									<Link href="/about/careers" legacyBehavior>
										<a className="dropdown-item">Careers</a>
									</Link>
									<Link href="/about/crs" legacyBehavior>
										<a className="dropdown-item">
											Corporate Social Responsibility (CSR)
										</a>
									</Link>
									<Link href="/about/faq" legacyBehavior>
										<a className="dropdown-item">FAQ</a>
									</Link>
								</div>
							</div>
							<Link href="/contact-us" legacyBehavior>
								<a className="nav-item nav-link">Contact Us</a>
							</Link>
						</div>
						<Link href="contact.html" legacyBehavior>
							<a className="btn btn-primary rounded-pill text-white py-2 px-4">
								<i className="icon-phone mr-2 fa-lg"></i> +88
							</a>
						</Link>
					</div>
				</nav>
			</div>
		</>
	);
}

export default Header;
