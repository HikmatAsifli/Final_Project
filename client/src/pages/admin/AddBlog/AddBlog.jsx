import React, { useContext } from "react";
import { Formik } from "formik";
import { Helmet } from "react-helmet-async";
import MainContext from "../../../context/context";
import axios from "axios";

const AddBlog = () => {
  const { blog, setBlog } = useContext(MainContext);

  return (
    <div>
      <Helmet>
        <title>Add</title>
      </Helmet>
      <Formik
        initialValues={{ image: "", title: "", author: "", content: ""}}
        onSubmit={(values, { resetForm }) => {
          axios
            .post("http://localhost:4404/api/blogs/", {
              title: values.title,
              content: values.content,
              image: values.image,
              author: values.author
            })
            .then((res) => {
              setBlog([...data, res.data]);
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
            <h1>Add Blog</h1>
            <label htmlFor="title" className="form-label">
              Product Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="Enter title"
              className="form-control"
              id="title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            />
            {errors.title && touched.title && <div className="text-danger">{errors.title}</div>}

            <label htmlFor="description" className="form-label">
              Product Content
            </label>
            <input
              type="text"
              name="content"
              placeholder="Enter Content"
              className="form-control"
              id="description"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.content}
            />
            {errors.content && touched.content && <div className="text-danger">{errors.content}</div>}

            <label htmlFor="image" className="form-label">
              Product Image
            </label>
            <input
              type="text"
              name="image"
              placeholder="Enter image url"
              className="form-control"
              id="image"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.image}
            />
            {errors.image && touched.image && <div className="text-danger">{errors.image}</div>}

            <label htmlFor="price" className="form-label">
              Product Author
            </label>
            <input
              type="text"
              name="author"
              id="author"
              placeholder="Enter Author"
              className="form-control"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.author}
            />
            {errors.author && touched.author && <div className="text-danger">{errors.author}</div>}

            <button className="btn btn-success mt-3" type="submit">
              ADD
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default AddBlog