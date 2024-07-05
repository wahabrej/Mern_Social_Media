import React from "react";
import cover from "../../assets/images/cover.jpg";
import profile from "../../assets/images/profile.jpeg";
import { motion } from "framer-motion";

export default function ProfileCard() {
  return (
    <motion.div
      className="flex flex-col items-center mt-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="relative w-full">
        <motion.img
          src={cover}
          className="w-full h-[200px] object-cover"
          alt="Cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        <motion.img
          src={profile}
          className="absolute bottom-[-40px] left-[300px]  w-[100px] rounded-full border-4 border-white"
          alt="Profile"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        />
      </div>
      <motion.div
        className="profileName flex flex-col mt-[60px] items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <span className="text-lg font-bold">Mohammad Wahab</span>
        <span className="text-gray-500">Full Stack Software Engineer</span>
      </motion.div>
      <motion.hr
        className="w-full h-[1px] border-t  border-orange-500 mt-3"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 0.5, delay: 0.8 }}
      />
      <motion.div
        className="flex w-full items-center justify-around"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <div className="flex flex-col items-center">
          <span className="font-bold">
            <b>65000</b>
          </span>
          <span className="text-gray-500">Followings</span>
        </div>
        <div className="h-[90px] w-[1px] bg-orange-500 m-3"></div>
        <div className="flex flex-col items-center">
          <span className="font-bold">
            <b>45000</b>
          </span>
          <span className="text-gray-500">Followers</span>
        </div>
      </motion.div>
      <motion.hr
        className="w-full h-[1px] border-t border-orange-500"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 0.5, delay: 1.2 }}
      />
      <motion.div
        className="profile m-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.4 }}
      >
        <span className="bg-gradient-to-r from-[#FFBE0B] to-[#F42B03]  text-light border rounded-md p-2">
          <b> My Profile</b>
        </span>
      </motion.div>
    </motion.div>
  );
}
