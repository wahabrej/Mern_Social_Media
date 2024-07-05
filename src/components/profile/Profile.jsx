import React from "react";
import Logosearch from "../profile/Logosearch";
import InfoCard from "./InfoCard";
import FollowersCard from "./FollowersCard";

export default function Profile() {
  return (
    <div>
      <div>
        <Logosearch />
        <InfoCard />
        <FollowersCard />
      </div>
    </div>
  );
}
