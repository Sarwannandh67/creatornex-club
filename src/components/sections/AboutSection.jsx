import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye } from "lucide-react";

const AboutSection = () => {
  const keywords = ["AI", "TensorFlow", "ChatGPT", "Applixera", "ML", "Innovation", "Hugging Face"];

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };

  return (
    <section id="about" className="relative mesh-gradient-bg py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12 text-gradient-blue-purple"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          Who We Are
        </motion.h2>

        <motion.p 
          className="text-base sm:text-lg md:text-xl text-center max-w-3xl mx-auto mb-12 md:mb-16 text-gray-300 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          CreatorNex is an AI-focused innovation club at SRM University, Kattankulathur. We bridge the gap between academic learning and real-world industry applications in Artificial Intelligence.
        </motion.p>

        <motion.div 
          className="text-center mb-16 md:mb-20 floating-keywords text-lg sm:text-xl md:text-2xl text-neon-blue overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.9 }}
        >
          {keywords.map((keyword, index) => (
            <span key={index} className="inline-block mx-2 my-1" style={{ animationDelay: `-${index * 1.1}s` }}>{keyword}</span>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-10 max-w-6xl mx-auto">
          {/* Vision Card */}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Card className="glassmorphic-card-border h-full p-1">
              <div className="bg-[#101624]/90 rounded-lg h-full p-4 md:p-6 shadow-2xl">
                <CardHeader className="pb-4 md:pb-6">
                  <CardTitle className="flex items-center gap-3 text-xl sm:text-2xl md:text-3xl text-gradient-blue-purple">
                    <span className="text-2xl sm:text-3xl">🧠</span> Our Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start gap-4 p-4 md:p-6 rounded-xl bg-gradient-to-br from-cyan-400/40 via-blue-600/30 to-purple-600/40 border-2 border-gradient-to-r from-neon-blue to-electric-purple shadow-lg">
                    <div>
                      <ul className="list-disc list-inside space-y-3 md:space-y-4 text-gray-100 text-base sm:text-lg leading-relaxed">
                        <li>Empower SRM students to become AI creators and innovators through practical learning.</li>
                        <li>Bridge the gap between academics and industry via projects and mentorship.</li>
                        <li>Build a community of future AI leaders solving real-world challenges.</li>
                        <li>Foster creativity, curiosity, and inclusive growth in the tech ecosystem.</li>
                        <li>Establish CreatorNex as a national leader in student-led AI innovation.</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </motion.div>
          {/* Mission Card */}
          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Card className="glassmorphic-card-border h-full p-1">
              <div className="bg-[#101624]/90 rounded-lg h-full p-4 md:p-6 shadow-2xl">
                <CardHeader className="pb-4 md:pb-6">
                  <CardTitle className="flex items-center gap-3 text-xl sm:text-2xl md:text-3xl text-gradient-blue-purple">
                    <span className="text-2xl sm:text-3xl">🎯</span> Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start gap-4 p-4 md:p-6 rounded-xl bg-gradient-to-br from-cyan-400/40 via-blue-600/30 to-purple-600/40 border-2 border-gradient-to-r from-neon-blue to-electric-purple shadow-lg">
                    <div>
                      <ul className="list-disc list-inside space-y-3 md:space-y-4 text-gray-100 text-base sm:text-lg leading-relaxed">
                        <li>Conduct hands-on AI/ML workshops and sessions for practical learning.</li>
                        <li>Organize hackathons and industry-linked competitions to foster innovation.</li>
                        <li>Offer internships and real-world project opportunities with startups and industry partners.</li>
                        <li>Promote entrepreneurship, research, and leadership in AI among students.</li>
                        <li>Build a vibrant, inclusive community of future AI leaders at SRM.</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
  