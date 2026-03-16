"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Layers, Zap } from "lucide-react";

const stats = [
  { icon: Award, value: "20+", label: "Projects Built", color: "#5B6EF5" },
  { icon: Layers, value: "15+", label: "Technologies Used", color: "#7C3AED" },
  { icon: Zap, value: "10+", label: "Automation Systems", color: "#5B6EF5" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Profile */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center lg:items-start"
          >
            {/* Profile Photo Placeholder */}
            <div
              className="w-48 h-48 rounded-full flex items-center justify-center mb-8 text-6xl font-bold text-[#5B6EF5]"
              style={{ background: "#E6E7EE", boxShadow: "12px 12px 24px #C8C8C8, -12px -12px 24px #FFFFFF" }}
            >
              OP
            </div>

            <h2 className="font-sora font-bold text-3xl md:text-4xl text-[#1F2937] mb-6 text-center lg:text-left">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-[#5B6EF5] to-[#7C3AED] bg-clip-text text-transparent">
                Om Patil
              </span>
            </h2>
            <p className="text-[#1F2937]/70 text-lg leading-relaxed text-center lg:text-left mb-6">
              I build scalable software systems and automation tools for startups and businesses.
              With a focus on clean code and user experience, I deliver solutions that genuinely
              make businesses more efficient.
            </p>
            <p className="text-[#1F2937]/60 leading-relaxed text-center lg:text-left">
              From custom web applications to AI-powered chatbots and workflow automation,
              I help businesses reduce manual work and scale faster.
            </p>
          </motion.div>

          {/* Right - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="p-6 rounded-2xl flex items-center gap-6"
                style={{ background: "#E6E7EE", boxShadow: "8px 8px 16px #C8C8C8, -8px -8px 16px #FFFFFF" }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${stat.color}15`, boxShadow: "4px 4px 8px #C8C8C8, -4px -4px 8px #FFFFFF" }}
                >
                  <stat.icon size={28} style={{ color: stat.color }} />
                </div>
                <div>
                  <div className="font-sora font-bold text-4xl text-[#1F2937]">{stat.value}</div>
                  <div className="text-[#1F2937]/60 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
