import { footerLinks, navLinks } from "@/app/data/Data";
import Link from "next/link";

export default function IntroductionFooter() {
  return (
    <div className="w-[20%] flex  justify-between ">
      <div className=" flex  flex-col justify-between">
        {navLinks.map((res) => (
          <Link className=" hover:text-primary text-white transition-all " href={res.href} key={res.id}>
            {res.titel}
          </Link>
        ))}
      </div>
      <ul className=" flex  flex-col justify-between ">
        <h2 className="font-semibold text-lg text-primary  mb-4 ">Socials</h2>
        {footerLinks.map((res) => (
          <Link className=" p-1 hover:text-primary text-white transition-all " key={res.id} href={res.href}>
            {res.titel}
          </Link>
        ))}
      </ul>
    </div>
  );
}
