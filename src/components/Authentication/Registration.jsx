import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Instagram from "../../assets/images/instragram.png";

function Registration() {
  const [confirm, setConfirm] = useState(false);
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.password !== data.confirmPassword) {
      setConfirm(true);
      return;
    }

    try {
      const result = await axios.post(
        "http://localhost:3001/api/v1/auth/register",
        {
          firstname: data.firstName,
          lastname: data.lastName,
          username: data.username,
          email: data.email,
          password: data.password,
        }
      );

      if (result.data.success) {
        toast.success("Registration successful!");
        navigate("/login");
      } else {
        toast.error("Registration failed!");
      }
    } catch (err) {
      if (err.response) {
        console.error("Response error: ", err.response);
        toast.error("Registration failed! " + err.response.data.message);
      } else if (err.request) {
        console.error("Request error: ", err.request);
        toast.error("No response from server.");
      } else {
        console.error("Error:", err.message);
        toast.error("Error: " + err.message);
      }
    }
  };

  const resetForm = () => {
    setData({
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
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
            <h1 className="text-5xl font-bold bg-gradient-to-r from-[#FFBE0B] to-[#F42B03] text-transparent bg-clip-text">
              Social Media
            </h1>
            <h3 className="mt-4 text-2xl">
              Create your account to connect with friends and the world around
              you on Facebook.
            </h3>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center p-6">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex space-x-2">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Enter your first name"
                  className="w-full p-3 bg-white border border-gray-300 rounded-lg"
                  required
                  value={data.firstName}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Enter your last name"
                  className="w-full p-3 bg-white border border-gray-300 rounded-lg"
                  required
                  value={data.lastName}
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col space-y-2">
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Enter your username"
                  className="w-full p-3 bg-white border border-gray-300 rounded-lg"
                  required
                  value={data.username}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col space-y-2">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full p-3 bg-white border border-gray-300 rounded-lg"
                  required
                  value={data.email}
                  onChange={handleChange}
                />
              </div>

              <div className="flex space-x-2">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  className="w-full p-3 bg-white border border-gray-300 rounded-lg"
                  required
                  value={data.password}
                  onChange={handleChange}
                />
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  className="w-full p-3 bg-white border border-gray-300 rounded-lg"
                  required
                  value={data.confirmPassword}
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                className="w-full p-3 bg-gradient-to-r from-[#FFBE0B] to-[#F42B03] text-white rounded-lg font-semibold hover:bg-orange-700"
              >
                Sign Up
              </button>

              {confirm && (
                <span className="text-red-600 text-[10px]">
                  Passwords do not match
                </span>
              )}
            </form>
            <div className="mt-4 text-center">
              <p className="text-gray-600">Already have an account?</p>
              <button
                onClick={() => navigate("/login")}
                className="w-full mt-2 p-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
