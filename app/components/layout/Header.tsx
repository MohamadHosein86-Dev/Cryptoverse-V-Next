import React from "react";
import NavBarDescktop from "./components/navbar/NavBarDescktop";
import NavBarMobile from "./components/navbar/NavBarMobile";
import LoginBtn from "../ui/button/LoginBtn";
import Logo from "../logo/Logo";

export default function Header() {
  return (
    <header className=" bg-dark border-1 border-primaryBorder ">
      <section className="  flex items-center justify-between mx-auto max-w-[90rem] py-3 px-5 ">
        <Logo />
        <NavBarDescktop />
        <NavBarMobile />
        <LoginBtn />
      </section>
    </header>
  );
}
