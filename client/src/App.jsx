import { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ROUTES from "./routes/routes";
import MainContext from "./context/context";
import { HelmetProvider } from "react-helmet-async";

import "bootstrap/dist/css/bootstrap.min.css"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./assets/style/App.css"
import axios from "axios";

const App = () => {
  const [products, setProducts] = useState([])
  const router = createBrowserRouter(ROUTES);

  useEffect(() => {
    axios.get("http://localhost:4404/api/products/")
      .then((res) => {
        setProducts([...res.data])
      });
  }, []);

  const contextData = {
    products,
    setProducts
  };
  return (
    <>
      <MainContext.Provider value={contextData}>
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
      </MainContext.Provider>
    </>
  )
}

export default App