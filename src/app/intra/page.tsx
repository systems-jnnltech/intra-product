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
        bgColorClass="bg-white"
        description={
          <>
            <p className="mb-4">
              Intra is a proprietary formulation of 23 time-tested and trusted botanical extracts – which 
              provides antioxidants, vitamins, minerals, flavonoids, lignins, polysaccharides and other healthy 
              nutrients specific to each herbal ingredient.
            </p>
            <p>
              As a natural food supplement, Intra&apos;s precise formula of 23 botanical extracts work better 
              together to help balance and strengthen the body&apos;s eight biological systems, leaving you feeling 
              healthier, happier and more energized!
            </p>
          </>
        }
      />
      
      <BiologicalSystems />
      <BotanicalGrid />
    </div>
  );
}
