import React from "react";
import { Logo, NavBarDes } from "../../../public/assets/images";
import Image from "next/image";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="w-full flex">
      <div className="w-[23%] pl-[21px] pt-[21px] pr-[35px] bg-base-300 h-dvh">
        <div className="flex items-center ">
          <Image alt="logo" src={Logo} />
          <Image alt="Navbar" className="h-[23px]" src={NavBarDes} />
        </div>
      </div>
      <div className="w-[77%] pt-[33px] pl-[36px] pb-[51px] flex flex-col gap-[113px] h-dvh ">
        <div className="font-bold text-[24px]">
          Welcome to KEY GLOBAL NETWORK
        </div>
        {children}
      </div>
    </div>
  );
};

export default layout;
