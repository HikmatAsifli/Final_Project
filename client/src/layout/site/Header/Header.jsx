import React, { useContext, useState } from 'react'
import { Link } from "react-router-dom";
import logo from "../../../assets/images/theme/logo.svg"
import compareSVG from "../../../assets/images/theme/icons/icon-compare.svg"
import heartSVG from "../../../assets/images/theme/icons/icon-heart.svg"
import cartSVG from "../../../assets/images/theme/icons/icon-cart.svg"
import user from "../../../assets/images/theme/icons/icon-user.svg"
import headphone from "../../../assets/images/theme/icons/icon-headphone.svg"
import hot from "../../../assets/images/theme/icons/icon-hot.svg"
import bannerMenu from "../../../assets/images/banner/banner-menu.png"
import thumbnail3 from "../../../assets/images/shop/thumbnail-3.jpg"
import MainContext from '../../../context/context';



const Header = () => {
    const {
        products,
        wishlist,
        basket,
        removeFromBasket,
        compare,
        totalAmount

    } = useContext(MainContext)

    const [inpVal,
        setInpVal] = useState([])

    return (
        <>
            <header className="header-area header-style-1 header-height-2">
                <div className="mobile-promotion">
                    <span>Grand opening, <strong>up to 15%</strong> off all items. Only <strong>3 days</strong> left</span>
                </div>
                <div className="header-top header-top-ptb-1 d-none d-lg-block">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-3 col-lg-4">
                                <div className="header-info">
                                    <ul>
                                        <li><Link to="/about">About Us</Link></li>
                                        <li><Link to="/account">My Account</Link></li>
                                        <li><Link to="/wishlist">Wishlist</Link></li>
                                        <li><Link to="/order">Order Tracking</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-4">
                                <div className="text-center">
                                    <div id="news-flash" className="d-inline-block" style={{ overflow: "hidden", position: "relative", height: "14px" }}>
                                        <ul style={{ position: "absolute", margin: "0px", padding: "0px", top: "0px" }}>
                                            <li style={{ margin: "0px", padding: "0px", height: "14px" }}>100% Secure delivery without contacting the courier</li>
                                            <li style={{ margin: "0px", padding: "0px", height: "14px" }}>Supper Value Deals - Save more with coupons</li>
                                            <li style={{ margin: "0px", padding: "0px", height: "14px" }}>Trendy 25silver jewelry, save up 35% off today</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4">
                                <div className="header-info header-info-right">
                                    <ul>
                                        <li>Need help? Call Us: <strong className="text-brand"> + 1800 900</strong></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-middle header-middle-ptb-1 d-none d-lg-block">
                    <div className="container">
                        <div className="header-wrap">
                            <div className="logo logo-width-1">
                                <Link to="/">
                                    <img src={logo} alt="logo" />
                                </Link>
                            </div>
                            <div className="header-right">
                                <div className="search-style-2">
                                    <form action="#">
                                        <select className="select-active select2-hidden-accessible" data-select2-id="1" tabIndex="-1" aria-hidden="true">
                                            <option data-select2-id="3">All Categories</option>
                                            <option>Milks and Dairies</option>
                                            <option>Wines &amp; Alcohol</option>
                                            <option>Clothing &amp; Beauty</option>
                                            <option>Pet Foods &amp; Toy</option>
                                            <option>Fast food</option>
                                            <option>Baking material</option>
                                            <option>Vegetables</option>
                                            <option>Fresh Seafood</option>
                                            <option>Noodles &amp; Rice</option>
                                            <option>Ice cream</option>
                                        </select>
                                        <span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="2" style={{ width: "140px" }}>
                                            <span className="selection">
                                                <span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex="0" aria-labelledby="select2-pbse-container">
                                                    <span className="select2-selection__rendered" id="select2-pbse-container" role="textbox" aria-readonly="true" title="All Categories">
                                                        All Categories
                                                        <i className="fa-thin fa-angle-down" role="presentation">
                                                            <b role="presentation"></b>
                                                        </i>
                                                    </span>
                                                </span>
                                            </span>
                                            <span className="dropdown-wrapper" aria-hidden="true">
                                            </span>
                                        </span>
                                        <input
                                            type="text"
                                            placeholder="Search for items..."
                                            value={inpVal}
                                            onChange={(e) => {
                                                setInpVal(e.target.value);
                                            }}
                                        />
                                    </form>
                                </div>
                                <div className="header-action-right">
                                    <div className="header-action-2">
                                        <div className="header-action-icon-2">
                                            <Link to="/compare">
                                                <img className="svgInject" alt="Nest" src={compareSVG} />
                                                <span className="pro-count blue">{compare.length}</span>
                                            </Link>
                                            <Link to="/compare">
                                                <span className="lable ml-0">Compare</span>
                                            </Link>
                                        </div>
                                        <div className="header-action-icon-2">
                                            <Link to="/wishlist">
                                                <img className="svgInject" alt="Nest" src={heartSVG} />
                                                <span className="pro-count blue">{wishlist.length}</span>
                                            </Link>
                                            <Link to="/wishlist">
                                                <span className="lable">Wishlist</span>
                                            </Link>
                                        </div>
                                        <div className="header-action-icon-2">
                                            <Link className="mini-cart-icon" to="/cart">
                                                <img alt="Nest" src={cartSVG} />
                                                <span className="pro-count blue">{basket.length}</span>
                                            </Link>
                                            <Link to="/cart">
                                                <span className="lable">Cart</span>
                                            </Link>
                                            <div className="cart-dropdown-wrap cart-dropdown-hm2">
                                                <ul>
                                                    {basket.map(item => (
                                                        <li key={item.id}>
                                                            <div className="shopping-cart-img">
                                                                <Link to="/shop">
                                                                    <img alt={item.name} src={item.image} />
                                                                </Link>
                                                            </div>
                                                            <div className="shopping-cart-title">
                                                                <h4>
                                                                    <Link to="/shop">{item.name}</Link>
                                                                </h4>
                                                                <h4><span>{item.count} × </span>${item.price.toFixed(2)}</h4>
                                                            </div>
                                                            <div className="shopping-cart-delete">
                                                                <Link to="#" onClick={() => removeFromBasket(item._id)}>
                                                                    <i className="fa-sharp fa-light fa-xmark"></i>
                                                                </Link>
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                                <div className="shopping-cart-footer">
                                                    <div className="shopping-cart-total">
                                                        <h4>Total <span>${totalAmount}</span></h4>
                                                    </div>

                                                    <div className="shopping-cart-button">
                                                        <Link className="outline" to="/shop-cart">View cart</Link>
                                                        <Link to="/shop-checkout">Checkout</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="header-action-icon-2">
                                            <Link to="/account">
                                                <img className="svgInject" alt="Nest" src={user} />
                                            </Link>
                                            <Link to="/account">
                                                <span className="lable ml-0">Account</span>
                                            </Link>
                                            <div className="cart-dropdown-wrap cart-dropdown-hm2 account-dropdown">
                                                <ul>
                                                    <li>
                                                        <Link to="/account">
                                                            <i className="fa-sharp fa-thin fa-user mr-10"></i>
                                                            My Account
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/account">
                                                            <i className="fa-sharp fa-thin fa-location-dot mr-10"></i>
                                                            Order Tracking
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/account">
                                                            <i className="fa-sharp fa-thin fa-tag mr-10"></i>
                                                            My Voucher
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/wishlist">
                                                            <i className="fa-sharp fa-thin fa-heart mr-10"></i>
                                                            My Wishlist
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/account">
                                                            <i className="fa-sharp fa-thin fa-sliders mr-10"></i>
                                                            Setting
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/login">
                                                            <i className="fa-sharp fa-thin fa-arrow-right-from-bracket mr-10"></i>
                                                            Sign out
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-bottom header-bottom-bg-color sticky-bar">
                    <div className="container">
                        <div className="header-wrap header-space-between position-relative">
                            <div className="logo logo-width-1 d-block d-lg-none">
                                <Link to="/">
                                    <img src={logo} alt="logo" />
                                </Link>
                            </div>
                            <div className="header-nav d-none d-lg-flex">
                                <div className="main-categori-wrap d-none d-lg-block">
                                    <Link className="categories-button-active" to="#">
                                        <i className="fa-sharp fa-thin fa-grid-2" style={{ fontSize: "large", paddingRight: "10px", fontWeight: "500" }}></i>
                                        <span className="et">
                                            Browse
                                        </span>
                                        All Categories
                                        <i className="fa-sharp fa-thin fa-angle-down" style={{ fontSize: "15px" }}></i>
                                    </Link>
                                    <div className="categories-dropdown-wrap categories-dropdown-active-large font-heading">
                                        <div className="d-flex categori-dropdown-inner">
                                            <ul>
                                                <li>
                                                    <Link to="/shop">
                                                        <img src="assets/imgs/theme/icons/category-1.svg" alt="" />
                                                        Milks and Dairies
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/shop">
                                                        <img src="assets/imgs/theme/icons/category-2.svg" alt="" />
                                                        Clothing &amp; beauty
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/shop">
                                                        <img src="assets/imgs/theme/icons/category-3.svg" alt="" />
                                                        Pet Foods &amp; Toy
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/shop">
                                                        <img src="assets/imgs/theme/icons/category-4.svg" alt="" />
                                                        Baking material
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/shop">
                                                        <img src="assets/imgs/theme/icons/category-5.svg" alt="" />
                                                        Fresh Fruit
                                                    </Link>
                                                </li>
                                            </ul>
                                            <ul className="end">
                                                <li>
                                                    <Link to="/shop">
                                                        <img src="assets/imgs/theme/icons/category-6.svg" alt="" />
                                                        Wines &amp; Drinks
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/shop">
                                                        <img src="assets/imgs/theme/icons/category-7.svg" alt="" />
                                                        Fresh Seafood
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/shop">
                                                        <img src="assets/imgs/theme/icons/category-8.svg" alt="" />
                                                        Fast food
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/shop">
                                                        <img src="assets/imgs/theme/icons/category-9.svg" alt="" />
                                                        Vegetables
                                                    </Link>

                                                </li>
                                                <li>
                                                    <Link to="/shop">
                                                        <img src="assets/imgs/theme/icons/category-10.svg" alt="" />
                                                        Bread and Juice
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="more_slide_open" style={{ display: "none" }}>
                                            <div className="d-flex categori-dropdown-inner">
                                                <ul>
                                                    <li>
                                                        <Link to="/shop">
                                                            <img src="assets/imgs/theme/icons/icon-1.svg" alt="" />
                                                            Milks and Dairies
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/shop">
                                                            <img src="assets/imgs/theme/icons/icon-2.svg" alt="" />
                                                            Clothing &amp; beauty
                                                        </Link>
                                                    </li>
                                                </ul>
                                                <ul className="end">
                                                    <li>
                                                        <Link to="/shop">
                                                            <img src="assets/imgs/theme/icons/icon-3.svg" alt="" />
                                                            Wines &amp; Drinks
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/shop">
                                                            <img src="assets/imgs/theme/icons/icon-4.svg" alt="" />
                                                            Fresh Seafood
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="more_categories"><span className="icon"></span> <span className="heading-sm-1">Show more...</span></div>
                                    </div>
                                </div>
                                <div className="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block font-heading">
                                    <nav>
                                        <ul>
                                            <li className="hot-deals">
                                                <img src={hot} alt="hot deals" />
                                                <Link to="/shop">Deals</Link>
                                            </li>
                                            <li>
                                                <Link className="active" to="/">Home</Link>
                                            </li>
                                            <li>
                                                <Link to="/about">About</Link>
                                            </li>
                                            <li>
                                                <Link to="/shop">Shop</Link>
                                            </li>
                                            <li className="position-static">
                                                <Link to="#">
                                                    Mega menu
                                                    <i className="fa-thin fa-angle-down" style={{ fontSize: "15px" }}></i>
                                                </Link>
                                                <ul className="mega-menu">
                                                    <li className="sub-mega-menu sub-mega-menu-width-22">
                                                        <Link className="menu-title" to="#">Fruit &amp; Vegetables</Link>
                                                        <ul>
                                                            <li><Link to="/shop">Meat &amp; Poultry</Link></li>
                                                            <li><Link to="/shop">Fresh Vegetables</Link></li>
                                                            <li><Link to="/shop">Herbs &amp; Seasonings</Link></li>
                                                            <li><Link to="/shop">Cuts &amp; Sprouts</Link></li>
                                                            <li><Link to="/shop">Exotic Fruits &amp; Veggies</Link></li>
                                                            <li><Link to="/shop">Packaged Produce</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li className="sub-mega-menu sub-mega-menu-width-22">
                                                        <Link className="menu-title" to="#">Breakfast &amp; Dairy</Link>
                                                        <ul>
                                                            <li><Link to="/shop">Milk &amp; Flavoured Milk</Link></li>
                                                            <li><Link to="/shop">Butter and Margarine</Link></li>
                                                            <li><Link to="/shop">Eggs Substitutes</Link></li>
                                                            <li><Link to="/shop">Marmalades</Link></li>
                                                            <li><Link to="/shop">Sour Cream</Link></li>
                                                            <li><Link to="/shop">Cheese</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li className="sub-mega-menu sub-mega-menu-width-22">
                                                        <Link className="menu-title" to="#">Meat &amp; Seafood</Link>
                                                        <ul>
                                                            <li><Link to="/shop">Breakfast Sausage</Link></li>
                                                            <li><Link to="/shop">Dinner Sausage</Link></li>
                                                            <li><Link to="/shop">Chicken</Link></li>
                                                            <li><Link to="/shop">Sliced Deli Meat</Link></li>
                                                            <li><Link to="/shop">Wild Caught Fillets</Link></li>
                                                            <li><Link to="/shop">Crab and Shellfish</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li className="sub-mega-menu sub-mega-menu-width-34">
                                                        <div className="menu-banner-wrap">
                                                            <Link to="/shop">
                                                                <img src={bannerMenu} alt="Nest" />
                                                            </Link>
                                                            <div className="menu-banner-content">
                                                                <h4>Hot deals</h4>
                                                                <h3>
                                                                    Don't miss<br />
                                                                    Trending
                                                                </h3>
                                                                <div className="menu-banner-price">
                                                                    <span className="new-price text-success">Save to 50%</span>
                                                                </div>
                                                                <div className="menu-banner-btn">
                                                                    <Link to="/shop">Shop now</Link>
                                                                </div>
                                                            </div>
                                                            <div className="menu-banner-discount">
                                                                <h3>
                                                                    <span>25%</span>
                                                                    off
                                                                </h3>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link to="/blog">Blog</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Pages <i className="fa-thin fa-angle-down" style={{ fontSize: "15px" }}></i></Link>
                                                <ul className="sub-menu">
                                                    <li><Link to="/about">About Us</Link></li>
                                                    <li><Link to="/contact">Contact</Link></li>
                                                    <li><Link to="/account">My Account</Link></li>
                                                    <li><Link to="/login">Login</Link></li>
                                                    <li><Link to="/register">Register</Link></li>
                                                    <li><Link to="/forgot-password">Forgot password</Link></li>
                                                    <li><Link to="/reset-password">Reset password</Link></li>
                                                    <li><Link to="/purchase-guide">Purchase Guide</Link></li>
                                                    <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                                                    <li><Link to="/terms">Terms of Service</Link></li>
                                                    <li><Link to="/404">404 Page</Link></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link to="/contact">Contact</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="hotline d-none d-lg-flex">
                                <img src={headphone} alt="hotline" />
                                <p>1900 - 888<span>24/7 Support Center</span></p>
                            </div>
                            <div className="header-action-icon-2 d-block d-lg-none">
                                <div className="burger-icon burger-icon-white">
                                    <span className="burger-icon-top"></span>
                                    <span className="burger-icon-mid"></span>
                                    <span className="burger-icon-bottom"></span>
                                </div>
                            </div>
                            <div className="header-action-right d-block d-lg-none">
                                <div className="header-action-2">
                                    <div className="header-action-icon-2">
                                        <Link to="/wishlist">
                                            <img alt="Nest" src={heartSVG} />
                                            <span className="pro-count white">{wishlist.length}</span>
                                        </Link>
                                    </div>
                                    <div className="header-action-icon-2">
                                        <Link className="mini-cart-icon" to="#">
                                            <img alt="Nest" src={cartSVG} />
                                            <span className="pro-count white">{basket.length}</span>
                                        </Link>
                                        <div className="cart-dropdown-wrap cart-dropdown-hm2">
                                            <ul>
                                                {basket.map(item => (
                                                    <li key={item.id}>
                                                        <div className="shopping-cart-img">
                                                            <Link to="/shop">
                                                                <img alt={item.name} src={item.image} />
                                                            </Link>
                                                        </div>
                                                        <div className="shopping-cart-title">
                                                            <h4>
                                                                <Link to="/shop">{item.name}</Link>
                                                            </h4>
                                                            <h4><span>{item.count} × </span>${item.price.toFixed(2)}</h4>
                                                        </div>
                                                        <div className="shopping-cart-delete">
                                                            <Link to="#" onClick={() => removeFromBasket(item._id)}>
                                                                <i className="fa-sharp fa-light fa-xmark"></i>
                                                            </Link>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="shopping-cart-footer">
                                                <div className="shopping-cart-total">
                                                    <h4>Total <span>${totalAmount}</span></h4>
                                                </div>

                                                <div className="shopping-cart-button">
                                                    <Link className="outline" to="/shop">View cart</Link>
                                                    <Link to="/shop">Checkout</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="mobile-header-active mobile-header-wrapper-style">
                <div className="mobile-header-wrapper-inner">
                    <div className="mobile-header-top">
                        <div className="mobile-header-logo">
                            <Link to="/"><img src={logo} alt="logo" /></Link>
                        </div>
                        <div className="mobile-menu-close close-style-wrap close-style-position-inherit">
                            <button className="close-style search-close">
                                <i className="icon-top"></i>
                                <i className="icon-bottom"></i>
                            </button>
                        </div>
                    </div>
                    <div className="mobile-header-content-area">
                        <div className="mobile-search search-style-3 mobile-header-border">
                            <form action="#">
                                <input type="text" placeholder="Search for items…" />
                                <button type="submit"><i className="fi-rs-search"></i></button>
                            </form>
                        </div>
                        <div className="mobile-menu-wrap mobile-header-border">
                            {/* <!-- mobile menu start --> */}
                            <nav>
                                <ul className="mobile-menu font-heading">
                                    <li className="menu-item-has-children"><span className="menu-expand"><i className="fi-rs-angle-small-down"></i></span>
                                        <Link to="/">Home</Link>
                                        <ul className="dropdown" style={{ display: "none" }}>
                                            <li><Link to="/">Home 1</Link></li>
                                            <li><Link to="/index-2">Home 2</Link></li>
                                            <li><Link to="/index-3">Home 3</Link></li>
                                            <li><Link to="/index-4">Home 4</Link></li>
                                            <li><Link to="/index-5">Home 5</Link></li>
                                            <li><Link to="/index-6">Home 6</Link></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children"><span className="menu-expand"><i className="fi-rs-angle-small-down"></i></span>
                                        <Link to="/shop">Shop</Link>
                                        <ul className="dropdown" style={{ display: "none" }}>
                                            <li><Link to="/shop">Shop Grid – Right Sidebar</Link></li>
                                            <li><Link to="/shop">Shop Grid – Left Sidebar</Link></li>
                                            <li><Link to="/shop">Shop List – Right Sidebar</Link></li>
                                            <li><Link to="/shop">Shop List – Left Sidebar</Link></li>
                                            <li><Link to="/shop">Shop - Wide</Link></li>
                                            <li className="menu-item-has-children"><span className="menu-expand"><i className="fi-rs-angle-small-down"></i></span>
                                                <Link to="#">Single Product</Link>
                                                <ul className="dropdown" style={{ display: "none" }}>
                                                    <li><Link to="/shop">Product – Right Sidebar</Link></li>
                                                    <li><Link to="/shop">Product – Left Sidebar</Link></li>
                                                    <li><Link to="/shop">Product – No Sidebar</Link></li>
                                                    <li><Link to="/shop">Product – Vendor Info</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link to="/shop">Shop – Filter</Link></li>
                                            <li><Link to="/shop">Shop – Wishlist</Link></li>
                                            <li><Link to="/shop">Shop – Cart</Link></li>
                                            <li><Link to="/shop">Shop – Checkout</Link></li>
                                            <li><Link to="/shop">Shop – Compare</Link></li>
                                            <li className="menu-item-has-children"><span className="menu-expand"><i className="fi-rs-angle-small-down"></i></span>
                                                <Link to="#">Shop Invoice</Link>
                                                <ul className="dropdown" style={{ display: "none" }}>
                                                    <li><Link to="/shop-invoice-1">Shop Invoice 1</Link></li>
                                                    <li><Link to="/shop-invoice-2">Shop Invoice 2</Link></li>
                                                    <li><Link to="/shop-invoice-3">Shop Invoice 3</Link></li>
                                                    <li><Link to="/shop-invoice-4">Shop Invoice 4</Link></li>
                                                    <li><Link to="/shop-invoice-5">Shop Invoice 5</Link></li>
                                                    <li><Link to="/shop-invoice-6">Shop Invoice 6</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children"><span className="menu-expand"><i className="fi-rs-angle-small-down"></i></span>
                                        <Link to="#">Mega menu</Link>
                                        <ul className="dropdown" style={{ display: "none" }}>
                                            <li className="menu-item-has-children"><span className="menu-expand"><i className="fi-rs-angle-small-down"></i></span>
                                                <Link to="#">Women's Fashion</Link>
                                                <ul className="dropdown" style={{ display: "none" }}>
                                                    <li><Link to="/shop">Dresses</Link></li>
                                                    <li><Link to="/shop">Blouses & Shirts</Link></li>
                                                    <li><Link to="/shop">Hoodies & Sweatshirts</Link></li>
                                                    <li><Link to="/shop">Women's Sets</Link></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children"><span className="menu-expand"><i className="fi-rs-angle-small-down"></i></span>
                                                <Link to="#">Men's Fashion</Link>
                                                <ul className="dropdown" style={{ display: "none" }}>
                                                    <li><Link to="/shop">Jackets</Link></li>
                                                    <li><Link to="/shop">Casual Faux Leather</Link></li>
                                                    <li><Link to="/shop">Genuine Leather</Link></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children"><span className="menu-expand"><i className="fi-rs-angle-small-down"></i></span>
                                                <Link to="#">Technology</Link>
                                                <ul className="dropdown" style={{ display: "none" }}>
                                                    <li><Link to="/shop">Gaming Laptops</Link></li>
                                                    <li><Link to="/shop">Ultraslim Laptops</Link></li>
                                                    <li><Link to="/shop">Tablets</Link></li>
                                                    <li><Link to="/shop">Laptop Accessories</Link></li>
                                                    <li><Link to="/shop">Tablet Accessories</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children"><span className="menu-expand"><i className="fi-rs-angle-small-down"></i></span>
                                        <Link to="/blog-category-fullwidth">Blog</Link>
                                        <ul className="dropdown" style={{ display: "none" }}>
                                            <li><Link to="/blog-category-grid">Blog Category Grid</Link></li>
                                            <li><Link to="/blog-category-list">Blog Category List</Link></li>
                                            <li><Link to="/blog-category-big">Blog Category Big</Link></li>
                                            <li><Link to="/blog-category-fullwidth">Blog Category Wide</Link></li>
                                            <li className="menu-item-has-children"><span className="menu-expand"><i className="fi-rs-angle-small-down"></i></span>
                                                <Link to="#">Single Product Layout</Link>
                                                <ul className="dropdown" style={{ display: "none" }}>
                                                    <li><Link to="/blog-post-left">Left Sidebar</Link></li>
                                                    <li><Link to="/blog-post-right">Right Sidebar</Link></li>
                                                    <li><Link to="/blog-post-fullwidth">No Sidebar</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children"><span className="menu-expand"><i className="fi-rs-angle-small-down"></i></span>
                                        <Link to="#">Pages</Link>
                                        <ul className="dropdown" style={{ display: "none" }}>
                                            <li><Link to="/page-about">About Us</Link></li>
                                            <li><Link to="/page-contact">Contact</Link></li>
                                            <li><Link to="/page-account">My Account</Link></li>
                                            <li><Link to="/page-login">Login</Link></li>
                                            <li><Link to="/page-register">Register</Link></li>
                                            <li><Link to="/page-forgot-password">Forgot password</Link></li>
                                            <li><Link to="/page-reset-password">Reset password</Link></li>
                                            <li><Link to="/page-purchase-guide">Purchase Guide</Link></li>
                                            <li><Link to="/page-privacy-policy">Privacy Policy</Link></li>
                                            <li><Link to="/page-terms">Terms of Service</Link></li>
                                            <li><Link to="/page-404">404 Page</Link></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children"><span className="menu-expand"><i className="fi-rs-angle-small-down"></i></span>
                                        <Link to="#">Language</Link>
                                        <ul className="dropdown" style={{ display: "none" }}>
                                            <li><Link to="#">English</Link></li>
                                            <li><Link to="#">French</Link></li>
                                            <li><Link to="#">German</Link></li>
                                            <li><Link to="#">Spanish</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                            {/* <!-- mobile menu end --> */}
                        </div>
                        <div className="mobile-header-info-wrap">
                            <div className="single-mobile-header-info">
                                <Link to="/page-contact"><i className="fi-rs-marker"></i> Our location </Link>
                            </div>
                            <div className="single-mobile-header-info">
                                <Link to="/page-login"><i className="fi-rs-user"></i>Log In / Sign Up </Link>
                            </div>
                            <div className="single-mobile-header-info">
                                <Link to="#"><i className="fi-rs-headphones"></i>(+01) - 2345 - 6789 </Link>
                            </div>
                        </div>
                        <div className="mobile-social-icon mb-50">
                            <h6 className="mb-15">Follow Us</h6>
                            <Link to="#"><img src="assets/imgs/theme/icons/icon-facebook-white.svg" alt="" /></Link>
                            <Link to="#"><img src="assets/imgs/theme/icons/icon-twitter-white.svg" alt="" /></Link>
                            <Link to="#"><img src="assets/imgs/theme/icons/icon-instagram-white.svg" alt="" /></Link>
                            <Link to="#"><img src="assets/imgs/theme/icons/icon-pinterest-white.svg" alt="" /></Link>
                            <Link to="#"><img src="assets/imgs/theme/icons/icon-youtube-white.svg" alt="" /></Link>
                        </div>
                        <div className="site-copyright">Copyright 2024 © Nest. All rights reserved. Powered by AliThemes.</div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Header