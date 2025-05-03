import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { User, GraduationCap, Code, CalendarCheck, Megaphone, Users2, Linkedin } from "lucide-react";

const TeamMemberCard = ({ member, index, isFounder, isAdvisor }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: index * 0.1,
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  
  const borderColorClass = isFounder ? 'border-neon-blue/50' : isAdvisor ? 'border-electric-purple/50' : 'border-border/30';
  const titleColorClass = isFounder ? 'text-neon-blue' : isAdvisor ? 'text-electric-purple' : 'text-neon-blue/80';
  const roleColorClass = isFounder ? 'text-neon-blue/80' : isAdvisor ? 'text-electric-purple/80' : 'text-gray-400';
  const IconComponent = member.icon || (isFounder ? User : isAdvisor ? GraduationCap : Users2);
  const iconColor = isFounder ? 'text-neon-blue' : isAdvisor ? 'text-electric-purple' : 'text-neon-blue/70';

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <Card className={`glassmorphic-card h-full text-center p-3 sm:p-4 md:p-6 group hover:${borderColorClass} transition-colors duration-300`}>
        <CardHeader className="items-center pb-2 sm:pb-3">
          <div className={`p-2 sm:p-3 rounded-full bg-card mb-2 sm:mb-3 transition-colors duration-300 group-hover:bg-accent`}>
            <IconComponent className={`h-8 w-8 sm:h-10 sm:w-10 ${iconColor}`} />
          </div>
          <CardTitle className={`text-lg sm:text-xl font-semibold ${titleColorClass}`}>{member.name}</CardTitle>
          {member.role && <CardDescription className={`${roleColorClass} font-medium mt-1 text-sm sm:text-base`}>{member.role}</CardDescription>}
        </CardHeader>
        <CardContent>
          <p className="text-gray-300 text-sm sm:text-base">{member.description}</p>
          {member.name === "Sarwan Nandh (Sarwan Thondamalla)" && (
            <a href="https://www.linkedin.com/in/sarwan-nandh/" target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-neon-blue/70 hover:text-neon-blue transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

const TeamSection = () => {
  const founders = [
    { name: "Sarwan Nandh (Sarwan Thondamalla)", role: "President & Founder", description: "Leads the vision, strategy, and external partnerships." },
    { name: "Salla Lohith", role: "Vice President & Co-Founder", description: "Drives internal operations and workshops." },
  ];
  const advisor = { name: "Dr. R. Babu", role: "Faculty Advisor", description: "Department of Computer Science, SRM University. Mentoring students and building university partnerships." };
  const coreRoles = [
    { icon: Code, name: "Technical Lead", description: "Organizes AI/ML sessions and maintains GitHub repos." },
    { icon: CalendarCheck, name: "Event Coordinator", description: "Manages logistics, registrations, and venue planning." },
    { icon: Megaphone, name: "Marketing Lead", description: "Designs posters and handles social media." },
    { icon: Users2, name: "General Members", description: "Active contributors in events and projects." },
  ];

  return (
    <section id="team" className="bg-midnight-black section-gradient-bg py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-16 text-gradient-blue-purple"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          The Faces Behind CreatorNex
        </motion.h2>

        <div className="mb-12 md:mb-16">
          <h3 className="text-2xl md:text-3xl font-semibold text-center mb-6 md:mb-10 text-neon-blue/90">Founders</h3>
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {founders.map((member, index) => (
              <TeamMemberCard key={index} member={member} index={index} isFounder={true} />
            ))}
          </div>
        </div>

        <div className="mb-12 md:mb-16 max-w-2xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-semibold text-center mb-6 md:mb-10 text-electric-purple/90">Faculty Advisor</h3>
          <TeamMemberCard member={advisor} index={0} isAdvisor={true} />
        </div>

        <div>
          <h3 className="text-2xl md:text-3xl font-semibold text-center mb-6 md:mb-10 text-neon-blue/90">Core Roles</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {coreRoles.map((role, index) => (
              <TeamMemberCard key={index} member={role} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
  