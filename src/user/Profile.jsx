import React from "react";

import UserMenu from "./UserMenu";

export default function Profile() {
  return (
    <div className="container mx-auto">
      <div className="flex">
        <div className="w-1/4">
          <UserMenu />
        </div>
        <div className="w-3/4">
          <h1 className="text-2xl">User Profile</h1>
        </div>
      </div>
    </div>
  );
}
