import Link from "next/link";

export default function Logo() {
  return (
    <Link className="text-3xl text-primary font-semibold flex" href="/">
      <span>C</span>
      <p className="text-white">rypto</p>
      <span>V</span>
      <p className="text-white">erse</p>
      <span>.</span>
    </Link>
  );
}
