import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import MainContext from '../../context/context';

const PopularProducts = () => {
    const { products } = useContext(MainContext);
    const popularProducts = products.filter(product => product.popularProduct === true);
    return (
        <section className="product-tabs section-padding position-relative">
            <div className="container">
                <div
                    className="section-title style-2 wow animate__ animate__fadeIn animated"
                    style={{ visibility: "visible", animationName: "fadeIn" }}
                >
                    <h3>Popular Products</h3>
                    <ul className="nav nav-tabs links" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link active"
                                id="nav-tab-one"
                                data-bs-toggle="tab"
                                data-bs-target="#tab-one"
                                type="button"
                                role="tab"
                                aria-controls="tab-one"
                                aria-selected="true"
                            >
                                All
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link"
                                id="nav-tab-two"
                                data-bs-toggle="tab"
                                data-bs-target="#tab-two"
                                type="button"
                                role="tab"
                                aria-controls="tab-two"
                                aria-selected="false"
                            >
                                Milks &amp; Dairies
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link"
                                id="nav-tab-three"
                                data-bs-toggle="tab"
                                data-bs-target="#tab-three"
                                type="button"
                                role="tab"
                                aria-controls="tab-three"
                                aria-selected="false"
                            >
                                Coffes &amp; Teas
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link"
                                id="nav-tab-four"
                                data-bs-toggle="tab"
                                data-bs-target="#tab-four"
                                type="button"
                                role="tab"
                                aria-controls="tab-four"
                                aria-selected="false"
                            >
                                Pet Foods
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link"
                                id="nav-tab-five"
                                data-bs-toggle="tab"
                                data-bs-target="#tab-five"
                                type="button"
                                role="tab"
                                aria-controls="tab-five"
                                aria-selected="false"
                            >
                                Meats
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link"
                                id="nav-tab-six"
                                data-bs-toggle="tab"
                                data-bs-target="#tab-six"
                                type="button"
                                role="tab"
                                aria-controls="tab-six"
                                aria-selected="false"
                            >
                                Vegetables
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link"
                                id="nav-tab-seven"
                                data-bs-toggle="tab"
                                data-bs-target="#tab-seven"
                                type="button"
                                role="tab"
                                aria-controls="tab-seven"
                                aria-selected="false"
                            >
                                Fruits
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="tab-content" id="myTabContent">
                    {/* Loop through products and render dynamic product cards */}
                    {popularProducts.map(products => (
                        <div
                            key={products.id} // Ensure each product has a unique key
                            className="tab-pane fade show active"
                            id={`tab-${products.id}`} // Use product id or index for unique IDs
                            role="tabpanel"
                            aria-labelledby={`tab-${products.id}`}
                        >
                            <div className="row product-grid-4">
                                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                    <div className="product-cart-wrap mb-30 wow animate__ animate__fadeIn animated">
                                        <div className="product-img-action-wrap">
                                            <div className="product-img product-img-zoom">
                                                <Link to={`/shop-product/${products.id}`}>
                                                    <img
                                                        className="default-img"
                                                        src={products.image} // Assuming product.image is the image URL
                                                        alt={products.name} // Product name as alt text
                                                    />
                                                    {/* Optional hover image */}
                                                    {/* <img
                                                        className="hover-img"
                                                        src={products.hoverImage} // Optional hover image URL
                                                        alt={products.name} // Product name as alt text
                                                    /> */}
                                                </Link>
                                            </div>
                                            {/* Product actions */}
                                            <div className="product-action-1">
                                                <Link
                                                    aria-label="Add To Wishlist"
                                                    className="action-btn"
                                                    to="/wishlist"
                                                >
                                                    <i className="fa-sharp fa-thin fa-heart"></i>
                                                </Link>
                                                <Link
                                                    aria-label="Compare"
                                                    className="action-btn"
                                                    to="/compare"
                                                >
                                                    <i className="fa-sharp fa-thin fa-shuffle"></i>
                                                </Link>
                                                <Link
                                                    aria-label="Quick View"
                                                    className="action-btn"
                                                    to="/id"
                                                >
                                                    <i className="fa-sharp fa-thin fa-eye"></i>
                                                </Link>
                                                {/* Add other action buttons as needed */}
                                            </div>
                                            {/* Product badges */}
                                            {/* <div className="product-badges product-badges-position product-badges-mrg">
                                                {products.badges.map(badge => (
                                                    <span key={badge} className="badge">{badge}</span>
                                                ))}
                                            </div> */}
                                        </div>
                                        {/* Product content */}
                                        <div className="product-content-wrap">
                                            <div className="product-category">
                                                <Link to={`/shop-category/${products.category}`}>
                                                    {products.category}
                                                </Link>
                                            </div>
                                            <h2>
                                                <Link to={`/shop-product/${products.id}`}>
                                                    {products.name}
                                                </Link>
                                            </h2>
                                            <div className="product-rate-cover">
                                                <div className="product-rate d-inline-block">
                                                    {/* Assuming product.rating is a number */}
                                                    <div className="product-rating" style={{ width: `${products.rating * 20}%` }} />
                                                </div>
                                                <span className="font-small ml-5 text-muted"> ({products.rating})</span>
                                            </div>
                                            <div className="product-card-bottom">
                                                <div className="product-price">
                                                    {products.discount > 0 ? (
                                                        <>
                                                            <span className='new-price'>
                                                                {`$${(products.price - (products.price * (products.discount / 100))).toFixed(2)}`}
                                                                <span>
                                                                    ({products.discount} % off)
                                                                </span>
                                                            </span>
                                                            <span className="old-price">
                                                                {`$${products.price}`}
                                                            </span>
                                                        </>
                                                    ) : (
                                                        <span>{`$${products.price}`}</span>
                                                    )}
                                                </div>
                                                <div className="add-cart">
                                                    <Link to="#" className="add" onClick={() => handleAddToCart(products.id)}>
                                                        <i className="fa-thin fa-cart-shopping mr-5"></i>
                                                        Add
                                                    </Link>
                                                </div>
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
    )
}

export default PopularProducts