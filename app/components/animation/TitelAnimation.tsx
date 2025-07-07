"use client";
import { motion } from "framer-motion";

export default function TitelAnimation({ children, delay, className }: { className: string; children: React.ReactNode; delay: number }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: delay, duration: 0.75 }}>
      {children}
    </motion.div>
  );
}
