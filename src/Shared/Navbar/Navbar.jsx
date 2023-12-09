import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import logo from "../../assets/logo/logo.png"



const Navbar = () => {
    const { signout, user } = useContext(AuthContext);

    const handleSignOut = () => {
        signout()
            .then()
            .catch()
    }
    console.log(user);

    const navItems = <>
        <div className="lg:flex justify-between gap-5 items-center">
            <div className="text-base font-bold"><NavLink to="/">Home</NavLink></div>
            <div className="text-base font-bold"><NavLink to="/addjob">Add Job</NavLink></div>
            <div className="text-base font-bold"><NavLink to="/mypostedjob">My Posted Job</NavLink></div>
            <div className="text-base font-bold"><NavLink to="/mybids">My Bids</NavLink></div>
            <div className="text-base font-bold"><NavLink to="/bidrequest">Bids Requests</NavLink></div>


            {user ?
                <div className="flex gap-2 flex-row-reverse lg:flex-row">
                    <div>
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <li><a>{user.displayName}</a></li>
                                <li><a>{user.email}</a></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <button onClick={handleSignOut} className="btn btn-outline btn-primary text-white">Sign Out</button>

                    </div>
                </div>
                :
                <div className="mx-auto">
                    <NavLink to='/login'>
                        <button className="btn btn-primary text-white text-base font-bold mr-5">Login</button>
                    </NavLink>
                    <NavLink to='/signup'>
                        <button className="btn btn-primary btn-outline text-base font-bold">Sign-Up</button>
                    </NavLink>
                </div>
            }
        </div>
    </>


    return (
        <div>

            <div className="navbar bg-base-100 shadow-md">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[2]  shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <a className="normal-case text-xl"><img className="lg:w-56 md:w-48 w-40 lg:ml-0 md:ml-[500px] ml-16" src={logo} alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

