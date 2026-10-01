import { EnhancedUsageCard } from "@/components/usage/EnhancedUsageCard";
import { DailyScheduleTimeline } from "@/components/usage/DailyScheduleTimeline";
import { ComplementarySynergySection } from "@/components/usage/ComplementarySynergySection";
import { UsageFAQSection } from "@/components/usage/UsageFAQSection";
import { AlertTriangle, Sparkles, BookOpen } from "lucide-react";

export const metadata = {
  title: "How to Use | Lifestyles Health Supplement Guidelines",
  description: "Comprehensive product usage instructions, daily schedules, and synergy guidelines for Intra, NutriaPlus, CardioLife, and FibreLife.",
};

const productsUsageData = [
  {
    id: "intra",
    title: "INTRA®",
    subtitle: "23 Botanicals • 8 Systems",
    tagline: "Drink Intra. Share Intra. Every Day.",
    imageSrc: "/products/intra/intra.png",
    colorClass: "text-[var(--color-intra)]",
    bgGradient: "bg-gradient-to-br from-emerald-100/90 via-emerald-50/50 to-green-100/40",
    borderColor: "border-emerald-200/90",
    badgeBg: "bg-emerald-100 text-emerald-900 border border-emerald-300/60",
    auraColor: "bg-emerald-400/25",
    productHref: "/intra",
    dosage: "1 to 2 fl. oz (28–56 ml) or 2 to 4 capsules daily",
    timing: "Morning / Anytime with food or empty stomach",
    instructions: [
      {
        label: "Daily System Maintenance",
        text: "Take 1 fl. oz (28 ml) once daily to nourish and balance your 8 biological systems.",
      },
      {
        label: "Targeted Fortification",
        text: "Take 1 fl. oz twice daily (morning and afternoon) during periods of stress, fatigue, or recovery.",
      },
      {
        label: "Flexible Ingestion",
        text: "Can be taken first thing in the morning on an empty stomach or with a light breakfast.",
      },
    ],
    proTips: [
      "Shake the bottle vigorously before every pour to disperse natural botanical extracts.",
      "Store in the refrigerator after opening to keep cold-extracted botanicals crisp and active.",
      "Pleasant herbal-fruit taste; can be mixed into fresh fruit juice, smoothies, or cold water.",
    ],
  },
  {
    id: "nutriaplus",
    title: "NUTRIAPLUS™",
    subtitle: "Cellular Antioxidant Shield",
    tagline: "Quench Free Radicals. Defend Every Cell.",
    imageSrc: "/products/nutriaplus/nutriaplus.png",
    colorClass: "text-[var(--color-nutria)]",
    bgGradient: "bg-gradient-to-br from-teal-100/90 via-teal-50/50 to-cyan-100/40",
    borderColor: "border-teal-200/90",
    badgeBg: "bg-teal-100 text-teal-900 border border-teal-300/60",
    auraColor: "bg-teal-400/25",
    productHref: "/nutriaplus",
    dosage: "2 capsules daily",
    timing: "Morning or Mid-Day with Food",
    instructions: [
      {
        label: "Standard Serving",
        text: "Take 2 capsules daily, ideally alongside your breakfast or lunch for optimal bioavailability.",
      },
      {
        label: "Bio-Synergy with Intra",
        text: "Formulated specifically to be taken at the same time as Intra to multiply cellular defense.",
      },
      {
        label: "Antioxidant Defense",
        text: "Features bio-available selenium, Vitamin C, and fruit-vegetable concentrates to neutralize free radicals.",
      },
    ],
    proTips: [
      "Taking NutriaPlus with a meal containing healthy fats enhances absorption of plant phytonutrients.",
      "Always close cap tightly and store in a cool, dry area away from direct sunlight.",
    ],
  },
  {
    id: "cardiolife",
    title: "CARDIOLIFE®",
    subtitle: "Cardiovascular & Arterial Tone",
    tagline: "Nourish Your Heart & Micro-Circulation",
    imageSrc: "/products/cardiolife/cardiolife.png",
    colorClass: "text-[var(--color-cardio)]",
    bgGradient: "bg-gradient-to-br from-rose-100/90 via-rose-50/50 to-red-100/40",
    borderColor: "border-rose-200/90",
    badgeBg: "bg-rose-100 text-rose-900 border border-rose-300/60",
    auraColor: "bg-rose-400/25",
    productHref: "/cardiolife",
    dosage: "1 to 2 capsules daily",
    timing: "Any time of the day with food",
    instructions: [
      {
        label: "Cardiovascular Maintenance",
        text: "Take 1 to 2 capsules daily with meals to support arterial flexibility and clean blood flow.",
      },
      {
        label: "Vascular Vitality",
        text: "Supplies standardized Hawthorn extract, magnesium, and essential B-vitamins for micro-circulation.",
      },
    ],
    proTips: [
      "Best taken in the morning or early afternoon with a meal for all-day stamina.",
      "Complements Intra's cardiovascular balancing effects seamlessly.",
    ],
  },
  {
    id: "fibrelife",
    title: "FIBRELIFE®",
    subtitle: "High-Viscosity Soluble Fibre",
    tagline: "Glycemic Stability & Gentle Digestive Motility",
    imageSrc: "/products/fibrelife/fibrelife.png",
    colorClass: "text-[var(--color-fibre)]",
    bgGradient: "bg-gradient-to-br from-amber-100/90 via-orange-50/50 to-yellow-100/40",
    borderColor: "border-orange-200/90",
    badgeBg: "bg-orange-100 text-orange-900 border border-orange-300/60",
    auraColor: "bg-amber-400/25",
    productHref: "/fibrelife",
    dosage: "1 to 2 capsules (2–3 times daily)",
    timing: "15–30 Mins Before or at Start of Meals",
    waterNote: "Drink a full 250 ml (one large glass) of water with each capsule.",
    warningNote: "IMPORTANT: Take Intra and NutriaPlus at least 1 hour before taking FibreLife.",
    instructions: [
      {
        label: "Blood Sugar & Cholesterol",
        text: "Take 1 to 2 capsules at the start of each meal with 250 ml of water to buffer carb absorption.",
      },
      {
        label: "Weight Management & Satiety",
        text: "Take 1 to 2 capsules between meals 2 to 3 times daily with a full glass of water to promote fullness.",
      },
      {
        label: "1-Hour Separation Rule",
        text: "Allow at least 60 minutes between taking FibreLife and other supplements to ensure unhindered absorption.",
      },
    ],
    proTips: [
      "Never swallow FibreLife capsules dry; water is required for the soluble fibre to expand properly.",
      "Stay hydrated throughout the day to support optimal gastrointestinal transit.",
    ],
  },
];

export default function UsagePage() {
  return (
    <div className="bg-transparent min-h-screen py-10 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-emerald-100/80 text-[var(--color-forest-green)] border border-emerald-300/60 text-xs sm:text-sm font-semibold tracking-wide uppercase shadow-xs mb-3 sm:mb-4">
            <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
            <span>Official Supplement Directions</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[var(--color-forest-green)] tracking-tight mb-4">
            How to Use
          </h1>
          <p className="text-base sm:text-xl text-gray-600 leading-relaxed font-light">
            Recommended dosage guidelines, timing principles, and synergy routines for the complete <span className="font-semibold text-[var(--color-leaf-green)]">Lifestyles Wellness Collection</span>.
          </p>
        </div>

        {/* Safety & Compliance Advisory Banner */}
        <div className="bg-white/95 backdrop-blur-md border border-amber-200/80 rounded-2xl p-4 sm:p-5 shadow-xs mb-10 sm:mb-14 flex items-start gap-3.5 max-w-4xl mx-auto">
          <div className="p-2 rounded-xl bg-amber-100 text-amber-700 shrink-0 mt-0.5">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-gray-900 mb-0.5">
              General Usage & Safety Note
            </h4>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Supplements should be taken consistently as part of a balanced diet and active lifestyle. If you are pregnant, nursing, taking prescription medications, or under medical supervision, please consult a qualified healthcare professional before use.
            </p>
          </div>
        </div>

        {/* Section 1: 4 Rich Product Dosage Cards */}
        <div className="mb-14 sm:mb-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--color-leaf-green)]">
                <Sparkles className="w-3.5 h-3.5" />
                Individual Directions
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                Product-by-Product Guidelines
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {productsUsageData.map((prod, idx) => (
              <EnhancedUsageCard key={prod.id} {...prod} index={idx} />
            ))}
          </div>
        </div>

        {/* Section 2: Interactive 24-Hour Schedule Timeline */}
        <DailyScheduleTimeline />

        {/* Section 3: Enhanced "Complementary Wellness Routine" & Synergy */}
        <ComplementarySynergySection />

        {/* Section 4: Usage FAQ & Personalized Distributor Regimen Consultation */}
        <UsageFAQSection />

      </div>
    </div>
  );
}
