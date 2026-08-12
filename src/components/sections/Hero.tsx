"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center pt-20 overflow-hidden bg-gradient-to-br from-white to-(--color-warm-cream)">
      <div className="absolute inset-0 botanical-pattern opacity-40 mix-blend-multiply pointer-events-none"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-(--color-forest-green) mb-4 tracking-tight leading-tight">
              Live Better. <br/><span className="text-(--color-leaf-green)">Every Day.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light leading-relaxed">
              Discover the Lifestyles wellness collection. Based on a proprietary formulation of 23 botanical extracts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/intra" 
                className="bg-(--color-intra) text-white px-8 py-4 rounded-full font-semibold text-center hover:bg-(--color-forest-green) transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Explore Intra
              </Link>
              <Link 
                href="#products" 
                className="bg-white text-(--color-intra) border-2 border-(--color-intra) px-8 py-4 rounded-full font-semibold text-center hover:bg-gray-50 transition-all"
              >
                View All Products
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[400px] md:h-[600px] w-full"
          >
            {/* The image should be properly positioned and scaled */}
            <Image
              src="/products/intra/intra.png"
              alt="Intra Botanical Blend"
              fill
              className="object-contain filter drop-shadow-2xl"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
