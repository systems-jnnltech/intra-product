import { UsageCard } from "@/components/ui/UsageCard";
import { Info, Clock, AlertTriangle } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "How to Use | Lifestyles",
  description: "Product usage instructions for Intra, NutriaPlus, CardioLife, and FibreLife.",
};

export default function UsagePage() {
  return (
    <div className="bg-transparent min-h-screen py-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-(--color-forest-green) mb-4">How to Use</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Recommended usage guidelines for the Lifestyles product collection.
          </p>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg shadow-sm mb-12 flex items-start max-w-4xl mx-auto">
          <AlertTriangle className="text-yellow-500 w-6 h-6 mr-4 flex-shrink-0 mt-1" />
          <p className="text-gray-800 font-medium">
            Please follow the product instructions and consult a qualified healthcare professional if you have questions about supplement use.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          <UsageCard 
            title="INTRA"
            colorClass="text-(--color-intra)"
            bgColorClass="bg-green-50"
            icon={<Clock className="w-6 h-6" />}
            instructions={[
              { label: "When", text: "Any time of the day with food or empty stomach" },
              { label: "Amount", text: "1 to 2 fl. oz. (28 to 56 ml) OR 2 to 4 capsules daily" }
            ]}
          />
          <UsageCard 
            title="NUTRIAPLUS"
            colorClass="text-(--color-nutria)"
            bgColorClass="bg-teal-50"
            icon={<Clock className="w-6 h-6" />}
            instructions={[
              { label: "When", text: "Any time of the day with food" },
              { label: "Amount", text: "2 capsules daily" }
            ]}
          />
          <UsageCard 
            title="CARDIOLIFE"
            colorClass="text-(--color-cardio)"
            bgColorClass="bg-red-50"
            icon={<Clock className="w-6 h-6" />}
            instructions={[
              { label: "When", text: "Any time of the day with food" },
              { label: "Amount", text: "2 capsules daily" }
            ]}
          />
          <UsageCard 
            title="FIBRELIFE"
            colorClass="text-(--color-fibre)"
            bgColorClass="bg-orange-50"
            icon={<Info className="w-6 h-6" />}
            instructions={[
              { label: "Blood Sugar and Cholesterol Control", text: "1 to 2 capsules at the start of each meal" },
              { label: "Weight Loss", text: "1 to 2 capsules between meals 2 to 3 times daily" },
              { label: "Important Note", text: "Drink 250 ml of water with each capsule." },
              { label: "Combining Products", text: "Take Intra and NutriaPlus one hour before taking FibreLife." }
            ]}
          />
        </div>

        {/* Product Combination Diagram */}
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-16 rounded-3xl shadow-xl border border-gray-100 text-center">
          <h2 className="text-3xl font-bold text-(--color-forest-green) mb-6">Complementary Wellness Routine</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            The supplied product material presents the products as part of a complementary wellness routine. 
            When taken together, they are designed to support overall health and vitality.
          </p>

          <div className="flex flex-col items-center justify-center space-y-4 md:space-y-0 md:flex-row md:space-x-4">
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full border-4 border-(--color-intra) flex items-center justify-center p-4 bg-green-50 shadow-md">
                <Image src="/products/intra/intra.png" alt="Intra" width={60} height={100} className="object-contain" />
              </div>
              <span className="font-bold text-(--color-intra) mt-3">INTRA</span>
            </div>

            <div className="text-gray-300 transform rotate-90 md:rotate-0">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full border-4 border-(--color-nutria) flex items-center justify-center p-4 bg-teal-50 shadow-md">
                <Image src="/products/nutriaplus/nutriaplus.png" alt="NutriaPlus" width={60} height={100} className="object-contain" />
              </div>
              <span className="font-bold text-(--color-nutria) mt-3">NUTRIAPLUS</span>
            </div>

            <div className="text-gray-300 transform rotate-90 md:rotate-0">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full border-4 border-(--color-cardio) flex items-center justify-center p-4 bg-red-50 shadow-md">
                <Image src="/products/cardiolife/cardiolife.png" alt="CardioLife" width={60} height={100} className="object-contain" />
              </div>
              <span className="font-bold text-(--color-cardio) mt-3">CARDIOLIFE</span>
            </div>
            
            <div className="text-gray-300 transform rotate-90 md:rotate-0">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full border-4 border-(--color-fibre) flex items-center justify-center p-4 bg-orange-50 shadow-md">
                <Image src="/products/fibrelife/fibrelife.png" alt="FibreLife" width={60} height={100} className="object-contain" />
              </div>
              <span className="font-bold text-(--color-fibre) mt-3">FIBRELIFE</span>
            </div>
          </div>
          
          <div className="mt-8 text-sm text-gray-500 italic">
            *Take Intra and NutriaPlus one hour before taking FibreLife.
          </div>
        </div>
      </div>
    </div>
  );
}
