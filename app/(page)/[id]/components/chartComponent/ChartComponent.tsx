"use client";
import SelectDays from "../selectDays/SelectDays";
import TogglePriceType from "../togglePriceType/TogglePriceType";
import Spinner from "@/app/components/spinner/Spinner";
import dynamic from "next/dynamic";
import { fetchChartData } from "@/app/servises/Coins";
import { useState } from "react";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { SelectChangeEvent } from "@mui/material";

const DataChart = dynamic(() => import("../dataChart/DataChart"), {
  ssr: false
});

export default function ChartComponent() {
  const params = useParams();
  const id = params.id as string;

  const [priceType, setPriceType] = useState<string>("prices");
  const [days, setDays] = useState<number | string>(30);

  const { data: chartData, isLoading, error } = useQuery({ queryKey: ["chartData", id, days, priceType], queryFn: () => fetchChartData(id, days, priceType), enabled: !!id });

  const handleDaysChange = (event: SelectChangeEvent<number | string>) => {
    setDays(event.target.value as number | string);
  };
  const handlePriceTypeChange = (_event: React.MouseEvent<HTMLElement>, newPriceType: string) => {
    if (newPriceType) {
      setPriceType(newPriceType);
    }
  };


  if (isLoading) return <Spinner />;
  if (!chartData || error)
    return (
      <div className=" bg-black h-screen  w-1/2 flex flex-col gap-8 items-center    ">
        <div className=" mx-4 px-4  py-8 rounded-2xl  sm:mx-auto mt-8 border border-snowBorder font-semibold cursor-pointer  sm:w-3/5  text-red-500 text-center text-sm sm:text-lg">
          <p>{error?.message} - Error while loading currencies. Please try again later</p>
        </div>
      </div>
    );
  return (
    <div className=" bg-dark rounded-xl p-4 w-full">
      <SelectDays days={days} handleDaysChange={handleDaysChange} pTag={false} />
      <TogglePriceType priceType={priceType} handlePriceTypeChange={handlePriceTypeChange} />
      <DataChart chartData={chartData} />
    </div>
  );
}
