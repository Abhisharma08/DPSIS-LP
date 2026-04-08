"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function JoinSection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 text-white text-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://cdn.lugc.link/90d7fd4e-1c9c-48e6-898f-ef737995c3ad/-/format/auto/')",
        }}
      />
      {/* Overlay - Slightly lighter to let the image show through like the reference */}
      <div className="absolute inset-0 bg-black/60 md:bg-black/55" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* School Icon - Encapsulated in a circle to match modern branding */}
        <div className="mb-6 p-1 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/167/167707.png" 
              className="w-14 h-14 md:w-16 md:h-16" 
              alt="School Icon" 
            />
        </div>

        {/* Tagline - Very small, elegant tracking */}
        <p className="text-yellow-500 font-medium tracking-[0.3em] uppercase text-[9px] md:text-[11px] mb-4">
          Where Learning Knows No Boundaries
        </p>

        {/* Heading - Shifted from 'font-black' to 'font-semibold' and reduced size for elegance */}
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight mb-6 max-w-2xl">
          Join DPS International School
        </h2>

        {/* Content - Smaller font (base) and narrower width (max-w-2xl) to look like the reference */}
        <div className="space-y-6 max-w-2xl mx-auto">
          <p className="text-sm md:text-base font-light text-gray-200 leading-relaxed tracking-wide">
            DPSIS started its operation at Singapore on 19th April 2004. At school, our earnest desire is to nurture the young fertile minds by positive development through excellent academic and extra curricular inputs.
          </p>
          <p className="text-sm md:text-base font-light text-gray-200 leading-relaxed tracking-wide">
            The school ensures that students coming from diverse communities, regions, backgrounds and professions are given a common platform and equal opportunities.
          </p>
        </div>

        {/* Button - Matching the rectangular yet slightly rounded style of the reference */}
        <div className="pt-10">
          <Button 
            className="bg-[#ebae1a] text-white hover:bg-[#d49c17] h-12 px-10 text-sm font-semibold rounded-md shadow-lg transition-all duration-300"
          >
            Download Prospectus
          </Button>
        </div>
      </div>
    </section>
  );
}
