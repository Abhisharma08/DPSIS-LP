"use client";

import Image from "next/image";
import EnquiryForm from "./EnquiryForm";
import { AgeGradeTable } from "./AgeGradeTable";

export default function HeroSection() {
  return (
    <section 
      className="relative min-h-[calc(100svh-73px)] flex items-center py-10 sm:py-12 lg:py-16 overflow-hidden bg-background font-sans"
    >
      <Image
        src="https://cdn.lugc.link/7309a6b8-b380-422e-96c6-99656dcab271/-/stretch/off/-/resize/x1024/-/format/auto/"
        alt=""
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75 z-0 lg:bg-gradient-to-r lg:from-black/90 lg:via-black/65 lg:to-black/15" />

      {/* Container - Matches standard Navbar constraints */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT CONTENT - Removed items-center to keep it left-aligned */}
          <div 
            className="lg:col-span-7 flex flex-col space-y-5 text-left"
          >

            {/* BADGE */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full w-fit">
              <span className="h-2 w-2 bg-yellow-400 rounded-full animate-pulse"></span>
              <span className="text-white text-[10px] sm:text-[12px] font-bold tracking-widest uppercase">
                Admissions Open 2026-2027
              </span>
            </div>

            {/* HEADING - Adjusted size for better impact */}
            <h1 className="font-black text-white leading-[1.08] text-4xl sm:text-5xl lg:text-6xl">
              DPS <span className="text-blue-400">International</span>
              <br />
              <span className="text-yellow-400">School.</span>
            </h1>

            {/* PARAGRAPH */}
            <p className="text-gray-100 text-base sm:text-lg md:text-xl font-medium max-w-xl">
              Admissions for the current academic year (2026-2027) are open.
            </p>

            {/* DESCRIPTION */}
            <div className="flex items-stretch space-x-4">
              <div className="w-1.5 bg-yellow-400 rounded-full"></div>
              <p className="text-gray-300 text-sm sm:text-base max-w-md leading-relaxed">
                Enroll your child in DPS International School and provide them with the foundation they need to excel in an ever-changing world.
              </p>
            </div>

            {/* TABLE - Left aligned */}
            <div className="w-full sm:max-w-md pt-2">
              <AgeGradeTable />
            </div>

          </div>

          {/* RIGHT CONTENT */}
          <div 
            className="lg:col-span-5 flex justify-center lg:justify-end w-full"
          >
            <div className="w-full max-w-md lg:max-w-[360px] bg-white rounded-2xl shadow-2xl overflow-hidden">
              <EnquiryForm />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
