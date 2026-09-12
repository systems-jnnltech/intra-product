"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ProductSectionProps {
  title: string;
  tagline?: string;
  description: ReactNode;
  imageSrc: string;
  colorClass: string;
  bgColorClass: string;
  children?: ReactNode;
  reverse?: boolean;
  imageVariant?: "intra" | "single";
}

export function ProductSection({ 
  title, 
  tagline, 
  description, 
  imageSrc, 
  colorClass, 
  bgColorClass,
  children,
  reverse = false,
  imageVariant
}: ProductSectionProps) {
  const isIntra = imageVariant === "intra" || imageSrc.toLowerCase().includes("intra");

  return (
    <section className={`py-12 sm:py-16 lg:py-20 ${bgColorClass} relative overflow-hidden`}>
      <div className="container mx-auto px-6 max-w-6xl">
        <div 
          className={`flex flex-col ${
            reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
          } items-center justify-center gap-8 lg:gap-10 xl:gap-12`}
        >
          
          {/* Product Image Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.92, x: reverse ? 30 : -30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className={`w-full ${
              isIntra ? 'lg:w-[50%]' : 'lg:w-[42%]'
            } flex justify-center lg:justify-end relative`}
          >
            {/* Subtle glow aura */}
            <div className="absolute inset-0 m-auto w-72 sm:w-80 h-72 sm:h-80 rounded-full bg-current opacity-10 blur-3xl -z-10" />

            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className={`relative shrink-0 ${
                isIntra
                  ? "w-[340px] sm:w-[450px] md:w-[520px] lg:w-[560px] xl:w-[600px] h-[460px] sm:h-[540px] md:h-[600px] lg:h-[640px]"
                  : "w-[260px] sm:w-[320px] md:w-[370px] lg:w-[400px] h-[460px] sm:h-[530px] md:h-[590px] lg:h-[620px]"
              }`}
            >
              <Image 
                src={imageSrc} 
                alt={title} 
                fill
                sizes={isIntra ? "(max-width: 768px) 340px, 600px" : "(max-width: 768px) 260px, 400px"}
                className="object-contain filter drop-shadow-2xl"
                priority
              />
            </motion.div>
          </motion.div>

          {/* Product Text Column */}
          <motion.div 
            initial={{ opacity: 0, x: reverse ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={`w-full ${
              isIntra ? 'lg:w-[50%]' : 'lg:w-[58%]'
            } max-w-xl lg:max-w-[520px] flex flex-col justify-center`}
          >
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-3 ${colorClass}`}>
              {title}
            </h1>
            
            {tagline && (
              <h2 className="text-xl sm:text-2xl font-medium text-gray-700 mb-6 italic">
                &quot;{tagline}&quot;
              </h2>
            )}
            
            <div className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 space-y-4">
              {description}
            </div>

            {children}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
