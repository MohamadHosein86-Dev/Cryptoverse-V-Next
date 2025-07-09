import Image from "next/image";
import dynamic from "next/dynamic";
const InterItem = dynamic(() => import("./InterItem"), {
  ssr: false
});
const TitelAnimation = dynamic(() => import("../../animation/TitelAnimation"), {
  ssr: false
});

export default function Introduction() {
  return (
    <div className="w-full max-sm:h-140 sm:h-120 flex justify-center items-center max-sm:mt-10 sm:pt-10 sm:pb-0 ">
      <div className="flex flex-col justify-center items-center relative">
        <div className="absolute w-full h-[400px] max-sm:hidden sm:block ">
          <Image src="/landingPage/Intro.webp" alt="intro-bg" fill className=" object-cover " />
        </div>
        <div className=" absolute shadow-[0_0_10rem_9rem_#1B112B]"></div>
        <div className="w-full z-10 flex flex-col justify-center items-center gap-8 max-sm:w-[20rem] max-sm2:w-[24rem] sm2:w-[35rem] md2:w-[45rem] lg:w-[50rem]">
          <TitelAnimation delay={0.3} className="flex flex-col items-center justify-center gap-4 w-full">
            <h1 className=" text-normal sm:text-2xl font-bold text-white text-center">Cryptocurrency Price and Trend Monitor</h1>
            <p className="text-center text-snow ">Monitor cryptocurrency prices and trends with our streamlined tracker, designed to help you manage your portfolio and make informed investment decisions.</p>
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
