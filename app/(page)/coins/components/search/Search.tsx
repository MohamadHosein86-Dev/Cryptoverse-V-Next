"use client";
import { IoSearchOutline } from "react-icons/io5";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

const Search = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [query, setQuery] = useState("");

  useEffect(() => {
    setQuery(searchParams.get("search") || "");
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
    if (query) {
      params.set("search", query);
    } else {
      params.delete("search");
    }
    router.push(`/coins?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSubmit} className="max-sm:w-[19.5rem] mb-8 sm:w-[27rem] lg:w-1/2 xl:w-1/3 h-11 flex gap-3 items-center pr-0 p-4 text-white bg-dark rounded-xl">
      <IoSearchOutline className="fill-[#0b8bed]" size={25} />
      <input type="text" placeholder="Search..." className="w-full bg-transparent text-sm" value={query} onChange={(e) => setQuery(e.target.value)} />
      <button type="submit" className=" text-white hidden text-sm ml-12  lg:block bg-primary py-2 px-3 rounded-md ">
        search
      </button>
    </form>
  );
};

export default Search;
