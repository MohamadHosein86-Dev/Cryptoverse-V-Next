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
    <form className=" max-sm:w-[19.5rem] flex items-center mb-8 sm:w-[27rem] lg:w-1/2 h-11 ">
      <div onSubmit={handleSubmit} className=" flex gap-3 w-full items-center pr-0 p-4 text-white bg-dark rounded-xl">
        <IoSearchOutline className="fill-[#0b8bed]" size={25} />
        <input type="text" placeholder="Search..." className="w-full bg-transparent text-sm" value={query} onChange={(e) => setQuery(e.target.value)} />
      </div>
      <button type="submit" className=" text-white hidden text-sm ml-4  lg:block bg-primary py-3 px-5 rounded-md ">
        search
      </button>
    </form>
  );
};

export default Search;
