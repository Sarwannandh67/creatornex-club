
  import React from "react";
  import { motion } from "framer-motion";
  import { Lightbulb } from "lucide-react";

  const Footer = () => {
    return (
      <motion.footer 
        className="bg-midnight-black py-8 border-t border-neon-blue/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="container mx-auto text-center text-gray-500 text-sm">
          <p className="mb-2">
            © {new Date().getFullYear()} CreatorNex | AI Industry & Innovation Club | SRM University
          </p>
          <p className="flex items-center justify-center gap-1.5 text-gray-400">
            Built with <Lightbulb className="h-4 w-4 text-neon-blue/70 inline-block" /> by student innovators.
          </p>
        </div>
      </motion.footer>
    );
  };

  export default Footer;
  