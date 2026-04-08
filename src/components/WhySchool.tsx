"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

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
  return (
    <section className="relative py-14 sm:py-16 lg:py-20 bg-gradient-to-b from-[#0B1B3B] to-[#08132A] overflow-hidden">

      {/* background glow */}
      <div className="absolute top-0 left-1/4 w-[250px] sm:w-[350px] md:w-[500px] h-[250px] sm:h-[350px] md:h-[500px] bg-blue-500/20 blur-[100px] md:blur-[160px] rounded-full -z-10"/>
      <div className="absolute bottom-0 right-1/4 w-[250px] sm:w-[350px] md:w-[500px] h-[250px] sm:h-[350px] md:h-[500px] bg-purple-500/20 blur-[100px] md:blur-[160px] rounded-full -z-10"/>

      {/* ✅ SAME CONTAINER AS HERO (ALIGN FIX) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-16 items-center">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full"
        >
          <div className="rounded-xl overflow-hidden shadow-[0_30px_60px_-10px_rgba(0,0,0,0.6)] border border-white/10">

            <Image
              src="https://cdn.lugc.link/90d7fd4e-1c9c-48e6-898f-ef737995c3ad/-/stretch/off/-/resize/x634/-/format/auto/"
              alt="DPS International School"
              width={750}
              height={480}
              className="object-cover w-full h-[220px] sm:h-[300px] md:h-[380px] lg:h-[420px]"
            />

          </div>
        </motion.div>

        {/* CONTENT */}
        <div className="w-full">

          {/* HEADING */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight max-w-[600px]">
            Why DPS International School?
          </h2>

          <div className="w-14 sm:w-16 md:w-20 h-1 bg-blue-500 mt-3 md:mt-4 mb-6 md:mb-8 rounded-full"></div>

          {/* BENEFITS */}
          <div className="space-y-3 sm:space-y-4">

            {benefits.map((benefit, i) => (

              <div
                key={i}
                className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >

                <div className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-green-500/20 flex-shrink-0">

                  <CheckCircle2 className="text-green-400 w-4 h-4 sm:w-5 sm:h-5"/>

                </div>

                <p className="text-gray-200 text-xs sm:text-sm md:text-base leading-relaxed">
                  {benefit}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}
