"use client";

import { useState } from "react";
import { Leaf } from "lucide-react";
import { motion } from "framer-motion";
import { botanicalsData, type BotanicalExtract } from "@/data/botanicals";
import { PlantDetailsModal } from "@/components/ui/PlantDetailsModal";

export function BotanicalGrid() {
  const [selectedPlant, setSelectedPlant] = useState<BotanicalExtract | null>(null);

  return (
    <section id="botanicals" className="py-20 bg-(--color-warm-cream)">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-(--color-forest-green) mb-4">
            23 Botanical Extracts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The product material presents Intra as a blend of botanical ingredients designed around synergistic interaction. 
            The formulation relies on the synergistic effect of these specific extracts working together. Click any botanical extract to view its details.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {botanicalsData.map((plant) => (
            <motion.button 
              key={plant.id}
              type="button"
              onClick={() => setSelectedPlant(plant)}
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              aria-label={`View botanical details about ${plant.name}`}
              className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center hover:shadow-md hover:border-[var(--color-lime-green)] transition-all group cursor-pointer w-full focus:outline-none focus:ring-2 focus:ring-[var(--color-leaf-green)]/30 focus:border-[var(--color-leaf-green)]"
            >
              <Leaf className="w-8 h-8 text-gray-300 mb-3 group-hover:text-[var(--color-lime-green)] transition-colors" />
              <span className="font-medium text-gray-800 text-sm group-hover:text-[var(--color-forest-green)] transition-colors">
                {plant.name}
              </span>
            </motion.button>
          ))}
          {/* Fill the last grid spot with a logo or text to make it 24 spots (6x4) */}
          <div className="bg-(--color-leaf-green) p-4 rounded-xl shadow-sm text-white flex flex-col items-center justify-center text-center select-none">
            <span className="font-bold text-xl mb-1">23</span>
            <span className="text-xs uppercase tracking-wider opacity-80">Extracts</span>
          </div>
        </div>
      </div>

      {/* Plant Details Modal */}
      <PlantDetailsModal 
        plant={selectedPlant}
        onClose={() => setSelectedPlant(null)}
      />
    </section>
  );
}
