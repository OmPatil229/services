"use client";
import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

const inputStyle = {
  background: "#E6E7EE",
  boxShadow: "inset 4px 4px 8px #C8C8C8, inset -4px -4px 8px #FFFFFF",
  borderRadius: "12px",
  border: "none",
  outline: "none",
};

export default function Contact() {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "YOUR_SERVICE_ID",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "YOUR_TEMPLATE_ID",
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "YOUR_PUBLIC_KEY"
      );
      setStatus("success");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <section id="contact" className="py-24 px-6" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-sora font-bold text-3xl md:text-4xl text-[#1F2937] mb-4">
            Start Your{" "}
            <span className="bg-gradient-to-r from-[#5B6EF5] to-[#7C3AED] bg-clip-text text-transparent">
              Project
            </span>
          </h2>
          <p className="text-[#1F2937]/60 text-lg">
            Tell us about your project and we&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-8 md:p-10 rounded-3xl"
          style={{ background: "#E6E7EE", boxShadow: "12px 12px 24px #C8C8C8, -12px -12px 24px #FFFFFF" }}
        >
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-[#1F2937] mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="user_name"
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3.5 text-[#1F2937] placeholder-[#1F2937]/40 focus:ring-2 focus:ring-[#5B6EF5]/30 transition-all duration-200"
                  style={inputStyle}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#1F2937] mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3.5 text-[#1F2937] placeholder-[#1F2937]/40 focus:ring-2 focus:ring-[#5B6EF5]/30 transition-all duration-200"
                  style={inputStyle}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#1F2937] mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="user_phone"
                placeholder="+91 98765 43210"
                className="w-full px-4 py-3.5 text-[#1F2937] placeholder-[#1F2937]/40 focus:ring-2 focus:ring-[#5B6EF5]/30 transition-all duration-200"
                style={inputStyle}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#1F2937] mb-2">
                Project Description *
              </label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell us about your project — what you need, your timeline, and any specific requirements..."
                className="w-full px-4 py-3.5 text-[#1F2937] placeholder-[#1F2937]/40 resize-none focus:ring-2 focus:ring-[#5B6EF5]/30 transition-all duration-200"
                style={inputStyle}
              />
            </div>

            {status === "success" && (
              <div className="flex items-center gap-3 p-4 rounded-xl bg-green-50 text-green-700">
                <CheckCircle size={20} />
                <span className="text-sm font-medium">Message sent successfully! We&apos;ll be in touch soon.</span>
              </div>
            )}
            {status === "error" && (
              <div className="flex items-center gap-3 p-4 rounded-xl bg-red-50 text-red-700">
                <AlertCircle size={20} />
                <span className="text-sm font-medium">Failed to send. Please try calling us directly.</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-[#5B6EF5] to-[#7C3AED] hover:opacity-90 transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed text-lg"
              style={{ boxShadow: "6px 6px 16px #C8C8C8, -4px -4px 8px #FFFFFF" }}
            >
              {status === "sending" ? (
                <>Sending...</>
              ) : (
                <>
                  Send Message <Send size={18} />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
