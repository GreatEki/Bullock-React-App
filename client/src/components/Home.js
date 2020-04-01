import React from 'react';
//import Navbar Template
import Navbar from './Navbar';

import BraveBull from '../images/brave-bull.jpg';

//First Slider Imports
import OpenShop from '../images/openshop.jpg';
import PercentDiscount from '../images/percentdiscount.jpg';
import JakobOwens from '../images/jakob-owens.jpg';

//Favourite Brands Imports
import AddidasAllStar from '../images/addidas-allstar.jpg';
import BlackAirforceOne from '../images/black-airforce-one.jpg';
import NikeAirMaxWhiteBlack from '../images/nike-airmax-white-black.jpg';
import NikeJoyride from '../images/nike-joyride.jpg';
import ReebokAirforce from '../images/reebook-airforce.jpg';
import UmbroNeptune from '../images/umbro-neptune.jpg';
//Import WatchSlider Template
import WatchSlider from './view-templates/WatchSlider';

//Shoes Import
import MensFormal3 from '../images/mens-formal-shoe-3.jpg';
import MensGrimmetrin from '../images/mens-grimettrin-italian.jpg';
import MensThombsBrown from '../images/mens-thombs-brown.jpg';

//import for Wallets
import SoftLeather from '../images/soft-leather-wallet.jpg';
import Laorentou from '../images/laorentou-wallet.jpg';
import BisonDenim from '../images/bison-denim-wallet.jpg';

import Footer from './view-templates/Footer';

const Home = () => {
	return (
		<div>
			<Navbar />

			<div className='container-fluid mt-0 p-0'>
				<div className='row'>
					{/* *First Slider */}
					<div className='col-12'>
						<div
							id='carouselSlide'
							className='carousel slide'
							data-ride='carousel'>
							<ol className='carousel-indicators'>
								<li
									data-target='#carouselSlide'
									data-slide-to='0'
									className='active'>
									{' '}
								</li>
								<li data-target='#carouselSlide' data-slide-to='1'>
									{' '}
								</li>
								<li data-target='#carouselSlide' data-slide-to='2'>
									{' '}
								</li>
							</ol>

							<div className='carousel-inner'>
								<div className='carousel-item active'>
									<img
										src={OpenShop}
										alt=''
										className='d-block w-100 carousel-pics'
									/>
								</div>
								<div className='carousel-item'>
									<img
										src={PercentDiscount}
										alt=''
										className='d-block w-100 carousel-pics'
									/>
								</div>
								<div className='carousel-item'>
									<img
										src={JakobOwens}
										alt=''
										className='d-block w-100 carousel-pics'
									/>
								</div>
							</div>

							<a
								className='carousel-control-prev'
								href='#carouselSlide'
								role='button'
								data-slide='prev'>
								<span
									className='carousel-control-prev-icon'
									aria-hidden='true'></span>
							</a>
							<a
								className='carousel-control-next'
								href='#carouselSlide'
								role='button'
								data-slide='next'>
								<span
									className='carousel-control-next-icon'
									aria-hidden='true'></span>
							</a>
						</div>
					</div>
					{/* End of First Slider
                <div className=''> 
                    <div className="card offer">
                        <div className="card-body">
                        <ul> 
                            <li className='card-title stand text-primary'> Outstanding Footwears</li>
                            <li className='card-title stand text-info'> Quality Fashion Accessories</li>
                            <li className='card-title stand text-warning'> Premium Wears </li>
                            <li className='card-title stand text-success'> Custom Made Shoes  </li>
                        </ul>

                    </div>
                </div>
                </div>*/}
				</div>
			</div>

			{/*Card Brands Display */}
			<div className='container-fluid bg-container'>
				<div className='container'>
					<h3 className='my-3 py-3'> Favourite Brands </h3>
				</div>
				<hr />
			</div>
			<div className='container'>
				<div className='row'>
					{/* First Card Item */}
					<div className='col-lg-4 col-sm-12'>
						<a href='/' className='card-links'>
							<div className='card mb-3 mt-3'>
								<div className='row no-gutters'>
									<div className='col-6'>
										<img
											src={AddidasAllStar}
											className='card-img p-0'
											alt=' '
										/>
									</div>
									<div className='col-6'>
										<div className='card-body'>
											<h5 className='card-title text-center'>N 24, 000</h5>
											<p className='card-text text-center'> Addidas All Star</p>
											<p className='card-text text-center'>
												{' '}
												SIZE: <small>40 - 44</small>
											</p>
										</div>
									</div>
								</div>
							</div>
						</a>
					</div>

					{/* Second Card Item */}
					<div className='col-lg-4 col-sm-12'>
						<a href='/' className='card-links'>
							<div className='card mb-3 mt-3'>
								<div className='row no-gutters'>
									<div className='col-6'>
										<img
											src={BlackAirforceOne}
											className='card-img p-0'
											alt=' '
										/>
									</div>
									<div className='col-6'>
										<div className='card-body'>
											<h5 className='card-title text-center'>N 24, 000</h5>
											<p className='card-text text-center'>
												{' '}
												Nike Airforce Black
											</p>
											<p className='card-text text-center'>
												{' '}
												SIZE: <small>40 - 44</small>
											</p>
										</div>
									</div>
								</div>
							</div>
						</a>
					</div>

					{/* Third Card Item */}
					<div className='col-lg-4 col-sm-12'>
						<a href='/' className='card-links'>
							<div className='card mb-3 mt-3'>
								<div className='row no-gutters'>
									<div className='col-6'>
										<img
											src={NikeAirMaxWhiteBlack}
											className='card-img p-0'
											alt=' '
										/>
									</div>
									<div className='col-6'>
										<div className='card-body'>
											<h5 className='card-title text-center'>N 24, 000</h5>
											<p className='card-text text-center'> Nike Air Max 90</p>
											<p className='card-text text-center'>
												{' '}
												SIZE: <small>40 - 44</small>
											</p>
										</div>
									</div>
								</div>
							</div>
						</a>
					</div>

					{/* Fourth Card Item */}
					<div className='col-lg-4 col-sm-12'>
						<a href='/' className='card-links'>
							<div className='card mb-3 mt-3'>
								<div className='row no-gutters'>
									<div className='col-6'>
										<img
											src={ReebokAirforce}
											className='card-img p-0'
											alt=' '
										/>
									</div>
									<div className='col-6'>
										<div className='card-body'>
											<h5 className='card-title text-center'>N 24, 000</h5>
											<p className='card-text text-center'> Reebook Sneaker</p>
											<p className='card-text text-center'>
												{' '}
												SIZE: <small>40 - 44</small>
											</p>
										</div>
									</div>
								</div>
							</div>
						</a>
					</div>

					{/* Fifth Card Item */}
					<div className='col-lg-4 col-sm-12'>
						<a href='/' className='card-links'>
							<div className='card mb-3 mt-3'>
								<div className='row no-gutters'>
									<div className='col-6'>
										<img src={UmbroNeptune} className='card-img p-0' alt=' ' />
									</div>
									<div className='col-6'>
										<div className='card-body'>
											<h5 className='card-title text-center'>N 24, 000</h5>
											<p className='card-text text-center'> Umbro Neptune</p>
											<p className='card-text text-center'>
												{' '}
												SIZE: <small>40 - 44</small>
											</p>
										</div>
									</div>
								</div>
							</div>
						</a>
					</div>

					{/* Sixth Card Item */}
					<div className='col-lg-4 col-sm-12'>
						<a href='/' className='card-links'>
							<div className='card mb-3 mt-3'>
								<div className='row no-gutters'>
									<div className='col-6'>
										<img src={NikeJoyride} className='card-img p-0' alt=' ' />
									</div>
									<div className='col-6'>
										<div className='card-body'>
											<h5 className='card-title text-center'>N 24, 000</h5>
											<p className='card-text text-center'> Nike Joyride</p>
											<p className='card-text text-center'>
												{' '}
												SIZE: <small>40 - 44</small>
											</p>
										</div>
									</div>
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>

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
			<div className='container'>
				<div className='row'>
					<div className='col-lg-4'>
						<div className='row no-gutters'>
							<div className='col-6'>
								<img src={MensFormal3} className='card-img p-0' alt=' ' />
							</div>
							<div className='col-6'>
								<div className='card-body'>
									<h5 className='card-title text-center site-font'>
										Mens Formal Shoe
									</h5>
									<p className='card-text text-center site-font'>
										<del className='del'>N</del> 25, 000
									</p>
									<p className='card-text text-center site-font'>
										{' '}
										SIZE: <small>40 - 44</small>
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className='col-lg-4'>
						<div className='row no-gutters'>
							<div className='col-6'>
								<img src={MensGrimmetrin} className='card-img p-0' alt=' ' />
							</div>
							<div className='col-6'>
								<div className='card-body'>
									<h5 className='card-title text-center site-font'>
										Grimettin Italian Men
									</h5>
									<p className='card-text text-center site-font'>
										<del className='del'>N</del> 35, 000
									</p>
									<p className='card-text text-center site-font'>
										{' '}
										SIZE: <small>40 - 44</small>
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className='col-lg-4'>
						<div className='row no-gutters'>
							<div className='col-6'>
								<img src={MensThombsBrown} className='card-img p-0' alt=' ' />
							</div>
							<div className='col-6'>
								<div className='card-body'>
									<h5 className='card-title text-center site-font'>
										Mens Thombs Shoe
									</h5>
									<p className='card-text text-center site-font'>
										<del className='del'>N </del>35, 000
									</p>
									<p className='card-text text-center site-font'>
										{' '}
										SIZE: <small>40 - 44</small>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Wallet Section*/}
			<div className='container-fluid my-3'>
				<div className='container my-3 py-3'>
					<h3>Wallets </h3>
				</div>
				<hr />
			</div>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-4'>
						<div className='row no-gutters'>
							<div className='col-6'>
								<img
									src={SoftLeather}
									alt='Wallet-1'
									className='card-img p-0'
								/>
							</div>
							<div className='col-6'>
								<h5 className=' card-title text-center site-font mt-5'>
									Soft Leather Wallet
								</h5>
								<p className='card-text text-center site -font'>
									<del>N</del> 3, 000{' '}
								</p>
							</div>
						</div>
					</div>

					<div className='col-lg-4'>
						<div className='row no-gutters'>
							<div className='col-6'>
								<img src={Laorentou} alt='Wallet-2' className='card-img p-0' />
							</div>
							<div className='col-6'>
								<h5 className=' card-title text-center site-font'>
									Laorentou{' '}
								</h5>
								<p className='card-text text-center site -font'>
									<del>N</del> 4, 000{' '}
								</p>
							</div>
						</div>
					</div>

					<div className='col-lg-4'>
						<div className='row no-gutters'>
							<div className='col-6'>
								<img src={BisonDenim} alt='Wallet-2' className='card-img p-0' />
							</div>
							<div className='col-6'>
								<h5 className=' card-title text-center site-font'>
									{' '}
									Bison Denim{' '}
								</h5>
								<p className='card-text text-center site -font'>
									<del>N</del> 4, 000{' '}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default Home;
