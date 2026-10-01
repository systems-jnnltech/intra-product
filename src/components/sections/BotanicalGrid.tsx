"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, type Variants, useReducedMotion } from "framer-motion";
import { botanicalsData, type BotanicalExtract } from "@/data/botanicals";
import { PlantDetailsModal } from "@/components/ui/PlantDetailsModal";
import { Sparkles } from "lucide-react";

export function BotanicalGrid() {
  const [selectedPlant, setSelectedPlant] = useState<BotanicalExtract | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.035,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: shouldReduceMotion ? 0 : 20, 
      scale: shouldReduceMotion ? 1 : 0.94 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 280,
        damping: 24,
      },
    },
  };

  return (
    <section id="botanicals" className="py-12 sm:py-16 lg:py-20 bg-(--color-warm-cream)">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-100/80 text-[var(--color-forest-green)] border border-emerald-300/60 text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Time-Tested Herbal Synergy</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-(--color-forest-green) mb-3 sm:mb-4">
            23 Botanical Extracts
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The product material presents Intra as a blend of botanical ingredients designed around synergistic interaction. 
            The formulation relies on the synergistic effect of these specific extracts working together. Click any botanical extract to view its details.
          </p>
        </div>

        {/* Staggered Cascading Botanical Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2.5 sm:gap-4"
        >
          {botanicalsData.map((plant) => (
            <motion.button 
              key={plant.id}
              type="button"
              variants={cardVariants}
              onClick={() => setSelectedPlant(plant)}
              whileHover={shouldReduceMotion ? {} : { y: -6, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
              aria-label={`View botanical details about ${plant.name}`}
              className="bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-sm border border-emerald-900/10 flex flex-col items-center justify-center text-center hover:shadow-xl hover:border-[var(--color-lime-green)] transition-all group cursor-pointer w-full focus:outline-none focus:ring-2 focus:ring-[var(--color-leaf-green)]/30 focus:border-[var(--color-leaf-green)]"
            >
              {/* Plant Photograph Thumbnail */}
              <div className="relative w-14 h-14 sm:w-20 sm:h-20 rounded-xl overflow-hidden mb-2.5 sm:mb-3 shadow-xs border border-gray-100 bg-gray-50">
                <Image
                  src={plant.image}
                  alt={plant.name}
                  fill
                  sizes="(max-width: 640px) 60px, 80px"
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <span className="font-semibold text-gray-900 text-xs sm:text-base group-hover:text-[var(--color-forest-green)] transition-colors leading-tight">
                {plant.name}
              </span>
              <span className="text-[10px] sm:text-[11px] text-gray-500 italic mt-0.5 line-clamp-1">
                {plant.scientificName}
              </span>
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Plant Details Modal */}
      <PlantDetailsModal 
        plant={selectedPlant}
        onClose={() => setSelectedPlant(null)}
      />
    </section>
  );
}
