import AdminHeader from "@/components/AdminHeader";
import AdminNavbar from "@/components/AdminNavbar";

import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full flex">
      <div className="w-[23%]">
        <AdminNavbar />
      </div>
      <div className="w-[77%] pt-[33px] pr-[26px] pl-[28px] flex flex-col gap-[26px]">
        <AdminHeader />
        {children}
      </div>
    </div>
  );
};

export default layout;
