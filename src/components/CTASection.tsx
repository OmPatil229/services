"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Phone } from "lucide-react";

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="cta" className="py-24 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="p-12 md:p-16 rounded-3xl relative overflow-hidden"
          style={{ background: "#E6E7EE", boxShadow: "16px 16px 32px #C8C8C8, -16px -16px 32px #FFFFFF" }}
        >
          {/* Decorative gradients */}
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full opacity-10 -translate-x-1/2 -translate-y-1/2"
            style={{ background: "radial-gradient(circle, #5B6EF5 0%, transparent 70%)" }} />
          <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full opacity-10 translate-x-1/2 translate-y-1/2"
            style={{ background: "radial-gradient(circle, #7C3AED 0%, transparent 70%)" }} />

          <div className="relative">
            <h2 className="font-sora font-bold text-3xl md:text-5xl text-[#1F2937] mb-4">
              Ready to automate your business?
            </h2>
            <p className="text-2xl md:text-3xl font-sora font-semibold bg-gradient-to-r from-[#5B6EF5] to-[#7C3AED] bg-clip-text text-transparent mb-8">
              Let&apos;s build something powerful.
            </p>
            <p className="text-[#1F2937]/60 text-lg mb-10 max-w-2xl mx-auto">
              Get a free consultation and project estimate. No commitment required.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-[#5B6EF5] to-[#7C3AED] hover:opacity-90 transition-all duration-200 hover:-translate-y-1 text-lg"
                style={{ boxShadow: "6px 6px 16px #C8C8C8, -4px -4px 8px #FFFFFF" }}
              >
                Start Project <ArrowRight size={20} />
              </a>
              <a
                href="tel:+919313796383"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-[#1F2937] transition-all duration-200 hover:-translate-y-1 text-lg"
                style={{ background: "#E6E7EE", boxShadow: "6px 6px 12px #C8C8C8, -6px -6px 12px #FFFFFF" }}
              >
                <Phone size={20} className="text-[#5B6EF5]" />
                Call Now
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-[#1F2937]/50">
              <span>📞 +91 9313796383</span>
              <span>📞 +91 9510252517</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
