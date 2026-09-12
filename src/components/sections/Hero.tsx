"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from "lucide-react";

type CarouselProduct = {
  id: string;
  name: string;
  fullName: string;
  tagline: string;
  imageSrc: string;
  href: string;
  auraColor: string;
  buttonClass: string;
  colorClass: string;
  accentBadge: string;
};

const carouselProducts: CarouselProduct[] = [
  {
    id: "intra",
    name: "Intra",
    fullName: "Intra® Botanical Blend",
    tagline: "23 Synergistic Botanical Extracts",
    imageSrc: "/products/intra/intra.png",
    href: "/intra",
    auraColor: "bg-emerald-400/20",
    buttonClass: "bg-[var(--color-intra)] hover:bg-[var(--color-forest-green)]",
    colorClass: "text-[var(--color-intra)]",
    accentBadge: "Flagship Botanical Formula",
  },
  {
    id: "nutriaplus",
    name: "NutriaPlus",
    fullName: "NutriaPlus™ Antioxidant",
    tagline: "Cellular Defense & Phytonutrients",
    imageSrc: "/products/nutriaplus/nutriaplus.png",
    href: "/nutriaplus",
    auraColor: "bg-teal-400/20",
    buttonClass: "bg-[var(--color-nutria)] hover:bg-teal-800",
    colorClass: "text-[var(--color-nutria)]",
    accentBadge: "Potent Antioxidant Concentrates",
  },
  {
    id: "cardiolife",
    name: "CardioLife",
    fullName: "CardioLife™ Cardiovascular Care",
    tagline: "Heart Vitality & Vitamin K2",
    imageSrc: "/products/cardiolife/cardiolife.png",
    href: "/cardiolife",
    auraColor: "bg-red-400/20",
    buttonClass: "bg-[var(--color-cardio)] hover:bg-red-800",
    colorClass: "text-[var(--color-cardio)]",
    accentBadge: "Cardiovascular Health",
  },
  {
    id: "fibrelife",
    name: "FibreLife",
    fullName: "FibreLife™ Soluble Fibre",
    tagline: "High-Viscosity Soluble Fibre",
    imageSrc: "/products/fibrelife/fibrelife.png",
    href: "/fibrelife",
    auraColor: "bg-amber-400/20",
    buttonClass: "bg-[var(--color-fibre)] hover:bg-orange-700",
    colorClass: "text-[var(--color-fibre)]",
    accentBadge: "Glycemic & Digestive Balance",
  },
];

export function Hero() {
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);
  const [isHovered, setIsHovered] = useState(false);

  const productIndex = ((page % carouselProducts.length) + carouselProducts.length) % carouselProducts.length;
  const activeProduct = carouselProducts[productIndex];

  const paginate = useCallback((newDirection: number) => {
    setPage(([prevPage]) => [prevPage + newDirection, newDirection]);
  }, []);

  // Auto-play carousel every 4.5 seconds when not hovered
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      paginate(1);
    }, 4500);
    return () => clearInterval(timer);
  }, [paginate, isHovered]);

  const slideVariants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.92,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 },
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -80 : 80,
      opacity: 0,
      scale: 0.92,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
      },
    }),
  };

  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center pt-10 pb-12 overflow-hidden bg-transparent">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Clean, Impactful Brand Headline */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--color-leaf-green)] bg-white/90 border border-emerald-900/10 shadow-xs mb-4 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5" />
              {activeProduct.accentBadge}
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-(--color-forest-green) mb-4 tracking-tight leading-tight">
              Live Better. <br/><span className="text-(--color-leaf-green)">Every Day.</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 font-light leading-relaxed">
              Discover the Lifestyles wellness collection. Featuring <span className="font-semibold text-(--color-intra)">Intra</span>, <span className="font-semibold text-(--color-nutria)">NutriaPlus</span>, <span className="font-semibold text-(--color-cardio)">CardioLife</span>, and <span className="font-semibold text-(--color-fibre)">FibreLife</span> — formulated for synergy and daily vitality.
            </p>

            {/* Clean CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href={activeProduct.href} 
                className={`${activeProduct.buttonClass} text-white px-8 py-4 rounded-full font-semibold text-center transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 inline-flex items-center justify-center gap-2`}
              >
                Explore {activeProduct.name}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                href="#products" 
                className="bg-white text-[var(--color-forest-green)] border-2 border-[var(--color-intra)]/40 px-8 py-4 rounded-full font-semibold text-center hover:bg-gray-50 transition-all shadow-xs"
              >
                View All Products
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Hero Product Image Carousel (Big, Focused, Zero Clutter) */}
          <div 
            className="lg:col-span-7 relative flex items-center justify-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            
            {/* Ambient Radial Aura behind current bottle */}
            <div 
              className={`absolute inset-0 m-auto w-72 sm:w-96 md:w-[460px] h-72 sm:h-96 md:h-[460px] rounded-full ${activeProduct.auraColor} blur-3xl -z-10 pointer-events-none transition-colors duration-700`} 
            />

            {/* Carousel Previous Arrow Button */}
            <button
              type="button"
              onClick={() => paginate(-1)}
              aria-label="Previous product"
              className="absolute left-0 sm:left-2 z-30 p-3 rounded-full bg-white/85 hover:bg-white text-gray-700 hover:text-emerald-950 shadow-md hover:shadow-xl border border-white/80 backdrop-blur-md transition-all hover:scale-110 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Big Focused Bottle Stage */}
            <div className="relative w-full h-[460px] sm:h-[540px] md:h-[600px] lg:h-[640px] flex items-center justify-center overflow-visible">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={activeProduct.id}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="relative w-full h-full flex items-center justify-center"
                >
                  {/* Subtle Continuous Floating Bottle Motion */}
                  <motion.div
                    animate={{ y: [0, -12, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="relative w-full h-full"
                  >
                    <Link href={activeProduct.href} className="block relative w-full h-full cursor-pointer group">
                      <Image
                        src={activeProduct.imageSrc}
                        alt={activeProduct.fullName}
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, 55vw"
                        className="object-contain filter drop-shadow-2xl transition-transform duration-300 group-hover:scale-105"
                      />
                    </Link>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Carousel Next Arrow Button */}
            <button
              type="button"
              onClick={() => paginate(1)}
              aria-label="Next product"
              className="absolute right-0 sm:right-2 z-30 p-3 rounded-full bg-white/85 hover:bg-white text-gray-700 hover:text-emerald-950 shadow-md hover:shadow-xl border border-white/80 backdrop-blur-md transition-all hover:scale-110 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Bottom Minimal Carousel Indicators */}
            <div className="absolute bottom-2 inset-x-0 flex items-center justify-center z-30 pointer-events-auto">
              {/* Minimal Dots / Bars */}
              <div className="flex items-center gap-2 py-1 px-3 rounded-full bg-white/60 backdrop-blur-xs border border-white/50 shadow-xs">
                {carouselProducts.map((p, index) => {
                  const isCurrent = index === productIndex;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setPage([index, index > productIndex ? 1 : -1])}
                      aria-label={`Show ${p.name}`}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        isCurrent 
                          ? `w-8 ${p.buttonClass.split(' ')[0]}` 
                          : "w-2.5 bg-gray-300 hover:bg-gray-400"
                      }`}
                    />
                  );
                })}
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}


