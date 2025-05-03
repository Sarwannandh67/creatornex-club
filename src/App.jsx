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
import ScrollToTop from "@/components/ScrollToTop";
import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';

const App = () => {
  return (
    <HelmetProvider>
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
          <ScrollToTop />
        </motion.div>
    </HelmetProvider>
  );
};

export default App;
  