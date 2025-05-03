
  import React, { useState } from "react";
  import { motion } from "framer-motion";
  import { Input } from "@/components/ui/input";
  import { Button } from "@/components/ui/button";
  import { Label } from "@/components/ui/label";
  import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
  import { useToast } from "@/components/ui/use-toast";
  import { Rocket } from "lucide-react";

  const JoinUsSection = () => {
    const [formData, setFormData] = useState({
      fullName: "", email: "", rollNumber: "", interests: "", role: "", profileLinks: ""
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast();

    const validate = () => {
      let tempErrors = {};
      if (!formData.fullName) tempErrors.fullName = "Full Name is required.";
      if (!formData.email) tempErrors.email = "SRM Email ID is required.";
      else if (!/\S+@srmist\.edu\.in$/.test(formData.email)) tempErrors.email = "Please use a valid SRM Email ID (...@srmist.edu.in).";
      if (!formData.rollNumber) tempErrors.rollNumber = "Roll Number is required.";
      if (!formData.interests) tempErrors.interests = "Please select your skills/interests.";
      if (!formData.role) tempErrors.role = "Please select the role you're interested in.";
      setErrors(tempErrors);
      return Object.keys(tempErrors).length === 0;
    };

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
      if (errors[name]) setErrors({ ...errors, [name]: "" });
    };
    
    const handleSelectChange = (name, value) => {
       setFormData({ ...formData, [name]: value });
       if (errors[name]) setErrors({ ...errors, [name]: "" });
    };

    // Google Apps Script Web App URL - Latest deployed URL
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz2_QrzgcJ8s1eyN1tQSqgDi0jpyJANLRMcPzfGs4fGVKB3lMBwZ5eO-A45IitmbKDk/exec";

    const handleSubmit = async (e) => {
      e.preventDefault();
      if (validate()) {
        setIsSubmitting(true);
        
        try {
          // Prepare data in the format expected by the script
          const data = {
            fullName: formData.fullName,
            email: formData.email,
            rollNumber: formData.rollNumber,
            interests: formData.interests,
            role: formData.role,
            profileLinks: formData.profileLinks || ""
          };
          
          console.log("Submitting form data:", data);
          
          // Send data directly using fetch with JSON content type
          await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
            mode: 'no-cors' // This is needed for cross-origin requests
          });
          
          // Since we're using no-cors, we won't get a response we can read
          // We'll assume success if no error is thrown
          
          console.log("Form submitted successfully");
          
          toast({
            title: "🚀 Application Sent!",
            description: "Thanks for your interest! We'll review your application soon.",
            duration: 5000,
          });
          setFormData({ fullName: "", email: "", rollNumber: "", interests: "", role: "", profileLinks: "" });
          setErrors({});
        } catch (error) {
          console.error('Error submitting form:', error);
          toast({
            title: "Submission Error",
            description: "Could not save your application. Please try again.",
            variant: "destructive",
            duration: 5000,
          });
        } finally {
          setIsSubmitting(false);
        }
      } else {
        toast({
          title: "Validation Error",
          description: "Please fill in all required fields correctly.",
          variant: "destructive",
          duration: 3000,
        });
      }
    };

    return (
      <section id="join" className="relative mesh-gradient-bg">
        <div className="container mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 text-gradient-blue-purple"
             initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
          >
            Become a Part of CreatorNex
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-center max-w-2xl mx-auto mb-12 text-gray-300 leading-relaxed"
             initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Ready to shape the future with AI? Join us to get hands-on with machine learning, attend premium workshops, and work on projects that matter.
          </motion.p>

          <motion.div 
            className="max-w-2xl mx-auto glassmorphic-card-border p-1 rounded-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="bg-midnight-black p-6 md:p-8 rounded-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="fullName" className="label-glow">Full Name</Label>
                    <Input id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} className="form-input-glow mt-1" />
                    {errors.fullName && <p className="text-red-400 text-sm mt-1">{errors.fullName}</p>}
                  </div>
                   <div>
                    <Label htmlFor="email" className="label-glow">SRM Email ID</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="yourname@srmist.edu.in" className="form-input-glow mt-1" />
                    {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>
                 <div>
                    <Label htmlFor="rollNumber" className="label-glow">Roll Number</Label>
                    <Input id="rollNumber" name="rollNumber" value={formData.rollNumber} onChange={handleChange} className="form-input-glow mt-1" />
                    {errors.rollNumber && <p className="text-red-400 text-sm mt-1">{errors.rollNumber}</p>}
                  </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="interests" className="label-glow">Skills / Interests</Label>
                    <Select name="interests" onValueChange={(value) => handleSelectChange("interests", value)} value={formData.interests}>
                      <SelectTrigger id="skills" className="form-input-glow mt-1 w-full">
                        <SelectValue placeholder="Select your primary interest" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="AI">Artificial Intelligence</SelectItem>
                        <SelectItem value="ML">Machine Learning</SelectItem>
                        <SelectItem value="Marketing">Marketing & Outreach</SelectItem>
                        <SelectItem value="Events">Event Management</SelectItem>
                        <SelectItem value="Design">Design & Creatives</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                     {errors.interests && <p className="text-red-400 text-sm mt-1">{errors.interests}</p>}
                  </div>
                   <div>
                    <Label htmlFor="role" className="label-glow">Role You’re Interested In</Label>
                     <Select name="role" onValueChange={(value) => handleSelectChange("role", value)} value={formData.role}>
                      <SelectTrigger id="role" className="form-input-glow mt-1 w-full">
                        <SelectValue placeholder="Select desired role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Member">General Member</SelectItem>
                        <SelectItem value="Volunteer">Volunteer</SelectItem>
                        <SelectItem value="Lead">Lead Role</SelectItem>
                      </SelectContent>
                    </Select>
                     {errors.role && <p className="text-red-400 text-sm mt-1">{errors.role}</p>}
                  </div>
                </div>
                 <div>
                    <Label htmlFor="profileLinks" className="label-glow">GitHub / LinkedIn (Optional)</Label>
                    <Input id="profileLinks" name="profileLinks" value={formData.profileLinks} onChange={handleChange} placeholder="Paste your profile links here" className="form-input-glow mt-1" />
                  </div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-neon-blue/80 to-electric-purple/80 hover:from-neon-blue hover:to-electric-purple text-black font-bold py-3 text-lg button-glow-effect transform hover:scale-102 transition-all duration-300 mt-4"
                >
                  <Rocket className="mr-2 h-5 w-5 animate-pulse" /> {isSubmitting ? "Submitting Application..." : "Apply Now"}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    );
  };

  export default JoinUsSection;
  