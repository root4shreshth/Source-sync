import { motion } from "framer-motion";
import { Chrome, Github, Twitter, Mail } from "lucide-react";
import AnimatedShaderBackground from "@/components/ui/animated-shader-background";

const socialLinks = [
  { icon: Chrome, label: "Chrome Web Store" },
  { icon: Github, label: "GitHub" },
  { icon: Twitter, label: "Twitter" },
];

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black backdrop-blur-md relative overflow-hidden">
      <AnimatedShaderBackground />
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            >
              SourceSync
            </motion.h3>
            <p className="text-sm text-white/60">
              Instant AI summaries for any website. Cut through the noise, find the truth.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social, i) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href="#"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-9 h-9 rounded-lg bg-white/5 hover:bg-primary/20 flex items-center justify-center text-white/60 hover:text-primary transition-all border border-white/10"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {[
            {
              title: "Product",
              links: ["Features", "Pricing", "Changelog", "Download"]
            },
            {
              title: "Resources",
              links: ["Documentation", "API Reference", "Support", "Blog"]
            },
            {
              title: "Company",
              links: ["About", "Privacy Policy", "Terms of Service", "Contact"]
            }
          ].map((section, sectionIndex) => (
            <div key={section.title} className="space-y-4">
              <motion.h4 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: sectionIndex * 0.1 }}
                className="font-semibold text-white"
              >
                {section.title}
              </motion.h4>
              <ul className="space-y-2 text-sm">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (sectionIndex * 0.1) + (linkIndex * 0.05) }}
                  >
                    <a 
                      href={link === "Features" ? "#features" : "#"} 
                      className="text-white/60 hover:text-primary transition-colors inline-flex items-center gap-1"
                    >
                      {link}
                      {link === "Contact" && <Mail className="w-3 h-3" />}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} SourceSync. All rights reserved.
          </p>
          <p className="text-sm text-white/60">
            Made with AI • Powered by Gemini & OpenAI
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
