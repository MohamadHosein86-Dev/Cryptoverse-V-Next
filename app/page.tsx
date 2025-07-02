import AboutCrypto from "./components/home/aboutcrypto/AboutCrypto";
import CoinTable from "./components/home/cointable/CoinTable";
import Introduction from "./components/home/Introduction/Introduction";

export default function Home() {
  return (
    <main className=" bg-dark ">
      <Introduction />
      <CoinTable />
      <AboutCrypto />
    </main>
  );
}
