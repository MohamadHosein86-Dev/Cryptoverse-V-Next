import { PageProps } from "@/.next/types/app/page";
import { getCoin } from "@/app/servises/Coins";
import Details from "./components/details/Details";
import Description from "./components/description/Description";
import ChartWrapper from "@/app/components/wrappers/ChartWrapper";

type Props = PageProps & {
  params: {
    id: string;
  };
};
export default async function CoinDetails({ params }: Props) {
  const coin = await getCoin(params.id);

  return (
    <div className="w-full text-white min-h-[86.5vh] flex justify-center items-start py-4">
      <div className="flex flex-col justify-start max-sm:p-4 md2:p-0 items-center gap-6 max-sm:w-full  xl:w-250 ">
        <Details coin={coin} />
        <ChartWrapper />
        <Description name={coin.name} description={coin.description.en} />
      </div>
    </div>
  );
}
