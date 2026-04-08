"use client";

import Image from "next/image";
import { GraduationCap, Rainbow, Telescope } from "lucide-react";

const cards = [
  {
    title: "Our Mission",
    text: "DPS will continue to be a happy school for its students and enablers, facilitating curricular and co-curricular knowledge to a brimful measure thus enabling them to be future read and able leaders.",
    icon: GraduationCap, // Education & Leadership represent karta hai
    color: "from-[#1e3a8a] to-[#3b82f6]",
  },
  {
    title: "Our Values",
    text: `CARING – An Inclusive and Supportive Environment.
LEARNING – Grooming Lifelong Learners.
ACHIEVING – Achieving Milestones and Setting Benchmarks.
SHARING – Sharing Our Joys, Dreams and Goals.
SOCIAL RESPONSIBILITY – Building a Better Future Today.`,
    icon: Rainbow, // Inclusivity aur Diversity (Caring/Sharing) ko represent karta hai
    color: "from-[#e11d48] to-[#fb7185]",
  },
  {
    title: "Our Vision",
    text: "DPS aspires to live by our motto “CARPE DIEM”, seizing each moment to shape the learning environment of the future, applying all acquired knowledge with scientific reasoning, humanity and wisdom for a happier society.",
    icon: Telescope, // Future aur Seizing the moment (Vision) ko represent karta hai
    color: "from-[#f59e0b] to-[#fbbf24]",
  },
];

export default function MissionVision() {
  return (
    <section className="relative overflow-hidden py-14 sm:py-16 lg:py-20">
      <Image
        src="https://images.assets-landingi.com/uc/7d5cda0d-e32d-43b5-9112-79a17395c559/SEN001623.JPG"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Dark Navy Overlay - Better Contrast */}
      <div className="absolute inset-0 bg-[#0E2A47]/90 backdrop-blur-[2px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {cards.map((card, i) => (
            <div
              key={i}
              className="flex h-full"
            >
              <div className="w-full p-6 sm:p-8 md:p-10 rounded-xl bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:bg-white/[0.08] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col items-center text-center">
                
                {/* SCHOOL THEMED ICONS */}
                <div className={`w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br ${card.color} shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  <card.icon className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
                </div>

                {/* HEADING - Black Font Style */}
                <h3 className="text-xl sm:text-2xl font-[900] text-white mb-4 tracking-tight uppercase">
                  {card.title}
                </h3>

                {/* TEXT - Content preserved & readable */}
                <p className="text-white/80 text-sm sm:text-base leading-relaxed font-medium whitespace-pre-line tracking-tight">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
