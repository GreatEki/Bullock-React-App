import React from 'react';
import '../../css/footer.css';

const Footer = () => {
	return (
		<div className='container-fluid mt-5 bg-footer p-0'>
			<div className='container'>
				<div className='row'>
					<div className='footer-content about mt-5 col-md-12'>
						<p className='footer-font text-justify'>
							At Bullock Leather Works (blw247) we believe that you feet is an
							important part of the body as well as every other part as well.
							But as we all know it is our feet that take us to places where we
							engage in whatever kind of business or pleasure we desire to
							partake in; so we take in into consideration that the feet should
							be treated mindfully. What you put on your feet is just as
							important as what you put inside your body, so we are a company
							that is structured to give you the best designs of leather works
							that would suit all occasions from shoes, wallets, belts, slippers
							to sandals as well
						</p>
					</div>
				</div>
			</div>

			<div className='container mt-3'>
				<div className='footer'>
					<section className='footer-content links row my-3'>
						<div className='col-md-10 offset-md-1'>
							<ul className='footer-nav footer-font'>
								<li>
									<a href='/'>Home</a> <span>|</span>{' '}
								</li>
								<li>
									<a href='/services'> Services </a> <span>|</span>
								</li>
								<li>
									<a href='/cart/overview'> Cart </a> <span>|</span>
								</li>
								<li>
									<a href='/shop'> Shop</a> <span>|</span>
								</li>
								<li>
									<a href='/contact'>Contact-US</a>{' '}
								</li>
							</ul>
						</div>
					</section>
				</div>
			</div>

			<div className='container'>
				<section className='footer-section Contact-Us'>
					<p className='text-center'>
						<i className='fas fa-envelope'></i>{' '}
						<span className='site-font'> contact-us@bullock247.com</span>
					</p>
					<p className='text-center'>
						<i className='fas fa-phone'></i>{' '}
						<span className='site-font'> +234 (0)70 1222 9813</span>
					</p>
					<h4 className='mt-3 text-center'> Connect With US </h4>
					<div className='d-flex flex-row justify-content-center'>
						<a href='/' className='text-center mx-2 text-dark'>
							<i className='fab fa-facebook fa-3x'></i>{' '}
						</a>
						<a href='/' className='text-center mx-2 text-dark'>
							{' '}
							<i className='fab fa-instagram fa-3x'></i>{' '}
						</a>
					</div>
				</section>
			</div>
			<div className='footer-bottom mt-3'>
				<div>
					<p className='text-center'>
						{' '}
						&copy; betacodes.com | Ekene Victor 2020
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
