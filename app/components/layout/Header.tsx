import Link from "next/link";
import React from "react";
import NavBarDescktop from "./navbar/NavBarDescktop";
import NavBarMobile from "./navbar/NavBarMobile";
import LoginBtn from "../ui/button/LoginBtn";

export default function Header() {
  return (
    <header className=" border-b border-b-snowBorder ">
      <section className="  flex items-center justify-between container ">
        <Link className="text-2xl text-primary font-semibold flex" href="/">
          <span>C</span>
          <p className="text-white">rypto</p>
          <span>V</span>
          <p className="text-white">erse</p>
          <span>.</span>
        </Link>
        <NavBarDescktop />
        <NavBarMobile />
        <LoginBtn />
      </section>
    </header>
  );
}
