
  import React, { useState } from "react";
  import { motion } from "framer-motion";
  import { Input } from "@/components/ui/input";
  import { Button } from "@/components/ui/button";
  import { FormItem, FormControl, FormMessage } from "@/components/ui/form";
  import { useToast } from "@/components/ui/use-toast";

  const NotifyForm = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast();

    const validateEmail = (email) => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).toLowerCase());
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      setError("");

      if (!email) {
        setError("Email is required");
        return;
      }

      if (!validateEmail(email)) {
        setError("Please enter a valid email address");
        return;
      }

      setIsSubmitting(true);

      // Simulate API call
      setTimeout(() => {
        // Store email in localStorage
        try {
          const existingEmails = JSON.parse(localStorage.getItem("notifyEmails")) || [];
          if (!existingEmails.includes(email)) {
            existingEmails.push(email);
            localStorage.setItem("notifyEmails", JSON.stringify(existingEmails));
          }

          toast({
            title: "Success!",
            description: "You'll be notified when we launch. Thank you for your interest!",
            duration: 5000,
          });

          setEmail("");
        } catch (err) {
          toast({
            title: "Something went wrong",
            description: "Please try again later.",
            variant: "destructive",
            duration: 5000,
          });
        }

        setIsSubmitting(false);
      }, 1500);
    };

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="w-full max-w-md mx-auto"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <FormItem>
            <FormControl>
              <div className="flex flex-col sm:flex-row gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-background/50 backdrop-blur-sm border-blue-500/30 focus:border-blue-500"
                />
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium transition-all duration-300 ease-in-out transform hover:scale-105 glow"
                >
                  {isSubmitting ? "Submitting..." : "Notify Me"}
                </Button>
              </div>
            </FormControl>
            {error && <FormMessage>{error}</FormMessage>}
          </FormItem>
        </form>
      </motion.div>
    );
  };

  export default NotifyForm;
  