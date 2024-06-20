import React, { useEffect, useState } from 'react'
import axios from 'axios';

const PopularProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch data from your API endpoint
        axios.get('https://example.com/api/products')
            .then(response => {
                setProducts(response.data); // Assuming response.data is an array of products
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []); // Empty dependency array ensures useEffect runs only once on component mount
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
                    {products.map(product => (
                        <div
                            key={product.id} // Ensure each product has a unique key
                            className="tab-pane fade show active"
                            id={`tab-${product.id}`} // Use product id or index for unique IDs
                            role="tabpanel"
                            aria-labelledby={`tab-${product.id}`}
                        >
                            <div className="row product-grid-4">
                                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                    <div className="product-cart-wrap mb-30 wow animate__ animate__fadeIn animated">
                                        <div className="product-img-action-wrap">
                                            <div className="product-img product-img-zoom">
                                                <a href={`/shop-product/${product.id}`}>
                                                    <img
                                                        className="default-img"
                                                        src={product.image} // Assuming product.image is the image URL
                                                        alt={product.name} // Product name as alt text
                                                    />
                                                    {/* Optional hover image */}
                                                    <img
                                                        className="hover-img"
                                                        src={product.hoverImage} // Optional hover image URL
                                                        alt={product.name} // Product name as alt text
                                                    />
                                                </a>
                                            </div>
                                            {/* Product actions */}
                                            <div className="product-action-1">
                                                <button
                                                    aria-label="Add To Wishlist"
                                                    className="action-btn"
                                                    href="/shop-wishlist"
                                                >
                                                    <i className="fi-rs-heart" />
                                                </button>
                                                {/* Add other action buttons as needed */}
                                            </div>
                                            {/* Product badges */}
                                            <div className="product-badges product-badges-position product-badges-mrg">
                                                {product.badges.map(badge => (
                                                    <span key={badge} className="badge">{badge}</span>
                                                ))}
                                            </div>
                                        </div>
                                        {/* Product content */}
                                        <div className="product-content-wrap">
                                            <div className="product-category">
                                                <a href={`/shop-category/${product.category}`}>
                                                    {product.category}
                                                </a>
                                            </div>
                                            <h2>
                                                <a href={`/shop-product/${product.id}`}>
                                                    {product.name}
                                                </a>
                                            </h2>
                                            <div className="product-rate-cover">
                                                <div className="product-rate d-inline-block">
                                                    {/* Assuming product.rating is a number */}
                                                    <div className="product-rating" style={{ width: `${product.rating * 20}%` }} />
                                                </div>
                                                <span className="font-small ml-5 text-muted"> ({product.rating})</span>
                                            </div>
                                            <div>
                                                <span className="font-small text-muted">
                                                    By <a href={`/vendor-details/${product.vendorId}`}>{product.vendor}</a>
                                                </span>
                                            </div>
                                            {/* Product card bottom */}
                                            <div className="product-card-bottom">
                                                <div className="product-price">
                                                    <span>{`$${product.price}`}</span>
                                                    {product.oldPrice && <span className="old-price">{`$${product.oldPrice}`}</span>}
                                                </div>
                                                <div className="add-cart">
                                                    <button className="add" onClick={() => handleAddToCart(product.id)}>
                                                        <i className="fi-rs-shopping-cart mr-5" />
                                                        Add
                                                    </button>
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