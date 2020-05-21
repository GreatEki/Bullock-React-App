import React, { useEffect } from 'react';
//import Navbar Template
import Navbar from './Navbar';

//Favourite Brands Imports
import Nike from './view-templates/Nike';
import Addidas from './view-templates/Addidas';
import Reebook from './view-templates/Reebook';
import Erke from './view-templates/Erke';
import Shoes from './view-templates/Shoes';
import Wallets from './view-templates/Wallets';

//Import WatchSlider Template
import WatchSlider from './view-templates/WatchSlider';

import SearchTab from './view-templates/Searchtab';

import Footer from './view-templates/Footer';

const Home = () => {
	useEffect(() => {
		window.scrollTo(0, 0);

		//eslint-disable-next-line react-hooks/exhaustive-deps
	});
	return (
		<div className='wrapper'>
			<Navbar />
			<SearchTab />

			{/*Card Brands Display */}
			<div className='container-fluid bg-container'>
				<div className='container'>
					<h3 className='my-3 py-3'> Favourite Brands </h3>
				</div>
				<hr />
			</div>

			{/*Sneaker Shoe Brands Display*/}

			<Nike />

			<Addidas />

			<Reebook />

			<Erke />
			{/*End of Sneaker Shoe Brand Display*/}

			{/* Second Slider Section (Watches)*/}
			<div className='container-fluid bg-container my-3'>
				<div className='container my-3 py-3'>
					<h3>Watches </h3>
				</div>
				<hr />
			</div>
			<div className='container-fluid'>
				<WatchSlider />
			</div>

			{/* Shoes Section */}
			<div className='container-fluid my-3'>
				<div className='container my-3 py-3'>
					<h3>Office Shoes</h3>{' '}
				</div>
				<hr />
			</div>

			{/*Shoe Section display*/}
			<Shoes />

			{/*End of Shoe Section display*/}

			{/* Wallet Section*/}
			<div className='container-fluid my-3'>
				<div className='container my-3 py-3'>
					<h3>Wallets </h3>
				</div>
				<hr />
			</div>

			<Wallets />
			{/*End of Wallet Section*/}

			<Footer />
		</div>
	);
};

export default Home;
