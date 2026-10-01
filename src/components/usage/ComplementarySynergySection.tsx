"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Hourglass, 
  CheckCircle2, 
  Plus
} from "lucide-react";

export function ComplementarySynergySection() {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-white/90 backdrop-blur-md rounded-3xl sm:rounded-4xl border border-emerald-950/10 shadow-xl my-16 overflow-hidden relative">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-8 max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/80 text-[var(--color-forest-green)] border border-emerald-300/60 text-xs sm:text-sm font-semibold uppercase tracking-wide mb-3 shadow-xs">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>Synergistic Bio-Harmony</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--color-forest-green)] tracking-tight mb-4">
            The Complementary Wellness Routine
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Lifestyles products are formulated around botanical synergy. Rather than standalone supplements, they are engineered to work in harmony—enhancing absorption and magnifying health benefits.
          </p>
        </div>

        {/* Feature 1: The "Better Together" Dual Spotlight */}
        <div className="bg-gradient-to-br from-emerald-50/70 via-white to-teal-50/60 rounded-3xl border border-emerald-200/80 p-6 sm:p-10 lg:p-12 mb-12 shadow-sm">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Bottles Duo Visual */}
            <div className="lg:col-span-5 flex items-center justify-center relative">
              <div className="relative flex items-center justify-center gap-2 sm:gap-4">
                {/* Intra Bottle */}
                <div className="relative w-28 sm:w-36 h-48 sm:h-60 flex flex-col items-center">
                  <div className="relative w-full h-full">
                    <Image
                      src="/products/intra/intra.png"
                      alt="Intra"
                      fill
                      sizes="144px"
                      className="object-contain filter drop-shadow-xl"
                    />
                  </div>
                  <span className="text-xs font-bold text-[var(--color-intra)] mt-1">INTRA®</span>
                </div>

                {/* Plus Icon Badge */}
                <div className="w-10 h-10 rounded-full bg-[var(--color-forest-green)] text-white flex items-center justify-center shadow-lg shrink-0 z-10">
                  <Plus className="w-5 h-5" />
                </div>

                {/* NutriaPlus Bottle */}
                <div className="relative w-28 sm:w-36 h-48 sm:h-60 flex flex-col items-center">
                  <div className="relative w-full h-full">
                    <Image
                      src="/products/nutriaplus/nutriaplus.png"
                      alt="NutriaPlus"
                      fill
                      sizes="144px"
                      className="object-contain filter drop-shadow-xl"
                    />
                  </div>
                  <span className="text-xs font-bold text-[var(--color-nutria)] mt-1">NUTRIAPLUS™</span>
                </div>
              </div>
            </div>

            {/* Synergy Explanation */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[var(--color-leaf-green)]">
                <ShieldCheck className="w-4 h-4" />
                The Core Foundation
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                Intra® & NutriaPlus™: <span className="text-[var(--color-leaf-green)]">&quot;Better Together&quot;</span>
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                When taken together, Intra and NutriaPlus deliver a powerful two-way biological synergy that surpasses either product taken individually:
              </p>

              <div className="space-y-3 pt-1">
                <div className="bg-white/80 rounded-2xl p-3.5 border border-emerald-100 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[var(--color-intra)] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs sm:text-sm text-gray-900">Intra balances & strengthens:</strong>
                    <p className="text-xs sm:text-sm text-gray-600">Feeds the body&apos;s 8 biological systems with 23 cold-extracted botanical nutrients.</p>
                  </div>
                </div>

                <div className="bg-white/80 rounded-2xl p-3.5 border border-teal-100 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[var(--color-nutria)] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs sm:text-sm text-gray-900">NutriaPlus shields & fortifies:</strong>
                    <p className="text-xs sm:text-sm text-gray-600">Supplies potent selenium and plant antioxidants that defend against cellular free-radical damage.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <span className="inline-block text-xs font-semibold text-emerald-800 bg-emerald-100/90 px-3.5 py-1.5 rounded-lg">
                  💡 Take Intra & NutriaPlus together each morning for peak bioavailability.
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Feature 2: The "1-Hour Rule" Visual Timing Infographic */}
        <div className="bg-gradient-to-r from-amber-50/80 via-white to-orange-50/80 rounded-3xl border border-amber-200/90 p-6 sm:p-10 mb-12 shadow-sm">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-700 mb-2">
              <Hourglass className="w-4 h-4" />
              Essential Regimen Rule
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mb-2">
              The 1-Hour FibreLife Separation Rule
            </h3>
            <p className="text-xs sm:text-sm text-gray-600">
              To guarantee maximum benefit from every supplement, follow this simple timing principle:
            </p>
          </div>

          {/* 3 Step Timeline */}
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6 relative">
            
            {/* Step 1 */}
            <div className="bg-white rounded-2xl p-5 border border-emerald-200 shadow-xs flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-[var(--color-intra)] font-black text-sm flex items-center justify-center mb-3">
                01
              </div>
              <h4 className="text-sm font-bold text-gray-900 mb-1">Take Intra & NutriaPlus</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Take your liquid Intra and NutriaPlus capsules. Their herbal nutrients immediately begin entering your bloodstream.
              </p>
            </div>

            {/* Step 2 (Buffer) */}
            <div className="bg-amber-100/60 rounded-2xl p-5 border border-amber-300/80 shadow-xs flex flex-col items-center text-center relative">
              <div className="w-10 h-10 rounded-full bg-amber-500 text-white font-black text-sm flex items-center justify-center mb-3">
                <Hourglass className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-amber-950 mb-1">Wait 60 Minutes</h4>
              <p className="text-xs text-amber-900 leading-relaxed font-medium">
                This 1-hour window gives your body ample time to absorb botanical phytonutrients and antioxidants without interference.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl p-5 border border-orange-200 shadow-xs flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-orange-100 text-[var(--color-fibre)] font-black text-sm flex items-center justify-center mb-3">
                03
              </div>
              <h4 className="text-sm font-bold text-gray-900 mb-1">Take FibreLife + Water</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Take FibreLife with a full 250 ml glass of water before your meal. Its viscous fibre moderates glycemic impact smoothly.
              </p>
            </div>

          </div>

          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500 italic">
              *Why this matters: FibreLife is formulated with the highest viscosity soluble plant fibres. Taking it 1 hour apart prevents it from binding to the botanical extracts of Intra.
            </p>
          </div>
        </div>

        {/* Feature 3: Recommended Routine Tiers */}
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              Select Your Routine Level
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Match your daily supplement regimen to your personal wellness goals.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Level 1 */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
                  Level 1 • Foundation
                </span>
                <h4 className="text-lg font-bold text-gray-900 mt-3 mb-1">Intra® Daily Regimen</h4>
                <p className="text-xs text-gray-600 mb-4">Ideal for anyone starting their botanical wellness journey.</p>
                
                <ul className="space-y-2 text-xs text-gray-700 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Balances 8 body systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Boosts natural vitality & stamina</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Safe for the whole family</span>
                  </li>
                </ul>
              </div>

              <Link
                href="/intra"
                className="inline-flex items-center justify-between text-xs font-bold text-[var(--color-intra)] pt-3 border-t border-gray-100 hover:text-[var(--color-forest-green)]"
              >
                <span>View Intra Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Level 2 (Popular) */}
            <div className="bg-gradient-to-b from-emerald-50/50 to-white rounded-2xl border-2 border-emerald-400 p-6 flex flex-col justify-between shadow-md relative">
              <div className="absolute -top-3 right-4 bg-emerald-600 text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-0.5 rounded-full shadow-xs">
                Most Popular
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-100">
                  Level 2 • Better Together
                </span>
                <h4 className="text-lg font-bold text-gray-900 mt-3 mb-1">Intra® + NutriaPlus™</h4>
                <p className="text-xs text-gray-600 mb-4">Comprehensive cellular protection and system balancing.</p>
                
                <ul className="space-y-2 text-xs text-gray-700 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>High-potency cellular antioxidant shield</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>Bio-available selenium & phytonutrients</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>Proven dual-action synergy</span>
                  </li>
                </ul>
              </div>

              <Link
                href="/nutriaplus"
                className="inline-flex items-center justify-between text-xs font-bold text-[var(--color-nutria)] pt-3 border-t border-gray-100 hover:text-teal-900"
              >
                <span>View NutriaPlus Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Level 3 */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-2.5 py-1 rounded-md border border-rose-100">
                  Level 3 • Complete Harmony
                </span>
                <h4 className="text-lg font-bold text-gray-900 mt-3 mb-1">Complete 4-Product Regimen</h4>
                <p className="text-xs text-gray-600 mb-4">Total cardiovascular, metabolic, digestive & biological vitality.</p>
                
                <ul className="space-y-2 text-xs text-gray-700 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <span>CardioLife arterial & circulation support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                    <span>FibreLife glucose & cholesterol regulation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Complete 360° health optimization</span>
                  </li>
                </ul>
              </div>

              <a
                href="#distributor-consultation"
                className="inline-flex items-center justify-between text-xs font-bold text-[var(--color-forest-green)] pt-3 border-t border-gray-100 hover:text-emerald-900"
              >
                <span>Ask Distributor for Custom Regimen</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
