"use client";
import { navLinks } from "@/app/data/Data";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import LoginBtn from "../../../ui/button/LoginBtn";

export default function NavBarMobile() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [openSideMenu, setOpenSideMenu] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    setOpenSideMenu(false);
  }, [router]);

  return (
    <nav className=" sm:hidden max-sm:block ">
      <div className={`bg-soft ${openSideMenu ? "w-52" : "w-0"} transition-all duration-300 h-screen absolute right-0 top-0 overflow-x-hidden `}>
        <nav className=" flex flex-col gap-4 p-4 mt-16">
          {navLinks.map((res) => (
            <Link key={res.id} className="hover:text-primary text-white transition-all p-1" href={res.href}>
              {res.titel}
            </Link>
          ))}
          <LoginBtn />
        </nav>
      </div>
      <button onClick={() => setOpenSideMenu(!openSideMenu)} className="w-8 h-8 z-[100] relative justify-center items-center overflow-hidden max-sm:flex sm2:hidden">
        <svg ref={svgRef} onClick={() => svgRef.current?.classList.toggle("active")} className={`ham hamRotate ham1 absolute ${openSideMenu && "active"}`} viewBox="0 0 100 100" width={48}>
          <path className="line top" d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40" />
          <path className="line middle" d="m 30,50 h 40" />
          <path className="line bottom" d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40" />
        </svg>
      </button>
    </nav>
  );
}
