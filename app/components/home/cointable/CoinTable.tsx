import Link from "next/link";

export default async function CoinTable() {
  return (
    <div className=" flex flex-col items-center gap-4 mx-auto ">
      <table className="bg-dark w-7/12 rounded-xl">
        <thead>
          <tr className="text-sm text-snow ">
            <th className="max-sm:hidden sm:block max-sm:w-[1rem] sm2:w-[4rem] text-start px-6 pb-4 pt-5 font-light ">#</th>
            <th className=" w-[15rem]  p-4 text-start pt-5 font-light ">Name</th>
            <th className="w-[5rem] p-4 text-start pt-5 font-light ">Price</th>
            <th className="w-[0rem] p-4 text-start pt-5 font-light ">24h Change</th>
            <th className="p-4 text-start pt-5 font-light  max-sm:hidden md3:table-cell md3:pr-4 lg:pr-0">Total volume</th>
            <th className="p-4 text-start pt-5 font-light  max-sm:hidden lg:table-cell lg:pr-4 ">Market cap</th>
          </tr>
        </thead>
        {/*  <tbody>
          {coins?.slice(0, 5).coins?.map((coin) => {
            return (
              <tr key={coin.id} className="hover:bg-[#1A1A1A] text-white cursor-pointer max-sm:text-sm">
                <td className="max-sm:hidden sm:table-cell px-6 py-4 text-start">{coin.market_cap_rank}</td>
                <td className="flex items-center gap-3 p-4">
                  <img className="h-8" src={coin.image} alt={coin.id} />
                  <p>{coin.name}</p>
                  <p className="max-sm:hidden sm2:block">.</p>
                  <p className="uppercase max-sm:hidden sm2:block">{coin.symbol}</p>
                </td>
                <td className="p-4">{coin.current_price.toLocaleString()}$</td>
                <td className="p-4 text-sm">
                  {coin.price_change_percentage_24h >= 0 ? (
                    <div className="bg-[#1C291E] text-[#6ccf59] p-1 w-[max-content] flex items-center gap-1 rounded-lg">
                      <BiSolidUpArrow className="fill-[#6ccf59]" size={10} />
                      {coin.price_change_percentage_24h.toFixed(2)}%
                    </div>
                  ) : (
                    <div className="bg-[#310D0D] text-[#FF4D4D] p-1 w-[max-content] flex items-center gap-1 rounded-lg">
                      <BiSolidDownArrow className="fill-[#FF4D4D]" size={10} />
                      {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
                    </div>
                  )}
                </td>
                <td className="p-4 max-sm:hidden md3:table-cell md3:pr-6 lg:pr-0">{coin.total_volume.toLocaleString()}</td>
                <td className="p-4 max-sm:hidden lg:table-cell lg:pr-6">{coin.market_cap.toLocaleString()}</td>
              </tr>
            );
          })}
        </tbody> */}
      </table>
      <Link href="/coins" className="px-4 py-2  mx-auto rounded-2xl border-1 text-white border-[#404040] bg-black hover:bg-dark-hover transition-all">
        See more
      </Link>
    </div>
  );
}
