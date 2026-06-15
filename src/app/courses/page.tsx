"use client";

import { motion } from "framer-motion";
import { BookOpen, GraduationCap, FileText, Globe, Languages, Library, Star, Heart, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const categories = [
  {
    title: "Academic Education",
    icon: GraduationCap,
    items: ["Classes for Students of All Grades", "All Major Subjects Tuition"],
  },
  {
    title: "Foundation Classes",
    icon: Library,
    items: ["Basic Learning Programs", "Skill Development"],
  },
  {
    title: "School Readiness Program",
    icon: Star,
    items: ["Early Learning", "Kindergarten Preparation"],
  },
  {
    title: "Language & Academic Courses",
    icon: Globe,
    items: ["Malayalam", "English", "Hindi", "Arabic", "Arabic-Malayalam", "Mathematics"],
  },
  {
    title: "Grammar Master Class",
    icon: FileText,
    items: ["Communication Skills", "Grammar Development"],
  },
  {
    title: "Homework Support Program",
    icon: BookOpen,
    items: ["Homework Assistance", "Revision Support", "Study Guidance"],
  },
  {
    title: "Islamic Education",
    icon: Heart,
    items: ["Madrasa Classes", "Quran Classes"],
  },
  {
    title: "Spoken Language Programs",
    icon: Languages,
    items: ["Spoken English", "Spoken Arabic", "Spoken Hindi"],
  },
];

export default function CoursesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Page Header */}
      <section className="relative overflow-hidden bg-primary py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[#152865] opacity-95"></div>
        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight drop-shadow-md"
          >
            Programs Offered
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-primary-foreground/90 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-sm"
          >
            Explore our comprehensive range of courses designed for all learning levels. Start your journey with Safwa Learning Hub today.
          </motion.p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 -mt-12 relative z-10">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
            {categories.map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group h-full"
              >
                <Card className="h-full flex flex-col border-0 bg-white/80 backdrop-blur-xl shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 rounded-3xl overflow-hidden hover:-translate-y-2">
                  <div className="h-2 w-full bg-gradient-to-r from-primary to-secondary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  
                  <CardHeader className="pb-4 pt-8 px-8">
                    <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                      {category.icon && <category.icon className="h-8 w-8 text-primary" />}
                    </div>
                    <CardTitle className="text-2xl font-bold text-slate-900 leading-tight">{category.title}</CardTitle>
                  </CardHeader>
                  
                  <CardContent className="px-8 pb-8 flex-1 flex flex-col">
                    <ul className="space-y-4 mb-8 flex-1">
                      {category.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="h-2 w-2 rounded-full bg-secondary mt-2 shrink-0 shadow-sm"></div>
                          <span className="text-slate-600 font-medium leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-6 border-t border-slate-100 mt-auto">
                      <Link 
                        href={`/contact?course=${encodeURIComponent(category.title)}`} 
                        className={buttonVariants({ variant: "outline" }) + " w-full group/btn relative overflow-hidden border-primary/20 text-primary hover:text-primary-foreground hover:border-transparent transition-all duration-300 h-12 rounded-xl text-md font-semibold"}
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          Apply Now <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                        </span>
                        <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left duration-300"></div>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-24 text-center">
            <h3 className="text-3xl font-bold text-slate-900 mb-8 tracking-tight">Need help choosing a program?</h3>
            <Link href="/contact" className={buttonVariants({ variant: "default", size: "lg" }) + " bg-gradient-to-r from-primary to-[#152865] hover:shadow-xl hover:shadow-primary/30 text-white hover:scale-105 transition-all duration-300 px-10 py-6 rounded-full text-lg font-semibold"}>
              Speak to our Academic Advisor
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
