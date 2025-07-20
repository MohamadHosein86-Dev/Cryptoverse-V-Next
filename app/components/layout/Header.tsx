import React from "react";
import NavBarDescktop from "./components/navbar/NavBarDescktop";
import NavBarMobile from "./components/navbar/NavBarMobile";
import Logo from "../logo/Logo";
import Isauthenticated from "../auth/Isauthenticated";

export default function Header() {
  return (
    <header className=" bg-surface-900 border-1 border-primary-border ">
      <section className="  flex items-center py-4 justify-between container ">
        <Logo />
        <NavBarDescktop />
        <NavBarMobile />
        <div className=" hidden sm:block ">
          <Isauthenticated />
        </div>
      </section>
    </header>
  );
}
