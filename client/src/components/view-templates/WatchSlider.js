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
	};
	return (
		<Slider {...settings} className='p-2'>
			{wristWatch.map((prod) => {
				return (
					<Link to={`/product/${prod._id}`}>
						<img
							src={`/products/${prod.imagePath}`}
							alt='Watch-1'
							className='watch-slider-img'
						/>
						<span className='border mt-2 mx-5 btn btn-outline-warning rounded-pill'>
							{' '}
							{prod.title}
						</span>
						<p className='text-center site-font'>
							<del>N</del> {prod.price}
						</p>
					</Link>
				);
			})}
		</Slider>
	);
};

export default WatchSlider;
