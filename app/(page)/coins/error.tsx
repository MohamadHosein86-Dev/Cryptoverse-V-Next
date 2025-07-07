"use client";

import Link from "next/link";

export default function CoinsPageError({ error }: { error: { message: string } }) {
  return (
    <section className=" bg-black h-screen flex flex-col gap-8 items-center    ">
      <div className=" mx-4 px-4  py-8 rounded-2xl  sm:mx-auto mt-52 border border-snowBorder font-semibold cursor-pointer  sm:w-3/5  text-red-500 text-center text-sm sm:text-lg">
        <p>{error.message} - Error while loading currencies. Please try again later</p>
      </div>
      <Link href="/" className="px-4 py-2  rounded-2xl border border-snowBorder text-white bg-black mx-auto hover:bg-dark-hover transition-all">
        Home
      </Link>
    </section>
  );
}
