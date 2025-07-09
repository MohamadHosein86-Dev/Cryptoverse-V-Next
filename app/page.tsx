import Introduction from "./components/home/Introduction/Introduction";
import CoinTableHomePage from "./components/home/cointable/CoinTableHomePage";
import AboutCrypto from "./components/home/aboutcrypto/AboutCrypto";

export default function Home() {
  return (
    <main>
      <Introduction />
      <CoinTableHomePage />
      <AboutCrypto />
    </main>
  );
}
