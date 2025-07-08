import { navLinks } from "@/app/data/Data";
import Link from "next/link";

export default function NavBarDescktop() {
  return (
    <nav className="sm:flex max-sm:hidden gap-3">
      {navLinks.map((res) => (
        <Link key={res.id} className="hover:text-primary text-white transition-all p-1" href={res.href}>
          {res.titel}
        </Link>
      ))}
    </nav>
  );
}
