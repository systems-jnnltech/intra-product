import { ProductSection } from "@/components/sections/ProductSection";
import { ProductBenefits } from "@/components/ui/ProductBenefits";
import { HeartPulse } from "lucide-react";

export const metadata = {
  title: "CardioLife | Lifestyles",
  description: "A scientifically formulated dietary supplement providing vitamins, minerals and plant extracts that support cardiovascular health.",
};

export default function CardioLifePage() {
  return (
    <div>
      <ProductSection
        title="CardioLife"
        imageSrc="/products/cardiolife/cardiolife.png"
        colorClass="text-(--color-cardio)"
        bgColorClass="bg-transparent"
        description={
          <div className="space-y-4 max-w-[500px]">
            <p>
              CardioLife is a scientifically formulated dietary supplement providing vitamins, minerals and 
              plant extracts that support cardiovascular health and blood circulation throughout the body.
            </p>
            <p>
              The combination of Vitamin K2 (MK7), hawthorn extract and vitamins B6, B12 and Folic acid 
              have shown to support the health of the arteries and ensure maximum blood flow throughout the body.
            </p>
            <p className="font-semibold text-(--color-cardio)">
              Optimal blood flow is vital to heart health, as well as brain function and overall well-being.
            </p>
          </div>
        }
      >
        <div className="mt-6 max-w-[500px]">
          <ProductBenefits 
            title="Use CardioLife everyday to:"
            colorClass="text-(--color-cardio)"
            icon={<HeartPulse className="w-7 h-7" />}
            items={[
              "Maintain the health of the arteries and blood vessels - avoid hardening of the arteries",
              "Optimize blood flow throughout the body thereby keeping the heart and cardiovascular system strong and healthy",
              "Maximize brain health and overall well being by ensuring healthy blood circulation"
            ]}
          />
        </div>
      </ProductSection>

      <section className="py-20 bg-red-50">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Featuring <span className="text-(--color-cardio)">vitaMK7®</span>
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            CardioLife contains a unique and well studied brand of Vitamin K2 called VitaMK7. 
            Known as the highest quality, most active form of Vitamin K2, VitaMK7 is pure Menaquinone-7 (MK7).
          </p>
          <p className="text-xl text-gray-700 leading-relaxed font-medium bg-white p-8 rounded-2xl shadow-sm border border-red-100">
            Menaquinone-7 (MK7) has been well studied and shown to enhance blood flow and strengthen bones by removing calcium from the blood and depositing it in the bones, where it belongs.
          </p>
        </div>
      </section>
    </div>
  );
}
