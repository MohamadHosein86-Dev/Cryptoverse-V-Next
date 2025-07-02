import { aboutcrypto } from "@/app/data/Data";
import AboutCryptoItem from "./aboutcryptoitem/AboutCryptoItem";

export default function AboutCrypto() {
  return (
    <section className="w-full flex flex-col items-center gap-10 justify-center p-6 mt-16 ">
      {aboutcrypto.map((res, index) => (
        <AboutCryptoItem revers={index % 2 == 1} image={res.image} titel={res.titel} description={res.description} key={res.id} />
      ))}
    </section>
  );
}
