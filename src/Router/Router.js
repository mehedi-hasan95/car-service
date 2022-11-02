import Main from "../layouts/Main";
import Checkout from "../Pages/Checkout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
    {path: '/', element: <Main></Main>, 
    children: [
        {path: '/', element: <Home></Home>},
        {path: 'login', element: <Login></Login>},
        {path: 'register', element: <Register></Register>},
        {path: 'checkout/:id', element: <Checkout></Checkout>,
        loader: ({params}) => fetch (`http://localhost:5000/services/${params.id}`)
    },
    ]
}
])