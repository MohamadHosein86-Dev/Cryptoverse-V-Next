import Introduction from "./components/home/Introduction/Introduction";
import CoinTableHomePage from "./components/home/cointable/CoinTableHomePage";
import AboutCrypto from "./components/home/aboutcrypto/AboutCrypto";
import { Suspense } from "react";
import Spinner from "./components/spinner/Spinner";

export default function Home() {
  return (
    <main>
      <Introduction />
      <Suspense fallback={<Spinner />}>
        <CoinTableHomePage />
      </Suspense>
      <AboutCrypto />
    </main>
  );
}
