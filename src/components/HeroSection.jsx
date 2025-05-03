
import React from "react";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import ThreeScene from "@/components/ThreeScene";
import NotifyForm from "@/components/NotifyForm";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen overflow-hidden grid-pattern">
      <div className="absolute inset-0 hero-gradient"></div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="text-3xl font-bold text-gradient">CreatorNex</div>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient">CreatorNex</span>
              <span className="block mt-2">Launching Soon</span>
            </h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <p className="text-xl md:text-2xl mb-4 text-blue-100">🚀 Get Ready!</p>
              <p className="text-lg text-gray-300 mb-6">
                CreatorNex, SRM's official AI Industry & Innovation Club, is launching a futuristic 3D website.
                We're building a space where students, startups, and AI come together.
              </p>
              <p className="text-xl font-medium text-blue-300 mb-8">
                Stay tuned for our official launch. The future starts here.
              </p>
            </motion.div>
            
            <div className="mb-8">
              <NotifyForm />
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex justify-center lg:justify-start"
            >
              <a 
                href="https://www.linkedin.com/in/sarwan-nandh/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
              >
                <Linkedin className="h-5 w-5" />
                <span>Follow us on LinkedIn: Sarwan Nandh</span>
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="lg:w-1/2 floating"
          >
            <ThreeScene />
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="absolute bottom-4 left-0 right-0 text-center text-sm text-gray-500"
        >
          © 2025 CreatorNex - SRM's AI Industry & Innovation Club
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </div>
  );
};

export default HeroSection;
