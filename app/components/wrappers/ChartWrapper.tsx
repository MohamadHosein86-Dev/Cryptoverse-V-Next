"use client";
import dynamic from "next/dynamic";

const ChartComponent = dynamic(() => import("@/app/(page)/[id]/components/chartComponent/ChartComponent"), {
  ssr: false
});
export default function ChartWrapper() {
  return <ChartComponent />;
}
