"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 py-12 md:py-16">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-center text-center space-y-6 md:space-y-8">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="https://cdn.lugc.link/ba71d94d-c3cf-44c7-9764-294540f5cc26/-/preview/108x76/-/format/auto/"
            alt="DPS International School"
            width={120}
            height={90}
            className="object-contain w-24 sm:w-28 md:w-[120px] h-auto transition-transform duration-300 hover:scale-[1.02]"
          />
        </motion.div>

        {/* Modern thin divider */}
        <div className="w-full max-w-[600px] border-t border-slate-200/60"></div>

        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-3 text-slate-500 text-xs sm:text-sm leading-relaxed font-body font-medium max-w-xl px-4"
        >
          <p className="text-slate-600">
            ©2004-2023 <span className="font-bold text-[#0A2540]">DPS International School Pte. Ltd.</span> All rights reserved.
          </p>

          <p>
            <span className="font-bold text-slate-650">CPE Registration No:</span> 201109459N
          </p>

          <p>
            <span className="font-bold text-slate-650">Registration Period:</span> 22 August 2024 to 21st August 2028
          </p>
        </motion.div>

      </div>
    </footer>
  );
}
