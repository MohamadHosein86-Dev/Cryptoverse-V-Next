import { navLinks } from "@/app/data/Data";
import Link from "next/link";

export default function IntroductionFooter() {
  return (
    <div className="w-[20%] flex  justify-between ">
      <div className=" flex  flex-col justify-between">
        {navLinks.map((res) => (
          <Link href={res.href} key={res.id}>
            {res.titel}
          </Link>
        ))}
      </div>
      <ul>
        <h2 className="font-semibold text-lg text-gray-400 mb-4 ">Socials</h2>
        <li className="p-1 hover:text-gray-700 hover:cursor-pointer transition duration-200">Discord</li>
        <li className="p-1 hover:text-gray-700 hover:cursor-pointer transition duration-200">Instagram</li>
        <li className="p-1 hover:text-gray-700 hover:cursor-pointer transition duration-200">Twitter</li>
        <li className="p-1 hover:text-gray-700 hover:cursor-pointer transition duration-200">Facebook</li>
      </ul>
    </div>
  );
}
