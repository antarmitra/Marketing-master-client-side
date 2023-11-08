import Lottie from "lottie-react";
import { NavLink } from "react-router-dom";
import error from "../assets/errorpage/error.gif"



const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="rounded-lg p-8 text-center space-y-6">
                <div>
                    <Lottie animationData={error} />
                </div>
                <div className="mt-10">
                    <NavLink className="text-lg font-semibold text-white bg-red-400 px-3 py-2 rounded-lg" to="/home">Go Back Home</NavLink>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;