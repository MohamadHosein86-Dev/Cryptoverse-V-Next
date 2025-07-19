"use client";
import { useSession } from "next-auth/react";
import { FaUser } from "react-icons/fa";
import Link from "next/link";
import LoginBtn from "../ui/button/LoginBtn";
import MIniSpinner from "../spinner/MiniSpinner";

export default function Isauthenticated({ menu = false }: { menu?: boolean }) {
  const { status } = useSession();

  if (status === "loading") {
    return <MIniSpinner />;
  }

  if (status === "unauthenticated") {
    return <LoginBtn menu={menu} />;
  }

  if (status === "authenticated") {
    return (
      <div className=" flex gap-8 ">
        <Link href={"/dashboard"}>
          <FaUser size={22} className={` text-primary  cursor-pointer `} />
        </Link>
      </div>
    );
  }
}
