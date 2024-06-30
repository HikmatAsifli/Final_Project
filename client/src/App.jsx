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

  const [blog, setBlog] = useState([])

  const router = createBrowserRouter(ROUTES);

  const [wishlist, setWishlist] = useState([]);

  const [basket, setBasket] = useState(
    localStorage.getItem("basket")
      ? JSON.parse(localStorage.getItem("basket"))
      : []
  );

  const [compare, setCompare] = useState(
    localStorage.getItem("compare")
      ? JSON.parse(localStorage.getItem("compare"))
      : []
  );

  const [inpVal, setInpVal] = useState("");


  useEffect(() => {
    axios.get("http://localhost:4404/api/products/")
      .then((res) => {
        setProducts([...res.data])
      });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:4404/api/blogs/")
      .then((res) => {
        setBlog([...res.data])
      });
  }, []);




  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  const addToBasket = (id) => {
    let basketItem = basket.find((x) => x._id == id);

    if (!basketItem) {
      let target = products.find((x) => x._id == id);

      let newItem = {
        ...target,
        count: 1,
        totalPrice: target.price,
      };
      setBasket([...basket, newItem]);
    } else {
      basketItem.count += 1;
      basketItem.totalPrice += basketItem.price;
      setBasket([...basket]);
    }
  };
  const removeFromBasket = (id) => {
    let target = basket.find((x) => x._id == id);
    if (target.count > 1) {
      target.count -= 1;
      target.totalPrice -= target.price;
      setBasket([...basket]);
    } else {
      setBasket([...basket.filter((x) => x._id != id)]);
    }
  }

  const totalAmount = basket.reduce((acc, item) => acc + item.totalPrice, 0);



  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist'));
    if (storedWishlist) {
      setWishlist(storedWishlist);
    }
  }, []);

  useEffect(() => {
    if (wishlist.length > 0) {
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }
  }, [wishlist]);

  const toggleWishlist = (productId) => {
    let updatedWishlist;
    if (wishlist.includes(productId)) {
      updatedWishlist = wishlist.filter(id => id !== productId);
    } else {
      updatedWishlist = [...wishlist, productId];
    }
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  const isProductInWishlist = (productId) => {
    return wishlist.includes(productId);
  };

  const removeFromWishlist = (productId) => {
    const updatedWishlist = wishlist.filter(id => id !== productId);
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };



  useEffect(() => {
    localStorage.setItem("compare", JSON.stringify(compare));
  }, [compare]);

  const addToCompare = (productId) => {
    if (compare.length < 3 && !compare.includes(productId)) {
      setCompare([...compare, productId]);
    } else if (compare.includes(productId)) {
      removeFromCompare(productId);
    }
  };

  const removeFromCompare = (productId) => {
    const updatedCompare = compare.filter(id => id !== productId);
    setCompare(updatedCompare);
  };

  const isProductInCompare = (productId) => {
    return compare.includes(productId);
  };

  const contextData = {
    products,
    setProducts,
    blog,
    setBlog,
    basket,
    setBasket,
    addToBasket,
    removeFromBasket,
    totalAmount,
    wishlist,
    setWishlist,
    toggleWishlist,
    isProductInWishlist,
    removeFromWishlist,
    compare,
    setCompare,
    addToCompare,
    removeFromCompare,
    isProductInCompare,
    inpVal,
    setInpVal
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