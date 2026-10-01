"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  motion, 
  AnimatePresence, 
  type Variants, 
  useReducedMotion 
} from "framer-motion";
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  Sparkles 
} from "lucide-react";

type CarouselProduct = {
  id: string;
  name: string;
  fullName: string;
  tagline: string;
  imageSrc: string;
  href: string;
  auraGradient: string;
  auraGlow: string;
  buttonClass: string;
  pillColor: string;
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
    auraGradient: "from-emerald-400/30 via-teal-300/20 to-lime-300/15",
    auraGlow: "bg-emerald-400/30",
    buttonClass: "bg-[var(--color-intra)] hover:bg-[var(--color-forest-green)] shadow-emerald-900/20",
    pillColor: "bg-[var(--color-intra)] text-white",
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
    auraGradient: "from-teal-400/30 via-cyan-300/20 to-emerald-300/15",
    auraGlow: "bg-teal-400/30",
    buttonClass: "bg-[var(--color-nutria)] hover:bg-teal-800 shadow-teal-900/20",
    pillColor: "bg-[var(--color-nutria)] text-white",
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
    auraGradient: "from-rose-500/25 via-red-400/20 to-amber-300/15",
    auraGlow: "bg-rose-400/30",
    buttonClass: "bg-[var(--color-cardio)] hover:bg-red-800 shadow-rose-900/20",
    pillColor: "bg-[var(--color-cardio)] text-white",
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
    auraGradient: "from-amber-500/25 via-orange-400/20 to-yellow-300/15",
    auraGlow: "bg-amber-400/30",
    buttonClass: "bg-[var(--color-fibre)] hover:bg-orange-700 shadow-amber-900/20",
    pillColor: "bg-[var(--color-fibre)] text-white",
    colorClass: "text-[var(--color-fibre)]",
    accentBadge: "Glycemic & Digestive Balance",
  },
];

export function Hero() {
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const productIndex = ((page % carouselProducts.length) + carouselProducts.length) % carouselProducts.length;
  const activeProduct = carouselProducts[productIndex];

  const paginate = useCallback((newDirection: number) => {
    setPage(([prevPage]) => [prevPage + newDirection, newDirection]);
  }, []);

  // Auto-play carousel every 5 seconds when not hovered
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(timer);
  }, [paginate, isHovered]);

  // Enhanced 3D Spring Slide Variants
  const slideVariants: Variants = {
    enter: (direction: number) => ({
      x: shouldReduceMotion ? 0 : direction > 0 ? 110 : -110,
      opacity: 0,
      scale: shouldReduceMotion ? 1 : 0.88,
      rotate: shouldReduceMotion ? 0 : direction > 0 ? 6 : -6,
      filter: shouldReduceMotion ? "none" : "blur(4px)",
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotate: 0,
      filter: "blur(0px)",
      transition: {
        x: { type: "spring", stiffness: 260, damping: 26, mass: 0.8 },
        scale: { type: "spring", stiffness: 280, damping: 24 },
        rotate: { type: "spring", stiffness: 240, damping: 22 },
        opacity: { duration: 0.35, ease: "easeOut" },
        filter: { duration: 0.3 },
      },
    },
    exit: (direction: number) => ({
      x: shouldReduceMotion ? 0 : direction > 0 ? -110 : 110,
      opacity: 0,
      scale: shouldReduceMotion ? 1 : 0.88,
      rotate: shouldReduceMotion ? 0 : direction > 0 ? -6 : 6,
      filter: shouldReduceMotion ? "none" : "blur(4px)",
      transition: {
        x: { duration: 0.32, ease: [0.32, 0, 0.67, 0] },
        scale: { duration: 0.32 },
        rotate: { duration: 0.32 },
        opacity: { duration: 0.25 },
        filter: { duration: 0.25 },
      },
    }),
  };

  return (
    <section className="relative min-h-[80vh] sm:min-h-[85vh] lg:min-h-[90vh] flex items-center pt-6 sm:pt-10 pb-8 sm:pb-12 overflow-hidden bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Clean, Impactful Brand Headline */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 max-w-2xl"
          >
            {/* Morphing Accent Badge */}
            <div className="inline-flex items-center gap-2 rounded-full px-3.5 sm:px-4 py-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[var(--color-leaf-green)] bg-white/90 border border-emerald-900/10 shadow-xs mb-3 sm:mb-4 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <AnimatePresence mode="wait">
                <motion.span
                  key={activeProduct.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                >
                  {activeProduct.accentBadge}
                </motion.span>
              </AnimatePresence>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-(--color-forest-green) mb-3 sm:mb-4 tracking-tight leading-tight">
              Live Better. <br/><span className="text-(--color-leaf-green)">Every Day.</span>
            </h1>

            <p className="text-sm sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 font-light leading-relaxed">
              Discover the Lifestyles wellness collection. Featuring <span className="font-semibold text-(--color-intra)">Intra</span>, <span className="font-semibold text-(--color-nutria)">NutriaPlus</span>, <span className="font-semibold text-(--color-cardio)">CardioLife</span>, and <span className="font-semibold text-(--color-fibre)">FibreLife</span> — formulated for synergy and daily vitality.
            </p>

            {/* Clean CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link 
                href={activeProduct.href} 
                className={`${activeProduct.buttonClass} text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-sm sm:text-base text-center transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 inline-flex items-center justify-center gap-2`}
              >
                <span>Explore {activeProduct.name}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                href="#products" 
                className="bg-white text-[var(--color-forest-green)] border-2 border-[var(--color-intra)]/40 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-sm sm:text-base text-center hover:bg-gray-50 transition-all shadow-xs"
              >
                View All Products
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Hero Product Image Carousel with 3D Depth & Morphing Aura */}
          <div 
            className="lg:col-span-7 relative flex flex-col items-center justify-center mt-4 sm:mt-0"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            
            {/* Multi-Layered Organic Morphing Aura */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
              {/* Layer 1: Atmospheric Outer Breathing Halo */}
              <motion.div
                key={`outer-${activeProduct.id}`}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ 
                  opacity: [0.35, 0.55, 0.35],
                  scale: [0.95, 1.06, 0.95],
                }}
                exit={{ opacity: 0 }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className={`absolute w-72 sm:w-[480px] h-72 sm:h-[480px] rounded-full bg-gradient-to-tr ${activeProduct.auraGradient} blur-3xl`}
              />

              {/* Layer 2: Core Concentrated Glow */}
              <motion.div
                key={`core-${activeProduct.id}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: [0.5, 0.75, 0.5],
                  scale: [1, 1.1, 1],
                  rotate: [0, 45, 0]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className={`absolute w-44 sm:w-80 h-44 sm:h-80 rounded-full ${activeProduct.auraGlow} blur-2xl`}
              />
            </div>

            {/* Bottle Carousel Stage Wrapper */}
            <div className="relative w-full flex items-center justify-center">
              
              {/* Carousel Previous Arrow Button */}
              <button
                type="button"
                onClick={() => paginate(-1)}
                aria-label="Previous product"
                className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full bg-white/85 hover:bg-white text-gray-700 hover:text-emerald-950 shadow-md hover:shadow-xl border border-white/80 backdrop-blur-md transition-all hover:scale-110 cursor-pointer active:scale-95"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Big Focused Bottle Stage with Gesture Dragging */}
              <div className="relative w-full h-[270px] xs:h-[320px] sm:h-[440px] md:h-[520px] lg:h-[560px] flex items-center justify-center overflow-visible select-none">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.div
                    key={activeProduct.id}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={(_, { offset, velocity }) => {
                      const swipe = Math.abs(offset.x) * velocity.x;
                      if (swipe < -80 || offset.x < -60) {
                        paginate(1);
                      } else if (swipe > 80 || offset.x > 60) {
                        paginate(-1);
                      }
                    }}
                    className="relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
                  >
                    {/* Subtle Continuous Floating Bottle Motion with Parallax Breathing */}
                    <motion.div
                      animate={
                        shouldReduceMotion
                          ? {}
                          : {
                              y: [0, -14, 0],
                              rotateZ: [0, -1.2, 0, 1.2, 0],
                            }
                      }
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="relative w-full h-full flex items-center justify-center"
                    >
                      <Link 
                        href={activeProduct.href} 
                        className="block relative w-full h-full cursor-pointer group flex items-center justify-center"
                      >
                        <Image
                          src={activeProduct.imageSrc}
                          alt={activeProduct.fullName}
                          fill
                          priority
                          sizes="(max-width: 768px) 100vw, 55vw"
                          className="object-contain filter drop-shadow-[0_20px_35px_rgba(26,67,43,0.22)] transition-transform duration-500 group-hover:scale-[1.04]"
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
                className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full bg-white/85 hover:bg-white text-gray-700 hover:text-emerald-950 shadow-md hover:shadow-xl border border-white/80 backdrop-blur-md transition-all hover:scale-110 cursor-pointer active:scale-95"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

            </div>

            {/* Bottom Luxury Gliding Pagination Pill Capsule - Positioned with clean clearance below the bottle */}
            <div className="relative mt-4 sm:mt-6 flex items-center justify-center z-30 pointer-events-auto">
              <div className="flex items-center gap-1.5 p-1.5 rounded-full bg-white/85 backdrop-blur-md border border-emerald-900/10 shadow-lg">
                {carouselProducts.map((p, index) => {
                  const isCurrent = index === productIndex;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setPage([index, index > productIndex ? 1 : -1])}
                      aria-label={`Show ${p.name}`}
                      className="relative px-3 py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1.5"
                    >
                      {/* Shared Layout Gliding Background Pill */}
                      {isCurrent && (
                        <motion.div
                          layoutId="heroActivePill"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                          className={`absolute inset-0 rounded-full ${p.pillColor} shadow-md`}
                        />
                      )}

                      {/* Dot Indicator (Always Visible) */}
                      <span
                        className={`relative z-10 w-2 h-2 rounded-full transition-colors ${
                          isCurrent
                            ? "bg-white"
                            : "bg-gray-400 group-hover:bg-gray-600"
                        }`}
                      />

                      {/* Product Name Label (Fades in when Active) */}
                      <AnimatePresence>
                        {isCurrent && (
                          <motion.span
                            initial={{ opacity: 0, width: 0 }}
                            animate={{ opacity: 1, width: "auto" }}
                            exit={{ opacity: 0, width: 0 }}
                            transition={{ duration: 0.2 }}
                            className="relative z-10 font-bold whitespace-nowrap overflow-hidden text-[11px] sm:text-xs"
                          >
                            {p.name}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </button>
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
