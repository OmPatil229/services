"use client";
import { Github, Linkedin, Twitter, Phone, Mail } from "lucide-react";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Automation", href: "#automation" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-[#C8C8C8]/40">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="font-sora font-bold text-2xl text-[#1F2937] mb-4 block">
              <span className="text-[#5B6EF5]">Om</span> Patil
            </a>
            <p className="text-[#1F2937]/60 text-sm leading-relaxed mb-6">
              Building scalable software systems and automation tools for startups and businesses.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                  style={{ background: "#E6E7EE", boxShadow: "4px 4px 8px #C8C8C8, -4px -4px 8px #FFFFFF" }}
                >
                  <social.icon size={18} className="text-[#1F2937]/70" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-sora font-semibold text-[#1F2937] mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#1F2937]/60 hover:text-[#5B6EF5] transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-sora font-semibold text-[#1F2937] mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <a
                href="tel:+919313796383"
                className="flex items-center gap-3 text-sm text-[#1F2937]/60 hover:text-[#5B6EF5] transition-colors"
              >
                <Phone size={16} className="text-[#5B6EF5]" />
                +91 9313796383
              </a>
              <a
                href="tel:+919510252517"
                className="flex items-center gap-3 text-sm text-[#1F2937]/60 hover:text-[#5B6EF5] transition-colors"
              >
                <Phone size={16} className="text-[#5B6EF5]" />
                +91 9510252517
              </a>
              <a
                href="mailto:om@example.com"
                className="flex items-center gap-3 text-sm text-[#1F2937]/60 hover:text-[#5B6EF5] transition-colors"
              >
                <Mail size={16} className="text-[#5B6EF5]" />
                om@example.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#C8C8C8]/40 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#1F2937]/50 text-sm">
            © {new Date().getFullYear()} Om Patil. All rights reserved.
          </p>
          <p className="text-[#1F2937]/50 text-sm">
            Built with Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
