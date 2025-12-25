import React from "react";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { updateAuthState } from "../../../features/auth/authSlice";
import { useDispatch } from "react-redux";
import useManualFetch from "../../../shared/hooks/useManualFetch.jsx";
import { Link, useNavigate } from "react-router-dom";


function Register() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { execute, data, status, error } = useManualFetch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isStaff, setIsStaff] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({
      name,
      email,
      password,
      isStaff,
    });

    await execute("http://localhost:3000/auth/signup", "POST",
      {
        name: name,
        email: email,
        password: password,
        is_staff: isStaff,
      }
    );
  };

  useEffect(() => {
    console.log("STATUS:", status);
  }, [status]);

  useEffect(() => {
    if (status == "success" && data) {
      dispatch(updateAuthState({
        isAuthenticated: true,
        user: data.name,
        token: data.token
      })
      );
      navigate("/home");
    } else if (status == "error") {
      console.log("Registration failed:", error);
    }
  }, [status, data, error, name, dispatch, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#ff4d4d] to-[#ff9900]">
      <div className="w-full max-w-[450px] bg-white p-8 rounded-[20px]
                      shadow-[0_20px_40px_rgba(0,0,0,0.2)]">

        <form onSubmit={handleSubmit}>
          <h1 className="text-3xl text-center text-[#ff4d4d] font-bold mb-6">
            Register
          </h1>

          <div className="relative mb-5">
            <input
              // {...register("name", { required: true })}
              placeholder="Full Name"
              className="w-full px-4 py-3 pr-12 border-2 border-[#eee]
                         rounded-[10px] focus:border-[#ff4d4d]
                         outline-none transition"
              onChange={(e) => setName(e.target.value)}
            />
            <i className="bx bxs-user absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
            {/* {errors.name && <p className="text-red-500 text-sm mt-1">Name is required</p>} */}
          </div>

          <div className="relative mb-5">
            <input
              // {...register("username", { required: true })}
              placeholder="Email"
              className="w-full px-4 py-3 pr-12 border-2 border-[#eee]
                         rounded-[10px] focus:border-[#ff4d4d]
                         outline-none transition"
              onChange={(e) => setEmail(e.target.value)}
            />
            <i className="bx bxs-user-circle absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
          </div>

          <div className="relative mb-5">
            <input
              type="password"
              // {...register("password", { required: true })}
              placeholder="Password"
              className="w-full px-4 py-3 pr-12 border-2 border-[#eee]
                         rounded-[10px] focus:border-[#ff4d4d]
                         outline-none transition"
              onChange={(e) => setPassword(e.target.value)}
            />
            <i className="bx bxs-lock-alt absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
          </div>

          <div className="relative mb-5">
            <input
              type="password"
              // {...register("confirmPassword", { required: true })}
              placeholder="Confirm Password"
              className="w-full px-4 py-3 pr-12 border-2 border-[#eee]
                         rounded-[10px] focus:border-[#ff4d4d]
                         outline-none transition"
            // onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <i className="bx bxs-lock absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
          </div>

          <div className="flex justify-between text-sm mb-6">
            <label className="flex items-center gap-2">
              <input type="checkbox" required
              // onChange={(e) => setTerms(e.target.checked)} 
              />
              I agree to <span className="text-[#ff4d4d] underline">Terms and Conditions</span>
            </label>

            <label className="flex items-center gap-2">
              <input type="checkbox"
                onChange={(e) => setIsStaff(e.target.checked)} />
              Is Staff
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#ff4d4d] hover:bg-[#e63946]
                       text-white font-bold rounded-[10px] transition"
          >
            {status === 'loading' ? "Registering..." : ("Create Account")}
          </button>

          <div className="text-center text-sm mt-4">
            Already have an account?{" "}
            <a href="/account/login" className="text-[#ff4d4d] font-semibold hover:underline">
              Login
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
