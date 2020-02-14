import React from 'react';
import Navbar from './Navbar';

const Contact = () => {
	return (
		<main>
			<Navbar />

			<div class='container'>
				<div class='title mt-4 mb-4'>---- Contact</div>
			</div>

			<div class='container mb-5'>
				<p class='ml-md-5 font-weight-bold'>You can reach us via:</p>
				<div class='row'>
					<div class='col-md-8 offset-md-2 col-12'>
						<div class='d-flex flex-column '>
							<p class='address'>
								<span>Email: </span> bullockcoutoures@gmail.com
							</p>
							<p class='address'>
								<span>Phone No: </span> +234 (0)70 1222 9813
							</p>
						</div>
					</div>
				</div>
			</div>

			<div class='container'>
				<p class='ml-md-5 font-weight-bold'>We are opened:</p>
				<h2 class='days-open'>Mondays - Fridays (8:00am - 8:00pm)</h2>
			</div>
		</main>
	);
};

export default Contact;
