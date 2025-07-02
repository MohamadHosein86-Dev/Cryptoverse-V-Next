"use client";
import { motion } from "framer-motion";
import InterItem from "./InterItem";

export default function Introduction() {
  return (
    <div className="w-full max-sm:h-[35rem] sm:h-[30rem] flex justify-center items-center max-sm:mt-10 sm:pt-10 sm:pb-0 ">
      <div className="flex flex-col justify-center items-center relative">
        <img className=" absolute max-sm:hidden sm2:block" src={"/landingPage/Intro.webp"} alt="intro-bg" />
        <div className=" absolute shadow-[0_0_10rem_9rem_#1B112B]"></div>
        <div className="w-full z-10 flex flex-col justify-center items-center gap-8 max-sm:w-[20rem] max-sm2:w-[24rem] sm2:w-[35rem] md2:w-[45rem] lg:w-[50rem]">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.75 }} className="flex flex-col items-center justify-center gap-4 w-full">
            <h1 className=" text-normal sm:text-2xl font-bold text-white text-center">Cryptocurrency Price and Trend Monitor</h1>
            <p className="text-center text-snow ">Monitor cryptocurrency prices and trends with our streamlined tracker, designed to help you manage your portfolio and make informed investment decisions.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.75 }} className="w-full flex items-center justify-center flex-wrap max-sm:gap-6 sm:gap-4 md2:gap-8">
            <InterItem titel="Price tracking" IconName="FaCoins" />
            <InterItem titel="Historical price" IconName="FaCoins" />
            <InterItem titel="Compare price" IconName="FaCoins" />
            <InterItem titel="User friendly" IconName="FaCoins" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
