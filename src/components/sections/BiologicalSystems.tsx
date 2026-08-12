"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Zap, Shield, Activity, ShieldPlus, Brain, Users, Dumbbell, LucideIcon } from "lucide-react";

type System = {
  id: string;
  name: string;
  icon: LucideIcon;
  function: string;
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
    function: "Help to keep bones, muscles, joints, and connective tissue healthy - helping your stand tall move freely while protecting the delicate inside of your body.",
    botanicals: {
      primary: "Ginger, Sarsaparilla, Capsicum fruit.",
      secondary: "",
    }
  }
];

export function BiologicalSystems() {
  const [activeSystem, setActiveSystem] = useState<string>(systems[0].id);

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-(--color-forest-green) mb-4">
            Balance and Strengthen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The PDF discusses Intra in relation to the body&apos;s eight biological systems. 
            The key to Intra&apos;s effectiveness is the synergy of the blended botanicals working together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Systems List */}
          <div className="lg:col-span-1 flex flex-col space-y-2">
            {systems.map((system) => {
              const Icon = system.icon;
              const isActive = activeSystem === system.id;
              
              return (
                <button
                  key={system.id}
                  onClick={() => setActiveSystem(system.id)}
                  className={`flex items-center text-left p-4 rounded-xl transition-all duration-300 ${
                    isActive 
                      ? "bg-(--color-leaf-green) text-white shadow-md transform scale-[1.02]" 
                      : "bg-gray-50 text-gray-700 hover:bg-green-50 hover:text-(--color-leaf-green)"
                  }`}
                >
                  <Icon className={`w-6 h-6 mr-4 ${isActive ? "text-white" : "text-(--color-leaf-green)"}`} />
                  <span className="font-semibold">{system.name}</span>
                </button>
              );
            })}
          </div>

          {/* System Details */}
          <div className="lg:col-span-2">
            <div className="bg-gray-50 rounded-3xl p-8 md:p-12 h-full border border-gray-100 shadow-inner relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
              
              <AnimatePresence mode="wait">
                {systems.map((system) => 
                  system.id === activeSystem ? (
                    <motion.div
                      key={system.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="relative z-10"
                    >
                      <div className="flex items-center mb-8 pb-6 border-b border-gray-200">
                        <div className="p-4 bg-white rounded-full text-(--color-leaf-green) shadow-sm mr-6">
                          <system.icon className="w-8 h-8" />
                        </div>
                        <h3 className="text-3xl font-bold text-(--color-forest-green)">
                          {system.name}
                        </h3>
                      </div>
                      
                      <div className="space-y-8">
                        <div>
                          <h4 className="text-sm uppercase tracking-wider text-(--color-leaf-green) font-bold mb-3">
                            Function of Intra&apos;s Ingredients
                          </h4>
                          <p className="text-xl text-gray-700 leading-relaxed font-medium">
                            {system.function}
                          </p>
                        </div>
                        
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                          <h4 className="text-sm uppercase tracking-wider text-(--color-leaf-green) font-bold mb-4">
                            Botanicals supporting Healthy Functioning
                          </h4>
                          <div className="space-y-3">
                            <p className="text-gray-700">
                              <strong className="text-gray-900">Primary Botanicals:</strong> {system.botanicals.primary}
                            </p>
                            {system.botanicals.secondary && (
                              <p className="text-gray-700">
                                <strong className="text-gray-900">Secondary Botanicals:</strong> {system.botanicals.secondary}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ) : null
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
