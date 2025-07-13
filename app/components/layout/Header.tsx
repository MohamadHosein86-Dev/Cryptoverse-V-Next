import React from "react";
import NavBarDescktop from "./components/navbar/NavBarDescktop";
import NavBarMobile from "./components/navbar/NavBarMobile";
import LoginBtn from "../ui/button/LoginBtn";
import Logo from "../logo/Logo";

export default function Header() {
  return (
    <header className=" bg-surface-900 border-1 border-primary-border ">
      <section className="  flex items-center py-4 justify-between container ">
        <Logo />
        <NavBarDescktop />
        <NavBarMobile />
        <LoginBtn />
      </section>
    </header>
  );
}
