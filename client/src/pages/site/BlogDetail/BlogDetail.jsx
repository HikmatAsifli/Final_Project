import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import MainContext from '../../../context/context'
import axios from 'axios'

const BlogDetail = () => {
    const { id } = useParams()
    const [itemData, setItemData] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:4404/api/blogs/${id}`)
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
                            <i className="fa-light fa-house mr-5"></i>
                            Home
                        </Link>
                    </div>
                </div>
            </div>
            <div className="page-content mb-50" style={{ transform: "none" }}>
                <div className="container" style={{ transform: "none" }}>
                    <div className="row" style={{ transform: "none" }}>
                        <div
                            className="col-xl-11 col-lg-12 m-auto"
                            style={{ transform: "none" }}
                        >
                            <div className="row" style={{ transform: "none" }}>
                                <div className="col-lg-12">
                                    <div className="single-page pt-50 pr-30">
                                        <div className="single-header style-2">
                                            <div className="row">
                                                <div className="col-xl-12 col-lg-12 m-auto">
                                                    <h6 className="mb-10">
                                                        <Link to="#">Recipes</Link>
                                                    </h6>
                                                    <h2 className="mb-10">
                                                        {itemData.title}
                                                    </h2>
                                                    <div className="single-header-meta">
                                                        <div className="entry-meta meta-1 font-xs mt-15 mb-15">
                                                            <Link className="author-avatar" to="#">
                                                                <img
                                                                    className="img-circle"
                                                                    src={itemData.image}
                                                                    alt=""
                                                                />
                                                            </Link>
                                                            <span className="post-by">
                                                                By <Link to="#">{itemData.author}</Link>
                                                            </span>
                                                            <span className="post-on has-dot">{itemData.createdAt}</span>
                                                            <span className="time-reading has-dot">
                                                                8 mins read
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <figure className="single-thumbnail my-5">
                                                <img src={itemData.image} alt="" />
                                            </figure>
                                            <div className="single-content">
                                                <div className="row">
                                                    <div className="col-xl-12 col-lg-12 m-auto">
                                                        <p>
                                                            {itemData.content}
                                                        </p>
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

export default BlogDetail