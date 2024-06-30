import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import category1 from "../../../assets/images/theme/icons/category-1.svg"
import MainContext from '../../../context/context'

const Blog = () => {
  const {blog} = useContext(MainContext)

  return (
    <main className="main" style={{ transform: "none" }}>
      <div className="page-header mt-30 mb-75">
        <div className="container">
          <div className="archive-header">
            <div className="row align-items-center">
              <div className="col-xl-3">
                <h1 className="mb-15">Blog &amp; News</h1>
                <div className="breadcrumb">
                  <Link to="/" rel="nofollow">
                    <i className="fa-light fa-house mr-5"></i>
                    Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-content mb-50" style={{ transform: "none" }}>
        <div className="container" style={{ transform: "none" }}>
          <div className="row" style={{ transform: "none" }}>
            <div className="col-lg-12">
              <div className="shop-product-fillter mb-50 pr-30">
                <div className="totall-product">
                  <h2>
                    <img
                      className="w-36px mr-30"
                      src={category1}
                      alt=""
                    />
                    Recips Articles
                  </h2>
                </div>
              </div>
              <div className="loop-grid pr-30">
                <div className="row">
                  {blog.map((item) => (
                      <article className="col-xl-3 col-lg-6 col-md-6 text-center hover-up mb-30 animated">
                    <div className="post-thumb">
                      <Link to={`/blog/${item._id}`}>
                        <img
                          className="border-radius-15"
                          src={item.image}
                          alt=""
                          style={{ height: "200px"}}
                        />
                      </Link>
                    </div>
                    <div className="entry-content-2">
                      <h6 className="mb-10 font-sm">
                        <Link
                          className="entry-meta text-muted"
                          to={`/blog/${item._id}`}
                        >
                          {item.author}
                        </Link>
                      </h6>
                      <h4 className="post-title mb-15">
                        <Link to={`/blog/${item._id}`}>
                          {item.title}
                        </Link>
                      </h4>
                      <div className="entry-meta font-xs color-grey mt-10 pb-10">
                        <div>
                          <span className="post-on mr-10">{item.createdAt}</span>
                          <span className="hit-count has-dot mr-10">
                            126k Views
                          </span>
                          <span className="hit-count has-dot">4 mins read</span>
                        </div>
                      </div>
                    </div>
                  </article>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Blog