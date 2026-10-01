"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { 
  Phone, 
  Copy, 
  Check, 
  ShieldCheck, 
  Sparkles, 
  HeartHandshake, 
  ExternalLink,
  Award
} from "lucide-react";

export function DistributorSection({ id = "distributor" }: { id?: string }) {
  const [copied, setCopied] = useState(false);
  const phoneNumber = "09351083811";
  const formattedPhone = "0935 108 3811";
  const facebookPageName = "INTRA Wellness Fatima";
  const facebookUrl = "https://www.facebook.com/search/top?q=INTRA%20Wellness%20Fatima";

  const handleCopy = () => {
    navigator.clipboard.writeText(phoneNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemFadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const imageCardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.94, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section 
      id={id} 
      className="relative py-14 sm:py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-white via-[#fcfaf4] to-(--color-warm-cream) border-t border-emerald-950/5"
    >
      {/* Premium ambient decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.12, 0.22, 0.12],
            x: [0, 20, 0],
            y: [0, -15, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-24 -left-24 w-[450px] h-[450px] rounded-full bg-gradient-to-br from-emerald-300 via-teal-200 to-transparent blur-3xl -z-10"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
            x: [0, -25, 0],
            y: [0, 20, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-24 -right-24 w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-emerald-400/20 via-lime-200/30 to-transparent blur-3xl -z-10"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-50/40 rounded-full blur-[140px] -z-10" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-20"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-300/60 text-[var(--color-forest-green)] text-xs sm:text-sm font-semibold tracking-wide uppercase shadow-xs mb-3 sm:mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Authorized Partner & Health Advocate</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--color-forest-green)] tracking-tight mb-3 sm:mb-4">
            Meet Your License Lifestyle Distributor
          </h2>
          <p className="text-base sm:text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
            Your trusted partner for <span className="font-semibold text-[var(--color-leaf-green)]">Intra®</span> and the complete <span className="font-semibold text-[var(--color-leaf-green)]">Lifestyles Wellness Collection</span>.
          </p>
        </motion.div>

        {/* Distributor Showcase Main Card */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="bg-white/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl lg:rounded-4xl border border-emerald-950/10 shadow-xl lg:shadow-2xl overflow-hidden p-5 sm:p-10 lg:p-12 max-w-6xl mx-auto relative"
        >
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Left Column: Premium Photo Showcase (Enlarged, transparent, flipped) */}
            <motion.div 
              variants={imageCardVariants}
              className="lg:col-span-5 flex flex-col items-center justify-center relative"
            >
              <div className="relative w-full max-w-[420px] sm:max-w-[460px] lg:max-w-[480px] group flex flex-col items-center">
                
                {/* Glowing Aura backdrop */}
                <motion.div 
                  animate={{ 
                    scale: [0.95, 1.05, 0.95],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 m-auto w-[340px] sm:w-[400px] h-[450px] sm:h-[520px] rounded-full bg-gradient-to-t from-[var(--color-intra)]/25 via-emerald-400/20 to-[var(--color-lime-green)]/15 blur-3xl -z-10"
                />

                {/* Integrated Luxury Portrait Showcase Card */}
                <div className="relative w-full aspect-[800/1070] max-w-[420px] sm:max-w-[460px] rounded-3xl overflow-hidden bg-gradient-to-b from-emerald-50/80 via-white to-emerald-100/40 border border-emerald-900/10 shadow-xl flex items-end justify-center">
                  
                  {/* Subtle inner ambient gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-intra)]/10 via-transparent to-transparent pointer-events-none" />

                  {/* Cutout Image of Nikki Gnann (Transparent, Flipped to Right) */}
                  <Image
                    src="/nikkignann-distributor.png"
                    alt="Nikki Gnann - License Lifestyle Distributor"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 460px"
                    className="object-contain object-bottom drop-shadow-[0_12px_24px_rgba(26,67,43,0.18)] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    priority
                  />

                  {/* Status Overlay Badge */}
                  <div className="absolute bottom-3 left-3 right-3 sm:left-4 sm:right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-3.5 border border-emerald-900/10 shadow-lg flex items-center justify-between z-10">
                    <div className="flex items-center gap-2.5">
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                      </span>
                      <div>
                        <p className="text-xs sm:text-sm font-bold text-gray-900 leading-tight">Verified License Distributor</p>
                        <p className="text-[11px] text-gray-500">Ready to assist & ship</p>
                      </div>
                    </div>
                    <Award className="w-5 h-5 text-[var(--color-leaf-green)] shrink-0" />
                  </div>
                </div>

              </div>
            </motion.div>

            {/* Right Column: Profile, Credentials & Contact Information */}
            <motion.div 
              variants={containerVariants}
              className="lg:col-span-7 flex flex-col space-y-6"
            >
              
              {/* Header Info */}
              <motion.div variants={itemFadeUp} className="space-y-2">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[var(--color-leaf-green)]">
                  <ShieldCheck className="w-4 h-4" />
                  Official Independent Representative
                </div>
                
                <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
                  NIKKI GNANN
                </h3>
                
                <div className="inline-block bg-gradient-to-r from-[var(--color-intra)] to-teal-700 text-white text-sm sm:text-base font-semibold px-4 py-1.5 rounded-lg shadow-sm">
                  License Lifestyle Distributor
                </div>
              </motion.div>

              {/* Short Introduction */}
              <motion.div variants={itemFadeUp} className="text-gray-600 text-base sm:text-lg leading-relaxed space-y-3">
                <p>
                  Welcome! As a license distributor of <strong className="text-gray-900 font-semibold">Lifestyles Health Products</strong>, I am dedicated to helping you and your loved ones experience the transformative wellness benefits of our premium botanical blends.
                </p>
                <p className="text-sm sm:text-base text-gray-600">
                  Whether you are starting your daily <span className="text-[var(--color-intra)] font-medium">Intra®</span> herbal regimen, looking for cellular defense with <span className="text-[var(--color-nutria)] font-medium">NutriaPlus™</span>, or seeking tailored health advice, you can count on 100% authentic products, prompt delivery, and personalized customer care.
                </p>
              </motion.div>

              {/* 3 Trust Pillar Highlights */}
              <motion.div variants={itemFadeUp} className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-emerald-50/70 border border-emerald-100 rounded-xl p-3.5 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-100/80 text-[var(--color-leaf-green)] shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-900">100% Authentic</h4>
                    <p className="text-[11px] text-gray-600 leading-snug">Direct, certified fresh Lifestyles stock</p>
                  </div>
                </div>

                <div className="bg-teal-50/70 border border-teal-100 rounded-xl p-3.5 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-teal-100/80 text-[var(--color-nutria)] shrink-0">
                    <HeartHandshake className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-900">Personal Guidance</h4>
                    <p className="text-[11px] text-gray-600 leading-snug">Tailored usage advice for your goals</p>
                  </div>
                </div>

                <div className="bg-amber-50/70 border border-amber-100 rounded-xl p-3.5 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-amber-100/80 text-amber-700 shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-900">Fast Assistance</h4>
                    <p className="text-[11px] text-gray-600 leading-snug">Quick inquiry response & order handling</p>
                  </div>
                </div>
              </motion.div>

              {/* Contact & Social Channels */}
              <motion.div variants={itemFadeUp} className="pt-2">
                <div className="grid sm:grid-cols-2 gap-4">
                  
                  {/* Phone Contact Card */}
                  <div className="p-5 rounded-2xl bg-white border border-gray-200/90 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        <Phone className="w-3.5 h-3.5 text-[var(--color-leaf-green)]" />
                        <span>Direct Contact No.</span>
                      </div>
                      <button
                        onClick={handleCopy}
                        className="inline-flex items-center gap-1 text-[11px] font-medium text-[var(--color-leaf-green)] hover:text-[var(--color-forest-green)] bg-emerald-50 px-2 py-0.5 rounded-md transition-colors"
                        title="Copy phone number"
                      >
                        {copied ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-600" />
                            <span className="text-emerald-700 font-semibold">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>

                    <a 
                      href={`tel:${phoneNumber}`} 
                      className="text-xl sm:text-2xl font-bold text-gray-900 hover:text-[var(--color-leaf-green)] transition-colors block tracking-tight"
                    >
                      {formattedPhone}
                    </a>

                    <p className="text-xs text-gray-500 mt-1">
                      Available for calls, SMS inquiries, & orders
                    </p>
                  </div>

                  {/* Facebook Page Card */}
                  <div className="p-5 rounded-2xl bg-white border border-gray-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                        {/* Facebook SVG Logo */}
                        <svg className="w-3.5 h-3.5 text-[#1877F2] fill-current" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                        <span>Official Facebook Page</span>
                      </div>

                      <div className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight truncate">
                        {facebookPageName}
                      </div>

                      <p className="text-xs text-gray-500 mt-1">
                        Updates, testimonials, & community wellness
                      </p>
                    </div>

                    <div className="mt-3">
                      <a
                        href={facebookUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1877F2] hover:text-blue-700 hover:underline"
                      >
                        Visit Facebook Page <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                </div>
              </motion.div>

            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
