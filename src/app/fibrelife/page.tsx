import { ProductSection } from "@/components/sections/ProductSection";
import { ProductBenefits } from "@/components/ui/ProductBenefits";
import { Scale, Droplets, Heart } from "lucide-react";

export const metadata = {
  title: "FibreLife | Lifestyles",
  description: "A unique soluble plant fibre with the highest viscosity of any fibre tested.",
};

export default function FibreLifePage() {
  return (
    <div>
      <ProductSection
        title="FibreLife"
        imageSrc="/products/fibrelife/fibrelife.png"
        colorClass="text-(--color-fibre)"
        bgColorClass="bg-transparent"
        description={
          <div className="space-y-4 max-w-[480px]">
            <p>
              FibreLife is a unique soluble plant fibre with the highest viscosity of any fibre tested. 
              FibreLife absorbs water quickly and continuously to promote healthy digestion, satiety, and glycemic balance.
            </p>
            <p className="text-base sm:text-lg font-semibold text-gray-800">
              Designed around three synergistic wellness pillars: <span className="text-[var(--color-fibre)]">Appetite, Blood Sugar & Cholesterol.</span>
            </p>
          </div>
        }
      >
        <div className="pt-2">
          <a
            href="#abc-formula"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-fibre)] text-white text-sm font-semibold hover:bg-orange-600 transition-all shadow-md hover:shadow-lg"
          >
            <span>Explore A-B-C Formula</span>
            <span className="text-xs font-bold">↓</span>
          </a>
        </div>
      </ProductSection>

      <section id="abc-formula" className="py-20 bg-orange-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8">
            
            <div className="h-full">
              <ProductBenefits 
                title="A - Appetite Control"
                colorClass="text-(--color-fibre)"
                icon={<Scale className="w-8 h-8" />}
                items={[
                  "Maintain and control a healthy body weight",
                  "Control your appetite by creating a feeling of fullness",
                  "Lower the number calories your body absorbs from a meal",
                  "Prevent carbohydrates from being stored in your body as fat"
                ]}
              />
            </div>

            <div className="h-full">
              <ProductBenefits 
                title="B - Blood Sugar"
                colorClass="text-(--color-fibre)"
                icon={<Droplets className="w-8 h-8" />}
                items={[
                  "Support and regulate your blood-sugar levels.",
                  "Help control the daily peaks and valleys",
                  "Lower your levels of C-reactive protein and reduce the risk of type 2 diabetes"
                ]}
              />
            </div>

            <div className="h-full">
              <ProductBenefits 
                title="C - Cholesterol"
                colorClass="text-(--color-fibre)"
                icon={<Heart className="w-8 h-8" />}
                items={[
                  "Lowering the levels of cholesterol and C-reactive protein in your body. Doing so has been proven to lower the risk of heart and cardiovascular disease",
                  "Acting like an inside sponge, by binding cholesterol and toxins in your food before it is absorbed. FibreLife helps flush these out of your body"
                ]}
              />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
