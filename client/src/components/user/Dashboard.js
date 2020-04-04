import React from 'react';
import Navbar from '../Navbar';
import SearchTab from '../view-templates/Searchtab';
import { Link } from 'react-router-dom';
import '../../css/dashboard.css';
import Footer from '../view-templates/Footer';

const Dashboard = () => {
	return (
		<>
			<Navbar />
			<SearchTab />
			<section className='container-fluid bg-white p-2'>
				<div className='py-3'>
					<Link to='/' className='site-font text-decoration-none'>
						Home >{' '}
					</Link>{' '}
					<Link
						to='/cart/overview'
						className='active site-font text-decoration-none'>
						{' '}
						Dashboard
					</Link>
					<h1 className='site-font my-4'>Dashboard </h1>
				</div>
			</section>

			<main className='container-fluid mt-1 mx-lg-3 px-lg-5'>
				<div className='row'>
					<section className='col-lg-4 site-font mt-5'>
						{/* Account Name Information Display */}
						Account Name: <p className='text-danger'>Tester Test </p>
						<div className='d-flex flex-column bg-white profile-info'>
							<div className='p-2 bg-dark text-white'>
								{' '}
								<u>PROFILE INFORMATION</u>
							</div>
							<div className='p-2 bd-highlight text-wrap profile-list'>
								{' '}
								<Link>Update Profile Information</Link>
							</div>
							<div className='p-2 bd-highlight profile-list'>
								{' '}
								<Link>Delivery Address </Link>
							</div>
							<div className='p-2 bd-highlight profile-list'>
								{' '}
								<Link>Tickets </Link>
							</div>
							<div className='p-2 bd-highlight profile-list'>
								{' '}
								<Link>Settings</Link>
							</div>
						</div>
					</section>
					<section className='col-lg-8 account-body'>
						<h5 className='site-font-lg mt-4'> Order List</h5>
						<div className='card'>
							<section className='row card-header m-0'>
								<div className='col-6'>
									<p className='text-dark ml-2 p-2 site-font'>
										{' '}
										Order Date:{' '}
										<span className='site-font text-danger'>
											Monday, Friday, 3rd April, 2020{' '}
										</span>
									</p>{' '}
								</div>
								<div className='col-6'>
									<p className='text-dark text-right mr-2 p-2 site-font'>
										{' '}
										Delivery Status:{' '}
										<span className='site-font text-success'>Delivered</span>
									</p>{' '}
								</div>
								<hr />
							</section>
							<section className='card-body'>
								<ul className='list-group list-group-flush'>
									<li className='list-group-item'>
										{' '}
										List Group Item 1<span> </span>
									</li>
									<li className='list-group-item'> List Group Item 2</li>
									<li className='list-group-item'> List Group Item 3</li>
									<li className='list-group-item'> List Group Item 4</li>
								</ul>
							</section>

							<div className='card-footer'>
								<div className='row'>
									<div className='col-6'>
										<h5 className='ml-2 p-2'>
											Order Total:
											<span>
												<del className='del'>N</del>40, 000
											</span>
										</h5>
									</div>

									<div className='col-6'>
										<p className='text-right ml-2 p-2 text-success'>
											Cash On Delivery
										</p>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</main>

			<Footer />
		</>
	);
};

export default Dashboard;
