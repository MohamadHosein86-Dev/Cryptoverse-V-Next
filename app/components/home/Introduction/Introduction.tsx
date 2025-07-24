import Image from "next/image";
import InterItem from "./InterItem";
import TitelAnimation from "../../animation/TitelAnimation";

export default function Introduction() {
  return (
    <div className="w-full max-sm:h-140 sm:h-120 flex justify-center items-center -mt-5 sm:-mt-26 sm:pt-0 sm:pb-0 mb-10 sm:mb-0 ">
      <div className="flex flex-col justify-center items-center relative">
        <div className="absolute w-full h-100 max-sm:hidden sm:block ">
          <Image src="/landingPage/Intro.webp" alt="intro-bg" fill className=" object-cover " />
        </div>
        <div className=" absolute shadow-[0_0_10rem_9rem_#1B112B]"></div>
        <div className="w-full z-10 flex flex-col justify-center items-center gap-8 max-sm:w-80   lg:w-200 ">
          <TitelAnimation delay={0.3} className="flex flex-col items-center justify-center gap-4 w-full">
            <h1 className=" text-xl sm:text-2xl font-bold text-white text-center">Cryptocurrency Price and Trend Monitor</h1>
            <p className="text-center text-gray-300 ">Monitor cryptocurrency prices and trends with our streamlined tracker, designed to help you manage your portfolio and make informed investment decisions.</p>
          </TitelAnimation>
          <TitelAnimation delay={0.5} className="w-full flex items-center justify-center flex-wrap max-sm:gap-6 sm:gap-4 md:gap-8">
            <InterItem titel="Price tracking" IconName="coins" />
            <InterItem titel="Historical price" IconName="history" />
            <InterItem titel="Compare price" IconName="compare" />
            <InterItem titel="User friendly" IconName="handshake" />
          </TitelAnimation>
        </div>
      </div>
    </div>
  );
}
