import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import aggregationImg from "@/assets/feature-aggregation.png";
import timelineImg from "@/assets/feature-timeline.png";
import credibilityImg from "@/assets/feature-credibility.png";
import chatbotImg from "@/assets/feature-chatbot.png";
import { FileText, Bookmark, Share2, Highlighter } from "lucide-react";
import AnimatedShaderBackground from "@/components/ui/animated-shader-background";

const features = [
  {
    icon: aggregationImg,
    title: "Cross-Platform Aggregation",
    description: "Scrape and enrich the page with related coverage from RSS, news APIs, social posts, blogs, and your internal corpus."
  },
  {
    icon: timelineImg,
    title: "Timeline View",
    description: "Show how the story evolved: first report → major updates → final outcome with timestamps and headlines."
  },
  {
    icon: credibilityImg,
    title: "Credibility & Bias Score",
    description: "Cross-verify against clustered sources, showing credibility percentage with evidence from multiple sources."
  },
  {
    icon: chatbotImg,
    title: "Chatbot Research Mode",
    description: "Context-aware Q&A based on the current page + related coverage with inline citations."
  },
  {
    iconComponent: FileText,
    title: "Three-Level Summaries",
    description: "Choose Quick (1-2 lines), Normal (3-4 lines), or Deep (paragraph) summaries on demand."
  },
  {
    iconComponent: Bookmark,
    title: "Save & Revisit",
    description: "Save scraped results and related packs for offline access. Stored summaries are searchable in-extension."
  },
  {
    iconComponent: Share2,
    title: "Quick Share & Composer",
    description: "One-click generate a social-ready micro-summary with suggested hashtags for easy sharing."
  },
  {
    iconComponent: Highlighter,
    title: "Inline Annotated Overlay",
    description: "Inline badges and highlights showing key facts, claims, and links to corroborating sources."
  }
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.2 } }}
    >
      <Card className="h-full p-6 space-y-4 bg-black/60 backdrop-blur-md border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-elegant overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <motion.div 
          className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 dark:from-primary/30 dark:to-accent/30 flex items-center justify-center relative z-10"
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
        >
          {feature.icon ? (
            <img 
              src={feature.icon} 
              alt={feature.title} 
              className="w-10 h-10 object-contain"
            />
          ) : feature.iconComponent ? (
            <feature.iconComponent className="w-8 h-8 text-primary" />
          ) : null}
        </motion.div>
        
        <h3 className="text-xl font-semibold text-white relative z-10">
          {feature.title}
        </h3>
        
        <p className="text-white/70 leading-relaxed relative z-10">
          {feature.description}
        </p>
      </Card>
    </motion.div>
  );
};

export const Features = () => {
  return (
    <section id="features" className="py-24 px-4 bg-black relative overflow-hidden">
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
            Powerful Features
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Everything you need to understand any story, backed by AI-powered research and verification.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
