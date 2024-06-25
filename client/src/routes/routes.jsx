import SiteRoot from "../pages/site/SiteRoot"
import Home from "../pages/site/Home/Home"
import Shop from "../pages/site/Shop/Shop";

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
            }
        ]
    }
]
export default ROUTES;