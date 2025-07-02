import React from "react";
import { FaCoins } from "react-icons/fa";
/* import { GoHistory } from "react-icons/go";
import { FaRegHandshake } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6"; */

export default function InterItem({ titel, IconName }: { titel: string; IconName?: string }) {
  return (
    <div className="w-32 h-32 rounded-xl bg-[#1A1A1A] text-white flex flex-col gap-4 items-center justify-center cursor-pointer hover:-translate-y-2 transition-all hover:border-[#FF9332] border border-[#1A1A1A] hover:shadow-[#FF9332_0_15px_40px_-25px]">
      <FaCoins className="fill-[#FF9332]" size={40} />
      <p className="text-sm">{titel}</p>
    </div>
  );
}
