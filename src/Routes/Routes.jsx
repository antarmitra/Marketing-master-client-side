import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AddJob from "../Pages/AddJob/AddJob";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import ErrorPage from "../ErrorPage/ErrorPage";
import MyPostedJob from "../Pages/MyPostedJob/MyPostedJob";
import Details from "../Pages/Details/Details";
import UpdateJob from "../Pages/UpdateJob/UpdateJob";
import BidNow from "../Pages/BidNow/BidNow";
import MyBids from "../Pages/MyBids/MyBids";
import PrivateRoute from "./PrivateRoute";
import BidRequest from "../Pages/BidRequest/BidRequest";




const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/details/:id',
                element: <PrivateRoute><Details></Details></PrivateRoute>
            },
            {
                path: '/bidnow/:id',
                element: <BidNow></BidNow>,
                loader: ({ params }) => fetch(`https://marketing-master-server.vercel.app/category/${params.id}`)
            },
            {
                path: '/updatejob/:id',
                element: <UpdateJob></UpdateJob>,
                loader: ({ params }) => fetch(`https://marketing-master-server.vercel.app/category/${params.id}`)
            },
            {
                path: '/addjob',
                element: <PrivateRoute><AddJob></AddJob></PrivateRoute>
            },
            {
                path: '/mypostedjob',
                element: <PrivateRoute><MyPostedJob></MyPostedJob></PrivateRoute>,
                loader: () => fetch('https://marketing-master-server.vercel.app/category')
            },
            {
                path: '/mybids',
                element: <PrivateRoute> <MyBids></MyBids></PrivateRoute>
            },
            {
                path: '/bidrequest',
                element: <PrivateRoute><BidRequest></BidRequest></PrivateRoute>
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