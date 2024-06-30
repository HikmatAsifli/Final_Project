import React, { useContext, useEffect } from 'react';
import MainContext from '../../../context/context';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom'; // Assuming you use React Router for navigation

const Products = () => {
    const { products, setProducts } = useContext(MainContext);

    // Function to delete a product
    function deleteItem(id) {
        axios.delete(`http://localhost:4404/api/products/${id}`)
            .then(() => {
                setProducts(products.filter(item => item._id !== id));
            })
            .catch(error => {
                console.error('Error deleting product:', error);
                // Handle error state or notification
            });
    }


    function editItem(id) {
        axios.put(`http://localhost:4404/api/products/${id}`)
            .then((res) => {
                const updatedProduct = res.data;
                setProducts(products.map(item => (item._id === id ? updatedProduct : item)));
            })
            .catch(error => {
                console.error('Error updating product:', error);
                // Handle error state or notification
            });
    }


    return (
        <div className="container mt-5">
            <Helmet>
                <title>Products</title>
            </Helmet>
            <table className="table table-hover table-light table-striped-columns">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Category</th>
                        <th scope="col">Description</th>
                        <th scope="col">Price</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((item, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>
                                <img src={item.image} alt="" width="100px" height="100px" />
                            </td>
                            <td>{item.name}</td>
                            <td>{item.category}</td>
                            <td>{item.description}</td>
                            <td>{item.price}$</td>
                            <td>
                                <button
                                    onClick={() => {
                                        deleteItem(item._id);
                                    }}
                                    className="btn btn-danger mr-5"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Products;
