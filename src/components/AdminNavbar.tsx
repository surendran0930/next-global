"use client";
import Image from "next/image";
import React from "react";
import { Logo, NavBarDes } from "../../public/assets/images";
import {
  Account,
  Dashboard,
  Help,
  History,
  Inbox,
  Settings,
} from "../../public/assets/icons";
import { usePathname } from "next/navigation";
import Link from "next/link";

const AdminNavbar = () => {
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
            href="/admin"
            className={`text-white p-4 hover:bg-[#8D6717] flex gap-4 rounded-[10px] items-center ${
              pathname === "/admin" ? "bg-[#8D6717]" : ""
            }`}
          >
            <div>{<Dashboard />}</div>
            <div className="text-[18px] leading-[28px] font-normal">
              Dashboard
            </div>
          </Link>
          <Link
            href="/admin/inbox"
            className={`text-white p-4 hover:bg-[#8D6717] flex gap-4 rounded-[10px] items-center ${
              pathname === "/admin/inbox" ? "bg-[#8D6717]" : ""
            }`}
          >
            <div>{<Inbox />}</div>
            <div className="text-[18px] leading-[28px] font-normal">Inbox</div>
          </Link>
          <Link
            href="/admin/members"
            className={`text-white p-4 hover:bg-[#8D6717] flex gap-4 rounded-[10px] items-center ${
              pathname === "/admin/members" ? "bg-[#8D6717]" : ""
            }`}
          >
            <div>{<Account />}</div>
            <div className="text-[18px] leading-[28px] font-normal">
              Members
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
