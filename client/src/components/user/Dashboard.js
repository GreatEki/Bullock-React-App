import React from 'react';
import Navbar from '../Navbar';
import SearchTab from '../view-templates/Searchtab';
import { Link } from 'react-router-dom';
import '../../css/dashboard.css';

const Dashboard = () => {
	return (
		<>
			<Navbar />
			<SearchTab />

			<section className='container-fluid bg-white'>
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

			<main className='container-fluid mt-5 mx-lg-3 px-lg-5'>
				<div className='row'>
					<section className='col-lg-4 site-font'>
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
						<h3>Order Records</h3>
					</section>
				</div>
			</main>
		</>
	);
};

export default Dashboard;
