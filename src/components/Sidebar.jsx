import React from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Home, Info, Calendar, Users, Mail, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();
  
  const menuItems = [
    { icon: Home, label: "Home", id: "home" },
    { icon: Info, label: "About", id: "about" },
    { icon: Calendar, label: "Events", id: "events" },
    { icon: Users, label: "Team", id: "team", to: "/team" },
    { icon: Mail, label: "Contact", id: "contact" },
  ];

  const sidebarVariants = {
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    closed: {
      x: "-100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const handleNavClick = (item) => {
    if (item.to) {
      // If it's a page navigation link
      onClose();
    } else {
      // If we're on the home page, scroll to section
      if (location.pathname === '/') {
        const element = document.getElementById(item.id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          onClose();
        }
      } else {
        // If we're not on home page, navigate to home and then scroll
        window.location.href = `/#${item.id}`;
        onClose();
      }
    }
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        />
      )}

      {/* Sidebar */}
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={sidebarVariants}
        className="fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-midnight-black/95 to-midnight-black/98 border-r border-neon-blue/20 shadow-lg z-50"
      >
        <div className="p-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold text-gradient-blue-purple">CreatorNex</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-gray-400 hover:text-white"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          <nav>
            <ul className="space-y-4">
              {menuItems.map((item) => (
                <li key={item.id}>
                  {item.to ? (
                    <Link
                      to={item.to}
                      onClick={() => handleNavClick(item)}
                      className={`w-full flex items-center gap-3 px-4 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-200 ${
                        location.pathname === item.to ? "bg-white/10 text-white" : ""
                      }`}
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleNavClick(item)}
                      className="w-full flex items-center gap-3 px-4 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-200"
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar; 