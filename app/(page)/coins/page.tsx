import CoinTableCoinsPage from "@/app/components/home/cointable/CoinTableCoinsPage";
import PaginationComponent from "@/app/(page)/coins/components/pagination/Pagination";
import Search from "@/app/(page)/coins/components/search/Search";
import { paginationCoins } from "@/app/servises/Coins";
import React from "react";
import { PageProps } from "@/.next/types/app/page";

type Props = PageProps & {
  searchParams: {
    page?: string;
    search?: string;
  };
};

export default async function CoinsPage({ searchParams }: Props) {
  const page = searchParams.page || "1";
  const search = searchParams.search?.toLowerCase() || "";

  const coins = await paginationCoins(page);
  const filteredCoins = coins.filter((coin) => coin.name.toLowerCase().includes(search) || coin.symbol.toLowerCase().includes(search));

  return (
    <div className="min-h-[86.2vh]  flex justify-start flex-col items-center mt-20 ">
      <Search />
      <CoinTableCoinsPage coins={filteredCoins} />
      {!search && <PaginationComponent totalPages={10} />}
    </div>
  );
}
