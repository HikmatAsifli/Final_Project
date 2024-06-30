import React, { useContext, useEffect } from 'react';
import MainContext from '../../../context/context';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';

const Blogs = () => {
    const { blog, setBlog } = useContext(MainContext);

    function deleteItem(id) {
        axios.delete(`http://localhost:4404/api/blogs/${id}`)
            .then(() => {
                setBlog(blog.filter(item => item._id !== id));
            })
            .catch(error => {
                console.error('Error deleting blog:', error);
            });
    }

    function editItem(id) {
        axios.put(`http://localhost:4404/api/blogs/${id}`)
            .then((res) => {
                const updatedBlog = res.data;
                setBlog(blog.map(item => (item._id === id ? updatedBlog : item)));
            })
            .catch(error => {
                console.error('Error updating blog:', error);
            });
    }


    return (
        <div className="container mt-5">
            <Helmet>
                <title>Blogs</title>
            </Helmet>
            <table className="table table-hover table-light table-striped-columns">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Image</th>
                        <th scope="col">Title</th>
                        <th scope="col">Content</th>
                        <th scope="col">author</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {blog.map((item, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>
                                <img src={item.image} alt="" width="100px" height="100px" />
                            </td>
                            <td>{item.title}</td>
                            <td>{item.content}</td>
                            <td>{item.author}</td>
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

export default Blogs