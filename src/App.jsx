import React from "react";
import { motion } from "framer-motion";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import EventsSection from "@/components/sections/EventsSection";
import JoinUsSection from "@/components/sections/JoinUsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";
import TeamPage from "@/pages/TeamPage";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-midnight-black text-foreground min-h-screen flex flex-col"
    >
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <AboutSection />
              <EventsSection />
              <JoinUsSection />
              <ContactSection />
            </>
          } />
          <Route path="/team" element={<TeamPage />} />
        </Routes>
      </main>
      <Footer />
      <Toaster />
    </motion.div>
  );
};

export default App;
  