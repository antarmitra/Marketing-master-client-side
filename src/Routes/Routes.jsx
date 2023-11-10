import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AddJob from "../Pages/AddJob/AddJob";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import ErrorPage from "../ErrorPage/ErrorPage";
import MyPostedJob from "../Pages/MyPostedJob/MyPostedJob";
import Details from "../Pages/Details/Details";




const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: 'details/:id',
                element: <Details></Details>
            },
            {
                path: '/addjob',
                element: <AddJob></AddJob>
            },
            {
                path: '/mypostedjob',
                element: <MyPostedJob></MyPostedJob>,
                loader: () =>  fetch('http://localhost:5000/category')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
        ]
    },
]);

export default router;