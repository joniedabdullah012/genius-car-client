import Main from "../../Layout/Main";
import Checkout from "../../Pages/Checkout/Checkout";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Orders from "../../Pages/Orders/Orders";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRouter from "./PrivateRouter/PrivateRouter";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        children: [

            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/checkout/:id',
                element: <PrivateRouter>
                    <Checkout></Checkout>
                </PrivateRouter>,
                loader: ({ params }) => fetch(`https://genious-car-server-seven.vercel.app/services/${params.id}`)
            },
            {
                path: '/orders',
                element: <PrivateRouter>
                    <Orders></Orders>
                </PrivateRouter>
            }

        ]

    }
]);
export default router;