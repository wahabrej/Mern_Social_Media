import React from "react";
import { motion } from "framer-motion";

export default function FriendCard() {
  return (
    <motion.div
      className="mt-4 bg-gray-100"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="rightsidecard border rounded-lg p-4 bg-white shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.span
          className="text-lg font-semibold block text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Trends for your Friends
        </motion.span>
        <div className="main mt-4">
          <h5 className="text-sm font-bold">#Minions</h5>
          <span className="text-xs text-gray-500">97k Shares</span>
        </div>
        <div className="main mt-4">
          <h5 className="text-sm font-bold">#Elon Mask</h5>
          <span className="text-xs text-gray-500">97k Shares</span>
        </div>
        <div className="main mt-4">
          <h5 className="text-sm font-bold">#Bill Gats</h5>
          <span className="text-xs text-gray-500">97k Shares</span>
        </div>
        <div className="main mt-4">
          <h5 className="text-sm font-bold">#Lary Page</h5>
          <span className="text-xs text-gray-500">97k Shares</span>
        </div>
        <div className="main mt-4">
          <h5 className="text-sm font-bold">#King Musa</h5>
          <span className="text-xs text-gray-500">97k Shares</span>
        </div>
        <div className="main mt-4">
          <h5 className="text-sm font-bold">#Karim Zawad</h5>
          <span className="text-xs text-gray-500">97k Shares</span>
        </div>
        <div className="main mt-4">
          <h5 className="text-sm font-bold">#Abbani</h5>
          <span className="text-xs text-gray-500">97k Shares</span>
        </div>
        <div className="main mt-4">
          <h5 className="text-sm font-bold">#Tata</h5>
          <span className=" text-xs text-gray-500">97k Shares</span>
        </div>
        {/* Repeat for other trends */}
        <div className="flex justify-center items-center mt-3">
          <motion.button
            className="justify-self-auto text-xs bg-gradient-to-r from-[#FFBE0B] to-[#F42B03] text-light border rounded-md px-5 py-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Share Post
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}
