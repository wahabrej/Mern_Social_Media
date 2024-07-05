import React from "react";
import { useAuth } from "../context/auth";
import Profile from "./profile/Profile";
import Post from "./Post/Postside.jsx";
import "./Home.css";
import RightSide from "./right/RightSide.jsx";
export default function HomePage() {
  const [auth, setAuth] = useAuth();
  return (
    <div className="relative min-h-screen flex overflow-hidden">
      {/* Background Effects */}
      <div className="bg-cyan-600 absolute top-[30%] h-[200px] w-[200px] rounded-full blur-[200px]"></div>
      <div className="bg-cyan-600 absolute top-0 right-0 h-[200px] w-[200px] rounded-full blur-[200px]"></div>

      {/* Left Sidebar */}
      <div className="w-1/4 h-screen overflow-y-scroll bg-white p-4 shadow-md custom-scrollbar">
        <Profile />
      </div>

      {/* Main Content */}
      <div className="w-2/4 h-screen overflow-y-scroll bg-white p-4 shadow-md custom-scrollbar">
        <Post />
      </div>

      {/* Right Sidebar */}
      <div className="w-1/4 h-screen overflow-y-scroll bg-white p-4 shadow-md custom-scrollbar">
        <RightSide />
      </div>
    </div>
  );
}
