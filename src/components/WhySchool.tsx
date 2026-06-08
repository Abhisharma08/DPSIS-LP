"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "DPS seal of Quality and Excellence",
  "Child - Centered Philosophy",
  "Sprawling Campus where education meets Sports & Creativity",
  "Sound financial backing from a committed Management",
  "Only trained and experienced teaching faculty",
  "Parents Involvement in teaching - learning process as the teachers",
  "A Different Approach where it provides a variety of learning experiences which promote integrated growth in all areas, be it physical, intellectual, moral or social",
];

export default function WhySchool() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0A2540] to-[#071d32] text-white section-padding-y">
      {/* Background glow elements */}
      <div className="absolute top-1/4 left-1/4 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* IMAGE SIDE */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative w-full"
        >
          <div className="rounded-[24px] overflow-hidden shadow-2xl border border-white/10 group">
            <Image
              src="https://cdn.lugc.link/90d7fd4e-1c9c-48e6-898f-ef737995c3ad/-/stretch/off/-/resize/x634/-/format/auto/"
              alt="DPS International School"
              width={750}
              height={480}
              className="object-cover w-full h-[240px] sm:h-[320px] md:h-[400px] lg:h-[460px] transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
        </motion.div>

        {/* CONTENT SIDE */}
        <div className="w-full">
          {/* HEADING */}
          <h2 className="text-3xl sm:text-4xl md:text-[48px] md:leading-[1.15] font-black text-white leading-tight max-w-[600px] font-headline">
            Why DPS International School?
          </h2>

          <div className="w-16 h-1 bg-[#2563EB] mt-4 mb-8 rounded-full"></div>

          {/* BENEFITS LIST */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-4"
          >
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -2, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                className="flex items-start gap-4 p-4 rounded-2xl backdrop-blur-md bg-white/[0.04] border border-white/10 transition-all duration-300 shadow-sm"
              >
                {/* Modern checkmark wrapper */}
                <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-[#2563EB]/20 text-[#2563EB] flex-shrink-0">
                  <CheckCircle2 className="text-blue-400 w-5 h-5" />
                </div>

                <p className="text-white/95 text-sm sm:text-base leading-relaxed font-body font-medium">
                  {benefit}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
