"use client";
import { navLinks } from "@/app/data/Data";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import HumbrgrMenu from "../humbrgrMenu/HumbrgrMenu";
import Isauthenticated from "@/app/components/auth/Isauthenticated";

export default function NavBarMobile() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [openSideMenu, setOpenSideMenu] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    setOpenSideMenu(false);
  }, [router]);

  return (
    <nav className=" sm:hidden max-sm:block z-50  ">
      <div className={`bg-surface-700 ${openSideMenu ? "w-52" : "w-0"} transition-all duration-300 h-[428%] absolute right-0 top-0 overflow-x-hidden `}>
        <nav className=" flex flex-col gap-4 p-4 mt-16">
          {navLinks.map((res) => (
            <Link key={res.id} className="hover:text-primary text-white transition-all p-1" href={res.href}>
              {res.titel}
            </Link>
          ))}
          <div className="  mt-2 ">
            <Isauthenticated menu={true} />
          </div>
        </nav>
      </div>
      <button onClick={() => setOpenSideMenu(!openSideMenu)} className="w-8 h-8 z-[100] relative justify-center items-center overflow-hidden max-sm:flex sm2:hidden">
        <HumbrgrMenu svgRef={svgRef} openSideMenu={openSideMenu} />
      </button>
    </nav>
  );
}
