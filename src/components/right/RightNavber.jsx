import React from "react";
import { IoIosSettings } from "react-icons/io";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { CiBookmarkMinus } from "react-icons/ci";
import { LiaQuinscape } from "react-icons/lia";

export default function RightNavber() {
  return (
    <div>
      <div className="navber flex items-center justify-around font-bold text-[30px]">
        <CiBookmarkMinus className="text-orange-500 cursor-pointer" />
        <IoIosSettings className="cursor-pointer" />
        <LiaQuinscape className="cursor-pointer" />
        <IoChatboxEllipsesOutline className="cursor-pointer" />
      </div>
    </div>
  );
}
