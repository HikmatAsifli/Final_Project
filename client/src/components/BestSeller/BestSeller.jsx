import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainContext from '../../context/context';

const BestSeller = () => {
    const {
        products,
        addToBasket,
        toggleWishlist,
        isProductInWishlist,
        addToCompare,
        isProductInCompare
    } = useContext(MainContext)

    const [selectedTab, setSelectedTab] = useState('featured');

    const dailyBestSells = products.filter(product => product.dailyBestSells === true);

    const renderProducts = (category) => {
        return dailyBestSells.map(product => (
            <div className="product-cart-wrap" key={product.id}>
                <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                        <Link to={`/products/${product._id}`}>
                            <img
                                className="default-img"
                                src={product.image}
                                alt={product.name}
                                style={{ width: "300px", height: "200px" }}
                            />
                            {product.hoverImage && (
                                <img
                                    className="hover-img"
                                    src={product.hoverImage}
                                    alt={product.name}
                                    style={{ width: "300px", height: "200px" }}
                                />
                            )}
                        </Link>
                    </div>
                    <div className="product-action-1">
                        <Link
                            to="/id"
                            aria-label="Quick view"
                            className="action-btn small hover-up"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                        >
                            <i className="fa-sharp fa-thin fa-eye"></i>
                        </Link>
                        <Link
                            aria-label="Add To Wishlist"
                            className={`action-btn ${isProductInWishlist(product._id) ? 'active' : ''}  hover-up small`}
                            to="#"
                            onClick={() => toggleWishlist(product._id)}
                        >
                            <i className="fa-sharp fa-thin fa-heart"></i>
                        </Link>
                        <Link
                            aria-label="Compare"
                            className={`action-btn ${isProductInCompare(product._id) ? 'active' : ''}  hover-up small`}
                            to="#"
                            onClick={() => addToCompare(product._id)}
                        >
                            <i className="fa-sharp fa-thin fa-shuffle"></i>
                        </Link>
                    </div>
                </div>
                <div className="product-content-wrap">
                    <div className="product-category">
                        <Link to="/shop">{product.category}</Link>
                    </div>
                    <h2><Link to={`/products/${product._id}`}>{product.name}</Link></h2>
                    <div className="product-rate d-inline-block">
                        <div className="product-rating" style={{ width: `${product.rating * 20}%` }} />
                    </div>
                    <div className="product-price mt-10">
                        {product.discount > 0 ? (
                            <>
                                <span className='new-price'>
                                    {`$${(product.price - (product.price * (product.discount / 100))).toFixed(2)}`}
                                    <span>
                                        ({product.discount} % off)
                                    </span>
                                </span>
                                <span className="old-price">
                                    {`$${product.price}`}
                                </span>
                            </>
                        ) : (
                            <span>{`$${product.price}`}</span>
                        )}
                    </div>
                    <div className="sold mt-15 mb-15">
                    </div>
                    <Link className="btn w-100 hover-up" to="#" onClick={() => addToBasket(product._id)}>
                        <i className="fa-light fa-cart-shopping mr-5"></i>Add To Cart
                    </Link>
                </div>
            </div>
        ));
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        nextArrow: <span className="slider-btn slider-next slick-arrow"><i className="fa-sharp fa-thin fa-arrow-right"></i></span>,
        prevArrow: <span className="slider-btn slider-prev slick-arrow"><i className="fa-sharp fa-thin fa-arrow-left"></i></span>,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section className="section-padding pb-5">
            <div className="container">
                <div className="section-title wow animate__ animate__fadeIn animated" style={{ visibility: 'visible', animationName: 'fadeIn' }}>
                    <h3 className>Daily Best Sells</h3>
                    {/* <ul className="nav nav-tabs links" id="myTab-2" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className={`nav-link ${selectedTab === 'featured' ? 'active' : ''}`} onClick={() => setSelectedTab('featured')} type="button" role="tab">Featured</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className={`nav-link ${selectedTab === 'popular' ? 'active' : ''}`} onClick={() => setSelectedTab('popular')} type="button" role="tab">Popular</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className={`nav-link ${selectedTab === 'new' ? 'active' : ''}`} onClick={() => setSelectedTab('new')} type="button" role="tab">New added</button>
                        </li>
                    </ul> */}
                </div>
                <div className="row">
                    <div className="col-lg-3 d-none d-lg-flex wow animate__ animate__fadeIn animated" style={{ visibility: 'visible', animationName: 'fadeIn' }}>
                        <div className="banner-img style-2">
                            <div className="banner-text">
                                <h2 className="mb-100">Bring nature into your home</h2>
                                <Link className="btn btn-xs" to="/shop">Shop Now <i className="fa-sharp fa-thin fa-arrow-right d-flex align-items-center"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-12 wow animate__ animate__fadeIn animated" data-wow-delay=".4s" style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeIn' }}>
                        <div className="tab-content" id="myTabContent-1">
                            <div className={`tab-pane fade ${selectedTab === 'featured' ? 'show active' : ''}`} role="tabpanel">
                                <Slider {...settings}>
                                    {renderProducts('featured')}
                                </Slider>
                            </div>
                            <div className={`tab-pane fade ${selectedTab === 'popular' ? 'show active' : ''}`} role="tabpanel">
                                <Slider {...settings}>
                                    {renderProducts('popular')}
                                </Slider>
                            </div>
                            <div className={`tab-pane fade ${selectedTab === 'new' ? 'show active' : ''}`} role="tabpanel">
                                <Slider {...settings}>
                                    {renderProducts('new')}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BestSeller;