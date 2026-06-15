"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function ContactForm() {
  const searchParams = useSearchParams();
  const initialCourse = searchParams.get("course") || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    course: initialCourse,
    message: ""
  });

  useEffect(() => {
    if (initialCourse) {
      setFormData(prev => ({ ...prev, course: initialCourse }));
    }
  }, [initialCourse]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*New Admission Inquiry* 🎓\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*City:* ${formData.city}\n*Course:* ${formData.course}\n\n*Message:* ${formData.message || "I would like to know more details and apply."}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/919745959290?text=${encodedText}`, "_blank");
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Page Header */}
      <section className="relative overflow-hidden bg-primary py-20 lg:py-28">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-5 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[#152865] opacity-90"></div>
        
        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
             initial={{ scale: 0.9, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             transition={{ duration: 0.5 }}
             className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white font-medium text-sm mb-6 border border-white/20 shadow-xl"
          >
            <Sparkles className="h-4 w-4 text-secondary" />
            <span>Join Safwa Hub Today</span>
          </motion.div>
          
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight drop-shadow-md"
          >
            Contact & Apply Now
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-primary-foreground/80 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Ready to start your learning journey? Fill out the form below and we will connect with you immediately via WhatsApp.
          </motion.p>
        </div>
      </section>

      <section className="py-16 -mt-10 mb-20 relative z-10">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            
            {/* Contact Info */}
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:w-1/3 space-y-6"
            >
              <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-white h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Get in Touch</h3>
                <p className="text-slate-500 mb-10 leading-relaxed text-sm">
                  Whether you have a question about our programs, fees, or admissions, our team is ready to assist you.
                </p>

                <div className="space-y-8">
                  <div className="group flex items-start gap-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/5 text-primary shrink-0 transition-transform group-hover:scale-110 group-hover:bg-primary/10">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Phone / WhatsApp</p>
                      <p className="font-semibold text-slate-900">+91 97459 59290</p>
                    </div>
                  </div>
                  
                  <div className="group flex items-start gap-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/5 text-primary shrink-0 transition-transform group-hover:scale-110 group-hover:bg-primary/10">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Email Address</p>
                      <p className="font-semibold text-slate-900">safwalearninghub@gmail.com</p>
                    </div>
                  </div>

                  <div className="group flex items-start gap-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/5 text-primary shrink-0 transition-transform group-hover:scale-110 group-hover:bg-primary/10">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Location</p>
                      <p className="font-semibold text-slate-900">Safwa Learning Hub</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Application Form */}
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="lg:w-2/3 bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl shadow-slate-200/50 p-8 md:p-12 border border-white"
            >
              <div className="mb-8 border-b border-slate-100 pb-6">
                <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Admission Enquiry</h3>
                <p className="text-slate-500 text-sm">Please fill out all the required fields below.</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-slate-700 font-semibold">Full Name *</Label>
                    <Input id="name" name="name" required placeholder="John Doe" value={formData.name} onChange={handleChange} className="h-12 bg-slate-50 border-transparent focus:bg-white transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-slate-700 font-semibold">Phone / WhatsApp Number *</Label>
                    <Input id="phone" name="phone" type="tel" required placeholder="+91 XXXXX XXXXX" value={formData.phone} onChange={handleChange} className="h-12 bg-slate-50 border-transparent focus:bg-white transition-colors" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-slate-700 font-semibold">Email Address</Label>
                    <Input id="email" name="email" type="email" placeholder="john@example.com" value={formData.email} onChange={handleChange} className="h-12 bg-slate-50 border-transparent focus:bg-white transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city" className="text-slate-700 font-semibold">City / Location *</Label>
                    <Input id="city" name="city" required placeholder="Your City" value={formData.city} onChange={handleChange} className="h-12 bg-slate-50 border-transparent focus:bg-white transition-colors" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="course" className="text-slate-700 font-semibold">Select Course / Program *</Label>
                  <select 
                    id="course" 
                    name="course" 
                    required 
                    value={formData.course} 
                    onChange={handleChange}
                    className="flex h-12 w-full rounded-md border border-transparent bg-slate-50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:bg-white transition-colors disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="" disabled>Select a program...</option>
                    <option value="Academic Education">Academic Education (All Grades)</option>
                    <option value="Foundation Classes">Foundation Classes</option>
                    <option value="School Readiness Program">School Readiness Program</option>
                    <option value="Language & Academic Courses">Language & Academic Courses</option>
                    <option value="Grammar Master Class">Grammar Master Class</option>
                    <option value="Homework Support Program">Homework Support Program</option>
                    <option value="Islamic Education">Islamic Education</option>
                    <option value="Spoken Language Programs">Spoken Language Programs</option>
                    <option value="Other Enquiry">Other Enquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-slate-700 font-semibold">Any Additional Questions? (Optional)</Label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4}
                    placeholder="Tell us a bit about what you're looking for..." 
                    value={formData.message} 
                    onChange={handleChange}
                    className="flex w-full rounded-md border border-transparent bg-slate-50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:bg-white transition-colors disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-[#25D366] to-[#1DA851] hover:from-[#20bd5a] hover:to-[#178a42] text-white text-lg h-14 rounded-xl shadow-lg shadow-[#25D366]/30 transition-all hover:shadow-xl hover:shadow-[#25D366]/40 hover:-translate-y-1">
                  <Send className="mr-2 h-5 w-5" /> Submit & Continue on WhatsApp
                </Button>
              </form>

            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-pulse flex flex-col items-center"><div className="h-12 w-12 rounded-full bg-primary/20 mb-4"></div><p className="text-muted-foreground font-medium">Loading Form...</p></div></div>}>
      <ContactForm />
    </Suspense>
  )
}
