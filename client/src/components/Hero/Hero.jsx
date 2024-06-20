import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import 'slick-carousel';

const Hero = () => {
    const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      $(sliderRef.current).slick({
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      });
    }
  }, [sliderRef]);
    return (
        <>
            <section className="home-slider position-relative mb-30">
                <div className="container">
                    <div className="home-slide-cover mt-30">
                        <div className="hero-slider-1 style-4 dot-style-1 dot-style-1-position-1 slick-initialized slick-slider slick-dotted">
                            <div className="slick-list draggable">
                                <div className="slick-track" style={{ opacity: "1", width: "3172px" }}>
                                    <div className="single-hero-slider single-animation-wrap slick-slide slick-current slick-active slider-1" style={{ width: "1586px", position: "relative", left: "0px", top: "0px", zIndex: "999", opacity: "1" }} data-slick-index="0" aria-hidden="false" tabIndex="0" role="tabpanel" id="slick-slide00" aria-describedby="slick-slide-control00">
                                        <div className="slider-content">
                                            <h1 className="display-2 mb-40">
                                                Don’t miss amazing<br />
                                                grocery deals
                                            </h1>
                                            <p className="mb-65">Sign up for the daily newsletter</p>
                                            <form className="form-subcriber d-flex">
                                                <input type="email" placeholder="Your emaill address" tabIndex="0" />
                                                <button className="btn" type="submit" tabIndex="0">Subscribe</button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="single-hero-slider single-animation-wrap slick-slide slider-2" style={{ width: "1586px", position: "relative", left: "0px", top: "0px", zIndex: "999", opacity: "1" }} data-slick-index="1" aria-hidden="true" tabIndex="-1" role="tabpanel" id="slick-slide01" aria-describedby="slick-slide-control01">
                                        <div className="slider-content">
                                            <h1 className="display-2 mb-40">
                                                Fresh Vegetables<br />
                                                Big discount
                                            </h1>
                                            <p className="mb-65">Save up to 50% off on your first order</p>
                                            <form className="form-subcriber d-flex">
                                                <input type="email" placeholder="Your emaill address" tabIndex="-1" />
                                                <button className="btn" type="submit" tabIndex="-1">Subscribe</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <ul className="slick-dots" role="tablist">
                                <li className="slick-active" role="presentation">
                                    <button type="button" role="tab" id="slick-slide-control00" aria-controls="slick-slide00" aria-label="1 of 2" tabIndex="0" aria-selected="true">1</button>
                                </li>
                                <li role="presentation" className="">
                                    <button type="button" role="tab" id="slick-slide-control01" aria-controls="slick-slide01" aria-label="2 of 2" tabIndex="-1">2</button>
                                </li>
                            </ul>
                        </div>
                        <div className="slider-arrow hero-slider-1-arrow">
                            <span className="slider-btn slider-prev slick-arrow">
                            <i className="fa-light fa-angle-left"></i>
                            </span>
                            <span className="slider-btn slider-next slick-arrow">
                            <i className="fa-light fa-angle-right"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero