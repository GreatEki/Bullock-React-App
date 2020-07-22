import React, { useContext, useEffect } from 'react';
import Slider from 'react-slick';
import { HomeContext } from '../../contexts/HomeContext';
import { Link } from 'react-router-dom';
import '../../css/watch.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const WatchSlider = () => {
	const { wristWatch, getWatches } = useContext(HomeContext);

	useEffect(() => {
		getWatches();

		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		autoplay: true,
		autoplaySpeed: 2000,
		slidesToShow: 6,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 767,
				settings: {
					slidesToScroll: 1,
					slidesToShow: 1,
				},
			},
		],
	};
	return (
		<Slider {...settings} className='p-2'>
			{wristWatch.map((prod) => {
				return (
<<<<<<< HEAD
					<Link
						to={`/product/${prod._id}`}
						key={prod._id}
						className='watchSlider'>
=======
					<Link to={`/product/${prod._id}`} key={prod._id} className=''>
>>>>>>> origin/master
						<img
							src={`/products/${prod.imagePath}`}
							alt='Watch-1'
							className='watch-slider-img h-center'
						/>
						<button className='border mt-2 watchBtn btn btn-outline-warning rounded-pill'>
							{' '}
							{prod.title}
						</button>
<<<<<<< HEAD
						<p className='text-center site-font watchPrice'>
=======
						<p className='text-center site-font'>
>>>>>>> origin/master
							<del>N</del> {prod.price}
						</p>
					</Link>
				);
			})}
		</Slider>
	);
};

export default WatchSlider;
