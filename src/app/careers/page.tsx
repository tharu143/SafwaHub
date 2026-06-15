"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Briefcase, Users, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function CareersPage() {
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
            Career Opportunities
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-primary-foreground/90 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-sm"
          >
            Join our team of dedicated educators and professionals to shape the future of learning.
          </motion.p>
        </div>
      </section>

      <section className="py-24 -mt-10 relative z-10">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 text-primary font-medium text-sm mb-4">
              <Briefcase className="h-4 w-4" />
              <span>We're Hiring</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Current Openings</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
            {/* Teachers Role */}
            <Card className="border-0 shadow-md">
              <CardHeader className="bg-primary/5 rounded-t-xl pb-6">
                <CardTitle className="text-2xl text-primary">Teachers & Educators</CardTitle>
                <p className="text-slate-600 mt-2">
                  Freshers & Experienced Candidates Welcome
                </p>
              </CardHeader>
              <CardContent className="pt-6">
                <h4 className="font-semibold text-slate-900 mb-4 text-lg">Eligibility & Requirements</h4>
                <ul className="space-y-3">
                  {[
                    "Good Communication Skills",
                    "Passion for Teaching",
                    "Commitment & Responsibility",
                    "Strong Subject Knowledge",
                    "Ability to Handle Students Effectively",
                  ].map((req, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-secondary shrink-0" />
                      <span className="text-slate-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Promotional Staff */}
            <Card className="border-0 shadow-md">
              <CardHeader className="bg-primary/5 rounded-t-xl pb-6">
                <CardTitle className="text-2xl text-primary">Promotional Staff</CardTitle>
                <p className="text-slate-600 mt-2">
                  Marketing & Community Engagement
                </p>
              </CardHeader>
              <CardContent className="pt-6">
                <h4 className="font-semibold text-slate-900 mb-4 text-lg">Key Responsibilities</h4>
                <ul className="space-y-3">
                  {[
                    "Promote Safwa programs locally",
                    "Social Media Promotion",
                    "Admission Campaign Support",
                    "Parent & Student Communication",
                    "Community Engagement",
                    "Educational Event Support"
                  ].map((req, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-secondary shrink-0" />
                      <span className="text-slate-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Essential Qualities */}
          <div className="bg-white rounded-[3rem] shadow-2xl shadow-slate-200/50 border border-slate-100 p-10 md:p-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">Essential Qualities We Look For</h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">The core attributes that define a Safwa team member.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-8">
              {[
                "Good Communication Skills",
                "Professional Attitude",
                "Responsibility & Commitment",
                "Patience & Understanding",
                "Time Management",
                "Teamwork & Cooperation",
                "Leadership Qualities",
                "Creativity & Initiative",
                "Positive Interaction",
                "Willingness to Learn"
              ].map((quality, i) => (
                <div key={i} className="flex items-center gap-4 bg-slate-50 p-5 rounded-2xl border border-transparent hover:border-slate-200 transition-colors">
                  <Star className="h-6 w-6 text-secondary shrink-0" />
                  <span className="font-semibold text-slate-800">{quality}</span>
                </div>
              ))}
            </div>

            <div className="mt-20 text-center">
              <h3 className="text-3xl font-bold text-slate-900 mb-8 tracking-tight">Ready to make an impact?</h3>
              <Link href="/contact" className={buttonVariants({ variant: "default", size: "lg" }) + " bg-gradient-to-r from-primary to-[#152865] text-white hover:scale-105 transition-transform shadow-xl shadow-primary/20 px-10 py-7 text-lg rounded-full font-bold"}>
                Apply Now
              </Link>
              <p className="mt-6 text-sm text-slate-500 font-medium">Send your resume to <a href="mailto:safwalearninghub@gmail.com" className="text-primary hover:underline">safwalearninghub@gmail.com</a></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
