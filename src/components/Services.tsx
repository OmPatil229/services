"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, ShoppingBag, CreditCard, Smartphone, Users } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Applications",
    description: "Automate business operations with custom web systems",
    bullets: [
      "Custom dashboards & admin panels",
      "Business process automation",
      "Real-time data management systems",
    ],
    color: "#5B6EF5",
  },
  {
    icon: ShoppingBag,
    title: "Online Store Development",
    description: "Custom eCommerce platforms built for performance",
    bullets: [
      "Product catalog & inventory management",
      "Order tracking & fulfillment",
      "Customer account portals",
    ],
    color: "#7C3AED",
  },
  {
    icon: CreditCard,
    title: "Payment Gateway Integration",
    description: "Secure payment solutions for your business",
    bullets: [
      "Stripe, Razorpay & PayPal integration",
      "Subscription & recurring billing",
      "Invoice generation & management",
    ],
    color: "#5B6EF5",
  },
  {
    icon: Smartphone,
    title: "Mobile Optimization",
    description: "Fully responsive websites and applications",
    bullets: [
      "Progressive Web App (PWA) development",
      "Touch-optimized UI components",
      "Cross-device performance testing",
    ],
    color: "#7C3AED",
  },
  {
    icon: Users,
    title: "CRM Solutions",
    description: "Customer management systems for better sales tracking",
    bullets: [
      "Lead & pipeline management",
      "Customer interaction history",
      "Sales reports & analytics",
    ],
    color: "#5B6EF5",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-sora font-bold text-3xl md:text-4xl text-[#1F2937] mb-4">
            Software Solutions for{" "}
            <span className="bg-gradient-to-r from-[#5B6EF5] to-[#7C3AED] bg-clip-text text-transparent">
              Growing Businesses
            </span>
          </h2>
          <p className="text-[#1F2937]/60 text-lg max-w-2xl mx-auto">
            End-to-end software development services that scale with your business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-2xl cursor-default group transition-all duration-300 hover:-translate-y-1.5"
              style={{
                background: "#E6E7EE",
                boxShadow: "8px 8px 16px #C8C8C8, -8px -8px 16px #FFFFFF",
              }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: `${service.color}15`,
                  boxShadow: `4px 4px 8px #C8C8C8, -4px -4px 8px #FFFFFF`,
                }}
              >
                <service.icon size={26} style={{ color: service.color }} />
              </div>
              <h3 className="font-sora font-semibold text-xl text-[#1F2937] mb-2">
                {service.title}
              </h3>
              <p className="text-[#1F2937]/60 text-sm mb-5">{service.description}</p>
              <ul className="space-y-2.5">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2.5 text-sm text-[#1F2937]/70">
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: service.color }}
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
