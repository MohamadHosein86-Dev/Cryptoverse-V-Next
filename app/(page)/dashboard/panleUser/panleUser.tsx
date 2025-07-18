"use client";
import FavaritPage from "@/app/(page)/dashboard/favarit/page";
import Acount from "@/app/(page)/dashboard/page";
import { usePathname } from "next/navigation";

export default function PanleUser() {
  const pathname = usePathname();

  if (pathname === "/dashboard/favarit") return <FavaritPage />;
  if (pathname === "/dashboard") return <Acount />;
}
