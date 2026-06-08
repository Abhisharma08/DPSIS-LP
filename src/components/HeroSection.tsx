"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import EnquiryForm from "./EnquiryForm";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const fadeRightVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.4 },
    },
  };

  return (
    <section
      className="relative min-h-[calc(100vh-73px)] flex items-center overflow-hidden bg-[#0A2540]"
    >
      {/* Background Image */}
      <Image
        src="https://cdn.lugc.link/7309a6b8-b380-422e-96c6-99656dcab271/-/stretch/off/-/resize/x1024/-/format/auto/"
        alt="DPS International School Campus"
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Modern gradient overlay - Navy base fading out gracefully */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540]/95 via-[#0A2540]/85 to-transparent z-0 max-lg:bg-gradient-to-b max-lg:from-[#0A2540]/95 max-lg:via-[#0A2540]/85 max-lg:to-[#0A2540]/60" />

      {/* Section Container */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 py-[60px] md:py-[100px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-center lg:items-start space-y-6 text-center lg:text-left"
          >
            {/* BADGE */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full w-fit shadow-lg shadow-black/5"
            >
              <span className="h-2 w-2 bg-[#F59E0B] rounded-full animate-pulse"></span>
              <span className="text-[#F59E0B] text-[10px] sm:text-xs font-black tracking-widest uppercase">
                Admissions Open 2026-2027
              </span>
            </motion.div>

            {/* HEADING */}
            <motion.h1
              variants={itemVariants}
              className="font-black text-white leading-[1.1] text-4xl sm:text-5xl lg:text-[64px]"
            >
              DPS International
              <br />
              School.
            </motion.h1>
            {/* SUBHEADING */}
            <motion.p
              variants={itemVariants}
              className="text-white/90 text-lg sm:text-xl font-semibold max-w-xl leading-relaxed font-body"
            >
              Admissions for the current academic year (2026-2027) are open.
            </motion.p>

            {/* DESCRIPTION */}
            <motion.div
              variants={itemVariants}
              className="flex items-stretch justify-center lg:justify-start space-x-4 text-left"
            >
              <div className="hidden sm:block w-1 bg-[#F59E0B] rounded-full"></div>
              <p className="text-white/70 text-sm sm:text-base max-w-md leading-relaxed font-normal font-body">
                Enroll your child in DPS International School and provide them with the foundation they need to excel in an ever-changing world.
              </p>
            </motion.div>


          </motion.div>

          {/* RIGHT CONTENT (FORM CARD) */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeRightVariants}
            className="lg:col-span-5 flex justify-center lg:justify-end w-full"
          >
            <div className="w-full max-w-md lg:max-w-[390px] transition-transform duration-300 hover:scale-[1.01]">
              <EnquiryForm />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
