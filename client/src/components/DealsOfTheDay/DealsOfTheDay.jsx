import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import MainContext from '../../context/context';

const DealsOfTheDay = () => {
    const { products, addToBasket } = useContext(MainContext);
    const dealsOfTheDay = products.filter(product => product.dealsOfTheDay === true);

    const calculateTimeLeft = (endTime) => {
        const difference = +new Date(endTime) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState({});

    useEffect(() => {
        const timer = setTimeout(() => {
            dealsOfTheDay.forEach((product, index) => {
                const newTimeLeft = calculateTimeLeft(product.dealsOfTheDayEndTime);
                setTimeLeft(prevTimeLeft => ({ ...prevTimeLeft, [product.id]: newTimeLeft }));
            });
        }, 1000);

        return () => clearTimeout(timer);
    });

    return (
        <section className="section-padding pb-5">
            <div className="container">
                <div className="section-title wow animate__ animate__fadeIn animated" data-wow-delay={0} style={{ visibility: 'visible', animationName: 'fadeIn' }}>
                    <h3 className>Deals Of The Day</h3>
                    <Link className="show-all" to="/shop">
                        All Deals
                        <i className="fa-sharp fa-thin fa-angle-right"></i>
                    </Link>
                </div>
                <div className="row">
                    {dealsOfTheDay.map(product => (
                        <div key={product.id} className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-cart-wrap style-2 wow animate__ animate__fadeInUp animated" data-wow-delay={0} style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                                <div className="product-img-action-wrap">
                                    <div className="product-img">
                                        <Link to={`/shop-product-right/${product.id}`}>
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                style={{ height: "300px"}}
                                            />
                                        </Link>
                                    </div>
                                </div>
                                <div className="product-content-wrap">
                                    <div className="deals-countdown-wrap">
                                        <div className="deals-countdown">
                                            {timeLeft[product.id] ? (
                                                <>
                                                    <span className="countdown-section">
                                                        <span className="countdown-amount hover-up">{timeLeft[product.id].days}</span>
                                                        <span className="countdown-period"> days </span>
                                                    </span>
                                                    <span className="countdown-section">
                                                        <span className="countdown-amount hover-up">{timeLeft[product.id].hours}</span>
                                                        <span className="countdown-period"> hours </span>
                                                    </span>
                                                    <span className="countdown-section">
                                                        <span className="countdown-amount hover-up">{timeLeft[product.id].minutes}</span>
                                                        <span className="countdown-period"> mins </span>
                                                    </span>
                                                    <span className="countdown-section">
                                                        <span className="countdown-amount hover-up">{timeLeft[product.id].seconds}</span>
                                                        <span className="countdown-period"> sec </span>
                                                    </span>
                                                </>
                                            ) : (
                                                <span>Deal has ended</span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="deals-content">
                                        <h2><Link to={`/shop-product-right/${product.id}`}>{product.name}</Link></h2>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
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
                                            <div className="add-cart">
                                                <Link className="add" to="#" onClick={() => addToBasket(product._id)}>
                                                    <i className="fa-light fa-cart-shopping mr-5"></i>
                                                    Add
                                                </Link>
                                            </div>
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
