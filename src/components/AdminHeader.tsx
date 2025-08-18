import React from "react";
import { Notification } from "../../public/assets/icons";

const AdminHeader = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <div className="text-base-0">Welcome Back, Ali</div>
        {/* <div className="text-base-500">
          You are wonderful today, Good to see you
        </div> */}
      </div>
      <div>
        <Notification />
      </div>
    </div>
  );
};

export default AdminHeader;
