import React, { useState, useEffect } from 'react';

const TopSelling = () => {
    const [topSellingProducts, setTopSellingProducts] = useState([]);
    const [trendingProducts, setTrendingProducts] = useState([]);
    const [recentlyAddedProducts, setRecentlyAddedProducts] = useState([]);
    const [topRatedProducts, setTopRatedProducts] = useState([]);

    useEffect(() => {
        // Fetch data from API
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const topSellingResponse = await fetch('/api/top-selling');
            const trendingResponse = await fetch('/api/trending');
            const recentlyAddedResponse = await fetch('/api/recently-added');
            const topRatedResponse = await fetch('/api/top-rated');

            const topSellingData = await topSellingResponse.json();
            const trendingData = await trendingResponse.json();
            const recentlyAddedData = await recentlyAddedResponse.json();
            const topRatedData = await topRatedResponse.json();

            setTopSellingProducts(topSellingData);
            setTrendingProducts(trendingData);
            setRecentlyAddedProducts(recentlyAddedData);
            setTopRatedProducts(topRatedData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const renderProducts = (products) => {
        return products.map((product, index) => (
            <article key={index} className="row align-items-center hover-up">
                <figure className="col-md-4 mb-0">
                    <a href={`/shop-product-right/${product.id}`}>
                        <img src={product.image} alt={product.title} />
                    </a>
                </figure>
                <div className="col-md-8 mb-0">
                    <h6>
                        <a href={`/shop-product-right/${product.id}`}>{product.title}</a>
                    </h6>
                    <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                            <div className="product-rating" style={{ width: `${product.rating * 10}%` }} />
                        </div>
                        <span className="font-small ml-5 text-muted"> ({product.rating})</span>
                    </div>
                    <div className="product-price">
                        <span>${product.price}</span>
                        {product.oldPrice && <span className="old-price">${product.oldPrice}</span>}
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
                            {renderProducts(topSellingProducts)}
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 mb-md-0 wow animate__ animate__fadeInUp animated" data-wow-delay=".1s" style={{ visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp' }}>
                        <h4 className="section-title style-1 mb-30 animated animated">Trending Products</h4>
                        <div className="product-list-small animated animated">
                            {renderProducts(trendingProducts)}
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 mb-sm-5 mb-md-0 d-none d-lg-block wow animate__ animate__fadeInUp animated" data-wow-delay=".2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp' }}>
                        <h4 className="section-title style-1 mb-30 animated animated">Recently added</h4>
                        <div className="product-list-small animated animated">
                            {renderProducts(recentlyAddedProducts)}
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 mb-sm-5 mb-md-0 d-none d-xl-block wow animate__ animate__fadeInUp animated" data-wow-delay=".3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp' }}>
                        <h4 className="section-title style-1 mb-30 animated animated">Top Rated</h4>
                        <div className="product-list-small animated animated">
                            {renderProducts(topRatedProducts)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TopSelling;
