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
    <section className={`py-8 sm:py-14 lg:py-20 ${bgColorClass} relative overflow-hidden`}>
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div 
          className={`flex flex-col ${
            reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
          } items-center justify-center gap-6 sm:gap-10 lg:gap-12`}
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
            <div className="absolute inset-0 m-auto w-48 sm:w-80 h-48 sm:h-80 rounded-full bg-current opacity-10 blur-3xl -z-10" />

            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className={`relative shrink-0 max-w-full ${
                isIntra
                  ? "w-[240px] xs:w-[280px] sm:w-[420px] md:w-[500px] lg:w-[560px] xl:w-[600px] h-[300px] xs:h-[360px] sm:h-[500px] md:h-[580px] lg:h-[640px]"
                  : "w-[200px] xs:w-[240px] sm:w-[320px] md:w-[370px] lg:w-[400px] h-[290px] xs:h-[350px] sm:h-[480px] md:h-[560px] lg:h-[620px]"
              }`}
            >
              <Image 
                src={imageSrc} 
                alt={title} 
                fill
                sizes={isIntra ? "(max-width: 640px) 280px, (max-width: 1024px) 500px, 600px" : "(max-width: 640px) 240px, (max-width: 1024px) 370px, 400px"}
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
            } max-w-xl lg:max-w-[520px] flex flex-col justify-center text-left`}
          >
            <h1 className={`text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-2 sm:mb-3 ${colorClass}`}>
              {title}
            </h1>
            
            {tagline && (
              <h2 className="text-lg sm:text-2xl font-medium text-gray-700 mb-4 sm:mb-6 italic">
                &quot;{tagline}&quot;
              </h2>
            )}
            
            <div className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed mb-6 space-y-3 sm:space-y-4">
              {description}
            </div>

            {children}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
