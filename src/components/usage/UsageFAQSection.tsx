"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  HelpCircle, 
  ChevronDown, 
  Phone, 
  ShieldCheck, 
  ExternalLink,
  MessageCircle,
  Sparkles
} from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Can I take Intra on an empty stomach, or should I take it with food?",
    answer: "Intra can be taken either on an empty stomach upon waking or with food. Many customers take their daily serving first thing in the morning to energize their 8 biological systems. If you have an unusually sensitive or acidic stomach, we recommend taking Intra with or right after a meal, or diluting it with water or pure fruit juice.",
  },
  {
    question: "Can I mix liquid Intra with juice, smoothies, or water?",
    answer: "Yes, absolutely! Liquid Intra has a pleasant, mild herbal-fruit flavor that mixes wonderfully with pure water, chilled smoothies, or natural fruit juices like orange, apple, or grape juice. We advise against mixing Intra with boiling or extremely hot liquids, as high heat can compromise delicate botanical nutrients.",
  },
  {
    question: "Why is drinking 250 ml (one full glass) of water mandatory with FibreLife?",
    answer: "FibreLife contains the highest-viscosity soluble plant fibres scientifically tested. It functions by absorbing water and forming a soothing gel inside your digestive system that moderates sugar absorption and sweeps cholesterol. Without sufficient water, the fibre cannot expand optimally and may cause temporary digestive sluggishness.",
  },
  {
    question: "Why must I wait 1 hour between taking Intra/NutriaPlus and FibreLife?",
    answer: "Because FibreLife is an exceptional natural binder that traps excess sugars, fats, and cholesterol in your digestive tract, taking it at the exact same moment as Intra or NutriaPlus might cause the fibre to bind the delicate botanical extracts and vitamins before your bloodstream can absorb them. A 1-hour interval ensures all herbal nutrients are safely assimilated.",
  },
  {
    question: "Is Intra safe for children, seniors, and active athletes?",
    answer: "Yes. Intra is formulated from 23 time-tested, food-grade botanicals and is completely free of synthetic stimulants or banned substances. Children can take a reduced serving (typically 1/2 to 1 fl. oz / 14 to 28 ml daily), while seniors and athletes benefit from sustained stamina, joint balance, and immune equilibrium.",
  },
  {
    question: "How long does a 950 ml bottle of liquid Intra typically last?",
    answer: "At the standard daily maintenance dosage of 1 fl. oz (28 ml) once per day, one bottle of Intra provides approximately 33 daily servings (a full month's supply). For individuals under elevated stress or recovering from health challenges taking 2 fl. oz daily, one bottle lasts approximately 16 to 17 days.",
  },
];

export function UsageFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="distributor-consultation" className="py-12 sm:py-16 my-8">
      <div className="max-w-5xl mx-auto space-y-12 sm:space-y-16">
        
        {/* FAQs Header & Accordion */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 text-[var(--color-forest-green)] border border-emerald-300/60 text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
              <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>Got Questions?</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--color-forest-green)] tracking-tight mb-3">
              Frequently Asked Usage Questions
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">
              Clear answers to the most common questions regarding dosage, storage, and mixing.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-gray-200/90 shadow-xs overflow-hidden transition-all duration-200 hover:border-emerald-200"
                >
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left gap-4"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-bold text-gray-900 leading-snug">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-[var(--color-leaf-green)]" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                      >
                        <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* Personalized Regimen Consultation Card */}
        <div className="bg-gradient-to-br from-emerald-800 via-[var(--color-forest-green)] to-teal-950 rounded-3xl sm:rounded-4xl p-6 sm:p-10 lg:p-12 text-white shadow-xl relative overflow-hidden">
          {/* Ambient Lighting */}
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-emerald-400/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-teal-400/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-emerald-200 border border-white/15 text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
                <span>Personalized Regimen Support</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
                Need a Custom Regimen Tailored to Your Health Goals?
              </h3>
              
              <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed max-w-2xl">
                Every body is unique. Whether you are managing blood sugar, recovering stamina, or seeking cardiovascular balance, connect with your licensed distributor <strong>Nikki Gnann</strong> for personalized guidance.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <div className="flex items-center gap-1.5 text-xs text-emerald-200 bg-black/20 px-3 py-1.5 rounded-lg">
                  <ShieldCheck className="w-4 h-4 text-emerald-300" />
                  <span>100% Certified Authentic Guidance</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-emerald-200 bg-black/20 px-3 py-1.5 rounded-lg">
                  <MessageCircle className="w-4 h-4 text-emerald-300" />
                  <span>Free Dosage Consultation</span>
                </div>
              </div>
            </div>

            {/* Contact Action Buttons */}
            <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
              <a
                href="tel:09351083811"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-white text-[var(--color-forest-green)] font-bold text-sm shadow-lg hover:bg-emerald-50 transition-all transform hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4 text-[var(--color-leaf-green)]" />
                <span>Call 0935 108 3811</span>
              </a>

              <a
                href="https://www.facebook.com/search/top?q=INTRA%20Wellness%20Fatima"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-emerald-700/60 hover:bg-emerald-700 text-white font-semibold text-sm border border-emerald-400/30 transition-all"
              >
                <span>INTRA Wellness Fatima</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
