import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import MainContext from '../../../context/context'

const Wishlist = () => {
    const {
        wishlist,
        products,
        addToBasket,
        removeFromWishlist
    } = useContext(MainContext)
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
            <div className="container mb-30 mt-50">
                <div className="row">
                    <div className="col-xl-10 col-lg-12 m-auto">
                        <div className="mb-50">
                            <h1 className="heading-2 mb-10">Your Wishlist</h1>
                            <h6 className="text-body">
                                There are <span className="text-brand">{wishlist.length}</span> products in this
                                list
                            </h6>
                        </div>
                        <div className="table-responsive shopping-summery">
                            <table className="table table-wishlist">
                                <thead>
                                    <tr className="main-heading">
                                        <th className="custome-checkbox start pl-30">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                name="checkbox"
                                                id="exampleCheckbox11"
                                                defaultValue=""
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="exampleCheckbox11"
                                            />
                                        </th>
                                        <th scope="col" colSpan={2}>
                                            Product
                                        </th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Action</th>
                                        <th scope="col" className="end">
                                            Remove
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {wishlist.map((productId) => {
                                        const product = products.find((p) => p._id === productId);
                                        if (!product) return null;
                                        return (
                                            <tr className="pt-30">
                                                <td className="custome-checkbox pl-30">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        name="checkbox"
                                                        id={`exampleCheckbox-${productId}`}
                                                        defaultValue=""
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor={`exampleCheckbox-${productId}`}
                                                    />
                                                </td>
                                                <td className="image product-thumbnail pt-40">
                                                    <img src={product.image} alt={product.name} />
                                                </td>
                                                <td className="product-des product-name">
                                                    <h6>
                                                        <Link
                                                            className="product-name mb-10"
                                                            to="/shop-product-right"
                                                        >
                                                            {product.name}
                                                        </Link>
                                                    </h6>
                                                    <div className="product-rate-cover">
                                                        <div className="product-rate d-inline-block">
                                                            <div className="product-rating" style={{ width: `${product.rating * 20}%` }} />
                                                        </div>
                                                        <span className="font-small ml-5 text-muted"> ({product.rating})</span>
                                                    </div>
                                                </td>
                                                <td className="price" data-title="Price">
                                                    <h3 className="text-brand">${product.price}</h3>
                                                </td>
                                                <td className="text-right" data-title="Cart">
                                                    <button className="btn btn-sm" onClick={() => addToBasket(productId)}>Add to cart</button>
                                                </td>
                                                <td className="action text-center" data-title="Remove">
                                                    <Link to="#" className="text-body" onClick={() => removeFromWishlist(productId)}>
                                                        <i className="fa-sharp fa-light fa-trash"></i>
                                                    </Link>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Wishlist