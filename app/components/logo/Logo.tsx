import Link from "next/link";

export default function Logo() {
  return (
    <Link className="text-2xl text-primary flex justify-center md:justify-normal font-semibold " href="/">
      <span>C</span>
      <p className="text-white">rypto</p>
      <span>V</span>
      <p className="text-white">erse</p>
      <span>.</span>
    </Link>
  );
}
