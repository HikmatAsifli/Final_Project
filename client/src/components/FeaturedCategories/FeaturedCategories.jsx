import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const FeaturedCategories = () => {
    const [categories, setCategories] = useState([]);
    const [activeSlide, setActiveSlide] = useState(() => {
        return parseInt(localStorage.getItem('activeSlide'), 10) || 0;
    });

    useEffect(() => {
        localStorage.setItem('activeSlide', activeSlide.toString());
    }, [activeSlide]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('https://api.example.com/categories');
                if (!response || !response.data || !response.data.categories) {
                    throw new Error('Failed to fetch categories');
                }
                setCategories(response.data.categories);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);

    const goToCategory = (slug) => {
        window.location.href = `/shop-grid-right/${slug}`;
    };

    const goToPrevSlide = () => {
        setActiveSlide((prevSlide) => (prevSlide > 0 ? prevSlide - 1 : categories.length - 1));
    };

    const goToNextSlide = () => {
        setActiveSlide((prevSlide) => (prevSlide < categories.length - 1 ? prevSlide + 1 : 0));
    };

    return (
        <section className="popular-categories section-padding">
            <div className="container wow animate__animated animate__fadeIn">
                <div className="section-title">
                    <div className="title">
                        <h3>Featured Categories</h3>
                        <ul className="list-inline nav nav-tabs links">
                            {categories.map((category, index) => (
                                <li key={index} className="list-inline-item nav-item">
                                    <button
                                        className={`nav-link ${index === activeSlide ? 'active' : ''}`}
                                        onClick={() => goToCategory(category.slug)}
                                    >
                                        {category.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="slider-arrow slider-arrow-2 flex-right carausel-10-columns-arrow" id="carausel-10-columns-arrows">
                        <span className="slider-btn slider-prev slick-arrow" onClick={goToPrevSlide}>
                            <i className="fa-sharp fa-thin fa-arrow-left"></i>
                        </span>
                        <span className="slider-btn slider-next slick-arrow" onClick={goToNextSlide}>
                            <i className="fa-sharp fa-thin fa-arrow-right"></i>
                        </span>
                    </div>
                </div>
                <div className="carausel-10-columns-cover position-relative">
                    <div className="carausel-10-columns slick-initialized slick-slider" id="carausel-10-columns">
                        <div className="slick-list draggable">
                            {categories.map((category, index) => (
                                <div key={index} className={`slick-slide ${index === activeSlide ? 'slick-active' : ''} card-2 bg-${index + 9} wow animate__animated animate__fadeInUp`} style={{ width: "137px", visibility: "visible", animationDelay: `${index * 0.1}s`, animationName: "fadeInUp" }}>
                                    <figure className="img-hover-scale overflow-hidden">
                                        <Link to={`/shop-grid-right/${category.slug}`}>
                                            <img src={`assets/imgs/shop/cat-${index + 1}.png`} alt={category.name} />
                                        </Link>
                                    </figure>
                                    <h6>
                                        <Link to={`/shop-grid-right/${category.slug}`}>{category.name}</Link>
                                    </h6>
                                    <span>{category.items} items</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeaturedCategories;
