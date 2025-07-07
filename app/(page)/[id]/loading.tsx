"use client";
import Spinner from "@/app/components/spinner/Spinner";

export default function HomeLoading() {
  return (
    <section className=" bg-black relative pt-15 h-screen  ">
      <Spinner />
    </section>
  );
}
