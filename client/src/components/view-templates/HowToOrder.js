import React from 'react';
import { Link } from 'react-router-dom';

const HowToOrder = () => {
	return (
		<main className='container mt-5'>
			<section>
				<h1>HOW TO ORDER </h1>

				<p className='site-font-lg'>
					To order the above product, please select your shoe size from the
					drop-down list above.{' '}
				</p>

				<p className='site-font-lg'>
					Enter the quantity you wish to purchase, then click on the
					<span className='text-uppercase'> "Add to Cart"</span>
					button
				</p>

				<p className='site-font-lg'>
					<span className='text-danger'> PLEASE NOTE: </span>
					If you want to purchase a particular shoe in multiple quantities for
					different shoe sizes, you will have to do add them to your cart
					individually.
				</p>

				<p className='site-font-lg'>
					To order for more items, simply go back to the
					<span className='text-uppercase'> "Gallery Page"</span> and select as
					many products as you wish to purchase.
				</p>

				<p className='site-font-lg'>
					After you must selected all items you intend to purchase, go to
					<span className='text-uppercase'> "Cart Page"</span> by clicking on
					the menu button, to see all items on your cart.
				</p>

				<p className='site-font-lg'>
					If satisfied with your cart, proceed to <span> CHECK OUT</span> and
					fill out the form, make payment, once payment is confirmed, be sure to
					get your items within stated delivery timeframe.
				</p>
			</section>

			<hr />

			<section className='mt-5'>
				<h1>CUSTOMER SATISFACTION</h1>
				<br />
				<ul className='list'>
					<li className='site-font-2'>
						We use the best quality leathers to produce our shoes.
					</li>
					<li className='site-font-2'>
						You can be sure that our shoes are long-lasting.
					</li>
					<li className='site-font-2'>
						We are in the business of satisfying all of our customers unique
						desires.
					</li>
					<li className='site-font-2'>
						Ensure that you know what you are ordering for before placing your
						order.
					</li>
					<li className='site-font-2'>
						If you have complaints or enquiries. Do no fail to contact us.
					</li>
					<li className='site-font-2'>
						Contact Information is available on our <span> </span>
						<Link to='/contact' class='link'>
							Contact Page
						</Link>
					</li>
					<li className='site-font-2'>
						Our aim is to meet your expectations while providing a hassle free
						service.
					</li>
				</ul>
			</section>
		</main>
	);
};

export default HowToOrder;
