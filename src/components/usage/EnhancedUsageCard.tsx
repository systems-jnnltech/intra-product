"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Clock, 
  Droplet, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Lightbulb,
  AlertCircle
} from "lucide-react";

export interface InstructionItem {
  label?: string;
  text: string;
  badge?: string;
}

export interface EnhancedUsageCardProps {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  imageSrc: string;
  colorClass: string;
  bgGradient: string;
  borderColor: string;
  badgeBg: string;
  auraColor: string;
  productHref: string;
  dosage: string;
  timing: string;
  waterNote?: string;
  instructions: InstructionItem[];
  proTips: string[];
  warningNote?: string;
  index?: number;
}

export function EnhancedUsageCard({
  title,
  subtitle,
  tagline,
  imageSrc,
  colorClass,
  bgGradient,
  borderColor,
  badgeBg,
  auraColor,
  productHref,
  dosage,
  timing,
  waterNote,
  instructions,
  proTips,
  warningNote,
  index = 0,
}: EnhancedUsageCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`rounded-3xl border ${borderColor} bg-white shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col h-full overflow-hidden group`}
    >
      {/* Header Banner with Ambient Gradient & Floating Bottle */}
      <div className={`relative ${bgGradient} p-6 sm:p-8 flex items-center justify-between overflow-hidden min-h-[200px]`}>
        {/* Soft Aura Behind Bottle */}
        <div className={`absolute right-4 -top-6 w-44 h-44 rounded-full ${auraColor} blur-2xl pointer-events-none`} />

        <div className="z-10 max-w-[60%] space-y-2">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${badgeBg} shadow-xs`}>
            <Sparkles className="w-3 h-3" />
            {subtitle}
          </span>
          <h3 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${colorClass}`}>
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-gray-700 italic font-medium">
            &quot;{tagline}&quot;
          </p>
        </div>

        {/* Floating Product Bottle */}
        <div className="relative w-28 sm:w-36 h-36 sm:h-44 z-10 flex-shrink-0 flex items-center justify-center">
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.4 }}
            className="relative w-full h-full"
          >
            <Image
              src={imageSrc}
              alt={title}
              fill
              sizes="144px"
              className="object-contain filter drop-shadow-xl group-hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 sm:p-7 flex flex-col flex-grow space-y-6">
        
        {/* Quick Metric Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          <div className="bg-gray-50/80 border border-gray-200/70 rounded-2xl p-3 flex items-start gap-2.5">
            <div className={`p-1.5 rounded-xl bg-white shadow-xs ${colorClass} shrink-0`}>
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-gray-400 font-bold">Optimal Timing</p>
              <p className="text-xs sm:text-sm font-semibold text-gray-900 leading-snug">{timing}</p>
            </div>
          </div>

          <div className="bg-gray-50/80 border border-gray-200/70 rounded-2xl p-3 flex items-start gap-2.5">
            <div className={`p-1.5 rounded-xl bg-white shadow-xs ${colorClass} shrink-0`}>
              <Droplet className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-gray-400 font-bold">Recommended Dose</p>
              <p className="text-xs sm:text-sm font-semibold text-gray-900 leading-snug">{dosage}</p>
            </div>
          </div>
        </div>

        {/* Water / Hydration Requirement Highlight */}
        {waterNote && (
          <div className="bg-amber-50/90 border border-amber-200 rounded-2xl p-3 flex items-center gap-3">
            <Droplet className="w-5 h-5 text-amber-600 shrink-0" />
            <p className="text-xs sm:text-sm font-medium text-amber-950 leading-snug">
              <strong>Hydration Rule:</strong> {waterNote}
            </p>
          </div>
        )}

        {/* Instructions Breakdown */}
        <div className="space-y-3 flex-grow">
          <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">
            Directions & Regimen
          </h4>
          <div className="space-y-3">
            {instructions.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${colorClass}`} />
                <div className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  {item.label && (
                    <span className="font-bold text-gray-900 mr-1.5">
                      {item.label}:
                    </span>
                  )}
                  <span>{item.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pro Tips Box */}
        {proTips && proTips.length > 0 && (
          <div className="bg-emerald-50/70 border border-emerald-100 rounded-2xl p-3.5 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--color-forest-green)]">
              <Lightbulb className="w-4 h-4 text-emerald-600" />
              <span>Distributor Pro-Tips</span>
            </div>
            <ul className="space-y-1.5 text-xs text-gray-600">
              {proTips.map((tip, tIdx) => (
                <li key={tIdx} className="flex items-start gap-2">
                  <span className="text-[var(--color-leaf-green)] font-bold">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Warning Note if any */}
        {warningNote && (
          <div className="bg-rose-50/70 border border-rose-100 rounded-xl p-2.5 flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
            <p className="text-[11px] sm:text-xs text-rose-800 font-medium leading-tight">
              {warningNote}
            </p>
          </div>
        )}

        {/* Product Navigation Link */}
        <div className="pt-2 border-t border-gray-100 mt-auto">
          <Link
            href={productHref}
            className={`inline-flex items-center justify-between w-full text-xs sm:text-sm font-semibold ${colorClass} hover:opacity-80 transition-opacity group/link`}
          >
            <span>Learn More About {title}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
          </Link>
        </div>

      </div>
    </motion.div>
  );
}
