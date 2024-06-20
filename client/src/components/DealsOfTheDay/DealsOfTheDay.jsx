import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const DealsOfTheDay = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://api.example.com/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchProducts();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            const updatedProducts = products.map(product => {
                const countdownDate = new Date(product.countdownDate).getTime();
                const now = new Date().getTime();
                let distance = countdownDate - now;

                if (distance < 0) {
                    clearInterval(interval);
                    distance = 0;
                }

                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                return {
                    ...product,
                    currentCountdown: {
                        days,
                        hours,
                        minutes,
                        seconds
                    }
                };
            });

            setProducts(updatedProducts);
        }, 1000);

        return () => clearInterval(interval);
    }, [products]);

    return (
        <section className="section-padding pb-5">
            <div className="container">
                <div className="section-title wow animate__ animate__fadeIn animated" data-wow-delay={0} style={{ visibility: 'visible', animationName: 'fadeIn' }}>
                    <h3 className>Deals Of The Day</h3>
                    <Link className="show-all" to="/shop-grid-right">
                        All Deals
                        <i className="fa-sharp fa-thin fa-angle-right"></i>
                    </Link>
                </div>
                <div className="row">
                    {products.map(product => (
                        <div key={product.id} className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-cart-wrap style-2 wow animate__ animate__fadeInUp animated" data-wow-delay={0} style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                                <div className="product-img-action-wrap">
                                    <div className="product-img">
                                        <Link to={`/shop-product-right/${product.id}`}>
                                            <img src={product.image} alt={product.name} />
                                        </Link>
                                    </div>
                                </div>
                                <div className="product-content-wrap">
                                    <div className="deals-countdown-wrap">
                                        <div className="deals-countdown">
                                            <span className="countdown-section">
                                                <span className="countdown-amount hover-up">{product.currentCountdown.days}</span>
                                                <span className="countdown-period"> days </span>
                                            </span>
                                            <span className="countdown-section">
                                                <span className="countdown-amount hover-up">{product.currentCountdown.hours}</span>
                                                <span className="countdown-period"> hours </span>
                                            </span>
                                            <span className="countdown-section">
                                                <span className="countdown-amount hover-up">{product.currentCountdown.minutes}</span>
                                                <span className="countdown-period"> mins </span>
                                            </span>
                                            <span className="countdown-section">
                                                <span className="countdown-amount hover-up">{product.currentCountdown.seconds}</span>
                                                <span className="countdown-period"> sec </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="deals-content">
                                        <h2><Link to={`/shop-product-right/${product.id}`}>{product.name}</Link></h2>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
                                                <span>${product.price}</span>
                                                {product.oldPrice && <span className="old-price">${product.oldPrice}</span>}
                                            </div>
                                            <div className="add-cart">
                                                <Link className="add" to="/shop-cart"><i className="fa-light fa-cart-shopping mr-5"></i>Add </Link>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="font-small text-muted">By <Link to={product.vendor.link}>{product.vendor.name}</Link></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default DealsOfTheDay;
