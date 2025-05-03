import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Calendar, Bot, Mic, Rocket, CheckCircle } from "lucide-react";

const EventsSection = () => {
  const upcomingEvents = [
    { icon: Bot, title: "AI Buildathon", date: "August 2025", description: "24-hour challenge to build AI prototypes for real-world problems." },
    { icon: Mic, title: "Talk Tech with Industry", date: "September 2025", description: "A speaker series featuring AI founders and researchers." },
    { icon: Rocket, title: "Startup x Creator Collab Jam", date: "October 2025", description: "Rapid-fire challenge to create startup-focused AI content." },
  ];

  const pastEvents = [
    { title: "Python & Machine Learning Bootcamp", date: "April 2025" },
    { title: "ChatGPT Masterclass", date: "March 2025" },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };
  
   const pastEventVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      }
    })
  };

  return (
    <section id="events" className="bg-midnight-black section-gradient-bg relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-gradient-blue-purple"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          Events That Shape Innovators
        </motion.h2>
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-semibold text-center mb-10 text-neon-blue/90">Upcoming Events</h3>
        </div>
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold text-center mb-10 text-electric-purple/90">Past Highlights</h3>
        </div>
        {/* Blurred overlay */}
        <div className="absolute left-0 right-0 z-30 flex flex-col items-center justify-center bg-black/60 backdrop-blur-md" style={{top: '8.5rem', bottom: 0}}>
          <span className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg animate-pulse my-12">Coming Soon...</span>
        </div>
        {/* Event content (hidden/blurred) */}
        <div className="mb-20 mt-[-4.5rem]">
          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                 <Card className="glassmorphic-card-border h-full p-1 group">
                  <div className="bg-midnight-black rounded-lg h-full p-6 transition-colors duration-300 group-hover:bg-card/80">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="p-2 bg-neon-blue/10 rounded-full">
                           <event.icon className="h-8 w-8 text-neon-blue" />
                        </div>
                        <CardTitle className="text-xl font-semibold text-neon-blue/90">{event.title}</CardTitle>
                      </div>
                      <CardDescription className="text-sm text-gray-400 flex items-center gap-2">
                        <Calendar className="h-4 w-4" /> {event.date}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">{event.description}</p>
                    </CardContent>
                   </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mt-10">
          <div className="max-w-lg mx-auto space-y-4">
            {pastEvents.map((event, index) => (
               <motion.div
                key={index}
                custom={index}
                variants={pastEventVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                className="flex items-center gap-4 p-4 bg-card/60 rounded-lg border border-electric-purple/30 backdrop-blur-sm"
              >
                <CheckCircle className="h-6 w-6 text-electric-purple flex-shrink-0" />
                <div>
                  <p className="font-semibold text-electric-purple/90">{event.title}</p>
                  <p className="text-sm text-gray-400">{event.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
  