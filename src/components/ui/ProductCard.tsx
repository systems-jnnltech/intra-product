"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface ProductCardProps {
  name: string;
  description: string;
  imageSrc: string;
  href: string;
  colorClass: string;
  bgColorClass: string;
  index?: number;
}

export function ProductCard({ name, description, imageSrc, href, colorClass, bgColorClass, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full"
    >
      <div className={`relative h-64 w-full ${bgColorClass} transition-colors duration-300`}>
        <Image 
          src={imageSrc} 
          alt={name} 
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-contain p-6 drop-shadow-md group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-8 flex flex-col flex-grow">
        <h3 className={`text-2xl font-bold mb-3 ${colorClass}`}>{name}</h3>
        <p className="text-gray-600 mb-6 flex-grow leading-relaxed">{description}</p>
        <Link 
          href={href}
          className={`inline-flex items-center font-semibold ${colorClass} hover:opacity-80 transition-opacity mt-auto group/btn`}
        >
          View Product <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}
