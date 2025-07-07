import { CoinDetailsType } from "@/app/types/DataTypes";
import { BiSolidUpArrow } from "react-icons/bi";

export default async function Details({ coin }: { coin: CoinDetailsType }) {
  return (
    <table className="bg-[#0d0d0d] text-white rounded-xl max-sm:w-full xl:w-[62.5rem]">
      <thead>
        <tr className="text-sm">
          <th className="max-sm:hidden sm:block max-sm:w-[1rem] sm2:w-[4rem] text-start px-6 pb-4 pt-5 font-light text-[#999999]">#</th>
          <th className="max-sm:w-[15rem] sm2:w-[23rem] p-4 text-start pt-5 font-light text-[#999999]">Name</th>
          <th className="w-[5rem] p-4 text-start pt-5 font-light text-[#999999]">Price</th>
          <th className="w-[8.3rem] p-4 text-start pt-5 font-light text-[#999999]">24h Change</th>
          <th className="p-4 text-start pt-5 font-light text-[#999999] max-sm:hidden md3:table-cell md3:pr-4 lg:pr-0">Total volume</th>
          <th className="p-4 text-start pt-5 font-light text-[#999999] max-sm:hidden lg:table-cell lg:pr-4 ">Market cap</th>
        </tr>
      </thead>
      <tbody>
        <tr className="hover:bg-[#1A1A1A] text-white cursor-pointer max-sm:text-sm">
          <td className="max-sm:hidden sm:table-cell px-6 py-4 text-start">{coin.market_cap_rank}</td>
          <td className="flex items-center gap-3 p-4">
            <img className="h-8" src={coin.image.large} alt={coin.id} />
            <p>{coin.name}</p>
            <p className="max-sm:hidden sm2:block">.</p>
            <p className="uppercase max-sm:hidden sm2:block">{coin.symbol}</p>
          </td>
          <td className="p-4">{coin.market_data.current_price.usd.toLocaleString()}$</td>
          <td className="p-4 text-sm">
            {coin.market_data.price_change_percentage_24h >= 0 ? (
              <div className="bg-[#1C291E] text-[#6ccf59] p-1 w-[max-content] flex items-center gap-1 rounded-lg">
                <BiSolidUpArrow className="fill-[#6ccf59]" size={10} />
                {coin.market_data.price_change_percentage_24h.toFixed(2)}%
              </div>
            ) : (
              <div className="bg-[#310D0D] text-[#FF4D4D] p-1 w-[max-content] flex items-center gap-1 rounded-lg">
                <BiSolidUpArrow className="fill-[#FF4D4D]" size={10} />
                {Math.abs(coin.market_data.price_change_percentage_24h).toFixed(2)}%
              </div>
            )}
          </td>
          <td className="p-4 max-sm:hidden md3:table-cell md3:pr-6 lg:pr-0">{coin.market_data.total_volume.usd.toLocaleString()}</td>
          <td className="p-4 max-sm:hidden lg:table-cell lg:pr-6">{coin.market_data.market_cap.usd.toLocaleString()}</td>
        </tr>
      </tbody>
    </table>
  );
}
