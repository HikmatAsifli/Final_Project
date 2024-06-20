import SiteRoot from "../pages/site/SiteRoot"
import Home from "../pages/site/Home/Home"

const ROUTES =[
    {
        path:"/",
        element:<SiteRoot/>,
        children:[
            {
                path:"",
                element:<Home/>
            }
        ]
    }
]
export default ROUTES;