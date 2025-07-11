"use client";

import Spinner from "./components/spinner/Spinner";
import LoadingTable from "./components/table/LoadingTable";

export default function HomeLoading() {
  return (
    <section className=" bg-black relative pt-15 h-screen  ">
      <Spinner />
      <LoadingTable />
    </section>
  );
}
