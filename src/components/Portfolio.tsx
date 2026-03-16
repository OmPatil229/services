"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Ecommerce Platform",
    description: "Full-featured online store with inventory management, order tracking, and payment integration.",
    tags: ["React", "Node.js", "MongoDB"],
    gradient: "from-[#5B6EF5] to-[#7C3AED]",
  },
  {
    title: "CRM Dashboard",
    description: "Customer relationship management system with lead pipeline, analytics, and reporting.",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    gradient: "from-[#7C3AED] to-[#5B6EF5]",
  },
  {
    title: "SaaS Admin Panel",
    description: "Multi-tenant admin dashboard with role-based access, billing, and user management.",
    tags: ["React", "Express", "MySQL"],
    gradient: "from-[#5B6EF5] to-[#06b6d4]",
  },
  {
    title: "Automation Bot",
    description: "WhatsApp business bot for lead capture, automated responses, and workflow triggers.",
    tags: ["Python", "WhatsApp API", "n8n"],
    gradient: "from-[#10b981] to-[#7C3AED]",
  },
];

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" className="py-24 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-sora font-bold text-3xl md:text-4xl text-[#1F2937] mb-4">
            Projects &amp; Systems{" "}
            <span className="bg-gradient-to-r from-[#5B6EF5] to-[#7C3AED] bg-clip-text text-transparent">
              We&apos;ve Built
            </span>
          </h2>
          <p className="text-[#1F2937]/60 text-lg max-w-2xl mx-auto">
            A selection of recent projects delivered to real businesses.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl overflow-hidden group cursor-pointer"
              style={{ background: "#E6E7EE", boxShadow: "8px 8px 16px #C8C8C8, -8px -8px 16px #FFFFFF" }}
            >
              {/* Image placeholder with gradient */}
              <div className={`relative h-52 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white/20 font-sora font-bold text-5xl">{project.title[0]}</div>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <button className="flex items-center gap-2 px-5 py-2.5 bg-white text-[#1F2937] rounded-xl font-semibold text-sm">
                    View Project <ExternalLink size={14} />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-sora font-semibold text-xl text-[#1F2937] mb-2">{project.title}</h3>
                <p className="text-[#1F2937]/60 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium text-[#5B6EF5]"
                      style={{ background: "#5B6EF515", border: "1px solid #5B6EF530" }}
                    >
                      {tag}
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
