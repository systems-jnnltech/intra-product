"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sun, 
  Utensils, 
  Moon, 
  Clock, 
  AlertCircle,
  CheckCircle
} from "lucide-react";

interface ScheduleBlock {
  id: string;
  timePeriod: string;
  title: string;
  badge: string;
  icon: typeof Sun;
  themeColor: string;
  badgeColor: string;
  bgGradient: string;
  borderColor: string;
  summary: string;
  products: {
    name: string;
    dose: string;
    role: string;
    image: string;
    brandColor: string;
    note?: string;
  }[];
  criticalNote?: string;
}

const scheduleData: ScheduleBlock[] = [
  {
    id: "morning",
    timePeriod: "06:00 AM – 09:00 AM",
    title: "Morning Awakening & Cellular Defense",
    badge: "Energize & Fortify",
    icon: Sun,
    themeColor: "text-amber-600",
    badgeColor: "bg-amber-100 text-amber-900 border-amber-200",
    bgGradient: "from-amber-50/60 via-white to-orange-50/30",
    borderColor: "border-amber-200/80",
    summary: "Kickstart your day by feeding your 8 biological systems and infusing your cells with high-potency phytonutrients.",
    products: [
      {
        name: "INTRA®",
        dose: "1 to 2 fl. oz (28–56 ml) or 2 capsules",
        role: "Balances the 8 biological systems; drink on empty stomach or with breakfast.",
        image: "/products/intra/intra.png",
        brandColor: "border-[var(--color-intra)] bg-green-50/80",
        note: "Shake bottle well. May be mixed with natural fruit juice.",
      },
      {
        name: "NUTRIAPLUS™",
        dose: "2 capsules",
        role: "Synergistic antioxidant protection against free-radical stress.",
        image: "/products/nutriaplus/nutriaplus.png",
        brandColor: "border-[var(--color-nutria)] bg-teal-50/80",
        note: "Take with breakfast for optimal bio-absorption.",
      },
      {
        name: "CARDIOLIFE®",
        dose: "1 to 2 capsules",
        role: "Promotes elasticity in blood vessels and healthy circulation for the day.",
        image: "/products/cardiolife/cardiolife.png",
        brandColor: "border-[var(--color-cardio)] bg-rose-50/80",
        note: "Take with food alongside NutriaPlus.",
      },
    ],
  },
  {
    id: "lunch",
    timePeriod: "11:30 AM – 01:30 PM",
    title: "Mid-Day Glycemic & Cholesterol Shield",
    badge: "Metabolic Control",
    icon: Utensils,
    themeColor: "text-orange-600",
    badgeColor: "bg-orange-100 text-orange-900 border-orange-200",
    bgGradient: "from-orange-50/60 via-white to-amber-50/30",
    borderColor: "border-orange-200/80",
    summary: "Manage mealtime carbohydrate absorption and prevent post-lunch sluggishness with high-viscosity soluble fibre.",
    criticalNote: "CRITICAL: Drink a full glass (250 ml) of water with each FibreLife capsule. Wait at least 1 hour after Intra/NutriaPlus before taking FibreLife.",
    products: [
      {
        name: "FIBRELIFE®",
        dose: "1 to 2 capsules",
        role: "Forms a viscous gel to moderate carbohydrate & sugar absorption.",
        image: "/products/fibrelife/fibrelife.png",
        brandColor: "border-[var(--color-fibre)] bg-orange-50/80",
        note: "Take at the start of your lunch with 250ml water.",
      },
    ],
  },
  {
    id: "evening",
    timePeriod: "06:00 PM – 08:30 PM",
    title: "Evening Restoration & Sustained Vitality",
    badge: "Dinner Transit & Repair",
    icon: Moon,
    themeColor: "text-indigo-600",
    badgeColor: "bg-indigo-100 text-indigo-900 border-indigo-200",
    bgGradient: "from-indigo-50/50 via-white to-slate-50/40",
    borderColor: "border-indigo-200/80",
    summary: "Complete your daily cycle by supporting healthy evening digestion and cellular recuperation while resting.",
    products: [
      {
        name: "FIBRELIFE®",
        dose: "1 to 2 capsules",
        role: "Take at the start of dinner for night digestive transit & satiety.",
        image: "/products/fibrelife/fibrelife.png",
        brandColor: "border-[var(--color-fibre)] bg-orange-50/80",
        note: "Always pair with 250ml of clean drinking water.",
      },
      {
        name: "INTRA® (Optional 2nd Dose)",
        dose: "1 fl. oz (28 ml)",
        role: "For individuals undergoing recovery or high stress, a second dose aids nighttime cellular rejuvenation.",
        image: "/products/intra/intra.png",
        brandColor: "border-[var(--color-intra)] bg-green-50/80",
        note: "Allow at least 1 hour separation from dinner FibreLife.",
      },
    ],
  },
];

export function DailyScheduleTimeline() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredBlocks = activeTab === "all" 
    ? scheduleData 
    : scheduleData.filter((b) => b.id === activeTab);

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-white to-(--color-warm-cream)/40 rounded-3xl border border-gray-100 p-4 sm:p-8 lg:p-12 shadow-sm my-12">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 text-[var(--color-forest-green)] border border-emerald-300/60 text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Clock className="w-3.5 h-3.5 text-emerald-600" />
            <span>Interactive 24-Hour Routine</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--color-forest-green)] tracking-tight mb-3">
            Your Daily Supplement Schedule
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Wondering when to take which product? Here is the ideal timeline designed for maximum nutrient absorption and digestive comfort.
          </p>
        </div>

        {/* Tab Filters with Gliding layoutId Pill */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-8 sm:mb-12 flex-wrap p-1.5 rounded-full bg-gray-100/80 backdrop-blur-md border border-gray-200/80 max-w-fit mx-auto shadow-xs">
          {[
            { id: "all", label: "Full Day Timeline", icon: null, pillColor: "bg-[var(--color-forest-green)]" },
            { id: "morning", label: "Morning Awakening", icon: Sun, pillColor: "bg-amber-600" },
            { id: "lunch", label: "Mid-Day / Lunch", icon: Utensils, pillColor: "bg-orange-600" },
            { id: "evening", label: "Evening / Dinner", icon: Moon, pillColor: "bg-indigo-600" },
          ].map((tab) => {
            const isCurrent = activeTab === tab.id;
            const TabIcon = tab.icon;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className="relative px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-colors cursor-pointer flex items-center gap-1.5 focus:outline-none"
              >
                {isCurrent && (
                  <motion.div
                    layoutId="activeScheduleTab"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 28,
                    }}
                    className={`absolute inset-0 rounded-full ${tab.pillColor} shadow-md z-0`}
                  />
                )}
                <span className={`relative z-10 flex items-center gap-1.5 ${isCurrent ? "text-white" : "text-gray-600 hover:text-gray-900"}`}>
                  {TabIcon && <TabIcon className="w-3.5 h-3.5" />}
                  <span>{tab.label}</span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Schedule Cards Stack */}
        <div className="space-y-6 sm:space-y-8">
          <AnimatePresence mode="wait">
            {filteredBlocks.map((block) => {
              const Icon = block.icon;
              return (
                <motion.div
                  key={block.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className={`bg-gradient-to-br ${block.bgGradient} rounded-3xl border ${block.borderColor} p-5 sm:p-8 shadow-sm`}
                >
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-gray-200/70">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-2xl bg-white shadow-xs ${block.themeColor}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className={`inline-block text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md border ${block.badgeColor} mb-1`}>
                          {block.badge}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
                          {block.title}
                        </h3>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-gray-200 text-xs font-semibold text-gray-600 self-start sm:self-auto shadow-xs">
                      <Clock className="w-3.5 h-3.5 text-gray-400" />
                      <span>{block.timePeriod}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-600 py-4 font-normal">
                    {block.summary}
                  </p>

                  {/* Critical Warning if any */}
                  {block.criticalNote && (
                    <div className="mb-5 bg-amber-100/80 border-l-4 border-amber-500 p-3.5 rounded-r-xl flex items-start gap-2.5 text-xs sm:text-sm text-amber-900 font-medium">
                      <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                      <span>{block.criticalNote}</span>
                    </div>
                  )}

                  {/* Products in this block */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {block.products.map((prod, pIdx) => (
                      <div 
                        key={pIdx}
                        className="bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200/80 p-4 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-start gap-3 mb-3">
                          <div className={`relative w-14 h-20 rounded-xl border p-1 shrink-0 flex items-center justify-center ${prod.brandColor}`}>
                            <Image 
                              src={prod.image}
                              alt={prod.name}
                              fill
                              sizes="56px"
                              className="object-contain p-1"
                            />
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-gray-900">{prod.name}</h4>
                            <p className="text-xs font-semibold text-[var(--color-leaf-green)] mt-0.5">
                              {prod.dose}
                            </p>
                            <p className="text-[11px] text-gray-500 mt-1 leading-relaxed">
                              {prod.role}
                            </p>
                          </div>
                        </div>

                        {prod.note && (
                          <div className="pt-2 border-t border-gray-100 text-[11px] text-gray-600 flex items-center gap-1.5 italic">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span>{prod.note}</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
