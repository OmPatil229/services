"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Founder, TechRetail",
    text: "Om built our entire ecommerce platform from scratch. The quality of work and speed of delivery exceeded our expectations. The automation features saved us 20+ hours per week.",
    initials: "RS",
    color: "#5B6EF5",
  },
  {
    name: "Priya Mehta",
    role: "CEO, GrowthCo",
    text: "The CRM system Om developed completely transformed how we manage leads. Our sales team loves it, and we've seen a 40% improvement in conversion rates.",
    initials: "PM",
    color: "#7C3AED",
  },
  {
    name: "Arjun Nair",
    role: "Director, ServiceBiz",
    text: "The WhatsApp automation bot Om set up for us handles 80% of customer inquiries automatically. It's like having an extra team member working 24/7.",
    initials: "AN",
    color: "#5B6EF5",
  },
  {
    name: "Kavya Singh",
    role: "Owner, ShopLocal",
    text: "Professional, responsive, and delivers exactly what was promised. Our online store now generates consistent revenue with minimal manual effort on our end.",
    initials: "KS",
    color: "#7C3AED",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
  };

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const prev = () => { setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length); resetTimer(); };
  const next = () => { setCurrent((c) => (c + 1) % testimonials.length); resetTimer(); };

  return (
    <section id="testimonials" className="py-24 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-sora font-bold text-3xl md:text-4xl text-[#1F2937] mb-4">
            What{" "}
            <span className="bg-gradient-to-r from-[#5B6EF5] to-[#7C3AED] bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-[#1F2937]/60 text-lg">Real feedback from real businesses.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-3xl mx-auto"
        >
          <div
            className="p-10 rounded-3xl"
            style={{ background: "#E6E7EE", boxShadow: "12px 12px 24px #C8C8C8, -12px -12px 24px #FFFFFF" }}
          >
            <Quote size={40} className="text-[#5B6EF5] opacity-30 mb-4" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-[#1F2937]/80 text-lg leading-relaxed mb-8 italic">
                  &ldquo;{testimonials[current].text}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm"
                    style={{ background: `linear-gradient(135deg, ${testimonials[current].color}, #7C3AED)` }}
                  >
                    {testimonials[current].initials}
                  </div>
                  <div>
                    <div className="font-sora font-semibold text-[#1F2937]">{testimonials[current].name}</div>
                    <div className="text-[#1F2937]/60 text-sm">{testimonials[current].role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: "#E6E7EE", boxShadow: "4px 4px 8px #C8C8C8, -4px -4px 8px #FFFFFF" }}
              aria-label="Previous"
            >
              <ChevronLeft size={18} className="text-[#1F2937]" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === current ? "w-6 h-2 bg-[#5B6EF5]" : "w-2 h-2 bg-[#C8C8C8]"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: "#E6E7EE", boxShadow: "4px 4px 8px #C8C8C8, -4px -4px 8px #FFFFFF" }}
              aria-label="Next"
            >
              <ChevronRight size={18} className="text-[#1F2937]" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
