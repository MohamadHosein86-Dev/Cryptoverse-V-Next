"use client";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutCryptoItem({ titel, revers = false, description, image }: { titel: string; revers?: boolean; description: string; image: string }) {
  const sec = useRef<HTMLDivElement>(null);
  const isInView = useInView(sec, { once: true });
  return (
    <div
      style={{
        transform: isInView ? "none" : "translateY(50px)",
        opacity: isInView ? 1 : 0,
        transitionDelay: ".3s",
        transitionDuration: "0.75s"
      }}
      ref={sec}
      className={` max-sm:w-full xl:w-3/4 5xl:w-1/2 flex max-sm:flex-col md:flex-row ${revers ? "xl:flex-row-reverse" : "xl:flex-row "} justify-center items-center gap-10`}
    >
      <div className="max-sm:w-full mx-auto text-center sm:text-left text-white md3:w-1/2 flex flex-col gap-2 md:order-1">
        <h3 className="text-2xl font-bold">{titel}</h3>
        <p className="text-sm leading-7 mx-auto sm:mx-0 sm:text-normal w-10/12 text-snow text-justify">{description}</p>
      </div>
      <img className="max-sm:h-60 md:h-48 md:h-64" src={image} alt="what-is-crypto-img" />
    </div>
  );
}
