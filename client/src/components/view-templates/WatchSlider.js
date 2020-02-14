import React, { Component } from 'react';
import Slider from 'react-slick';
import AllNighter from '../../images/all-nighter-watch.jpg';
import BlackWristbandWatch from '../../images/black-wristband-watch.jpg';
import BlueChain from '../../images/blue-chain.jpg';
import Bounabay from '../../images/bounabay-smart-watch.jpg';
import DigitalUnisex from '../../images/digital-unisex-watch.jpg';
import MovadoBold from '../../images/movado-bold.jpg';
import MensLuxury from '../../images/mens-luxury-watch.jpg';
import MensFashion from '../../images/mens-fashion-watch.jpg';
import '../../css/watch.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class WatchSlider extends Component {
    render() {

        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 6,
            slidesToScroll: 1
        };
        return (
        <Slider {...settings} className='p-2'>
            <div>
                <img src={AllNighter} alt='Watch-1'className='watch-slider-img' />
                <span className='border mt-2 mx-5 btn btn-outline-warning rounded-pill'> Mens All Nighter</span>
                <p className='text-center site-font'><del>N</del> 6, 000</p>
            </div>
            <div>
                <img src={BlackWristbandWatch} alt='Watch-2' className='watch-slider-img'/>
                <span className='border mt-2 mx-5 btn btn-outline-warning rounded-pill'> Black Wristband </span>
                <p className='text-center site-font'><del>N</del> 6, 000</p>
            </div>
            <div>
                <img src={BlueChain} alt='Watch-3' className='watch-slider-img'/>
                <span className='border mt-2 mx-5 btn btn-outline-warning rounded-pill'> Men Blue Chain </span>
                <p className='text-center site-font'><del>N</del> 6, 000</p>
            </div>
            <div>
                <img src={Bounabay} alt='Watch-4' className='watch-slider-img'/>
                <span className='border mt-2 mx-5 btn btn-outline-warning rounded-pill text-center'> Bounabay Watch </span>
                <p className='text-center site-font'><del>N</del> 6, 000</p> 

            </div>
            <div>
                <img src={DigitalUnisex} alt='Watch-5' className='watch-slider-img'/>
                <span className='border mt-2 mx-5 btn btn-outline-warning rounded-pill text-center'> Digital Unisex </span>
                <p className='text-center site-font'><del>N</del> 6, 000</p>
            </div>
            <div>
                <img src={MovadoBold} alt='Watch-6' className='watch-slider-img'/>
                <span className='border mt-2 mx-5 btn btn-outline-warning rounded-pill text-center'> Movado Bold </span>
                <p className='text-center site-font'><del>N</del> 6, 000</p>
            </div>
            <div>
                <img src={MensLuxury} alt='Watch-7' className='watch-slider-img'/>
                <span className='border mt-2 mx-5 btn btn-outline-warning rounded-pill text-center'> Mens Luxury Watch </span>
                <p className='text-center site-font'><del className='del'>N</del> 6, 000</p>
            </div>
            <div>
                <img src={MensFashion} alt='Watch-8' className='watch-slider-img'  />
                <span className='border mt-2 mx-5 btn btn-outline-warning rounded-pill btn-span text-center'> Men Fashion Watch </span>
                <p className='text-center site-font'><del className='del'>N</del> 6, 000</p>
            </div>
      </Slider>
        )
    }
}

export default WatchSlider; 