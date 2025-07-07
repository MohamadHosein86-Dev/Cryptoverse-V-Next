"use client";
import Spinner from "@/app/components/spinner/Spinner";
import LoadingTable from "@/app/components/table/LoadingTable";

export default function CoinsPageLoading() {
  return (
    <section className=" bg-black relative pt-15 h-screen  ">
      <Spinner />
      <LoadingTable />
    </section>
  );
}
