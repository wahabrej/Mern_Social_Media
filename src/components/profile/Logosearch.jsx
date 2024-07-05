import React from "react";
import instragram from "../../assets/images/instragram.png";
import { IoSearch } from "react-icons/io5";
import { motion } from "framer-motion";

export default function LogoSearch() {
  return (
    <motion.div
      className="flex justify-center items-center gap-3"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <img src={instragram} className="w-[40px]" alt="Instagram logo" />
      <div className="relative flex items-center">
        <input
          type="text"
          className="rounded-md pl-2 pr-10 py-1 focus:outline-none border border-gray-300 bg-white"
          placeholder="Enter your name"
        />
        <IoSearch className="absolute right-[12px] text-orange-500" />
      </div>
    </motion.div>
  );
}
