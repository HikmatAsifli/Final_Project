import SiteRoot from "../pages/site/SiteRoot"
import Home from "../pages/site/Home/Home"
import Shop from "../pages/site/Shop/Shop";
import About from "../pages/site/About/About";
import Contact from "../pages/site/Contact/Contact";
import Detail from "../pages/site/Detail/Detail";
import Blog from "../pages/site/Blog/Blog";
import Account from "../pages/site/Account/Account";
import Login from "../pages/site/Login/Login";
import Register from "../pages/site/Register/Register";
import ForgotPassword from "../pages/site/ForgotPassword/ForgotPassword";
import ResetPassword from "../pages/site/ResetPassword/ResetPassword";
import PurchaseGuide from "../pages/site/PurchaseGuide/PurchaseGuide";
import PrivacyPolicy from "../pages/site/PrivacyPolicy/PrivacyPolicy";
import TermsOfService from "../pages/site/TermsOfService/TermsOfService";
import Error from "../pages/site/Error/Error";
import Cart from "../pages/site/Cart/Cart";
import Wishlist from "../pages/site/Wishlist/Wishlist";
import Compare from "../pages/site/Compare/Compare";
import BlogDetail from "../pages/site/BlogDetail/BlogDetail";
import AdminRoot from "../pages/admin/AdminRoot";
import Dashboard from "../pages/admin/Dashboard/Dashboard";
import Products from "../pages/admin/Products/Products";
import Orders from "../pages/admin/Orders/Orders";
import Blogs from "../pages/admin/Blogs/Blogs";
import AddProduct from "../pages/admin/AddProduct/AddProduct";
import AddBlog from "../pages/admin/AddBlog/AddBlog";

const ROUTES = [
    {
        path: "/",
        element: <SiteRoot />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "shop",
                element: <Shop />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "products/:id",
                element: <Detail />
            },
            {
                path: "blog",
                element: <Blog />
            },
            {
                path: "blog/:id",
                element: <BlogDetail />
            },
            {
                path: "account",
                element: <Account />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            },
            {
                path: "forgot-password",
                element: <ForgotPassword />
            },
            {
                path: "reset-password",
                element: <ResetPassword />
            },
            {
                path: "purchase-guide",
                element: <PurchaseGuide />
            },
            {
                path: "privacy-policy",
                element: <PrivacyPolicy />
            },
            {
                path: "terms",
                element: <TermsOfService />
            },
            {
                path: "cart",
                element: <Cart />
            },
            {
                path: "wishlist",
                element: <Wishlist />
            },
            {
                path: "compare",
                element: <Compare />
            },
            {
                path: "*",
                element: <Error />
            }
        ]
    },
    {
        path: "/admin",
        element: <AdminRoot />,
        children: [
            {
                path: "dashboard",
                element: <Dashboard />
            },
            {
                path: "products",
                element: <Products />
            },
            {
                path: "orders",
                element: <Orders />
            },
            {
                path: "blogs",
                element: <Blogs />
            },
            {
                path: "add-product",
                element: <AddProduct />
            },
            {
                path: "add-blog",
                element: <AddBlog />
            }
        ]
    }
]
export default ROUTES;