
  import React from "react";
  import { motion } from "framer-motion";
  import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
  import { BrainCircuit, ScanFace, FileText, Briefcase, Unlock } from "lucide-react";
  import { Button } from "@/components/ui/button";

  const ProjectsSection = () => {
    const projects = [
      { icon: BrainCircuit, title: "Smart Mess Food Rating System", description: "Using NLP + Sentiment Analysis to improve student dining feedback." },
      { icon: ScanFace, title: "Campus Face Recognition Attendance", description: "AI-based attendance integrated with facial authentication." },
      { icon: FileText, title: "AI Resume Analyzer", description: "Checks job match rates and suggests skills based on job descriptions." },
    ];

    const cardVariants = {
      hidden: { opacity: 0, scale: 0.8, rotateY: 30 },
      visible: (i) => ({
        opacity: 1,
        scale: 1,
        rotateY: 0,
        transition: {
          delay: i * 0.15,
          duration: 0.7,
          ease: [0.25, 1, 0.5, 1]
        }
      })
    };
    
    const internshipCardVariants = {
       hidden: { opacity: 0, y: 50 },
       visible: { 
         opacity: 1, 
         y: 0, 
         transition: { duration: 0.8, ease: "easeOut" }
       }
    };

    return (
      <section id="projects" className="relative bg-midnight-black mesh-gradient-bg">
        <div className="container mx-auto relative z-10">
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 text-gradient-blue-purple"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
          >
            What We Build
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-center max-w-3xl mx-auto mb-16 text-gray-300 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            At CreatorNex, we solve real-world problems using AI. From NLP bots to computer vision models, our members innovate with purpose.
          </motion.p>

          <div className="mb-20">
            <h3 className="text-2xl md:text-3xl font-semibold text-center mb-10 text-neon-blue/90">Sample Projects</h3>
            <div className="grid md:grid-cols-3 gap-8 [perspective:1000px]">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <Card className="glassmorphic-card h-full hover:border-neon-blue/50 transition-colors duration-300 group">
                     <CardHeader>
                      <div className="flex items-center gap-4 mb-2">
                        <div className="p-3 bg-neon-blue/10 rounded-full transition-colors duration-300 group-hover:bg-neon-blue/20">
                           <project.icon className="h-8 w-8 text-neon-blue flex-shrink-0" />
                        </div>
                         <CardTitle className="text-xl font-semibold text-neon-blue/90">{project.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">{project.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
             variants={internshipCardVariants}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.4 }}
            >
              <Card className="glassmorphic-card-border max-w-4xl mx-auto p-1">
                 <div className="bg-midnight-black rounded-lg p-6 md:p-8">
                   <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                      <Briefcase className="h-16 w-16 md:h-20 md:w-20 text-electric-purple flex-shrink-0 pulse-slow" />
                      <div className="flex-1 text-center md:text-left">
                        <h3 className="text-2xl md:text-3xl font-bold mb-3 text-electric-purple">Internships with Applixera</h3>
                        <p className="text-gray-300 text-lg mb-5">
                          Top performers gain exclusive internship opportunities at <a href="#" target="_blank" rel="noopener noreferrer" className="font-semibold text-electric-purple/90 hover:text-electric-purple underline decoration-dashed underline-offset-4">Applixera Software Solutions</a>. Tackle live industry problems with expert mentorship.
                        </p>
                         <Button size="lg" className="bg-electric-purple/80 hover:bg-electric-purple text-white font-semibold button-glow-effect transform hover:scale-105 transition-all duration-300">
                          <Unlock className="mr-2 h-5 w-5"/> Unlock Your Potential
                         </Button>
                      </div>
                   </div>
                 </div>
              </Card>
            </motion.div>
        </div>
      </section>
    );
  };

  export default ProjectsSection;
  