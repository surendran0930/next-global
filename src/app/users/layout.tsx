import Header from "@/components/Header";
import UserNavbar from "@/components/UserNavbar";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full flex">
      <div className="w-[23%]">
        <UserNavbar />
      </div>
      <div className="w-[77%] pt-[33px] pr-[26px] pl-[28px] flex flex-col gap-[26px]">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default layout;
