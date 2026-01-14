import { useDispatch, useSelector } from "react-redux";
import { updateAuthState } from "../../../features/auth/authSlice.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useManualFetch from "../../../shared/hooks/useManualFetch.jsx";
import { useEffect } from "react";
import { toast } from "react-toastify";

const CompleteProfile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // for debug
    // const state = useSelector((state) => state.auth);
    // console.log("AuthStatus", state);
    const { execute, data, status, error } = useManualFetch();
    const [form, setform] = useState({
        address: "",
        city: "",
        state: "",
        pincode: "",
    });

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await execute("/users/updateprofile", "PATCH",
            {
                address: form.address,
                city: form.city,
                state: form.state,
                pincode: form.pincode
            }
        );
    };

    useEffect(() => {
        if (status === "success" && data) {
            dispatch(updateAuthState({
                user: data.completeuser.name,
                email: data.completeuser.email,
                role: data.completeuser.role,
                isAuthenticated: true,
                is_profile_completed: true
            }));
            toast.success("Profile Completed!!");
            navigate("/");
        } else if (status == "error") {
            toast.error("Something went wrong!");
        }
    }, [status, data, error, dispatch, navigate]);

    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-[1200px] mb-8">

                    <h2 className="text-2xl font-semibold mb-2 ">
                        Complete Your Profile
                    </h2>
                    <p className="text-sm text-gray-500 mb-6">
                        Just one step away
                    </p>

                    <div className="w-full bg-gray-200 h-2 rounded mb-6">
                        <div className="bg-[#ff4d4d] h-2 rounded w-[60%]" />
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">

                        <div className="flex flex-col mb-8">
                            <input
                                type="text"
                                name="address"
                                placeholder="Address"
                                className="input mb-8 max-w-2xl"
                                onChange={handleChange}
                                required
                            />

                            <input
                                type="text"
                                name="city"
                                placeholder="City"
                                className="input mb-8"
                                onChange={handleChange}
                                required
                            />

                            <input
                                type="text"
                                name="state"
                                placeholder="State"
                                className="input mb-8"
                                onChange={handleChange}
                                required
                            />

                            <input
                                type="number"
                                name="pincode"
                                placeholder="Pincode"
                                className="input"
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#ff4d4d] text-white py-2 rounded-lg hover:bg-red-500 transition"
                        >
                            Complete Profile
                        </button>
                    </form>
                </div>
            </div>

        </>
    );
};

export default CompleteProfile;