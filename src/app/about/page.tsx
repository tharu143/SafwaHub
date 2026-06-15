"use client";

import { motion } from "framer-motion";
import { GraduationCap, Target, Heart, Lightbulb, Users, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Page Header */}
      <section className="relative overflow-hidden bg-primary py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[#152865] opacity-95"></div>
        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
             initial={{ scale: 0.9, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             transition={{ duration: 0.5 }}
             className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white font-medium text-sm mb-6 border border-white/20 shadow-xl"
          >
            <Sparkles className="h-4 w-4 text-secondary" />
            <span>Discover Safwa Hub</span>
          </motion.div>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight drop-shadow-md"
          >
            About Safwa Learning Hub
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-primary-foreground/90 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-sm"
          >
            Discover our mission, our values, and our commitment to educational excellence and personal growth.
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 relative z-10 -mt-10 bg-white rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div 
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2 relative"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl h-[500px]">
                <img 
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop" 
                  alt="Students studying" 
                  className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 h-40 w-40 bg-secondary rounded-[2rem] -z-10 hidden lg:block transform rotate-6"></div>
              <div className="absolute -top-8 -left-8 h-40 w-40 bg-primary/10 rounded-full -z-10 hidden lg:block backdrop-blur-3xl"></div>
            </motion.div>

            <motion.div 
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 text-primary font-semibold text-sm mb-6">
                <Target className="h-4 w-4" />
                <span>Our Mission</span>
              </div>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-8 leading-tight tracking-tight">
                Empowering students to become confident and responsible.
              </h2>
              <div className="pl-6 border-l-4 border-secondary mb-8">
                <p className="text-xl text-slate-800 font-medium leading-relaxed italic">
                  "To empower students with knowledge, skills, and values to become confident, responsible, and successful individuals."
                </p>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed mb-10">
                Safwa Learning Hub is an educational institution dedicated to providing quality education and meaningful learning opportunities for students. We focus on academic excellence, language development, Islamic education, and personal growth in a supportive learning environment. Our mission is to help students build confidence, skills, and strong values for a brighter future.
              </p>
              <Link href="/courses" className={buttonVariants({ variant: "default", size: "lg" }) + " bg-primary hover:bg-[#152865] hover:scale-105 shadow-xl shadow-primary/20 transition-all px-8 py-6 rounded-full text-lg"}>
                View Our Programs <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Student Benefits Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">Student Benefits</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
              We focus on holistic development to ensure every student thrives both academically and personally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Academic Excellence", icon: GraduationCap, desc: "Building a strong foundation across all subjects for lifelong learning." },
              { title: "Language Development", icon: Lightbulb, desc: "Mastering clear and effective communication in multiple languages." },
              { title: "Islamic Learning", icon: Heart, desc: "Instilling deep-rooted moral, ethical, and spiritual values." },
              { title: "Personal Growth", icon: Users, desc: "Fostering leadership, confidence, and career preparation skills." }
            ].map((benefit, i) => (
              <motion.div 
                key={i}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-10 rounded-3xl shadow-xl shadow-slate-200/40 border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="h-16 w-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
