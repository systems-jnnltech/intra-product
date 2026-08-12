import { Leaf } from "lucide-react";

const botanicals = [
  "Goji", "Mangosteen", "Noni", "Acai", "Echinacea", "Aloe vera", 
  "Siberian ginseng", "Licorice root", "Chinese pearl barley", "Dandelion", 
  "German chamomile", "Ginger", "Reishi mushroom", "Schisandra berry", 
  "Juniper berries", "Sarsaparilla", "Capsicum fruit", "Hawthorn", 
  "Astragalus", "Fenugreek seed", "Prickly pear", "Celery seed", "Rose hips"
];

export function BotanicalGrid() {
  return (
    <section className="py-20 bg-(--color-warm-cream)">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-(--color-forest-green) mb-4">
            23 Botanical Extracts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The product material presents Intra as a blend of botanical ingredients designed around synergistic interaction. 
            The formulation relies on the synergistic effect of these specific extracts working together.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {botanicals.map((botanical, idx) => (
            <div 
              key={idx} 
              className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center hover:shadow-md hover:border-(--color-lime-green) transition-all group"
            >
              <Leaf className="w-8 h-8 text-gray-300 mb-3 group-hover:text-(--color-lime-green) transition-colors" />
              <span className="font-medium text-gray-800 text-sm">{botanical}</span>
            </div>
          ))}
          {/* Fill the last grid spot with a logo or text to make it 24 spots (6x4) */}
          <div className="bg-(--color-leaf-green) p-4 rounded-xl shadow-sm text-white flex flex-col items-center justify-center text-center">
            <span className="font-bold text-xl mb-1">23</span>
            <span className="text-xs uppercase tracking-wider opacity-80">Extracts</span>
          </div>
        </div>
      </div>
    </section>
  );
}
