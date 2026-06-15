"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BookOpen, GraduationCap, Users, ShieldCheck, Target, Trophy, Sparkles } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground py-24 lg:py-36">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[#152865] opacity-95"></div>
        
        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          
          <motion.div
             initial={{ scale: 0.9, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             transition={{ duration: 0.5 }}
             className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white font-medium text-sm mb-8 border border-white/20 shadow-xl"
          >
            <Sparkles className="h-4 w-4 text-secondary" />
            <span>Admissions Now Open for 2026-2027</span>
          </motion.div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8 flex h-24 w-24 items-center justify-center rounded-3xl bg-secondary shadow-2xl shadow-secondary/20 border border-white/20"
          >
            <GraduationCap className="h-12 w-12 text-primary" />
          </motion.div>
          
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 max-w-5xl leading-tight drop-shadow-lg"
          >
            Empowering Students Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-yellow-200">Quality Education</span>
          </motion.h1>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl sm:text-2xl text-primary-foreground/90 font-light mb-12 italic max-w-2xl tracking-wide drop-shadow-sm"
          >
            Seek &bull; Achieve &bull; Focus &bull; Win
          </motion.p>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <Link href="/contact" className={buttonVariants({ variant: "default", size: "lg" }) + " bg-secondary text-primary hover:bg-secondary/90 hover:scale-105 transition-all shadow-xl shadow-secondary/20 text-lg px-10 py-7 rounded-full font-bold"}>
              Apply Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link href="/contact" className={buttonVariants({ variant: "outline", size: "lg" }) + " bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/50 transition-all text-lg px-10 py-7 rounded-full font-bold backdrop-blur-sm"}>
              Contact Us
            </Link>
          </motion.div>
        </div>

        {/* Floating Background Icons */}
        <motion.div 
          animate={{ y: [0, -20, 0] }} 
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} 
          className="absolute top-32 left-[10%] hidden xl:block opacity-20"
        >
          <BookOpen className="h-20 w-20" />
        </motion.div>
        <motion.div 
          animate={{ y: [0, 20, 0] }} 
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }} 
          className="absolute bottom-32 right-[10%] hidden xl:block opacity-20"
        >
          <Target className="h-24 w-24" />
        </motion.div>
      </section>

      {/* Snapshot of Programs */}
      <section className="py-24 bg-white relative z-10 -mt-10 rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-6">Our Top Programs</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
              We offer a wide range of academic and personal development courses to prepare students for the future.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            {[
              { title: "Academic Education", desc: "Comprehensive tuition for all grades and major subjects focusing on deep conceptual understanding.", icon: BookOpen, color: "bg-blue-50 text-blue-600" },
              { title: "Language Programs", desc: "Master Spoken English, Arabic, Hindi, and Malayalam with our expert language instructors.", icon: Users, color: "bg-emerald-50 text-emerald-600" },
              { title: "Islamic Education", desc: "Madrasa classes, Quran learning, and value-based education for holistic personal development.", icon: Target, color: "bg-amber-50 text-amber-600" }
            ].map((prog, i) => (
              <motion.div key={i} variants={itemVariants} className="h-full">
                <Card className="h-full flex flex-col border border-slate-100 bg-white shadow-xl shadow-slate-200/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 rounded-3xl overflow-hidden">
                  <CardHeader className="pt-8 px-8">
                    <div className={`h-16 w-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm ${prog.color}`}>
                      <prog.icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-slate-900 leading-tight">{prog.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="px-8 pb-8 flex-1 flex flex-col">
                    <CardDescription className="text-base text-slate-600 leading-relaxed mb-8 flex-1">{prog.desc}</CardDescription>
                    <Link href={`/contact?course=${encodeURIComponent(prog.title)}`} className="text-primary font-bold hover:text-secondary flex items-center transition-colors">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-16 text-center">
            <Link href="/courses" className={buttonVariants({ variant: "outline", size: "lg" }) + " border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-primary rounded-full px-8 py-6 text-md font-semibold transition-all"}>
              Explore All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Safwa */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 text-primary font-semibold text-sm mb-6">
                <ShieldCheck className="h-4 w-4" />
                <span>Our Value</span>
              </div>
              <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-8 leading-tight">Why Choose Safwa Hub?</h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                We believe in providing an educational experience that goes beyond textbooks. At Safwa Learning Hub, your child benefits from dedicated mentors, a positive environment, and an approach focused entirely on their growth.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
                {[
                  "Experienced Educators",
                  "Friendly Environment",
                  "Flexible Schedule",
                  "Value-Based Education",
                  "Student-Centered Learning",
                  "Individual Attention"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/20">
                      <ShieldCheck className="h-4 w-4 text-secondary" />
                    </div>
                    <span className="font-semibold text-slate-800">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2 relative w-full h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop" 
                alt="Students learning in a classroom" 
                className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl">
                <p className="text-white text-xl font-medium leading-relaxed italic">"To empower students with knowledge, skills, and values to become confident, responsible, and successful individuals."</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Admission CTA */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-5 mix-blend-overlay"></div>
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 p-12 rounded-[3rem] shadow-2xl"
          >
            <Trophy className="h-20 w-20 text-secondary mx-auto mb-8 drop-shadow-md" />
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
              Start Your Child's Learning Journey Today
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Join Safwa Learning Hub and give your child the right foundation for academic excellence and personal growth.
            </p>
            <Link href="/contact" className={buttonVariants({ variant: "default", size: "lg" }) + " bg-secondary text-primary hover:bg-secondary/90 hover:scale-105 shadow-xl shadow-secondary/20 transition-all text-xl px-12 py-8 rounded-full font-bold"}>
              Apply for Admission Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
