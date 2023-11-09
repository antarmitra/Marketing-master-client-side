/* eslint-disable no-useless-escape */
import Lottie from "lottie-react";
import { FcGoogle } from "react-icons/Fc";
import { FiGithub } from "react-icons/Fi";
import { Link } from "react-router-dom";
import signup from "../assets/signup/signup.json";
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { GoogleAuthProvider, getAuth, signInWithPopup, updateProfile } from "firebase/auth";
import app from "../Firebase/firebase.config";


const SignUp = () => {
    const [error, setError] = useState('');
    // signup with google
    const auth = getAuth(app);
    const Provider = new GoogleAuthProvider();

    const handleGoogleSingIn = () => {
        signInWithPopup(auth, Provider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.log(error))
    }


    // signup with email and password
    const { createUser } = useContext(AuthContext);

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);

        if (password.length < 6) {
            setError("Password should be at least 6 characters");
            return false;
        }
        else if (!/[A-Z]/.test(password)) {
            setError("Your password should contain at least one uppercase character");
            return false;
        } else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password)) {
            setError("Your password should contain at least one special character");
            return false;
        }

        // create user
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo
                })
            })
            .catch(error => setError(error.message))

    }


    return (
        <div>
            <div className="relative max-w-screen-lg mx-auto">
                <div className="md:flex mb-10">
                    <div className="mr-16">
                        <Lottie className="lg:w-[500px] h-[700px]" animationData={signup} loop={true} />
                    </div>

                    <div className="text-center p-2 ">
                        <form onSubmit={handleSignUp} className="bg-base-100 shadow-lg rounded-lg p-10">
                            <div className="space-y-3 ">
                                <h2 className="text-4xl font-medium">Sign Up</h2>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text lg:text-lg font-semibold">User Name</span>
                                </label>
                                <input type="text" name="name" required placeholder="name " className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text lg:text-lg font-semibold">Photo URL</span>
                                </label>
                                <input type="photo" name="photo" required placeholder="photo url " className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text lg:text-lg font-semibold">Email</span>
                                </label>
                                <input type="email" name="email" required placeholder="email " className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text lg:text-lg font-semibold">Password</span>
                                </label>
                                <input type="password" name="password" required placeholder="password " className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className="btn bg-blue-400" value="sign-up" />
                            </div>

                            <div className=" mt-5 flex gap-6">
                                <div>
                                    <button onClick={handleGoogleSingIn} className="btn ">
                                        <FcGoogle className="lg:text-3xl md:text-lg"></FcGoogle>
                                        Google
                                    </button>
                                </div>
                                <div>
                                    <button className="btn ">
                                        <FiGithub className="lg:text-3xl md:text-lg"></FiGithub>
                                        Github
                                    </button>
                                </div>
                            </div>

                            <p className=" mt-2 text-base">Do not have an account, please <Link to="/login" className="text-black text-lg font-bold underline">Login</Link></p>

                            {
                                error && <p className="text-lg text-red-500">{error}</p>
                            }
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SignUp;