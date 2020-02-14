import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Searchtab from './view-templates/Searchtab';
import { Link } from 'react-router-dom';

const Cart = () => {
	var res = [];
	useEffect(() => {
		const localData = localStorage.getItem('cartProducts');

		res = JSON.parse(localData);
		console.log(res);

		//console.log(cartItems);
	}, [res]);
	return (
		<main>
			<Navbar />
			<Searchtab />

			<section className='container-fluid bg-white'>
				<div className='py-3'>
					<Link to='/' className='site-font text-decoration-none'>
						Home >{' '}
					</Link>{' '}
					<Link
						to='/cart/overview'
						className='active site-font text-decoration-none'
					>
						{' '}
						Shopping Cart
					</Link>
					<h1 className='site-font my-4'>Shopping Cart </h1>
				</div>
			</section>

			<Link className='btn btn-outline-warning ml-5 my-3' to='/shop'>
				<i class='fas fa-long-arrow-alt-left'></i> Continue Shopping
			</Link>

			<section className='container my-4'>
				{res ? (
					res.map(prod => {
						return (
							<div className='card m-0'>
								<div className='card-header row m-0'>
									<div className='col-3'>
										<b>Product Detail</b>
									</div>
									<div className='col-3'>
										<b>Quantity</b>
									</div>

									<div className='col-3'>
										{' '}
										<b>Item Price</b>
									</div>

									<div className='col-3 text-right'>
										{' '}
										<b>Action </b>
									</div>
								</div>

								<section className='card-body row'>
									<div className='col-3'>
										<img
											className='d-inline'
											src={`/products/${prod.imagePath}`}
										/>

										<p className='text-muted d-inline'> {prod.title} </p>
									</div>

									<div className='col-3'>
										<h3 className='site-font'> {prod.qty} </h3>
									</div>

									<div className='col-3'>
										<h4 className='text-muted'> {prod.price} </h4>
									</div>

									<div className='col-3 text-right'>
										<a className='text-danger'> Remove Item </a>
									</div>
								</section>
							</div>
						);
					})
				) : (
					<div className='card'>
						<h1 className='card-title'> You have no items in your cart </h1>
					</div>
				)}
			</section>
		</main>
	);
};

export default Cart;
