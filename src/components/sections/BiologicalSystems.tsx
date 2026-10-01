"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Heart, Zap, Shield, Activity, ShieldPlus, Brain, Users, Dumbbell, type LucideIcon } from "lucide-react";

type System = {
  id: string;
  name: string;
  icon: LucideIcon;
  function: string;
  glowColor: string;
  botanicals: {
    primary: string;
    secondary: string;
  };
};

const systems: System[] = [
  {
    id: "cardiovascular",
    name: "Cardiovascular",
    icon: Heart,
    glowColor: "from-rose-400/20 to-emerald-300/10",
    function: "Have been shown to support a healthy cardiovascular system.",
    botanicals: {
      primary: "Reishi mushroom, Chinese pearl barley.",
      secondary: "Chicory root, Alfalfa.",
    }
  },
  {
    id: "digestive",
    name: "Digestive & Energy",
    icon: Zap,
    glowColor: "from-amber-400/20 to-emerald-300/10",
    function: "Aid in helping to digest food and drinks so your body can use them to build and nourish cells and provide energy.",
    botanicals: {
      primary: "Aloe vera, Siberian ginseng, Licorice root, Chinese pearl barley, Chicory root, Dandelion, German chamomile, Alfalfa, Fenugreek seed, Bee pollen, Ginger.",
      secondary: "Chinese rose hips, Juniper berries.",
    }
  },
  {
    id: "eliminative",
    name: "Eliminative / Antioxidant",
    icon: Shield,
    glowColor: "from-emerald-400/20 to-teal-300/10",
    function: "Help rid the body of wastes \"manufactured\" in the digestive process and through normal metabolism, as well as neutralize toxins from our food, drinks, and environment.",
    botanicals: {
      primary: "Aloe vera, Chinese pearl barley, Schisandra berry, Chicory root, Dandelion, Cascara bark, Juniper berries, Celery seed.",
      secondary: "Astragalus, Chinese rose hips, Sarsaparilla.",
    }
  },
  {
    id: "endocrine",
    name: "Endocrine",
    icon: Activity,
    glowColor: "from-teal-400/20 to-cyan-300/10",
    function: "Have the ability to modulate the functioning of glands, which release chemicals that eventually control every other system in your body.",
    botanicals: {
      primary: "Astragalus.",
      secondary: "Siberian ginseng, Reishi mushroom, Fenugreek seed, Celery seed.",
    }
  },
  {
    id: "immune",
    name: "Immune",
    icon: ShieldPlus,
    glowColor: "from-green-400/20 to-emerald-400/10",
    function: "Strengthen your body's natural ability to protect itself.",
    botanicals: {
      primary: "Licorice root, Astragalus, Reishi mushroom, Chinese rose hips, Thyme.",
      secondary: "Aloe vera, Siberian ginseng, Schisandra berry, Chicory root.",
    }
  },
  {
    id: "nervous",
    name: "Nervous",
    icon: Brain,
    glowColor: "from-indigo-400/20 to-purple-300/10",
    function: "Support the coordination of your brain, spinal cord, and network of nerves that thread throughout your entire body.",
    botanicals: {
      primary: "Siberian ginseng, Astragalus, Passion flower.",
      secondary: "German chamomile, Thyme.",
    }
  },
  {
    id: "reproductive",
    name: "Reproductive",
    icon: Users,
    glowColor: "from-pink-400/20 to-rose-300/10",
    function: "Have been shown to help balance hormones, leading to a healthy reproductive system.",
    botanicals: {
      primary: "Pipsissewa.",
      secondary: "Fenugreek seed, Ginger.",
    }
  },
  {
    id: "structural",
    name: "Structural (Musculoskeletal)",
    icon: Dumbbell,
    glowColor: "from-orange-400/20 to-amber-300/10",
    function: "Help to keep bones, muscles, joints, and connective tissue healthy - helping you stand tall and move freely while protecting the delicate inside of your body.",
    botanicals: {
      primary: "Ginger, Sarsaparilla, Capsicum fruit.",
      secondary: "",
    }
  }
];

export function BiologicalSystems() {
  const [activeSystem, setActiveSystem] = useState<string>(systems[0].id);
  const shouldReduceMotion = useReducedMotion();

  const currentSystem = systems.find((s) => s.id === activeSystem) || systems[0];

  return (
    <div id="biological-systems" className="py-12 sm:py-16 lg:py-20 bg-white/80 backdrop-blur-md border-t border-emerald-900/5">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-(--color-forest-green) mb-3 sm:mb-4">
            Balance and Strengthen
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The PDF discusses Intra in relation to the body&apos;s eight biological systems. 
            The key to Intra&apos;s effectiveness is the synergy of the blended botanicals working together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 items-start">
          
          {/* Systems List with Gliding layoutId Indicator Pill */}
          <div className="lg:col-span-1 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-1 gap-2 p-1.5 bg-gray-100/60 rounded-2xl sm:rounded-3xl border border-gray-200/70">
            {systems.map((system) => {
              const Icon = system.icon;
              const isActive = activeSystem === system.id;
              
              return (
                <button
                  key={system.id}
                  onClick={() => setActiveSystem(system.id)}
                  className="relative flex items-center text-left p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all cursor-pointer group focus:outline-none"
                  aria-pressed={isActive}
                >
                  {/* Fluid Gliding Active Pill */}
                  {isActive && (
                    <motion.div
                      layoutId="activeSystemPill"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 28,
                      }}
                      className="absolute inset-0 bg-[var(--color-leaf-green)] rounded-xl sm:rounded-2xl shadow-md z-0"
                    />
                  )}

                  {/* Icon & Label */}
                  <span className="relative z-10 flex items-center">
                    <Icon 
                      className={`w-5 h-5 mr-2.5 sm:mr-3 shrink-0 transition-colors duration-200 ${
                        isActive 
                          ? "text-white" 
                          : "text-[var(--color-leaf-green)] group-hover:scale-110"
                      }`} 
                    />
                    <span 
                      className={`font-semibold text-xs sm:text-sm lg:text-base leading-snug transition-colors duration-200 ${
                        isActive 
                          ? "text-white" 
                          : "text-gray-700 group-hover:text-gray-900"
                      }`}
                    >
                      {system.name}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* System Details Card with Spring Physics & Dynamic Glow */}
          <div className="lg:col-span-2">
            <div className="bg-gray-50/90 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 min-h-[380px] border border-gray-200/80 shadow-sm relative overflow-hidden flex flex-col justify-between">
              
              {/* Dynamic Aura Glow matching active system */}
              <motion.div 
                key={`glow-${currentSystem.id}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.6, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className={`absolute top-0 right-0 w-80 h-80 rounded-full bg-gradient-to-br ${currentSystem.glowColor} blur-3xl pointer-events-none -z-0 translate-x-1/3 -translate-y-1/3`}
              />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSystem.id}
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16, scale: shouldReduceMotion ? 1 : 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -16, scale: shouldReduceMotion ? 1 : 0.98 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 26,
                    mass: 0.7
                  }}
                  className="relative z-10 space-y-6 sm:space-y-8"
                >
                  {/* System Header */}
                  <div className="flex items-center pb-5 sm:pb-6 border-b border-gray-200/80">
                    <motion.div 
                      initial={{ scale: 0.8, rotate: -10 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 350, damping: 20 }}
                      className="p-3.5 sm:p-4 bg-white rounded-2xl text-[var(--color-leaf-green)] shadow-md mr-4 sm:mr-6 shrink-0 border border-gray-100"
                    >
                      <currentSystem.icon className="w-7 h-7 sm:w-8 sm:h-8" />
                    </motion.div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--color-leaf-green)] bg-emerald-100/70 px-2.5 py-0.5 rounded-md">
                        Biological System 0{systems.findIndex(s => s.id === currentSystem.id) + 1}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--color-forest-green)] tracking-tight mt-1">
                        {currentSystem.name}
                      </h3>
                    </div>
                  </div>
                  
                  {/* System Function & Botanicals */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xs sm:text-sm uppercase tracking-wider text-[var(--color-leaf-green)] font-bold mb-2">
                        Function of Intra&apos;s Ingredients
                      </h4>
                      <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium">
                        {currentSystem.function}
                      </p>
                    </div>
                    
                    <div className="bg-white/90 backdrop-blur-sm p-5 sm:p-6 rounded-2xl shadow-xs border border-gray-100/90 space-y-3">
                      <h4 className="text-xs sm:text-sm uppercase tracking-wider text-[var(--color-leaf-green)] font-bold">
                        Botanicals Supporting Healthy Functioning
                      </h4>
                      <div className="space-y-2 text-sm sm:text-base">
                        <p className="text-gray-700">
                          <strong className="text-gray-900 font-semibold">Primary Botanicals:</strong>{" "}
                          <span className="text-emerald-950 font-medium">{currentSystem.botanicals.primary}</span>
                        </p>
                        {currentSystem.botanicals.secondary && (
                          <p className="text-gray-700">
                            <strong className="text-gray-900 font-semibold">Secondary Botanicals:</strong>{" "}
                            <span className="text-emerald-900">{currentSystem.botanicals.secondary}</span>
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
