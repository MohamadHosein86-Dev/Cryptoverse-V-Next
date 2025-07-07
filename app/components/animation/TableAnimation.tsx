"use client";
import { motion } from "framer-motion";

export default function TableAnimation({ children, index }: { children: React.ReactNode; index: number }) {
  return (
    <motion.tr
      className="hover:bg-[#1A1A1A] text-white cursor-pointer max-sm:text-sm"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        delay: (index % 8) * 0.2,
        duration: 0.5
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.tr>
  );
}
