import Link from "next/link";
import { BiSolidUpArrow } from "react-icons/bi";
import TableAnimation from "../animation/TableAnimation";
import { CoinType } from "@/app/types/DataTypes";

export default function Table({ coins }: { coins: CoinType[] }) {
  return (
    <table className="bg-dark z-10 w-[90%] sm:w-[58%] rounded-xl">
      <thead>
        <tr className="text-sm text-snow ">
          <th className="max-sm:hidden sm:block max-sm:w-[1rem] sm2:w-[4rem] text-start px-6 pb-4 pt-5 font-light ">#</th>
          <th className=" w-[15rem]  p-4 text-start pt-5 font-light ">Name</th>
          <th className="w-[5rem] p-4 text-start pt-5 font-light ">Price</th>
          <th className="w-[10.5rem] p-4 text-start pt-5 font-light ">24h Change</th>
          <th className="p-4 text-start pt-5 font-light  max-sm:hidden md3:table-cell md3:pr-4 lg:pr-0">Total volume</th>
          <th className="p-4 text-start pt-5 font-light  max-sm:hidden lg:table-cell lg:pr-4 ">Market cap</th>
        </tr>
      </thead>
      <tbody>
        {coins?.map((coin, index: number) => (
          <TableAnimation index={index} key={coin.id}>
            <td className="max-sm:hidden sm:table-cell px-6 py-4 text-start">
              <Link href={`/${coin.id}`}>{coin.market_cap_rank}</Link>
            </td>
            <td className="p-4">
              <Link href={`/${coin.id}`} className="flex items-center gap-3">
                <img className=" h-8 " src={coin.image} alt={coin.id} />
                <p>{coin.name}</p>
                <p className="max-sm:hidden sm2:block">.</p>
                <p className="uppercase max-sm:hidden sm2:block">{coin.symbol}</p>
              </Link>
            </td>
            <td className="p-4">
              <Link href={`/${coin.id}`}>{coin.current_price.toLocaleString()}$</Link>
            </td>
            <td className="p-4 text-sm">
              <Link href={`/${coin.id}`}>
                {coin.price_change_percentage_24h >= 0 ? (
                  <div className="bg-[#1C291E] text-[#6ccf59] p-1 w-[max-content] flex items-center gap-1 rounded-lg">
                    <BiSolidUpArrow className="fill-[#6ccf59]" size={10} />
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </div>
                ) : (
                  <div className="bg-[#310D0D] text-[#FF4D4D] p-1 w-[max-content] flex items-center gap-1 rounded-lg">
                    <BiSolidUpArrow className="fill-[#FF4D4D]" size={10} />
                    {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
                  </div>
                )}
              </Link>
            </td>
            <td className="p-4 max-sm:hidden md3:table-cell md3:pr-6 lg:pr-0">
              <Link href={`/${coin.id}`}>{coin.total_volume.toLocaleString()}</Link>
            </td>
            <td className="p-4 max-sm:hidden lg:table-cell lg:pr-6">
              <Link href={`/${coin.id}`}>{coin.market_cap.toLocaleString()}</Link>
            </td>
          </TableAnimation>
        ))}
      </tbody>
    </table>
  );
}
