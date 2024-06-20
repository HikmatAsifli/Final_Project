import React from 'react'
import { Link } from 'react-router-dom'
import banner1 from "../../assets/images/banner/banner-1.png"
import banner2 from "../../assets/images/banner/banner-2.png"
import banner3 from "../../assets/images/banner/banner-3.png"

const Banner = () => {
    return (
        <section className="banners mb-25">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="banner-img wow animate__ animate__fadeInUp animated" data-wow-delay={0} style={{ visibility: "visible", animationName: "fadeInUp" }}>
                            <img src={banner1} alt="" />
                            <div className="banner-text">
                                <h4>
                                    Everyday Fresh &amp; <br />
                                    Clean with Our
                                    <br />
                                    Products
                                </h4>
                                <Link className="btn btn-xs" href="/shop-grid-right">
                                    Shop Now <i className="fa-thin fa-arrow-right d-flex align-items-center" ></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="banner-img wow animate__ animate__fadeInUp animated" data-wow-delay=".2s" style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeInUp" }}>
                            <img src={banner2} alt="" />
                            <div className="banner-text">
                                <h4>
                                    Make your Breakfast
                                    <br />
                                    Healthy and Easy
                                </h4>
                                <Link className="btn btn-xs" href="/shop-grid-right">
                                    Shop Now <i className="fa-thin fa-arrow-right d-flex align-items-center"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 d-md-none d-lg-flex">
                        <div className="banner-img mb-sm-0 wow animate__ animate__fadeInUp animated" data-wow-delay=".4s" style={{ visibility: "visible", animationDelay: "0.4s", animationName: "fadeInUp" }}>
                            <img src={banner3} alt="" />
                            <div className="banner-text">
                                <h4>
                                    The best Organic <br />
                                    Products Online
                                </h4>
                                <Link className="btn btn-xs" href="/shop-grid-right">
                                    Shop Now <i className="fa-thin fa-arrow-right d-flex align-items-center"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner