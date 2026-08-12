import { ProductSection } from "@/components/sections/ProductSection";
import { ProductBenefits } from "@/components/ui/ProductBenefits";
import { CheckCircle2, FlaskConical } from "lucide-react";

export const metadata = {
  title: "NutriaPlus | Lifestyles",
  description: "A powerful antioxidant supplement formulated with fruit and vegetable concentrates, plant extracts, vitamin C and selenium.",
};

export default function NutriaPlusPage() {
  return (
    <div>
      <ProductSection
        title="NutriaPlus"
        imageSrc="/products/nutriaplus/nutriaplus.png"
        colorClass="text-(--color-nutria)"
        bgColorClass="bg-white"
        description={
          <>
            <p className="mb-4">
              NutriaPlus is a powerful antioxidant supplement formulated with fruit and vegetable concentrates, 
              plant extracts, vitamin C and selenium to help your body defend itself against the health 
              challenges of modern life!
            </p>
            <p className="font-semibold text-(--color-nutria)">
              NutriaPlus is the first natural health product to be formulated using Zebrafish research!
            </p>
          </>
        }
      >
        <div className="mt-8">
          <ProductBenefits 
            title="Proven benefits of NutriaPlus:"
            colorClass="text-(--color-nutria)"
            icon={<CheckCircle2 className="w-8 h-8" />}
            items={[
              "Reduces cell damage caused by the toxic effects of pollution and chemicals",
              "Cell Health - reduces inflammation at the cellular level",
              "Keeps healthy cells healthy your entire life!"
            ]}
          />
        </div>
      </ProductSection>

      <section className="py-20 bg-teal-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <FlaskConical className="w-10 h-10 text-(--color-nutria) mr-4" />
                <h2 className="text-3xl font-bold text-(--color-nutria)">The Research Process</h2>
              </div>
              <h3 className="text-xl font-semibold mb-6 text-gray-800">How NutriaPlus was developed:</h3>
              <ul className="space-y-4 text-gray-700 leading-relaxed">
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-(--color-nutria) mt-2 mr-3 flex-shrink-0"></span>
                  <span>NutriaPlus was developed in conjunction with the zebrafish research laboratory at Acenzia Inc.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-(--color-nutria) mt-2 mr-3 flex-shrink-0"></span>
                  <span>By exposing the zebrafish to stress, pollution, certain chemicals and then giving them combinations of natural ingredients, you can quickly observe the effects of the formula on their cells.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-(--color-nutria) mt-2 mr-3 flex-shrink-0"></span>
                  <span>When you are trying different combinations of natural ingredients, you can quickly see which ingredients work better together (the synergistic effect).</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-(--color-nutria) mt-2 mr-3 flex-shrink-0"></span>
                  <span>We were able to develop a <strong>combination of 12 synergistic ingredients that showed amazing results in helping human health</strong>.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-(--color-nutria) mt-2 mr-3 flex-shrink-0"></span>
                  <span>The results observed in the zebrafish will also be observed in humans - this is a very reliable method of determining what will benefit human health.</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-10 rounded-3xl shadow-lg border border-teal-100 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Better Together PLUS...</h3>
              <p className="text-4xl md:text-5xl font-extrabold text-(--color-nutria) my-6">
                70% MORE
              </p>
              <p className="text-xl font-semibold text-gray-700 mb-4">
                antioxidant power when combined with Intra!*
              </p>
              <p className="text-sm text-gray-500 italic">
                (*compared to original Nutria formula plus Intra)
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
