import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin } from "lucide-react";
import Contact3DScene from "@/components/Contact3DScene";

const ContactSection = () => {
  const contactInfo = [
    { icon: Mail, label: "Email", value: "creatornex.main@gmail.com", href: "mailto:creatornex.main@gmail.com" },
    { icon: Linkedin, label: "LinkedIn", value: "CreatorNex LLC.", href: "https://www.linkedin.com/company/creatornex/", target: "_blank" },
    { icon: MapPin, label: "Location", value: "SRM University, Kattankulathur, Chennai.", href: "#", noHoverEffect: true },
  ];

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="contact" className="bg-midnight-black section-gradient-bg py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-16 text-gradient-blue-purple"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          Let's Connect
        </motion.h2>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="w-full lg:w-1/2 max-w-lg mx-auto lg:mx-0">
            <ul className="space-y-4 md:space-y-6">
              {contactInfo.map((item, index) => (
                <motion.li 
                  key={index}
                  custom={index}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <a 
                    href={item.href} 
                    target={item.target || "_self"} 
                    rel="noopener noreferrer"
                    className={`flex items-start gap-4 p-4 md:p-5 glassmorphic-card rounded-lg group transition-all duration-300 ${item.noHoverEffect ? 'cursor-default' : 'hover:border-neon-blue/50 hover:bg-card/80'}`}
                  >
                    <div className={`p-2 rounded-full bg-neon-blue/10 transition-colors duration-300 ${item.noHoverEffect ? '' : 'group-hover:bg-neon-blue/20'}`}>
                      <item.icon className={`h-6 w-6 md:h-7 md:w-7 text-neon-blue flex-shrink-0 transition-colors duration-300 ${item.noHoverEffect ? '' : 'group-hover:scale-110'}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-base md:text-lg text-neon-blue/90 mb-1">{item.label}</h4>
                      <p className={`text-gray-300 text-sm md:text-base break-all ${item.noHoverEffect ? '' : 'group-hover:text-gray-100'}`}>
                        {item.value}
                      </p>
                    </div>
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
          {/* 3D Scene */}
          <div className="w-full lg:w-1/2 h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] flex items-center justify-center">
            <div className="w-full h-full max-w-md mx-auto">
              <Contact3DScene />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
  