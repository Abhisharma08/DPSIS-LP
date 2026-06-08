"use client";

import { motion } from "framer-motion";
import { BookOpenCheck, UserRoundCheck, Building2 } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const features = [
  {
    title: "Holistic Education Approach",
    description:
      "Acknowledging uniqueness and diverse talents, our holistic education nurtures academic, artistic, athletic, and emotional aspects, fostering confident, well-rounded individuals.",
    icon: BookOpenCheck,
    iconColor: "text-[#2563EB]",
    iconBg: "bg-blue-50/80 border border-blue-100",
  },
  {
    title: "Access to World Class Faculty",
    description:
      "Comprised of passionate, experienced educators, our faculty cultivates curiosity, critical thinking, and creativity, mentoring students to achieve their fullest potential.",
    icon: UserRoundCheck,
    iconColor: "text-[#F59E0B]",
    iconBg: "bg-amber-50/80 border border-amber-100",
  },
  {
    title: "State-of-the-Art Facilities",
    description:
      "Modern smart-classrooms and infrastructure complement education with cutting-edge technology, spacious labs, libraries, and sports facilities for optimal learning and growth.",
    icon: Building2,
    iconColor: "text-[#0A2540]",
    iconBg: "bg-slate-100 border border-slate-200/60",
  },
];

export default function FeatureCards() {
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
    <section className="relative overflow-hidden bg-[#F8FAFC] section-padding-y">
      {/* Background decoration elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-blue-100/30 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-amber-100/30 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="section-container">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((f, i) => (
            <motion.div 
              key={i} 
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="h-full flex"
            >
              <Card className="w-full h-full flex flex-col items-center text-center p-8 md:p-10 border border-slate-200/60 rounded-[24px] bg-white shadow-lg shadow-slate-100/50 hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-350/80 transition-all duration-300">
                
                {/* Premium Icon Container */}
                <div className="mb-6">
                  <div
                    className={`w-16 h-16 sm:w-20 sm:h-20 ${f.iconBg} rounded-[20px] flex items-center justify-center shadow-sm transition-transform duration-300 hover:rotate-3`}
                  >
                    <f.icon className={`w-8 h-8 sm:w-10 sm:h-10 ${f.iconColor}`} />
                  </div>
                </div>

                <CardHeader className="p-0 mb-4 flex-grow-0">
                  <CardTitle className="text-xl sm:text-2xl font-black text-[#0A2540] leading-tight font-headline">
                    {f.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="p-0 flex-grow">
                  <p className="text-slate-650 text-sm sm:text-base leading-relaxed font-body">
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
