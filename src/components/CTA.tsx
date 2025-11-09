import { motion } from "framer-motion";
import { LiquidButton } from "./ui/liquid-glass-button";
import { Download, Chrome, Github } from "lucide-react";
import AnimatedShaderBackground from "@/components/ui/animated-shader-background";

export const CTA = () => {
  return (
    <section className="py-24 px-4 bg-black relative overflow-hidden">
      <AnimatedShaderBackground />
      

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-black/70 backdrop-blur-lg border border-white/10 rounded-2xl p-12 md:p-16 shadow-elegant text-center space-y-8 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
          
          <div className="space-y-4 relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-white"
            >
              Ready to Transform Your
              <span className="block mt-2 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Research Experience?
              </span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-white/70 max-w-2xl mx-auto"
            >
              Join thousands of users who trust SourceSync to cut through the noise and find the truth.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4 relative z-10"
          >
            <div className="relative h-[60px] w-[280px]">
              <a href="/extension.zip" download>
                <LiquidButton 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg font-semibold"
                  size="xxl"
                >
                  <Download className="w-5 h-5" />
                  Download Free
                </LiquidButton>
              </a>
            </div>
            
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-lg border-2 border-primary/30 hover:border-primary/50 bg-black/50 backdrop-blur-sm text-white hover:text-primary transition-all font-semibold flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              View on GitHub
            </motion.a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="pt-8 flex flex-wrap items-center justify-center gap-8 text-sm text-white/60 relative z-10"
          >
            {["Chrome Web Store", "Free & Open Source", "Privacy Focused"].map((text, i) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="flex items-center gap-2"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 rounded-full bg-green-500"
                />
                {text}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
