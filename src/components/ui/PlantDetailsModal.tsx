"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Leaf, CheckCircle2, BookOpen, AlertCircle } from "lucide-react";
import type { BotanicalExtract } from "@/data/botanicals";

interface PlantDetailsModalProps {
  plant: BotanicalExtract | null;
  onClose: () => void;
}

export function PlantDetailsModal({ plant, onClose }: PlantDetailsModalProps) {
  const [imageErrorPlantId, setImageErrorPlantId] = useState<string | null>(null);
  const imageError = plant ? imageErrorPlantId === plant.id : false;

  // Handle ESC key press and body scroll locking
  useEffect(() => {
    if (!plant) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [plant, onClose]);

  return (
    <AnimatePresence>
      {plant && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="plant-modal-title"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-emerald-900/10 overflow-hidden z-10 max-h-[90vh] flex flex-col md:flex-row"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close plant details"
              className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-white/90 hover:bg-white text-gray-700 hover:text-gray-950 shadow-md hover:shadow-lg transition-all border border-gray-200/80 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Column: Botanical Photograph / Visual Showcase */}
            <div className="md:w-5/12 bg-gradient-to-br from-emerald-50/60 via-green-50/30 to-amber-50/30 relative flex flex-col shrink-0">
              <div className="relative h-64 md:h-full min-h-[260px] md:min-h-[440px] w-full overflow-hidden flex items-center justify-center">
                {!imageError ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={plant.image}
                    alt={`${plant.name} botanical specimen`}
                    loading="lazy"
                    onError={() => setImageErrorPlantId(plant.id)}
                    className="w-full h-full object-cover object-center"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-b from-emerald-100/50 to-green-50">
                    <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center text-[var(--color-forest-green)] mb-4 shadow-inner">
                      <Leaf className="w-10 h-10" />
                    </div>
                    <span className="font-bold text-lg text-[var(--color-forest-green)]">{plant.name}</span>
                    <span className="italic text-sm text-emerald-800/80 font-serif mt-1">{plant.scientificName}</span>
                  </div>
                )}

                {/* Soft gradient overlay at bottom of photo on desktop */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent pointer-events-none md:block hidden" />

                {/* Parts used pill overlay on photo */}
                {plant.partsUsed && plant.partsUsed.length > 0 && (
                  <div className="absolute bottom-4 left-4 z-10 flex flex-wrap gap-1.5 pointer-events-none">
                    {plant.partsUsed.map((part, i) => (
                      <span 
                        key={i} 
                        className="px-2.5 py-1 rounded-full text-xs font-semibold bg-white/95 text-emerald-950 backdrop-blur-md shadow-sm border border-emerald-900/10"
                      >
                        {part}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Plant Information */}
            <div className="md:w-7/12 p-6 sm:p-8 md:p-10 overflow-y-auto max-h-[calc(90vh-100px)] md:max-h-[90vh]">
              {/* Header: Name, Scientific name, Family */}
              <div className="mb-6 pr-8">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100/80 text-emerald-900 border border-emerald-200/60 mb-3">
                  <Leaf className="w-3.5 h-3.5 text-[var(--color-leaf-green)]" />
                  Family: {plant.family}
                </div>
                <h3 id="plant-modal-title" className="text-3xl sm:text-4xl font-extrabold text-[var(--color-forest-green)] tracking-tight">
                  {plant.name}
                </h3>
                <p className="text-lg italic text-gray-500 font-serif mt-1">
                  {plant.scientificName}
                </p>
              </div>

              {/* About Section */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-[var(--color-leaf-green)]" />
                  About
                </h4>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  {plant.description}
                </p>
              </div>

              {/* Potential Benefits */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--color-leaf-green)] mb-3 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  Potential Benefits
                </h4>
                <ul className="space-y-2">
                  {plant.benefits.map((benefit, bIdx) => (
                    <li key={bIdx} className="flex items-start text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-leaf-green)] mt-2 mr-2.5 shrink-0" />
                      <span className="leading-snug">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Traditional Uses */}
              <div className="mb-8">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">
                  Traditional Uses
                </h4>
                <ul className="space-y-2">
                  {plant.traditionalUses.map((use, uIdx) => (
                    <li key={uIdx} className="flex items-start text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-600/70 mt-2 mr-2.5 shrink-0" />
                      <span className="leading-snug">{use}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Educational Disclaimer */}
              <div className="pt-4 border-t border-gray-100 flex items-start gap-2.5 text-xs text-gray-400 leading-relaxed">
                <AlertCircle className="w-4 h-4 shrink-0 text-gray-400 mt-0.5" />
                <p>
                  <strong className="font-semibold text-gray-500">Disclaimer: </strong>
                  Information about traditional uses and potential benefits is provided for educational purposes only and should not be considered medical advice.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
