import React, { useEffect, useContext } from 'react';
import Navbar from './Navbar';
import Searchtab from './view-templates/Searchtab';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

const Cart = () => {
	const { cartItem, getCartItems, totalPrice, removeItem } = useContext(
		CartContext
	);

	//The method window.scrollTo() ensures that the rendered component loads from the top of the page.
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		getCartItems();

		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

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
						className='active site-font text-decoration-none'>
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
				<h4 className='site-font-sm text-right'>
					{' '}
					{cartItem.length <= 0 ? 0 : cartItem.length}
					You have {cartItem.length} item in your cart{' '}
				</h4>
				{cartItem.length > 0 ? (
					cartItem.map(prod => {
						return (
							<div className='card m-0' key={prod.title}>
								<div className='card-header row m-0'>
									<div className='col-3'>
										<b>Product Detail</b>
									</div>
									<div className='col-3'>
										<b className='text-center'>Quantity</b>
									</div>

									<div className='col-3'>
										{' '}
										<b className='text-center'>Item Price</b>
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
											alt={prod.title}
										/>

										<p className='site-font-sm text-muted d-inline'>
											{' '}
											{prod.title}{' '}
										</p>
										<p className='site-font-sm text-muted'> {prod.size} </p>
									</div>

									<div className='col-3'>
										<h3 className='site-font mx-4'> {prod.qty} </h3>
									</div>

									<div className='col-3'>
										<h4 className='text-muted mx-4'>
											{' '}
											<del className='del'>N </del>
											{prod.price}{' '}
										</h4>
									</div>

									<div className='col-3 text-right'>
										<button
											className='text-danger btn btn-warning'
											onClick={() => removeItem(prod)}>
											{' '}
											Remove Item{' '}
										</button>
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

				<div className='text-right mt-5'>
					<Link
						className='btn btn-outline-warning ml-5 my-3'
						to='/cart/checkout'>
						<i class='fas fa-long-arrow-alt-right'></i> Proceed TO CheckOut
					</Link>
				</div>
			</section>
		</main>
	);
};

export default Cart;
