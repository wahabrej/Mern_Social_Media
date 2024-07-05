import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Registration from "./components/Authentication/Registration";
import PageNotFound from "./components/PageNotFound";
import Login from "./components/Authentication/Login";
import Home from "./components/Home";

import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <BrowserRouter>
      <div className=" ">
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
