"use client";

import { BookOpenCheck, UserRoundCheck, Building2 } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const features = [
  {
    title: "Holistic Education Approach",
    description:
      "Acknowledging uniqueness and diverse talents, our holistic education nurtures academic, artistic, athletic, and emotional aspects, fostering confident, well-rounded individuals.",
    icon: BookOpenCheck,
    color: "bg-blue-50 text-blue-600",
    borderColor: "border-blue-200",
  },
  {
    title: "Access to World Class Faculty",
    description:
      "Comprised of passionate, experienced educators, our faculty cultivates curiosity, critical thinking, and creativity, mentoring students to achieve their fullest potential.",


    icon: UserRoundCheck,
    color: "bg-purple-50 text-purple-600",
    borderColor: "border-purple-200",
  },
  {
    title: "State-of-the-Art Facilities",
    description:
      "Modern smart-classrooms and infrastructure complement education with cutting-edge technology, spacious labs, libraries, and sports facilities for optimal learning and growth.",
    icon: Building2,
    color: "bg-amber-50 text-amber-600",
    borderColor: "border-amber-200",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function FeatureCards() {
  return (
    <section className="relative py-14 sm:py-16 lg:py-20 overflow-hidden bg-white">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50 -z-10" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-50 rounded-full blur-3xl opacity-50 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((f, i) => (
            <motion.div key={i} variants={item} className="h-full">
              <Card className={`h-full group hover:shadow-xl transition-all duration-300 border-2 ${f.borderColor} rounded-xl bg-white overflow-hidden flex flex-col items-center text-center p-6 md:p-8`}>
                
                {/* Icon Section - Centered like reference */}
                <div className="mb-6">
                  <div
                    className={`w-16 h-16 md:w-20 md:h-20 ${f.color} rounded-xl flex items-center justify-center transition-`}
                  >
                    <f.icon className="w-8 h-8 md:w-10 md:h-10" />
                  </div>
                </div>

                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-xl md:text-2xl font-bold text-[#1e3a8a] leading-tight">
                    {f.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="p-0">
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {f.description}
                  </p>
                </CardContent>

              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
