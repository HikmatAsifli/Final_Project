import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import MainContext from '../../../context/context';

const Shop = () => {
    const {
        products,
        addToBasket,
        toggleWishlist,
        isProductInWishlist,
        addToCompare,
        isProductInCompare,
        inpVal, 
        setInpVal
    } = useContext(MainContext);

    const [priceRange, setPriceRange] = useState("all");

    const handlePriceRangeChange = (e) => {
        setPriceRange(e.target.value);
    };

    const filterProductsByPrice = (products) => {
        if (priceRange === "all") {
            return products;
        } else if (priceRange === "0-50") {
            return products.filter(product => product.price <= 50);
        } else if (priceRange === "51-100") {
            return products.filter(product => product.price > 50 && product.price <= 100);
        } else if (priceRange === "101-200") {
            return products.filter(product => product.price > 100 && product.price <= 200);
        } else if (priceRange === "200+") {
            return products.filter(product => product.price > 200);
        }
    };

    

    return (
        <>
            <div className="page-header mt-30 mb-50">
                <div className="container">
                    <div className="archive-header">
                        <div className="row align-items-center">
                            <div className="col-xl-3">
                                <h1 className="mb-15">Snack</h1>
                                <div className="breadcrumb">
                                    <Link to="/" rel="nofollow">
                                        <i className="fa-light fa-house mr-5"></i>
                                        Home
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xl-9 text-end d-none d-xl-block">
                                <ul className="tags-list">
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mb-30" style={{ transform: "none" }}>
                <div className="row" style={{ transform: "none" }}>
                    <div className="col-lg-4-8">
                        <div className="shop-product-fillter">
                            <div className="totall-product">
                                <p>
                                    We found <strong className="text-brand">{products.length}</strong> items for you!
                                </p>
                            </div>
                        </div>
                        <div className="row product-grid">
                            <div className="col-lg-4-5">
                                <div className="row product-grid">
                                    {products
                                        .filter((x) =>
                                            x.name.toLowerCase().includes(inpVal.toLowerCase())
                                        )
                                        .map((product, index) => (
                                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6" key={index}>
                                                <div className="product-cart-wrap mb-30">
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
                                                                aria-label="Add To Wishlist"
                                                                className={`action-btn ${isProductInWishlist(product._id) ? 'active' : ''}`}
                                                                to="#"
                                                                onClick={() => toggleWishlist(product._id)}
                                                            >
                                                                <i className="fa-sharp fa-thin fa-heart"></i>
                                                            </Link>
                                                            <Link
                                                                aria-label="Compare"
                                                                className={`action-btn ${isProductInCompare(product._id) ? 'active' : ''} `}
                                                                to="#"
                                                                onClick={() => addToCompare(product._id)}
                                                            >
                                                                <i className="fa-sharp fa-thin fa-shuffle"></i>
                                                            </Link>
                                                            <Link
                                                                aria-label="Quick view"
                                                                className="action-btn"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#quickViewModal"
                                                            >
                                                                <i className="fa-sharp fa-thin fa-eye"></i>
                                                            </Link>
                                                        </div>
                                                        <div className="product-badges product-badges-position product-badges-mrg">
                                                            <span className="hot">Hot</span>
                                                        </div>
                                                    </div>
                                                    <div className="product-content-wrap">
                                                        <div className="product-category">
                                                            <Link to="/shop">{product.category}</Link>
                                                        </div>
                                                        <h2>
                                                            <Link to={`/products/${product._id}`}>{product.name}</Link>
                                                        </h2>
                                                        <div className="product-rate-cover">
                                                            <div className="product-rate d-inline-block">
                                                                <div className="product-rating" style={{ width: `${product.rating * 20}%` }} />
                                                            </div>
                                                        </div>
                                                        <div className="product-card-bottom">
                                                            <div className="product-price">
                                                                {product.discount > 0 ? (
                                                                    <>
                                                                        <span className='new-price'>
                                                                            {`$${(product.price - (product.price * (product.discount / 100))).toFixed(2)}`}
                                                                            {/* <span>
                                                                                ({product.discount} % off)
                                                                            </span> */}
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
                                                                <Link className="add" to="#" onClick={() => { addToBasket(product._id) }}
                                                                >
                                                                    <i className="fa-thin fa-cart-shopping mr-5"></i>
                                                                    Add
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            </div>
                            <div
                                className="col-lg-1-5 primary-sidebar sticky-sidebar"
                                style={{
                                    position: "relative",
                                    overflow: "visible",
                                    boxSizing: "border-box",
                                    minHeight: 1
                                }}
                            >
                                <div
                                    className="theiaStickySidebar"
                                    style={{
                                        paddingTop: 0,
                                        paddingBottom: 1,
                                        position: "static",
                                        transform: "none"
                                    }}
                                >
                                    <div className="sidebar-widget widget-category-2 mb-30">
                                        <h5 className="section-title style-1 mb-30">Search By Name ...</h5>
                                        <input
                                            type="text"
                                            value={inpVal}
                                            onChange={(e) => {
                                                setInpVal(e.target.value);
                                            }}
                                            className="form-control"
                                            placeholder="Search products"
                                        />
                                    </div>
                                    <div className="sidebar-widget widget-category-2 mb-30">
                                        <h5 className="section-title style-1 mb-30">Filter By Price ...</h5>
                                        <select className="form-control" value={priceRange} onChange={handlePriceRangeChange}>
                                            <option value="all">All</option>
                                            <option value="0-50">$0 - $50</option>
                                            <option value="51-100">$51 - $100</option>
                                            <option value="101-200">$101 - $200</option>
                                            <option value="200+">$200+</option>
                                        </select>
                                    </div>
                                    <div
                                        className="banner-img wow fadeIn mb-lg-0 animated d-lg-block d-none"
                                        style={{ visibility: "hidden", animationName: "none" }}
                                    >
                                        <img src="assets/imgs/banner/banner-11.png" alt="" />
                                        <div className="banner-text">
                                            <span>Oganic</span>
                                            <h4>
                                                Save 17% <br />
                                                on <span className="text-brand">Oganic</span>
                                                <br />
                                                Juice
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Shop;
