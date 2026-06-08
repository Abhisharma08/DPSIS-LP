"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, Rainbow, Telescope } from "lucide-react";

const cards = [
  {
    title: "Our Mission",
    text: "DPS will continue to be a happy school for its students and enablers, facilitating curricular and co-curricular knowledge to a brimful measure thus enabling them to be future read and able leaders.",
    icon: GraduationCap,
    gradient: "from-[#0A2540] to-[#2563EB]",
    iconColor: "text-white",
  },
  {
    title: "Our Values",
    text: `CARING – An Inclusive and Supportive Environment.
LEARNING – Grooming Lifelong Learners.
ACHIEVING – Achieving Milestones and Setting Benchmarks.
SHARING – Sharing Our Joys, Dreams and Goals.
SOCIAL RESPONSIBILITY – Building a Better Future Today.`,
    icon: Rainbow,
    gradient: "from-[#e11d48] to-[#fb7185]",
    iconColor: "text-white",
  },
  {
    title: "Our Vision",
    text: "DPS aspires to live by our motto “CARPE DIEM”, seizing each moment to shape the learning environment of the future, applying all acquired knowledge with scientific reasoning, humanity and wisdom for a happier society.",
    icon: Telescope,
    gradient: "from-[#F59E0B] to-[#e08e0a]",
    iconColor: "text-[#0A2540]",
  },
];

export default function MissionVision() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative overflow-hidden section-padding-y">
      {/* Background Image */}
      <Image
        src="https://images.assets-landingi.com/uc/7d5cda0d-e32d-43b5-9112-79a17395c559/SEN001623.JPG"
        alt="DPS International School Classroom"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Premium Navy Overlay */}
      <div className="absolute inset-0 bg-[#0A2540]/90 backdrop-blur-[3px] z-0"></div>

      <div className="relative z-10 section-container">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {cards.map((card, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="flex h-full"
            >
              <div className="w-full h-full p-8 sm:p-10 rounded-[24px] bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-500 hover:shadow-2xl flex flex-col items-center text-center group">
                
                {/* Premium Gradient Icon Container */}
                <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-[20px] flex items-center justify-center mb-6 bg-gradient-to-br ${card.gradient} shadow-lg shadow-black/10 group-hover:scale-105 transition-transform duration-300`}>
                  <card.icon className={`w-8 h-8 sm:w-10 sm:h-10 ${card.iconColor}`} />
                </div>

                {/* Card Title */}
                <h3 className="text-xl sm:text-2xl font-black text-white mb-4 tracking-wider uppercase font-headline">
                  {card.title}
                </h3>

                {/* Card Text */}
                <p className="text-white/80 text-sm sm:text-base leading-relaxed font-body font-medium whitespace-pre-line tracking-wide">
                  {card.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
