"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { FaHeart, FaUser } from "react-icons/fa";
import { MdLogout } from "react-icons/md";

interface PropsType {
  children: React.ReactNode;
  rout?: string;
  icon?: string;
  onclick: () => void;
  sm?: boolean;
  logout?: boolean;
}
export default function BtnDashboard({ children, rout, icon, sm, onclick, logout }: PropsType) {
  const pathname = usePathname();
  const icons = (icon === "user" && <FaUser className=" text-primary " />) || (icon === "favarit" && <FaHeart className=" text-primary " />);

  if (logout) {
    return (
      <button onClick={onclick} className={!sm ? ` hover:bg-primary  group transition ease-in delay-100 cursor-pointer rounded-[.5rem] px-[.8rem] py-[1.2rem] items-center border-b-[1px] border-b-[#D12525] sm:border-none md:flex hidden gap-[.5rem] w-full   ` : `group  transition ease-in delay-100 cursor-pointer rounded-[.5rem] px-[.8rem] py-[1.2rem] items-center border-b-[1px] border-b-[#E7E7E8] sm:border-none flex md:hidden gap-[.5rem] w-full ${pathname === "/profile" ? "bg-[#f2f2f2]" : ""}`}>
        <div className={`p-2 rounded-full transition-all duration-200    text-[#ffff] group bg-white `}>
          <MdLogout size={21} className=" text-primary " />
        </div>
        <p className="font-semibold text-white  "> Logout </p>
      </button>
    );
  }
  return (
    <button onClick={onclick} className={!sm ? ` hover:bg-primary  group transition ease-in delay-100 cursor-pointer rounded-[.5rem] px-3 py-5 items-center border-b-1 border-b-[#D12525] sm:border-none md:flex hidden gap-2 w-full  ${pathname === rout ? "bg-primary" : "hover:bg-[#f2f2f2]"} ` : `group  transition ease-in delay-100 cursor-pointer rounded-[.5rem] px-[.8rem] py-[1.2rem] items-center border-b-[1px] border-b-[#E7E7E8] sm:border-none flex md:hidden gap-[.5rem] w-full ${pathname === "/profile" ? "bg-[#f2f2f2]" : "hover:bg-[#f2f2f2]"}`}>
      <div className={`p-2 rounded-full transition-all  duration-200 bg-white `}>{icons}</div>
      <p className="font-normal text-white "> {children} </p>
    </button>
  );
}
