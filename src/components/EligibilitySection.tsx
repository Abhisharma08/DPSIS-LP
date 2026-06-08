"use client";

import { motion } from "framer-motion";
import { AgeGradeTable } from "./AgeGradeTable";

export default function EligibilitySection() {
  const contentVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative overflow-hidden bg-white section-padding-y border-b border-slate-100">
      <div className="section-container grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Info Column */}
        <motion.div
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="lg:col-span-6 space-y-6 text-center lg:text-left"
        >
          <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full w-fit">
            <span className="text-[#2563EB] text-[10px] sm:text-xs font-black tracking-widest uppercase">
              Admission Requirements
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[48px] md:leading-[1.15] font-black text-[#0A2540] tracking-tight font-headline">
            Age vs Grade Eligibility
          </h2>
          
          <p className="text-slate-650 text-base sm:text-lg leading-relaxed font-body">
            To ensure optimal learning and development, DPS International School follows structured age criteria for early years and primary school admissions.
          </p>

          <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-body">
            Please refer to the eligibility matrix on the right to identify the correct entry grade level for your child based on their age as of 1st April of the academic year.
          </p>
        </motion.div>

        {/* Right Table Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 flex justify-center w-full"
        >
          <div className="w-full max-w-md">
            <AgeGradeTable />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
