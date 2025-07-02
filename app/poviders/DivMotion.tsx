"use cleint";
import { motion } from "framer-motion";

export default function DivMotion({ children, className, delay }: { delay: number; children: React.ReactNode; className: string }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.75 }}>
      {children}
    </motion.div>
  );
}
