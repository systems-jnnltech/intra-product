import { ProductSection } from "@/components/sections/ProductSection";
import { BiologicalSystems } from "@/components/sections/BiologicalSystems";
import { BotanicalGrid } from "@/components/sections/BotanicalGrid";

export const metadata = {
  title: "INTRA | Lifestyles",
  description: "Drink Intra. Share Intra. Every Day. A proprietary formulation of 23 time-tested and trusted botanical extracts.",
};

export default function IntraPage() {
  return (
    <div>
      <ProductSection
        title="INTRA"
        tagline="Drink Intra. Share Intra. Every Day."
        imageSrc="/products/intra/intra.png"
        colorClass="text-(--color-intra)"
        bgColorClass="bg-transparent"
        description={
          <div className="space-y-4 max-w-[480px]">
            <p>
              Intra is a proprietary formulation of 23 time-tested and trusted botanical extracts – which 
              provides antioxidants, vitamins, minerals, flavonoids, lignins, polysaccharides and other healthy 
              nutrients specific to each herbal ingredient.
            </p>
            <p>
              As a natural food supplement, Intra&apos;s precise formula of 23 botanical extracts work better 
              together to help balance and strengthen the body&apos;s eight biological systems, leaving you feeling 
              healthier, happier and more energized!
            </p>
          </div>
        }
      >
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 w-full sm:w-auto">
          <a
            href="#botanicals"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[var(--color-intra)] text-white text-sm font-semibold hover:bg-[var(--color-forest-green)] transition-all shadow-md hover:shadow-lg text-center"
          >
            Explore 23 Botanicals
          </a>
          <a
            href="#biological-systems"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-[var(--color-forest-green)] border border-[var(--color-intra)]/30 text-sm font-semibold hover:bg-emerald-50/80 transition-all shadow-xs text-center"
          >
            8 Biological Systems
          </a>
        </div>
      </ProductSection>
      
      <BiologicalSystems />
      <BotanicalGrid />
    </div>
  );
}
