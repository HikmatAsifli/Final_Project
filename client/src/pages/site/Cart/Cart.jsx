import React, { useContext } from 'react';
import MainContext from '../../../context/context';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { basket, addToBasket, removeFromBasket } = useContext(MainContext);

    const handleQuantityChange = (id, value) => {
        if (value === 'increase') {
            addToBasket(id);
        } else {
            removeFromBasket(id);
        }
    };

    const clearCart = () => {
        basket.forEach(item => removeFromBasket(item._id));
    };

    const totalAmount = basket.reduce((acc, item) => acc + item.totalPrice, 0);

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
                    <div className="col-lg-8 mb-40">
                        <h1 className="heading-2 mb-10">Your Cart</h1>
                        <div className="d-flex justify-content-between">
                            <h6 className="text-body">
                                There are <span className="text-brand">{basket.length}</span> products in your cart
                            </h6>
                            <h6 className="text-body">
                                <Link to="#" className="text-muted" onClick={clearCart}>
                                    <i className="fi-rs-trash mr-5" />
                                    Clear Cart
                                </Link>
                            </h6>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8">
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
                                            <label className="form-check-label" htmlFor="exampleCheckbox11" />
                                        </th>
                                        <th scope="col" colSpan={2}>
                                            Product
                                        </th>
                                        <th scope="col">Unit Price</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Subtotal</th>
                                        <th scope="col" className="end">
                                            Remove
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {basket.map((item) => (
                                        <tr className="pt-30" key={item._id}>
                                            <td className="custome-checkbox pl-30">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    name="checkbox"
                                                    id={`checkbox-${item._id}`}
                                                    defaultValue=""
                                                />
                                                <label className="form-check-label" htmlFor={`checkbox-${item._id}`} />
                                            </td>
                                            <td className="image product-thumbnail pt-40">
                                                <img src="assets/imgs/shop/product-1-1.jpg" alt="#" />
                                            </td>
                                            <td className="product-des product-name">
                                                <h6 className="mb-5">
                                                    <Link className="product-name mb-10 text-heading" to="/shop-product-right">
                                                        {item.name}
                                                    </Link>
                                                </h6>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: "90%" }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                            </td>
                                            <td className="price" data-title="Price">
                                                <h4 className="text-body">${item.price} </h4>
                                            </td>
                                            <td className="text-center detail-info" data-title="Stock">
                                                <div className="detail-extralink mr-15">
                                                    <div className="detail-qty border radius">
                                                        <Link to="#" className="qty-down" onClick={() => handleQuantityChange(item._id, 'decrease')}>
                                                            <i className="fa-sharp fa-regular fa-minus"></i>
                                                        </Link>
                                                        <input
                                                            type="text"
                                                            name="quantity"
                                                            className="qty-val"
                                                            value={item.count}
                                                            readOnly
                                                        />
                                                        <Link to="#" className="qty-up" onClick={() => handleQuantityChange(item._id, 'increase')}>
                                                            <i className="fa-sharp fa-regular fa-plus"></i>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="price" data-title="Price">
                                                <h4 className="text-brand">${item.totalPrice.toFixed(2)} </h4>
                                            </td>
                                            <td className="action text-center" data-title="Remove">
                                                <Link to="#" className="text-body" onClick={() => removeFromBasket(item._id)}>
                                                    <i className="fa-sharp fa-light fa-trash"></i>
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="divider-2 mb-30" />
                        <div className="cart-action d-flex justify-content-between">
                            <Link className="btn" to="/">
                                <i className="fi-rs-arrow-left mr-10" />
                                Continue Shopping
                            </Link>
                            <Link className="btn  mr-10 mb-sm-15" to="#">
                                <i className="fi-rs-refresh mr-10" />
                                Update Cart
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="border p-md-4 cart-totals ml-30">
                            <div className="table-responsive">
                                <table className="table no-border">
                                    <tbody>
                                        <tr>
                                            <td className="cart_total_label">
                                                <h6 className="text-muted">Subtotal</h6>
                                            </td>
                                            <td className="cart_total_amount">
                                                <h4 className="text-brand text-end">${totalAmount.toFixed(2)}</h4>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td scope="col" colSpan={2}>
                                                <div className="divider-2 mt-10 mb-10" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="cart_total_label">
                                                <h6 className="text-muted">Shipping</h6>
                                            </td>
                                            <td className="cart_total_amount">
                                                <h5 className="text-heading text-end">Free </h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="cart_total_label">
                                                <h6 className="text-muted">Estimate for</h6>
                                            </td>
                                            <td className="cart_total_amount">
                                                <h5 className="text-heading text-end">United Kingdom </h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td scope="col" colSpan={2}>
                                                <div className="divider-2 mt-10 mb-10" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="cart_total_label">
                                                <h6 className="text-muted">Total</h6>
                                            </td>
                                            <td className="cart_total_amount">
                                                <h4 className="text-brand text-end">${totalAmount.toFixed(2)}</h4>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <Link to="#" className="btn mb-20 w-100">
                                Proceed To CheckOut
                                <i className="fa-sharp fa-thin fa-right-from-bracket ml-15"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Cart;