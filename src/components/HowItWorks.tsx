import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Globe, Zap, Brain, CheckCircle2 } from "lucide-react";
import AnimatedShaderBackground from "@/components/ui/animated-shader-background";

const steps = [
  {
    icon: Globe,
    title: "Browse Any Website",
    description: "Click on any article or webpage you're reading. SourceSync activates with a single click.",
    step: "01"
  },
  {
    icon: Zap,
    title: "AI Analyzes & Searches",
    description: "Our AI extracts key entities and searches multiple sources to find related coverage and context.",
    step: "02"
  },
  {
    icon: Brain,
    title: "Verifies & Summarizes",
    description: "Cross-references facts, calculates credibility scores, and generates multi-level summaries.",
    step: "03"
  },
  {
    icon: CheckCircle2,
    title: "Get Instant Insights",
    description: "View timeline, related articles, credibility scores, and chat with AI for deeper research.",
    step: "04"
  }
];

const StepCard = ({ step, index }: { step: typeof steps[0]; index: number }) => {
  const Icon = step.icon;
  
  return (
    <motion.div 
      className="relative"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -10, transition: { duration: 0.3 } }}
    >
      {/* Connector line */}
      {index < steps.length - 1 && (
        <div className="hidden lg:block absolute top-16 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/50 to-transparent" />
      )}
      
      <Card className="p-6 space-y-4 bg-black/60 backdrop-blur-md border-white/10 hover:border-accent/50 hover:shadow-elegant transition-all duration-300 h-full group relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Step number */}
        <div className="flex items-start justify-between relative z-10">
          <motion.div 
            className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 dark:from-primary/30 dark:to-accent/30 flex items-center justify-center"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <Icon className="w-6 h-6 text-primary" />
          </motion.div>
          <span className="text-5xl font-bold text-primary/10 dark:text-primary/20 group-hover:text-primary/20 dark:group-hover:text-primary/30 transition-colors duration-300">
            {step.step}
          </span>
        </div>

        <h3 className="text-xl font-semibold text-white relative z-10">
          {step.title}
        </h3>

        <p className="text-white/70 leading-relaxed relative z-10">
          {step.description}
        </p>
      </Card>
    </motion.div>
  );
};

export const HowItWorks = () => {
  return (
    <section className="py-24 px-4 bg-black relative overflow-hidden">
      <AnimatedShaderBackground />

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Four simple steps from browsing to understanding. SourceSync does the heavy lifting.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
