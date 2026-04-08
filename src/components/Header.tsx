"use client";

import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 shadow-sm border-b border-gray-200 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">

        {/* Logo */}
        <div className="flex min-w-0 items-center gap-3">
          <Image
            src="https://cdn.lugc.link/ba71d94d-c3cf-44c7-9764-294540f5cc26/-/preview/108x76/-/format/auto/"
            alt="DPS International School"
            width={100}
            height={70}
            priority
            className="h-12 w-auto object-contain sm:h-14"
          />
        </div>

        {/* Button */}
        <div className="shrink-0">
          <button className="bg-[#1e3a8a] text-white font-semibold px-4 py-2 text-xs sm:px-6 sm:py-2.5 sm:text-sm rounded-lg shadow-md hover:bg-[#172f70] transition">
            Admission Open 2026-27
          </button>
        </div>

      </div>

    </header>
  );
}
