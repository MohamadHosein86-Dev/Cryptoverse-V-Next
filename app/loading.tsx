"use client";
import { Skeleton } from "@mui/material";
import { motion } from "framer-motion";

export default function HomeLoading() {
  return (
    <section className=" bg-black relative pt-15 h-screen  ">
      <div className="w-45 h-45 border-4 border-gray-300 border-t-primary rounded-full animate-spin mx-auto mb-15 "></div>
      <table className="bg-dark z-[100000]  mx-auto rounded-xl">
        <thead>
          <tr className="text-sm text-snow ">
            <th className="max-sm:hidden sm:block max-sm:w-[1rem] sm:w-[4rem] text-start px-6 pb-4 pt-5 font-light ">#</th>
            <th className="max-sm:w-[15rem] sm2:w-[20rem] p-4 text-start pt-5 font-light ">Name</th>
            <th className="w-[5rem] p-4 text-start pt-5 font-light ">Price</th>
            <th className="w-[8.3rem] p-4 text-start pt-5 font-light ">24h Change</th>
            <th className="p-4 text-start pt-5 font-light  max-sm:hidden md3:table-cell md3:pr-4 lg:pr-0">Total volume</th>
            <th className="p-4 text-start pt-5 font-light  max-sm:hidden lg:table-cell lg:pr-4 ">Market cap</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(5)].map((_item, index) => (
            <motion.tr key={index}>
              <td className="px-6 py-4 max-sm:hidden sm:table-cell">
                <Skeleton sx={{ bgcolor: "grey.900" }} height={30} width={15} animation="wave" variant="rounded" />
              </td>
              <td className="p-4">
                <Skeleton sx={{ bgcolor: "grey.900" }} height={30} width={200} animation="wave" variant="rounded" />
              </td>
              <td className="p-4">
                <Skeleton sx={{ bgcolor: "grey.900" }} height={30} animation="wave" variant="rounded" />
              </td>
              <td className="p-4">
                <Skeleton sx={{ bgcolor: "grey.900" }} height={30} animation="wave" variant="rounded" />
              </td>

              <td className="p-4 max-sm:hidden md3:table-cell">
                <Skeleton sx={{ bgcolor: "grey.900" }} height={30} animation="wave" variant="rounded" />
              </td>

              <td className="p-4 max-sm:hidden lg:table-cell">
                <Skeleton sx={{ bgcolor: "grey.900" }} height={30} animation="wave" variant="rounded" />
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
