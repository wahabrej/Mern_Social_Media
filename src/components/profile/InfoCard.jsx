import React from "react";
import { HiOutlinePencilAlt } from "react-icons/hi";

export default function InfoCard() {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-3">
      <div className="flex items-center justify-between px-6 py-4 bg-gray-100 border-b">
        <span className="font-semibold text-lg">Your Info</span>
        <HiOutlinePencilAlt className="text-gray-600" />
      </div>
      <div className="px-6 py-4">
        <div className="mb-2">
          <span className="font-bold">Status:</span> in Relationship
        </div>
        <div className="mb-2">
          <span className="font-bold">Lives:</span> in Dhaka
        </div>
        <div className="mb-2">
          <span className="font-bold">Works:</span> at United Group OSL
        </div>
      </div>
      <div className="px-6 py-4 bg-gray-100 border-t">
        <button className=" bg-gradient-to-r from-[#FFBE0B] to-[#F42B03]  text-white font-semibold rounded-md px-5 py-2">
          Log out
        </button>
      </div>
    </div>
  );
}
