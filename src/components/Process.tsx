"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Paintbrush, Code2, Rocket, TrendingUp } from "lucide-react";

const processSteps = [
  { icon: Search, number: "01", title: "Research", description: "Understanding your business requirements, goals, and target users to define a clear project roadmap." },
  { icon: Paintbrush, number: "02", title: "Design", description: "Creating intuitive UI/UX designs with wireframes and prototypes for your approval." },
  { icon: Code2, number: "03", title: "Development", description: "Building with modern technologies, clean code, and best practices for maintainability." },
  { icon: Rocket, number: "04", title: "Deployment", description: "Launching your project with zero downtime, proper testing, and monitoring." },
  { icon: TrendingUp, number: "05", title: "Scaling", description: "Optimizing performance, adding features, and scaling infrastructure as your business grows." },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="py-24 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-sora font-bold text-3xl md:text-4xl text-[#1F2937] mb-4">
            How{" "}
            <span className="bg-gradient-to-r from-[#5B6EF5] to-[#7C3AED] bg-clip-text text-transparent">
              We Work
            </span>
          </h2>
          <p className="text-[#1F2937]/60 text-lg max-w-2xl mx-auto">
            A clear, transparent process from idea to launch — and beyond.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line - desktop */}
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-[#5B6EF5] to-[#7C3AED] opacity-20" />

          <div className="grid lg:grid-cols-5 gap-8">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex flex-col items-center text-center"
              >
                <div
                  className="relative w-20 h-20 rounded-2xl flex items-center justify-center mb-4 z-10"
                  style={{ background: "#E6E7EE", boxShadow: "8px 8px 16px #C8C8C8, -8px -8px 16px #FFFFFF" }}
                >
                  <step.icon size={28} className="text-[#5B6EF5]" />
                  <span
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full text-xs font-bold text-white flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #5B6EF5, #7C3AED)" }}
                  >
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-sora font-semibold text-lg text-[#1F2937] mb-2">{step.title}</h3>
                <p className="text-[#1F2937]/60 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
