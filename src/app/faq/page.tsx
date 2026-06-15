"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function FAQPage() {
  const faqs = [
    {
      question: "What age groups do you cater to?",
      answer: "We provide academic support and classes for students of all grades, starting from early learning and kindergarten preparation up to advanced academic and language courses."
    },
    {
      question: "What is included in the School Readiness Program?",
      answer: "Our School Readiness Program focuses on early learning concepts, skill development, and overall kindergarten preparation to ensure young learners start their schooling with confidence."
    },
    {
      question: "Which languages are taught at Safwa Learning Hub?",
      answer: "We offer comprehensive language courses including English, Malayalam, Hindi, Arabic, and specialized Arabic-Malayalam. We also offer Spoken Language programs for English, Arabic, and Hindi."
    },
    {
      question: "Do you provide homework assistance?",
      answer: "Yes, our Homework Support Program provides dedicated homework assistance, revision support, and study guidance to help students stay on top of their academic curriculum."
    },
    {
      question: "What is the Grammar Master Class?",
      answer: "The Grammar Master Class is designed to develop strong communication skills and deep grammatical understanding for students, ensuring they excel in reading, writing, and speaking."
    },
    {
      question: "What Islamic Education programs are available?",
      answer: "We offer structured Madrasa Classes and dedicated Quran Classes, providing a value-based Islamic education in a friendly and supportive learning environment."
    },
    {
      question: "Who are the educators at Safwa?",
      answer: "We pride ourselves on having experienced, passionate, and committed educators who provide individual attention and student-centered learning to every child."
    },
    {
      question: "How can I apply for admission?",
      answer: "Applying is easy! You can contact us directly at +91 97459 59290, email us at safwalearninghub@gmail.com, or simply click the WhatsApp button to chat with our admission team."
    }
  ];

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
            Frequently Asked Questions
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-primary-foreground/90 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-sm"
          >
            Find answers to common questions about our programs, admissions, and learning environment.
          </motion.p>
        </div>
      </section>

      <section className="py-24 -mt-10 relative z-10">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-[3rem] shadow-2xl shadow-slate-200/50 border border-slate-100 p-8 md:p-12">
            <Accordion className="w-full space-y-6">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-2xl px-6 bg-slate-50 shadow-sm data-[state=open]:bg-white data-[state=open]:shadow-md transition-all duration-300">
                  <AccordionTrigger className="text-left font-bold text-lg text-slate-800 hover:text-primary hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 text-base leading-relaxed pb-6 font-medium">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-20 bg-gradient-to-br from-primary/5 to-primary/10 rounded-[3rem] p-12 text-center border border-primary/10 shadow-lg shadow-primary/5">
            <h3 className="text-3xl font-extrabold text-slate-900 mb-6 tracking-tight">Still have questions?</h3>
            <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">We're here to help! Reach out to us directly for any further inquiries and we'll get back to you immediately.</p>
            <Link href="https://wa.me/919745959290" target="_blank" className={buttonVariants({ variant: "default" }) + " bg-gradient-to-r from-[#25D366] to-[#1DA851] hover:scale-105 transition-transform shadow-xl shadow-[#25D366]/30 text-white px-10 py-7 rounded-full text-lg font-bold"}>
              <MessageCircle className="mr-3 h-6 w-6" /> Chat on WhatsApp
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
