import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Scene from "@/components/3DScene";
import { Calendar, Rocket } from "lucide-react";

const HeroSection = () => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden ai-matrix-bg pt-20 md:pt-0">
      <div className="absolute inset-0 hero-gradient-bg z-0"></div>
      <div className="container mx-auto px-4 sm:px-6 py-8 md:py-12 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0"
          >
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight font-mono"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="text-gradient-blue-purple">CreatorNex</span> – Where AI Innovation Meets Industry Impact
            </motion.h1>
            
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 md:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              SRM's official AI Industry & Innovation Club empowering students through real-world projects, workshops, and startup partnerships.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-6 md:mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-gradient-to-r from-neon-blue/80 to-electric-purple/80 hover:from-neon-blue hover:to-electric-purple text-black font-semibold button-glow-effect transform hover:scale-105 transition-all duration-300"
                onClick={() => scrollTo('join')}
              >
                <Rocket className="mr-2 h-5 w-5" /> Join the Club
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto border-electric-purple/50 text-electric-purple/80 hover:bg-electric-purple/10 hover:text-electric-purple hover:border-electric-purple transform hover:scale-105 transition-all duration-300"
                onClick={() => scrollTo('events')}
              >
                <Calendar className="mr-2 h-5 w-5" /> View Events
              </Button>
            </motion.div>

            <motion.p 
              className="text-lg sm:text-xl text-gradient-blue-purple font-semibold floating"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              "Learn. Build. Lead. Together."
            </motion.p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-[500px]"
          >
            <div className="relative z-10 w-full h-full">
              <Scene />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-midnight-black to-transparent z-5"></div>
    </section>
  );
};

export default HeroSection;
  