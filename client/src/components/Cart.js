import React, { useEffect, useContext } from 'react';
import Navbar from './Navbar';
import Searchtab from './view-templates/Searchtab';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

const Cart = () => {
	const { cartProducts, getCartItems, cartItem, totalPrice } = useContext(
		CartContext
	);
	/*
	useEffect(() => {
		getCartItems();
	}, []);
	*/

	useEffect(() => {
		localStorage.setItem('cartProducts', JSON.stringify(cartItem));
		getCartItems();
	}, [cartItem]);

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
				{cartProducts.length > 0 ? (
					cartProducts.map(prod => {
						return (
							<div className='card m-0' key={prod.title}>
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
											className='d-inline cart-image'
											src={`/products/${prod.imagePath}`}
										/>

										<p className='site-font-sm text-muted d-inline'>
											{' '}
											{prod.title}{' '}
										</p>
									</div>

									<div className='col-3'>
										<h3 className='site-font'> {prod.qty} </h3>
									</div>

									<div className='col-3'>
										<h4 className='text-muted'> {prod.price} </h4>
									</div>

									<div className='col-3 text-right'>
										<btn className='text-danger btn btn-warning' role='button'>
											{' '}
											Remove Item{' '}
										</btn>
									</div>
								</section>
							</div>
						);
					})
				) : (
					<div>
						<h1 className='card-title text-center'>
							{' '}
							You have no items in your cart{' '}
						</h1>
					</div>
				)}

				<h2 className='text-center mt-5'>
					TOTAL PRICE: <del className='del'>N</del>
					{totalPrice}{' '}
				</h2>
			</section>
		</main>
	);
};

export default Cart;
