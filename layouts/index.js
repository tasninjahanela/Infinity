import React from 'react';
import Header from '../component/header';
import Footer from '../component/footer';

function MainLayout({ children }) {
	return (
		<div className="main-layout">
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	);
}

export default MainLayout;
