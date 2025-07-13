import Introduction from "./components/home/Introduction/Introduction";
import CoinTableHomePage from "./components/home/cointable/CoinTableHomePage";
import AboutCrypto from "./components/home/aboutcrypto/AboutCrypto";
import { Suspense } from "react";
import LoadingTable from "./components/table/LoadingTable";

export default function Home() {
  return (
    <main className=" min-h-[86.2vh]  flex justify-start flex-col items-center mt-20  container ">
      <Introduction />
      <Suspense fallback={<LoadingTable />}>
        <CoinTableHomePage />
      </Suspense>
      <AboutCrypto />
    </main>
  );
}
