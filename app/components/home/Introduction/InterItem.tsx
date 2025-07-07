"use client";
import { FaCoins } from "react-icons/fa";
import { GoHistory } from "react-icons/go";
import { FaRegHandshake } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";

export default function InterItem({ titel, IconName }: { titel: string; IconName: string }) {
  const icon = () => {
    switch (IconName) {
      case "history":
        return <GoHistory className="fill-[#FF9332]" size={40} />;
      case "handshake":
        return <FaRegHandshake className="fill-[#FF9332]" size={40} />;
      case "compare":
        return <FaCodeCompare className="fill-[#FF9332]" size={40} />;
      case "coins":
        return <FaCoins className="fill-[#FF9332]" size={40} />;
      default:
        return null;
    }
  };

  return (
    <div className="w-32 h-32 rounded-xl bg-soft text-white flex flex-col gap-4 items-center justify-center cursor-pointer hover:-translate-y-2 transition-all hover:border-primary border border-soft  ">
      {icon()}
      <p className="text-sm">{titel}</p>
    </div>
  );
}
