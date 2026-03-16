"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Bot, MessageCircle, UserCheck, Workflow } from "lucide-react";

const automations = [
  {
    icon: Bot,
    title: "AI Chatbot Setup",
    description: "Deploy intelligent chatbots across all your channels",
    channels: ["WhatsApp", "Telegram", "Website Chat"],
    color: "#5B6EF5",
  },
  {
    icon: MessageCircle,
    title: "Automated Customer Responses",
    description: "Never miss a customer inquiry with smart auto-replies",
    channels: ["Instant replies 24/7", "Context-aware answers", "Escalation to human"],
    color: "#7C3AED",
  },
  {
    icon: UserCheck,
    title: "Lead Collection",
    description: "Capture and qualify leads automatically",
    channels: ["Name & contact capture", "Phone number collection", "Inquiry categorization"],
    color: "#5B6EF5",
  },
  {
    icon: Workflow,
    title: "Automation Workflows",
    description: "End-to-end business process automation",
    channels: ["Auto reply sequences", "Follow-up reminders", "Lead alert notifications"],
    color: "#7C3AED",
  },
];

export default function Automation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="automation" className="py-24 px-6 relative overflow-hidden" ref={ref}>
      {/* Background accent */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: "linear-gradient(135deg, #5B6EF510 0%, #E6E7EE 40%, #7C3AED10 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-[#5B6EF5] mb-4"
            style={{ background: "#E6E7EE", boxShadow: "4px 4px 8px #C8C8C8, -4px -4px 8px #FFFFFF" }}
          >
            <Bot size={14} />
            AI-Powered
          </div>
          <h2 className="font-sora font-bold text-3xl md:text-4xl text-[#1F2937] mb-4">
            AI Automation for{" "}
            <span className="bg-gradient-to-r from-[#5B6EF5] to-[#7C3AED] bg-clip-text text-transparent">
              Small Businesses
            </span>
          </h2>
          <p className="text-[#1F2937]/60 text-lg max-w-2xl mx-auto">
            Automate repetitive tasks, capture leads, and delight customers — all on autopilot.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {automations.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="p-8 rounded-2xl flex gap-6 group hover:-translate-y-1 transition-all duration-300"
              style={{ background: "#E6E7EE", boxShadow: "8px 8px 16px #C8C8C8, -8px -8px 16px #FFFFFF" }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                style={{ background: `${item.color}15`, boxShadow: "4px 4px 8px #C8C8C8, -4px -4px 8px #FFFFFF" }}
              >
                <item.icon size={26} style={{ color: item.color }} />
              </div>
              <div>
                <h3 className="font-sora font-semibold text-xl text-[#1F2937] mb-2">{item.title}</h3>
                <p className="text-[#1F2937]/60 text-sm mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.channels.map((channel) => (
                    <span
                      key={channel}
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{
                        color: item.color,
                        background: `${item.color}12`,
                        border: `1px solid ${item.color}30`,
                      }}
                    >
                      {channel}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
