import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import MainContext from '../../../context/context'
import { Link } from 'react-router-dom'

const Detail = () => {
  const {
    addToBasket,
    toggleWishlist,
    isProductInWishlist,
    addToCompare,
    isProductInCompare,
  } = useContext(MainContext)


  const { id } = useParams()

  const [itemData, setItemData] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:4404/api/products/${id}`)
      .then((res) => {
        setItemData(res.data);
      })
  }, []);

  return (
    <main className="main" style={{ transform: "none" }}>
      <div className="page-header breadcrumb-wrap">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/" rel="nofollow">
              <i className="fi-rs-home mr-5" />
              Home
            </Link>
          </div>
        </div>
      </div>
      <div className="container mb-30" style={{ transform: "none" }}>
        <div className="row" style={{ transform: "none" }}>
          <div className="col-xl-11 col-lg-12 m-auto" style={{ transform: "none" }}>
            <div className="row" style={{ transform: "none" }}>
              <div className="col-xl-12">
                <div className="product-detail accordion-detail">
                  <div className="row mb-50 mt-30">
                    <div className="col-md-6 col-sm-12 col-xs-12 mb-md-0 mb-sm-5">
                      <div className="detail-gallery">
                        <img src={itemData.image} alt="" />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-xs-12">
                      <div className="detail-info pr-30 pl-30">
                        <h2 className="title-detail">
                          {itemData.name}
                        </h2>
                        <div className="product-detail-rating">
                          <div className="product-rate-cover text-end">
                            <div className="product-rate d-inline-block">
                              <div
                                className="product-rating"
                                style={{ width: "90%" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="clearfix product-price-cover">
                          <div className="product-price primary-color float-left">
                            <span className="current-price text-brand">
                              {itemData.discount > 0 ? (
                                <>
                                  <span className='new-price'>
                                    {`$${(itemData.price - (itemData.price * (itemData.discount / 100))).toFixed(2)}`}
                                  </span>
                                </>
                              ) : (
                                <span>{`$${itemData.price}`}</span>
                              )}
                            </span>
                            <span>
                              <span className="save-price font-md color3 ml-15">
                                {itemData.discount} %
                              </span>
                              <span className="old-price font-md ml-15">${itemData.price}</span>
                            </span>
                          </div>
                        </div>
                        <div className="short-desc mb-30">
                          <p className="font-lg">
                            {itemData.description}
                          </p>
                        </div>
                        <div className="detail-extralink mb-50">
                          <div className="product-extra-link2">
                            <button
                              type="submit"
                              className="button button-add-to-cart"
                              onClick={() => { addToBasket(itemData._id) }}
                            >
                              <i className="fa-sharp fa-light fa-shopping-cart"></i>
                              Add to cart
                            </button>
                            <Link
                              aria-label="Add To Wishlist"
                              className={`action-btn ${isProductInWishlist(itemData._id) ? 'active' : ''} hover-up`}
                              to="#"
                              onClick={() => toggleWishlist(itemData._id)}
                            >
                              <i className="fa-sharp fa-light fa-heart"></i>
                            </Link>
                            <Link
                              aria-label="Compare"
                              className={`action-btn ${isProductInCompare(itemData._id) ? 'active' : ''} hover-up `}
                              to="#"
                              onClick={() => addToCompare(itemData._id)}
                            >
                              <i className="fa-sharp fa-light fa-shuffle"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Detail