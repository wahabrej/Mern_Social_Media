import React from "react";
import RightNavber from "./RightNavber";
import FriendCard from "./FriendCard";
export default function RightSide() {
  return (
    <div>
      <div className="rightside">
        <RightNavber />
        <FriendCard />
      </div>
    </div>
  );
}
