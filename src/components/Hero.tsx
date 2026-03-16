"use client";
import { motion } from "framer-motion";
import type { Easing } from "framer-motion";
import { Phone, ArrowRight, Code2, Cpu, Zap } from "lucide-react";

const floatingCards = [
  { icon: Code2, label: "Web Apps", value: "20+", color: "#5B6EF5" },
  { icon: Cpu, label: "Automations", value: "10+", color: "#7C3AED" },
  { icon: Zap, label: "Technologies", value: "15+", color: "#5B6EF5" },
];

const floatAnim = (delay: number) => ({
  animate: {
    y: [0, -12, 0],
    transition: { duration: 3, repeat: Infinity, delay, ease: "easeInOut" as Easing },
  },
});

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-16 px-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-[#5B6EF5] mb-6"
              style={{ boxShadow: "4px 4px 8px #C8C8C8, -4px -4px 8px #FFFFFF", background: "#E6E7EE" }}
            >
              <span className="w-2 h-2 rounded-full bg-[#5B6EF5] animate-pulse" />
              Available for new projects
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-sora font-bold text-4xl md:text-5xl lg:text-6xl text-[#1F2937] leading-tight mb-6"
            >
              Custom Software That{" "}
              <span className="bg-gradient-to-r from-[#5B6EF5] to-[#7C3AED] bg-clip-text text-transparent">
                Automates Your Business
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#1F2937]/70 text-lg leading-relaxed mb-8 max-w-lg"
            >
              We build scalable web applications, automation systems, and AI
              chatbots tailored to your business needs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-white bg-gradient-to-r from-[#5B6EF5] to-[#7C3AED] hover:opacity-90 transition-all duration-200 hover:-translate-y-1"
                style={{ boxShadow: "6px 6px 12px #C8C8C8, -4px -4px 8px #FFFFFF" }}
              >
                Start Project <ArrowRight size={18} />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-[#1F2937] transition-all duration-200 hover:-translate-y-1"
                style={{ background: "#E6E7EE", boxShadow: "6px 6px 12px #C8C8C8, -6px -6px 12px #FFFFFF" }}
              >
                View Services
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl" style={{ background: "#E6E7EE", boxShadow: "4px 4px 8px #C8C8C8, -4px -4px 8px #FFFFFF" }}>
                <Phone size={16} className="text-[#5B6EF5]" />
                <span className="text-sm font-medium text-[#1F2937]">+91 9313796383</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl" style={{ background: "#E6E7EE", boxShadow: "4px 4px 8px #C8C8C8, -4px -4px 8px #FFFFFF" }}>
                <Phone size={16} className="text-[#7C3AED]" />
                <span className="text-sm font-medium text-[#1F2937]">+91 9510252517</span>
              </div>
            </motion.div>
          </div>

          {/* Right - Floating Cards */}
          <div className="hidden lg:flex flex-col items-center justify-center gap-8 relative">
            <div className="grid grid-cols-2 gap-6 w-full max-w-sm mx-auto">
              {floatingCards.map((card, i) => (
                <motion.div
                  key={card.label}
                  {...floatAnim(i * 0.5)}
                  className={`p-6 rounded-2xl text-center ${i === 2 ? "col-span-2" : ""}`}
                  style={{ background: "#E6E7EE", boxShadow: "8px 8px 16px #C8C8C8, -8px -8px 16px #FFFFFF" }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                    style={{ background: `${card.color}20` }}
                  >
                    <card.icon size={24} style={{ color: card.color }} />
                  </div>
                  <div className="font-sora font-bold text-3xl text-[#1F2937] mb-1">{card.value}</div>
                  <div className="text-sm text-[#1F2937]/60 font-medium">{card.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Decorative circles */}
            <div className="absolute -z-10 top-10 right-10 w-64 h-64 rounded-full opacity-20" style={{ background: "radial-gradient(circle, #5B6EF5 0%, transparent 70%)" }} />
            <div className="absolute -z-10 bottom-10 left-10 w-48 h-48 rounded-full opacity-20" style={{ background: "radial-gradient(circle, #7C3AED 0%, transparent 70%)" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
