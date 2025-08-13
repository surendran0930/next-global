"use client";
import Image from "next/image";
import React from "react";
import { Logo, NavBarDes } from "../../public/assets/images";
import {
  Account,
  Dashboard,
  Help,
  History,
  Settings,
} from "../../public/assets/icons";
import { usePathname } from "next/navigation";
import Link from "next/link";

const UserNavbar = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col items-center gap-[70px] pt-[50px] px-[30px] bg-base-300 h-dvh ">
      <div className="flex items-center ">
        <Image alt="logo" src={Logo} />
        <Image alt="Navbar" className="h-[23px]" src={NavBarDes} />
      </div>
      <div className="w-full flex flex-col gap-[56px] ">
        <div className="flex flex-col gap-2">
          <Link
            href="/users"
            className={`text-white p-4 hover:bg-[#8D6717] flex gap-4 rounded-[10px] items-center ${
              pathname === "/users" ? "bg-[#8D6717]" : ""
            }`}
          >
            <div>{<Dashboard />}</div>
            <div className="text-[18px] leading-[28px] font-normal">
              Dashboard
            </div>
          </Link>
          <Link
            href="/users/history"
            className={`text-white p-4 hover:bg-[#8D6717] flex gap-4 rounded-[10px] items-center ${
              pathname === "/users/history" ? "bg-[#8D6717]" : ""
            }`}
          >
            <div>{<History />}</div>
            <div className="text-[18px] leading-[28px] font-normal">
              History
            </div>
          </Link>
          <Link
            href="/users/account"
            className={`text-white p-4 hover:bg-[#8D6717] flex gap-4 rounded-[10px] items-center ${
              pathname === "/users/account" ? "bg-[#8D6717]" : ""
            }`}
          >
            <div>{<Account />}</div>
            <div className="text-[18px] leading-[28px] font-normal">
              Bank Account
            </div>
          </Link>
          <Link
            href="/users/settings"
            className={`text-white p-4 hover:bg-[#8D6717] flex gap-4 rounded-[10px] items-center ${
              pathname === "/users/settings" ? "bg-[#8D6717]" : ""
            }`}
          >
            <div>{<Settings />}</div>
            <div className="text-[18px] leading-[28px] font-normal">
              Settings
            </div>
          </Link>
        </div>
        <div className="flex flex-col gap-6">
          <div className="border border-[#7B5A14]"></div>
          <Link
            href="/users/help"
            className={`text-white p-4 hover:bg-[#8D6717] flex gap-4 rounded-[10px] items-center ${
              pathname === "/users/help" ? "bg-[#8D6717]" : ""
            }`}
          >
            <div>{<Help />}</div>
            <div className="text-[18px] leading-[28px] font-normal">
              Help Centre
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserNavbar;
