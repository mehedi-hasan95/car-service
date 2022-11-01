import Main from "../layouts/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
    {path: '/', element: <Main></Main>, 
    children: [
        {path: '/', element: <Home></Home>},
        {path: 'login', element: <Login></Login>},
        {path: 'register', element: <Register></Register>}
    ]
}
])