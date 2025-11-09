import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Shield, Clock, Network, MessageSquare, FileArchive, Lock } from "lucide-react";
import AnimatedShaderBackground from "@/components/ui/animated-shader-background";

const usps = [
  {
    icon: Network,
    title: "Multi-Source Intelligence",
    description: "Not just single-page summaries. Get comprehensive briefs from multiple sources, outlets, and perspectives."
  },
  {
    icon: Clock,
    title: "Story Evolution",
    description: "See how stories develop over time with our unique timeline view tracking first reports through final outcomes."
  },
  {
    icon: Shield,
    title: "Credibility Verification",
    description: "Clear provenance and credibility scores explain why claims are trustworthy or questionable."
  },
  {
    icon: MessageSquare,
    title: "Integrated Research",
    description: "Ask follow-up questions with our chatbot and get cited answers from all clustered sources."
  },
  {
    icon: FileArchive,
    title: "Export Dossiers",
    description: "Built-in utility for power users to compile and save comprehensive research reports."
  },
  {
    icon: Lock,
    title: "Privacy First",
    description: "Local summarizer fallback and explicit caching controls keep your research private."
  }
];

const USPCard = ({ usp, index }: { usp: typeof usps[0]; index: number }) => {
  const Icon = usp.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}
    >
      <Card 
        className="p-8 space-y-4 bg-black/60 backdrop-blur-lg border-white/10 hover:border-primary/50 transition-all duration-300 group hover:shadow-elegant h-full relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <motion.div 
          className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 dark:from-primary/30 dark:to-accent/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative z-10"
          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ duration: 0.5 }}
        >
          <Icon className="w-7 h-7 text-primary" />
        </motion.div>

        <h3 className="text-xl font-semibold text-white relative z-10">
          {usp.title}
        </h3>

        <p className="text-white/70 leading-relaxed relative z-10">
          {usp.description}
        </p>
      </Card>
    </motion.div>
  );
};

export const USP = () => {
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
          <motion.div 
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30"
          >
            <span className="text-sm font-semibold text-white">Why SourceSync</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            What Makes Us Different
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            SourceSync beats traditional summarizers with intelligent multi-source aggregation and verification.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {usps.map((usp, index) => (
            <USPCard key={index} usp={usp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
