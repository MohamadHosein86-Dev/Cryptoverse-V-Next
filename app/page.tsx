import AboutCrypto from "./components/home/aboutcrypto/AboutCrypto";
import CoinTableHomePage from "./components/home/cointable/CoinTableHomePage";
import Introduction from "./components/home/Introduction/Introduction";

export default function Home() {
  return (
    <main>
      <Introduction />
      <CoinTableHomePage />
      <AboutCrypto />
    </main>
  );
}
