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
}

export function ProductSection({ 
  title, 
  tagline, 
  description, 
  imageSrc, 
  colorClass, 
  bgColorClass,
  children,
  reverse = false
}: ProductSectionProps) {
  return (
    <section className={`py-20 ${bgColorClass}`}>
      <div className="container mx-auto px-6 max-w-7xl">
        <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16`}>
          
          <motion.div 
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="relative w-full max-w-md h-[500px]">
              <Image 
                src={imageSrc} 
                alt={title} 
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: reverse ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <h1 className={`text-4xl md:text-6xl font-bold mb-4 ${colorClass}`}>{title}</h1>
            {tagline && <h2 className="text-xl md:text-2xl font-medium text-gray-700 mb-6 italic">&quot;{tagline}&quot;</h2>}
            
            <div className="prose prose-lg text-gray-600 mb-8 max-w-none">
              {description}
            </div>

            {children}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
