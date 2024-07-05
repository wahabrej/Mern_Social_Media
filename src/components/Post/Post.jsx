import React from "react";
import { motion } from "framer-motion";

export default function Post({ data }) {
  console.log(data);

  return (
    <div className="mt-2">
      {data.map((item, index) => (
        <motion.div
          key={index}
          className="card mt-5 p-4 border border-gray-200 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="flex gap-2 items-center">
            <img
              src={item.img}
              className="w-[40px] h-[40px] object-cover border rounded-full"
              alt={item.name}
            />
            <h1 className="text-xl font-bold">{item.name}</h1>
          </div>

          <h2 className="text-lg text-gray-600">{item.desc}</h2>
          <div className="w-full h-[400px] overflow-hidden mt-4">
            <motion.img
              src={item.img}
              alt={item.name}
              className="object-cover w-full h-full"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="like flex gap-5 m-2 justify-around">
            <span className="text-3xl flex gap-2 items-center">
              <i className="like-icon"></i>
              {item.like} <p>120</p>
            </span>

            <span className="text-3xl">{item.comment}</span>
            <span className="text-3xl">{item.share}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
