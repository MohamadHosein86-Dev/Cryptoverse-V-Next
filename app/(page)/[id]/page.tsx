import { getCoin } from "@/app/servises/Coins";
import Details from "./components/details/Details";
import IntroCoinDetails from "./components/introCoinDetails/IntroCoinDetails";
import Description from "./components/description/Description";

export default async function CoinDetails({ params }: { params: { id: string } }) {
  const coin = await getCoin(params.id);

  return (
    <div className="w-full text-white min-h-[86.5vh] flex justify-center items-start py-4">
      <div className="flex flex-col justify-start max-sm:p-4 md2:p-0 items-center gap-6 max-sm:w-full  xl:w-[62.5rem]">
        <Details coin={coin} />
        <IntroCoinDetails />
        <Description name={coin.name} description={coin.description.en} />
      </div>
    </div>
  );
}
