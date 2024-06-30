import React, { useState, useEffect, useContext } from 'react';
import MainContext from '../../context/context';
import { Link } from 'react-router-dom';

const TopSelling = () => {
    const { products } = useContext(MainContext)
    const topSelling = products.filter(product => product.topSelling === true);
    const trendingProduct = products.filter(product => product.trendingProduct === true);
    const recentlyAdded = products.filter(product => product.recentlyAdded === true);
    const topRated = products.filter(product => product.topRated === true);

    const renderProducts = (products) => {
        return products.map((product, index) => (
            <article key={index} className="row align-items-center hover-up">
                <figure className="col-md-4 mb-0">
                    <Link to={`/products/${product._id}`}>
                        <img src={product.image} alt={product.name} />
                    </Link>
                </figure>
                <div className="col-md-8 mb-0">
                    <h6>
                        <Link to={`/products/${product._id}`}>{product.name}</Link>
                    </h6>
                    <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                            <div className="product-rating" style={{ width: `${product.rating * 10}%` }} />
                        </div>
                        <span className="font-small ml-5 text-muted"> ({product.rating})</span>
                    </div>
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
                </div>
            </article>
        ));
    };

    return (
        <section className="section-padding mb-30">
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-6 mb-sm-5 mb-md-0 wow animate__ animate__fadeInUp animated" data-wow-delay={0} style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                        <h4 className="section-title style-1 mb-30 animated animated">Top Selling</h4>
                        <div className="product-list-small animated animated">
                            {renderProducts(topSelling)}
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 mb-md-0 wow animate__ animate__fadeInUp animated" data-wow-delay=".1s" style={{ visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp' }}>
                        <h4 className="section-title style-1 mb-30 animated animated">Trending Products</h4>
                        <div className="product-list-small animated animated">
                            {renderProducts(trendingProduct)}
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 mb-sm-5 mb-md-0 d-none d-lg-block wow animate__ animate__fadeInUp animated" data-wow-delay=".2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp' }}>
                        <h4 className="section-title style-1 mb-30 animated animated">Recently added</h4>
                        <div className="product-list-small animated animated">
                            {renderProducts(recentlyAdded)}
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 mb-sm-5 mb-md-0 d-none d-xl-block wow animate__ animate__fadeInUp animated" data-wow-delay=".3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp' }}>
                        <h4 className="section-title style-1 mb-30 animated animated">Top Rated</h4>
                        <div className="product-list-small animated animated">
                            {renderProducts(topRated)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TopSelling;
