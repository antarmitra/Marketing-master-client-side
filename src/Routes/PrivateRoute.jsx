/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";
import loader from '../../src/assets/loader/loader.json'
import Lottie from "lottie-react";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);


    if (loading) {
        return <Lottie className="mx-auto lg:mt-40 lg:mb-20 md:mt-24 md:mb-20 mt-20 mb-20  md:w-52 w-40" animationData={loader} ></Lottie>
    }

    if (user?.email) {
        return children;
    }


    return <Navigate to="/login" replace></Navigate>
};

export default PrivateRoute;