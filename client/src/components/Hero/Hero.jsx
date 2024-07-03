import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Hero = () => {
    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <section className="home-slider position-relative mb-30">
            <div className="container">
                <div className="home-slide-cover mt-30">
                    <Slider {...settings} className="hero-slider-1 style-4 dot-style-1 dot-style-1-position-1">
                        <div className="single-hero-slider single-animation-wrap slider-1">
                            <div className="slider-content">
                                <h1 className="display-2 mb-40">
                                    Don’t miss amazing<br />
                                    grocery deals
                                </h1>
                                <p className="mb-65">Sign up for the daily newsletter</p>
                                <form className="form-subcriber d-flex">
                                    <input type="email" placeholder="Your email address" />
                                    <button className="btn" type="submit">Subscribe</button>
                                </form>
                            </div>
                        </div>
                        <div className="single-hero-slider single-animation-wrap slider-2">
                            <div className="slider-content">
                                <h1 className="display-2 mb-40">
                                    Fresh Vegetables<br />
                                    Big discount
                                </h1>
                                <p className="mb-65">Save up to 50% off on your first order</p>
                                <form className="form-subcriber d-flex">
                                    <input type="email" placeholder="Your email address" />
                                    <button className="btn" type="submit">Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    );
}

export default Hero;