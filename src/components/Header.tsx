"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/85 backdrop-blur-lg border-b border-slate-200/60 shadow-sm">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 py-3.5 flex items-center justify-between gap-4">

        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="flex min-w-0 items-center gap-3"
        >
          <Image
            src="https://cdn.lugc.link/ba71d94d-c3cf-44c7-9764-294540f5cc26/-/preview/108x76/-/format/auto/"
            alt="DPS International School"
            width={108}
            height={76}
            priority
            className="h-11 w-auto object-contain sm:h-14 transition-transform duration-300 hover:scale-[1.02]"
          />
        </motion.div>

        {/* Button */}
        <motion.div 
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="shrink-0"
        >
          <motion.button 
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#F59E0B] text-[#0A2540] font-bold px-4 py-2 text-xs sm:px-6 sm:py-2.5 sm:text-sm rounded-xl shadow-md shadow-amber-500/10 hover:bg-[#e08e0a] hover:shadow-lg transition-all duration-200"
          >
            Admission Open 2026-27
          </motion.button>
        </motion.div>

      </div>
    </header>
  );
}
