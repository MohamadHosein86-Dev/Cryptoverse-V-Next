import { getCoins } from "@/app/servises/Coins";
import Link from "next/link";
import Table from "../../table/Table";

export default async function CoinTableHomePage() {
  const data = await getCoins();
  const coins = data.slice(0, 5);

  return (
    <div className=" flex flex-col items-center gap-4 mx-auto ">
      <Table coins={coins} />
      <Link href="/coins" className="px-4 py-2  mx-auto rounded-2xl border-1 text-white border-[#404040] bg-black hover:bg-dark-hover transition-all">
        See more
      </Link>
    </div>
  );
}
