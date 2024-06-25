import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [sortOption, setSortOption] = useState('featured');
    const [itemsPerPage, setItemsPerPage] = useState(50);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('/path-to-your-api/products');
                const data = response.data;
                setProducts(data);
                setTotalItems(data.length);
                setFilteredProducts(data.slice(0, itemsPerPage));
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, [itemsPerPage]);

    useEffect(() => {
        sortProducts(sortOption, products);
    }, [sortOption, products]);

    const handleSortChange = (option) => {
        setSortOption(option);
    };

    const handleItemsPerPageChange = (number) => {
        setItemsPerPage(number);
        setCurrentPage(1);
        setFilteredProducts(products.slice(0, number));
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
        const startIndex = (page - 1) * itemsPerPage;
        setFilteredProducts(products.slice(startIndex, startIndex + itemsPerPage));
    };

    const sortProducts = (option, products) => {
        let sortedProducts = [...products];
        switch (option) {
            case 'price-low-to-high':
                sortedProducts.sort((a, b) => a.price - b.price);
                break;
            case 'price-high-to-low':
                sortedProducts.sort((a, b) => b.price - a.price);
                break;
            case 'avg-rating':
                sortedProducts.sort((a, b) => b.rating - a.rating);
                break;
            default:
                sortedProducts = products;
        }
        setFilteredProducts(sortedProducts.slice(0, itemsPerPage));
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
                    <div className="col-lg-4-5">
                        <div className="shop-product-fillter">
                            <div className="totall-product">
                                <p>
                                    We found <strong className="text-brand">{totalItems}</strong> items for you!
                                </p>
                            </div>
                            <div className="sort-by-product-area">
                                <div className="sort-by-cover mr-10">
                                    <div className="sort-by-product-wrap">
                                        <div className="sort-by">
                                            <span>
                                            <i className="fa-sharp fa-thin fa-grid-2"></i>
                                                Show:
                                            </span>
                                        </div>
                                        <div className="sort-by-dropdown-wrap">
                                            <span>
                                                {" "}
                                                {itemsPerPage} <i className="fa-thin fa-angle-down"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="sort-by-dropdown">
                                        <ul>
                                            <li>
                                                <Link className={itemsPerPage === 50 ? 'active' : ''} onClick={() => handleItemsPerPageChange(50)}>
                                                    50
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className={itemsPerPage === 100 ? 'active' : ''} onClick={() => handleItemsPerPageChange(100)}>
                                                    100
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className={itemsPerPage === 150 ? 'active' : ''} onClick={() => handleItemsPerPageChange(150)}>
                                                    150
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className={itemsPerPage === 200 ? 'active' : ''} onClick={() => handleItemsPerPageChange(200)}>
                                                    200
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className={itemsPerPage === totalItems ? 'active' : ''} onClick={() => handleItemsPerPageChange(totalItems)}>
                                                    All
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="sort-by-cover">
                                    <div className="sort-by-product-wrap">
                                        <div className="sort-by">
                                            <span>
                                            <i className="fa-regular fa-grid-2-plus"></i>
                                                Sort by:
                                            </span>
                                        </div>
                                        <div className="sort-by-dropdown-wrap">
                                            <span>
                                                {" "}
                                                {sortOption} <i className="fa-thin fa-angle-down"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="sort-by-dropdown">
                                        <ul>
                                            <li>
                                                <Link className={sortOption === 'featured' ? 'active' : ''} onClick={() => handleSortChange('featured')}>
                                                    Featured
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className={sortOption === 'price-low-to-high' ? 'active' : ''} onClick={() => handleSortChange('price-low-to-high')}>
                                                    Price: Low to High
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className={sortOption === 'price-high-to-low' ? 'active' : ''} onClick={() => handleSortChange('price-high-to-low')}>
                                                    Price: High to Low
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className={sortOption === 'avg-rating' ? 'active' : ''} onClick={() => handleSortChange('avg-rating')}>
                                                    Avg. Rating
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row product-grid">
                            {Array.isArray(filteredProducts) && filteredProducts.map(product => (
                                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6" key={product.id}>
                                    <div className="product-cart-wrap mb-30">
                                        <div className="product-img-action-wrap">
                                            <div className="product-img product-img-zoom">
                                                <Link to={`/shop-product-right/${product.id}`}>
                                                    <img
                                                        className="default-img"
                                                        src={product.image}
                                                        alt={product.name}
                                                    />
                                                    <img
                                                        className="hover-img"
                                                        src={product.hoverImage}
                                                        alt={product.name}
                                                    />
                                                </Link>
                                            </div>
                                            <div className="product-action-1">
                                                <Link
                                                    aria-label="Add To Wishlist"
                                                    className="action-btn"
                                                    to="/shop-wishlist"
                                                >
                                                    <i className="fa-sharp fa-thin fa-heart"></i>
                                                </Link>
                                                <Link
                                                    aria-label="Compare"
                                                    className="action-btn"
                                                    to="/shop-compare"
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
                                                <Link to="/shop-grid-right">Snack</Link>
                                            </div>
                                            <h2>
                                                <Link to={`/shop-product-right/${product.id}`}>{product.name}</Link>
                                            </h2>
                                            <div className="product-rate-cover">
                                                <div className="product-rate d-inline-block">
                                                    <div className="product-rating" style={{ width: `${product.rating * 20}%` }} />
                                                </div>
                                                <span className="font-small ml-5 text-muted">({product.reviewsCount})</span>
                                            </div>
                                            <div>
                                                <span className="font-small text-muted">
                                                    By <Link to="/vendor">{product.vendor}</Link>
                                                </span>
                                            </div>
                                            <div className="product-card-bottom">
                                                <div className="product-price">
                                                    <span>${product.price}</span>
                                                    <span className="old-price">${product.oldPrice}</span>
                                                </div>
                                                <div className="add-cart">
                                                    <Link className="add" to={`/shop-product-right/${product.id}`}>
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
                        <div className="pagination-area mt-20 mb-20">
                            <nav aria-label="Page navigation example">
                                <ul className="pagination justify-content-start">
                                    <li className="page-item">
                                        <Link
                                            className="page-link"
                                            to="#"
                                            aria-label="Previous"
                                            onClick={() => handlePageChange(currentPage > 1 ? currentPage - 1 : 1)}
                                        >
                                            <i className="fa-thin fa-angle-left"></i>
                                        </Link>
                                    </li>
                                    {[...Array(Math.ceil(totalItems / itemsPerPage)).keys()].map(page => (
                                        <li key={page + 1} className={`page-item ${page + 1 === currentPage ? 'active' : ''}`}>
                                            <Link
                                                className="page-link"
                                                to="#"
                                                onClick={() => handlePageChange(page + 1)}
                                            >
                                                {page + 1}
                                            </Link>
                                        </li>
                                    ))}
                                    <li className="page-item">
                                        <Link
                                            className="page-link"
                                            to="#"
                                            aria-label="Next"
                                            onClick={() => handlePageChange(currentPage < Math.ceil(totalItems / itemsPerPage) ? currentPage + 1 : currentPage)}
                                        >
                                            <i className="fa-thin fa-angle-right"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Shop;
