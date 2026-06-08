"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function JoinSection() {
  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative overflow-hidden text-white text-center section-padding-y">
      {/* Background Image */}
      <Image
        src="https://cdn.lugc.link/90d7fd4e-1c9c-48e6-898f-ef737995c3ad/-/format/auto/"
        alt="DPS International School Students"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Premium Navy gradient overlay for maximum legibility and style */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A2540]/90 via-[#0A2540]/80 to-[#0A2540]/95 z-0" />

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-center">
        <motion.div
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl flex flex-col items-center"
        >
          {/* School Icon Container */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="mb-6 p-2.5 bg-white/10 rounded-2xl backdrop-blur-md border border-white/25 shadow-xl shadow-black/10 inline-block"
          >
            <img 
              src="https://cdn-icons-png.flaticon.com/512/167/167707.png" 
              className="w-12 h-12 md:w-14 md:h-14 object-contain filter invert" 
              alt="School Icon" 
              loading="lazy"
              decoding="async"
            />
          </motion.div>

          {/* Tagline */}
          <p className="text-[#F59E0B] font-black tracking-[0.25em] uppercase text-[10px] md:text-xs mb-4">
            Where Learning Knows No Boundaries
          </p>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-[48px] md:leading-[1.15] font-black tracking-tight mb-6 text-white font-headline">
            Join DPS International School
          </h2>

          {/* Content Description */}
          <div className="space-y-6 max-w-2xl mx-auto mb-10 text-white/80 font-body text-sm sm:text-base leading-relaxed font-medium">
            <p>
              DPSIS started its operation at Singapore on 19th April 2004. At school, our earnest desire is to nurture the young fertile minds by positive development through excellent academic and extra curricular inputs.
            </p>
            <p>
              The school ensures that students coming from diverse communities, regions, backgrounds and professions are given a common platform and equal opportunities.
            </p>
          </div>

          {/* Download Button */}
          <motion.div
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              className="bg-[#F59E0B] text-[#0A2540] hover:bg-[#e08e0a] hover:shadow-xl hover:shadow-amber-500/10 h-12 px-10 text-sm font-extrabold rounded-xl shadow-lg transition-all duration-300"
            >
              Download Prospectus
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
