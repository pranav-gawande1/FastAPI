import React from "react";
import { useNavigate } from "react-router-dom";
import "../../../App.css";
import useManualFetch from "../../../shared/hooks/useManualFetch.jsx";
import { useDispatch, useSelector } from "react-redux";
import { updateAuthState } from "../../../features/auth/authSlice";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";


const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const { execute, data, status, error } = useManualFetch();

    const state = useSelector((state) => state.auth);
    console.log('authStatusState:', state);

    const profstate = useSelector((state) => state.profile);
    console.log('profile:', profstate);

    const handleLogin = async (e) => {
        e.preventDefault();
        await execute("/auth/login", "POST", {
            email,
            password
        });
    };

    useEffect(() => {
        if (status === "success" && data) {
            dispatch(updateAuthState({
                isAuthenticated: true,
                user: data.name,
                role: data.role,
                token: data.token,
                is_profile_completed: data.is_profile_completed
            })
            );
            toast.success("Login successful!");
            if (!data.is_profile_completed) {
                toast.info("Please complete your Profile First!!");
                navigate("/complete-profile");
            }
            else if (data.is_active === true && data.role === "user") {
                navigate("/home");
            } else if (data.is_active === true && data.role === "admin") {
                navigate("/admin-home");
            }
        }
        else if (status === "error") {
            // console.log("error", error);
            toast.error(error);
            navigate("/");
        }
    }, [status, data, error, dispatch, navigate]);
    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#ff4d4d] to-[#ff9900]">
                <div className="w-full max-w-[400px] p-8 bg-white rounded-[20px]">
                    <form onSubmit={handleLogin}>
                        <h1 className="text-center text-3xl text-[#ff4d4d] font-bold mb-[23px]">Login</h1>
                        {/* Email input */}
                        <div className="mb-4 relative" >
                            <input
                                placeholder="Email"
                                className="w-full px-4 py-3 pr-12 border-2 border-[#eee] rounded-[10px] text-base transition duration-300 focus:border-[#ff4d4d] outline-none" type="username"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <i className="bx bxs-user absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" ></i>
                        </div>
                        {/* Password input */}
                        <div className="mb-4 relative">
                            <input type="password"
                                placeholder="Password"
                                className="w-full px-4 py-3 pr-12 border-2 border-[#eee] rounded-[10px] text-base transition duration-300 focus:border-[#ff4d4d] outline-none"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <i className="bx bxs-lock-alt absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" ></i>
                        </div>


                        <div className="flex justify-between text-sm mb-6">
                            <label className="flex items-center gap-2"><input type="checkbox" />Remember Me</label>
                            {/* checkiing user type */}
                            <label className="flex items-center gap-2"><input type="checkbox"
                            // onChange={(e) => e.target.checked}
                            />Is Staff</label>
                        </div>
                        <button className="w-full p-3 bg-[#ff4d4d] text-white rounded-[10px] font-bold cursor-pointer transition duration-300">
                            {status === 'loading' ? "Logging in..." : "Login"}</button>
                        <div className="text-center text-sm mt-4">
                            <p>Don't have an account? <a className="text-[#ff4d4d] text-decoration-none font-[600] hover:underline" href="/account/register">Register</a></p>
                        </div>

                    </form >
                </div>
            </div >
        </>
    );
}
export default Login;