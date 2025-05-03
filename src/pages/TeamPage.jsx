import React from "react";
import { motion } from "framer-motion";
import TeamSection from "@/components/sections/TeamSection";

const TeamPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-20 md:pt-24" // Add padding to account for the fixed navbar
    >
      <TeamSection />
    </motion.div>
  );
};

export default TeamPage; 