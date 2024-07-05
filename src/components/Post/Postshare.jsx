import React from "react";
import profile from "../../assets/images/profile.jpeg";
import { IoSearch } from "react-icons/io5";
import { useState, useRef } from "react";
import {
  MdAddAPhoto,
  MdOndemandVideo,
  MdOutlineSchedule,
} from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { motion } from "framer-motion";

export default function Postshare() {
  const [image, setImage] = useState(null);
  const imageRef = useRef();

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };

  return (
    <div>
      <motion.div
        className="postshare"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="input-img flex gap-2 justify-center items-center">
          <img src={profile} className="w-[40px] rounded-full" alt="" />
          <div className="relative flex items-center ml-4">
            <input
              type="text"
              className="w-[500px] rounded-md pl-2 pr-10 py-1 focus:outline-none border border-gray-300 bg-white"
              placeholder="Enter your opinion ....."
            />
            <IoSearch className="absolute right-[12px] text-orange-500" />
          </div>
        </div>
        <div className="flex justify-center items-center gap-5 p-5">
          <motion.div
            className="flex justify-center items-center text-orange-500 gap-1 cursor-pointer"
            onClick={() => imageRef.current.click()}
            whileHover={{ scale: 1.1 }}
          >
            <MdAddAPhoto />
            <span>Photo</span>
          </motion.div>
          <motion.div
            className="flex justify-center items-center text-orange-500 gap-1 cursor-pointer"
            whileHover={{ scale: 1.1 }}
          >
            <MdOndemandVideo />
            <span>Video</span>
          </motion.div>
          <motion.div
            className="flex justify-center items-center text-orange-500 gap-1 cursor-pointer"
            whileHover={{ scale: 1.1 }}
          >
            <FaLocationDot />
            <span>Location</span>
          </motion.div>
          <motion.div
            className="flex justify-center items-center text-orange-500 gap-1 cursor-pointer"
            whileHover={{ scale: 1.1 }}
          >
            <MdOutlineSchedule />
            <span>Schedule</span>
          </motion.div>
          <div>
            <motion.button
              className="text-xs bg-gradient-to-r from-[#FFBE0B] to-[#F42B03] text-light border rounded-md px-3 py-1"
              whileHover={{ scale: 1.1 }}
            >
              <b> Share </b>
            </motion.button>
            <div style={{ display: "none" }}>
              <input
                type="file"
                name="myImage"
                ref={imageRef}
                onChange={onImageChange}
              />
            </div>
          </div>
        </div>
        {image && (
          <motion.div
            className="previewImage relative"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <RxCross2
              className="absolute top-2 right-2 cursor-pointer"
              onClick={() => setImage(null)}
            />
            <img src={image.image} className="w-full mt-4" alt="Preview" />
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
