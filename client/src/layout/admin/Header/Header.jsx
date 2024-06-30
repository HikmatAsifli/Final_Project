import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container px-4 px-lg-5">
        <Link className="navbar-brand" to="/admin">ADMIN PAGE</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                <li className="nav-item"><Link className="nav-link" to="/admin">Dashboard</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/admin/products">Products</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/admin/orders">Orders</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/admin/blogs">Blogs</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/admin/add-product">Add Product</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/admin/add-blog">Add Blog</Link></li>
            </ul>
        </div>
    </div>
    </nav>
  )
}

export default Header