import React, { useContext } from "react";
import { Formik } from "formik";
import { Helmet } from "react-helmet-async";
import MainContext from "../../../context/context";
import axios from "axios";


const AddProduct = () => {
    const { products, setProducts } = useContext(MainContext);

    return (
        <div>
            <Helmet>
                <title>Add</title>
            </Helmet>
            <Formik
                initialValues={{
                    name: "",
                    category: "",
                    description: "",
                    price: "",
                    discount: "",
                    image: "",
                    hoverImage: "",
                    rating: "",
                    popularProduct: false,
                    dailyBestSells: false,
                    dealsOfTheDay: false,
                    dealsOfTheDayStartTime: null,
                    dealsOfTheDayEndTime: null,
                    topSelling: false,
                    trendingProduct: false,
                    recentlyAdded: false,
                    topRated: false
                }}
                onSubmit={(values, { resetForm }) => {
                    console.log(values)
                    axios
                        .post("http://localhost:4404/api/products/", {
                            name: values.name,
                            category: values.category,
                            price: values.price,
                            discount: values.discount,
                            image: values.image,
                            hoverImage: values.hoverImage,
                            rating: values.rating,
                            popularProduct: values.popularProduct,
                            dailyBestSells: values.dailyBestSells,
                            dealsOfTheDay: values.dealsOfTheDay,
                            dealsOfTheDayStartTime: values.dealsOfTheDayStartTime,
                            dealsOfTheDayEndTime: values.dealsOfTheDayEndTime,
                            topSelling: values.topSelling,
                            trendingProduct: values.trendingProduct,
                            recentlyAdded: values.recentlyAdded,
                            topRated: values.topRated,
                        })
                        .then((res) => {
                            setProducts([...data, res.data]);
                            resetForm();
                        })
                        .catch((error) => {
                            console.error("There was an error adding the product!", error);
                        });
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                }) => (
                    <form
                        className="container text-light p-5 gap-3 d-flex flex-column w-50 mt-50 rounded-3 mb-5 bg-grey-4"
                        onSubmit={handleSubmit}
                    >
                        <h1>Add Product</h1>
                        <label htmlFor="name" className="form-label">
                            Product Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter Name"
                            className="form-control"
                            id="title"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                        />
                        {errors.name && touched.name && <div className="text-danger">{errors.name}</div>}

                        <label htmlFor="category" className="form-label">
                            Product Category
                        </label>
                        <input
                            type="text"
                            name="category"
                            placeholder="Enter Category"
                            className="form-control"
                            id="description"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.category}
                        />
                        {errors.category && touched.category && <div className="text-danger">{errors.category}</div>}

                        <label htmlFor="description" className="form-label">
                            Product Description
                        </label>
                        <input
                            type="text"
                            name="description"
                            placeholder="Enter Description"
                            className="form-control"
                            id="description"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.description}
                        />
                        {errors.description && touched.description && <div className="text-danger">{errors.description}</div>}

                        <label htmlFor="price" className="form-label">
                            Product Price
                        </label>
                        <input
                            type="number"
                            name="price"
                            id="price"
                            placeholder="Enter Price"
                            className="form-control"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.price}
                        />
                        {errors.price && touched.price && <div className="text-danger">{errors.price}</div>}

                        <label htmlFor="discount" className="form-label">
                            Product Discount
                        </label>
                        <input
                            type="number"
                            name="discount"
                            id="discount"
                            placeholder="Enter Discount"
                            className="form-control"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.discount}
                        />
                        {errors.discount && touched.discount && <div className="text-danger">{errors.discount}</div>}

                        <label htmlFor="image" className="form-label">
                            Product Image
                        </label>
                        <input
                            type="text"
                            name="image"
                            id="image"
                            placeholder="Enter Image URL"
                            className="form-control"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.image}
                        />
                        {errors.image && touched.image && <div className="text-danger">{errors.image}</div>}

                        <label htmlFor="hoverImage" className="form-label">
                            Product hoverImage
                        </label>
                        <input
                            type="text"
                            name="hoverImage"
                            id="hoverImage"
                            placeholder="Enter Hover Image URL"
                            className="form-control"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.hoverImage}
                        />
                        {errors.hoverImage && touched.hoverImage && <div className="text-danger">{errors.hoverImage}</div>}

                        <label htmlFor="rating" className="form-label">
                            Product Rating
                        </label>
                        <input
                            type="number"
                            name="rating"
                            id="rating"
                            placeholder="Enter Rating"
                            className="form-control"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.rating}
                        />
                        {errors.rating && touched.rating && <div className="text-danger">{errors.rating}</div>}

                        <label htmlFor="popularProduct" className="form-label">
                            Popular Product
                        </label>

                        <select
                            name="popularProduct"
                            id="popularProduct"
                            className="form-control"
                            onChange={(e) => {
                                const value = e.target.value === "true"; // Convert string to boolean
                                handleChange({
                                    target: {
                                        name: "popularProduct",
                                        value: value,
                                    },
                                });
                            }}
                            onBlur={handleBlur}
                            value={values.popularProduct}
                        >
                            <option value="false">False</option>
                            <option value="true">True</option>
                        </select>
                        {errors.popularProduct && touched.popularProduct && <div className="text-danger">{errors.popularProduct}</div>}

                        <label htmlFor="dailyBestSells" className="form-label">
                            Daily Best Sells
                        </label>

                        <select
                            name="dailyBestSells"
                            id="dailyBestSells"
                            className="form-control"
                            onChange={(e) => {
                                const value = e.target.value === "true"; // Convert string to boolean
                                handleChange({
                                    target: {
                                        name: "dailyBestSells",
                                        value: value,
                                    },
                                });
                            }}
                            onBlur={handleBlur}
                            value={values.dailyBestSells}
                        >
                            <option value="false">False</option>
                            <option value="true">True</option>
                        </select>
                        {errors.dailyBestSells && touched.dailyBestSells && <div className="text-danger">{errors.dailyBestSells}</div>}

                        <label htmlFor="dealsOfTheDay" className="form-label">
                            Deals Of Day
                        </label>

                        <select
                            name="dealsOfTheDay"
                            id="dealsOfTheDay"
                            className="form-control"
                            onChange={(e) => {
                                const value = e.target.value === "true"; // Convert string to boolean
                                handleChange({
                                    target: {
                                        name: "dealsOfTheDay",
                                        value: value,
                                    },
                                });
                            }}
                            onBlur={handleBlur}
                            value={values.dealsOfTheDay}
                        >
                            <option value="false">False</option>
                            <option value="true">True</option>
                        </select>
                        {errors.dealsOfTheDay && touched.dealsOfTheDay && <div className="text-danger">{errors.dealsOfTheDay}</div>}

                        <label htmlFor="dealsOfTheDayStartTime" className="form-label">
                            Deals Of Day Start Time
                        </label>

                        <input
                            type="date"
                            name="dealsOfTheDayStartTime"
                            id="dealsOfTheDayStartTime"
                            placeholder="Enter Deals Of Day Start Time"
                            className="form-control"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.dealsOfTheDayStartTime}
                        />

                        {errors.dealsOfTheDayStartTime && touched.dealsOfTheDayStartTime && <div className="text-danger">{errors.dealsOfTheDayStartTime}</div>}

                        <label htmlFor="dealsOfTheDayEndTime" className="form-label">
                            Deals Of Day End Time
                        </label>

                        <input
                            type="date"
                            name="dealsOfTheDayEndTime"
                            id="dealsOfTheDayEndTime"
                            placeholder="Enter Deals Of Day End Time"
                            className="form-control"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.dealsOfTheDayEndTime}
                        />

                        {errors.dealsOfTheDayEndTime && touched.dealsOfTheDayEndTime && <div className="text-danger">{errors.dealsOfTheDayEndTime}</div>}

                        <label htmlFor="topSelling" className="form-label">
                            Top Selling
                        </label>

                        <select
                            name="topSelling"
                            id="topSelling"
                            className="form-control"
                            onChange={(e) => {
                                const value = e.target.value === "true"; // Convert string to boolean
                                handleChange({
                                    target: {
                                        name: "topSelling",
                                        value: value,
                                    },
                                });
                            }}
                            onBlur={handleBlur}
                            value={values.topSelling}
                        >
                            <option value="false">False</option>
                            <option value="true">True</option>
                        </select>
                        {errors.topSelling && touched.topSelling && <div className="text-danger">{errors.topSelling}</div>}

                        <label htmlFor="trendingProduct" className="form-label">
                            Trending Product
                        </label>

                        <select
                            name="trendingProduct"
                            id="trendingProduct"
                            className="form-control"
                            onChange={(e) => {
                                const value = e.target.value === "true"; // Convert string to boolean
                                handleChange({
                                    target: {
                                        name: "trendingProduct",
                                        value: value,
                                    },
                                });
                            }}
                            onBlur={handleBlur}
                            value={values.trendingProduct}
                        >
                            <option value="false">False</option>
                            <option value="true">True</option>
                        </select>
                        {errors.trendingProduct && touched.trendingProduct && <div className="text-danger">{errors.trendingProduct}</div>}

                        <label htmlFor="recentlyAdded" className="form-label">
                            Recently Added
                        </label>

                        <select
                            name="recentlyAdded"
                            id="recentlyAdded"
                            className="form-control"
                            onChange={(e) => {
                                const value = e.target.value === "true"; // Convert string to boolean
                                handleChange({
                                    target: {
                                        name: "recentlyAdded",
                                        value: value,
                                    },
                                });
                            }}
                            onBlur={handleBlur}
                            value={values.recentlyAdded}
                        >
                            <option value="false">False</option>
                            <option value="true">True</option>
                        </select>
                        {errors.recentlyAdded && touched.recentlyAdded && <div className="text-danger">{errors.recentlyAdded}</div>}

                        <label htmlFor="topRated" className="form-label">
                            Top Rated
                        </label>

                        <select
                            name="topRated"
                            id="topRated"
                            className="form-control"
                            onChange={(e) => {
                                const value = e.target.value === "true"; // Convert string to boolean
                                handleChange({
                                    target: {
                                        name: "topRated",
                                        value: value,
                                    },
                                });
                            }}
                            onBlur={handleBlur}
                            value={values.topRated}
                        >
                            <option value="false">False</option>
                            <option value="true">True</option>
                        </select>
                        {errors.topRated && touched.topRated && <div className="text-danger">{errors.topRated}</div>}

                        <button className="btn btn-success mt-3" type="submit">
                            ADD
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    );
};

export default AddProduct