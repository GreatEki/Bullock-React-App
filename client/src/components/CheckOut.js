import React, { useContext, useEffect, useState } from 'react';
import Navbar from './Navbar';
import Searchtab from './view-templates/Searchtab';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { OrderContext } from '../contexts/OrderContext';
import { UserContext } from '../contexts/UserContext';

const Checkout = () => {
	let [grandTotal, setGrandTotal] = useState(0);
	const { cartItem, totalPrice, deliveryRate } = useContext(CartContext);
	const { user } = useContext(UserContext);
	const { msg, handleSubmitOrder, selectPayChoice } = useContext(OrderContext);

	console.log(user.id);
	useEffect(() => {
		setGrandTotal(totalPrice + deliveryRate);
		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, [grandTotal]);

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
						className='active site-font
						text-decoration-none'>
						{' '}
						Shop >
					</Link>
					<Link
						to='/cart/checkout'
						className='active site-font
						text-decoration-none'>
						{' '}
						CheckOut
					</Link>
					<h1 className='site-font my-4'>CHECKOUT </h1>
				</div>
			</section>

			{/* Checkout Form Page */}
			<main className='container my-5'>
				{msg ? (
					<div className='alert alert-danger text-center' role='alert'>
						{' '}
						{msg}
					</div>
				) : (
					<p> </p>
				)}
				<div className='row my-5'>
					<div className='col-8 offset-lg-2 bg-white'>
						{/* Order Summary Section */}
						<div className='row px-4'>
							<div className='col-8 mt-5'>
								<h5> PRODUCT </h5>
							</div>

							<div className='col-4 mt-5'>
								<h5 className='text-right'> SUBTOTAL </h5>
							</div>
						</div>

						{/* Products details are listed here*/}
						{cartItem.map((product) => {
							return (
								<div className='row px-4' key={product.id}>
									<div className='col-8 mt-5'>
										<img
											src={`/products/${product.imagePath}`}
											className='d-inline cart-image'
											alt=' '
										/>
										<p className='site-font d-inline p-0'> {product.title} </p>
										<br />
										<span className='text-muted'>{product.size}</span>
										<p className='text-muted'>Quantity: {product.qty}</p>
									</div>

									<div className='col-4 mt-5'>
										<p className='text-right'>
											{' '}
											<del className='del'>N</del>
											{product.price}{' '}
										</p>
									</div>
								</div>
							);
						})}

						<div className='row px-4'>
							<div className='col-8 mt-3'>
								<h5 className='site-font'> SUBTOTAL </h5>
							</div>

							<div className='col-4 mt-3'>
								<h5 className='text-right'>
									<del className='del'>N</del> {totalPrice}
								</h5>
							</div>
						</div>
						<div className='row px-4'>
							<div className='col-8 mt-3'>
								<h5 className='site-font'> DELIVERY CHARGE </h5>
							</div>

							<div className='col-4 mt-3'>
								<h5 className='text-right'>
									<del className='del'>N</del> {deliveryRate}
								</h5>
							</div>
						</div>
						<div className='row px-4'>
							<div className='col-8 mt-5'>
								<h3 className='site-font text-danger'> GRAND TOTAL </h3>
							</div>

							<div className='col-4 mt-5'>
								<h3 className='text-right'>
									<del className='del'>N</del> {grandTotal}
								</h3>
							</div>
						</div>

						{/* *Payment Section */}
						<section className='px-4 mt-4'>
							<form
								onSubmit={(e) =>
									handleSubmitOrder(e, user.id, cartItem, grandTotal)
								}>
								<p className='font-weight-bold'>
									Choose Preferred Payment Option:
								</p>
								<input
									type='radio'
									id='paystack'
									onChange={(e) => selectPayChoice(e)}
									value='paystack'
									name='payment_method'
								/>
								<label htmlFor='paystack' className='payment'>
									Pay Now with PayStack
								</label>
								<br />

								<input
									type='radio'
									id='cashondelivery'
									onChange={(e) => selectPayChoice(e)}
									value='cashondelivery'
									name='payment_method'
								/>
								<label htmlFor='cashondelivery' className='payment'>
									Cash On Delivery
								</label>

								<div className='site-font mt-3'>
									<span className='text-danger'>NOTE:</span>{' '}
									<b>
										Cash on delivery payment are subject to specific terms and
										conditions which may change overtime.{' '}
									</b>
								</div>

								<button className='btn btn-block btn-warning my-4 mx-auto place-order'>
									{' '}
									PLACE ORDER{' '}
								</button>
							</form>
						</section>
					</div>
				</div>
			</main>
		</main>
	);
};

export default Checkout;
