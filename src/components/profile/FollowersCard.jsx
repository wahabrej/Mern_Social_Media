import React from "react";
import profile from "../../assets/images/profile.jpeg";
import { motion } from "framer-motion";

export default function FollowersCard() {
  return (
    <div className="mt-4">
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h1 className="text-center p-3">Who is following you</h1>
        <motion.div
          className="cards flex flex-col items-center overflow-auto max-h-[400px] scroll-smooth"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {[...Array(10)].map((_, index) => (
            <motion.div
              key={index}
              className="card-item flex justify-center items-center m-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
                ease: "easeOut",
              }}
            >
              <img
                src={profile}
                className="w-12 border rounded-full"
                alt="Profile"
              />
              <div className="flex flex-col gap-0 ml-3">
                <span className="name text-xs font-bold">Sharuk Khan</span>
                <span className="email font-thin text-xs">
                  Sharuk@gmail.com
                </span>
              </div>
              <div className="follow">
                <button className="follows bg-gradient-to-r from-[#FFBE0B] to-[#F42B03] border rounded-md px-2 ml-4 hover:bg-white hover:text-black border-orange-500">
                  Follow
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
