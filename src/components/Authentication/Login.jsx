import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authActions } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Instagram from "../../assets/images/instragram.png";

function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        "http://localhost:3001/api/v1/auth/login",
        {
          email: data.email,
          password: data.password,
        }
      );

      if (result.data.success) {
        toast.success("Login successful!");
        localStorage.setItem("userId", result.data.user._id); // Correctly access the user ID
        dispatch(authActions.login());
        navigate("/home");
      } else {
        toast.error("Login failed!");
      }
    } catch (err) {
      if (err.response) {
        console.error("Response error: ", err.response);
        toast.error("Login failed! " + err.response.data.message);
      } else if (err.request) {
        console.error("Request error: ", err.request);
        toast.error("No response from server.");
      } else {
        console.error("Error:", err.message);
        toast.error("Error: " + err.message);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Toaster />
      <div className="flex flex-col md:flex-row items-center w-full max-w-6xl">
        <div className="md:w-1/2 flex justify-center items-center p-6 md:p-12 text-center md:text-left gap-4">
          <div className="left flex justify-start items-center">
            <img src={Instagram} className="w-[100px]" alt="Instagram Logo" />
          </div>
          <div className="right">
            <h1 className="text-5xl bg-gradient-to-r from-[#FFBE0B] to-[#F42B03] text-transparent bg-clip-text font-bold">
              Social Media
            </h1>
            <h3 className="mt-4 text-xl">
              Connect with friends and the world around you on My Social Media.
            </h3>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center p-6">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="email"
                placeholder="Email or Phone"
                className="w-full bg-white p-3 border border-gray-300 rounded-lg"
                required
                value={data.email}
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full bg-white p-3 border border-gray-300 rounded-lg"
                required
                value={data.password}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="w-full p-3 bg-gradient-to-r from-[#FFBE0B] to-[#F42B03] text-white rounded-lg font-semibold hover:bg-orange-700"
              >
                Log In
              </button>
            </form>
            <a
              href="#"
              className="text-blue-600 text-sm block text-center mt-4 hover:underline"
            >
              Forgotten password?
            </a>
            <hr className="my-4" />
            <button
              type="button"
              className="w-full p-3 bg-gradient-to-r from-[#FFBE0B] to-[#F42B03]  text-white rounded-lg font-semibold hover:bg-green-700"
              onClick={() => navigate("/register")}
            >
              Create New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
