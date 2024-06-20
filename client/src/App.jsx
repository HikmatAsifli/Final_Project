import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ROUTES from "./routes/routes";
import MainContext from "./context/context";
import { HelmetProvider } from "react-helmet-async";

import "bootstrap/dist/css/bootstrap.min.css"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./assets/style/App.css"

const App = () => {
  const [data, setData] = useState([])
  const router = createBrowserRouter(ROUTES);
  const contextData = {
    data,
    setData
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