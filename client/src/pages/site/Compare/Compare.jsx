import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MainContext from '../../../context/context';

const Compare = () => {
    const { compare, products, removeFromCompare } = useContext(MainContext);

    const comparedProducts = products.filter(product => compare.includes(product._id));

    return (
        <main className="main">
            <div className="page-header breadcrumb-wrap">
                <div className="container">
                    <div className="breadcrumb">
                        <Link to="/" rel="nofollow">
                            <i className="fa-light fa-house mr-5"></i>
                            Home
                        </Link>
                    </div>
                </div>
            </div>
            <div className="container mb-80 mt-50">
                <div className="row">
                    <div className="col-xl-10 col-lg-12 m-auto">
                        <h1 className="heading-2 mb-10">Products Compare</h1>
                        <h6 className="text-body mb-40">
                            There are <span className="text-brand">{compare.length}</span> products to compare
                        </h6>
                        <div className="table-responsive">
                            <table className="table text-center table-compare">
                                <tbody>
                                    <tr className="pr_image">
                                        <td className="text-muted font-sm fw-600 font-heading mw-200">
                                            Preview
                                        </td>
                                        {comparedProducts.map(product => (
                                            <td key={product._id} className="row_img">
                                                <img src={product.image} alt="compare-img" style={{ maxWidth: "300px" }} />
                                            </td>
                                        ))}
                                    </tr>
                                    <tr className="pr_title">
                                        <td className="text-muted font-sm fw-600 font-heading">Name</td>
                                        {comparedProducts.map(product => (
                                            <td key={product._id} className="product_name">
                                                <h6>
                                                    <Link className="text-heading" to={`/shop-product-full/${product._id}`}>
                                                        {product.name}
                                                    </Link>
                                                </h6>
                                            </td>
                                        ))}
                                    </tr>
                                    <tr className="pr_price">
                                        <td className="text-muted font-sm fw-600 font-heading">Price</td>
                                        {comparedProducts.map(product => (
                                            <td key={product._id} className="product_price">
                                                <h4 className="price text-brand">{product.discount > 0 ? (
                                                    <span className='new-price'>
                                                        {`$${(product.price - (product.price * (product.discount / 100))).toFixed(2)}`}
                                                    </span>
                                                ) : (
                                                    <span>{`$${product.price}`}</span>
                                                )}</h4>
                                            </td>
                                        ))}
                                    </tr>
                                    <tr className="pr_rating">
                                        <td className="text-muted font-sm fw-600 font-heading">Rating</td>
                                        {comparedProducts.map(product => (
                                            <td key={product._id}>
                                                <div className="rating_wrap">
                                                    <div className="product-rate d-inline-block">
                                                        <div
                                                            className="product-rating"
                                                            style={{ width: `${(product.rating / 5) * 100}%` }}
                                                        />
                                                    </div>
                                                    <span className="rating_num">({product.ratingCount})</span>
                                                </div>
                                            </td>
                                        ))}
                                    </tr>
                                    <tr className="description">
                                        <td className="text-muted font-sm fw-600 font-heading">Description</td>
                                        {comparedProducts.map(product => (
                                            <td key={product._id} className="row_text font-xs">
                                                <p className="font-sm text-muted">{product.description}</p>
                                            </td>
                                        ))}
                                    </tr>
                                    <tr className="pr_weight">
                                        <td className="text-muted font-sm fw-600 font-heading">Weight</td>
                                        {comparedProducts.map(product => (
                                            <td key={product._id} className="row_weight">{product.weight} gram</td>
                                        ))}
                                    </tr>
                                    <tr className="pr_dimensions">
                                        <td className="text-muted font-sm fw-600 font-heading">Dimensions</td>
                                        {comparedProducts.map(product => (
                                            <td key={product._id} className="row_dimensions">{product.dimensions || 'N/A'}</td>
                                        ))}
                                    </tr>
                                    <tr className="pr_add_to_cart">
                                        <td className="text-muted font-sm fw-600 font-heading">Buy now</td>
                                        {comparedProducts.map(product => (
                                            <td key={product._id} className="row_btn">
                                                <button className="btn btn-sm">
                                                    <i className="fa-thin fa-bag-shopping mr-5"></i>
                                                    Add to cart
                                                </button>
                                            </td>
                                        ))}
                                    </tr>
                                    <tr className="pr_remove text-muted">
                                        <td className="text-muted font-md fw-600" />
                                        {comparedProducts.map(product => (
                                            <td key={product._id} className="row_remove">
                                                <Link to="#" onClick={() => removeFromCompare(product._id)} className="text-muted">
                                                    <i className="fa-sharp fa-light fa-trash mr-5"></i>
                                                    <span>Remove</span>
                                                </Link>
                                            </td>
                                        ))}
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Compare;
