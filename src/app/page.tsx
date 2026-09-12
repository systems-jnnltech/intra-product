import { Hero } from "@/components/sections/Hero";
import { ProductScrollShowcase } from "@/components/sections/ProductScrollShowcase";
import { ProductCard } from "@/components/ui/ProductCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const products = [
    {
      name: "INTRA",
      description: "A proprietary formulation of 23 time-tested and trusted botanical extracts.",
      imageSrc: "/products/intra/intra.png",
      href: "/intra",
      colorClass: "text-(--color-intra)",
      bgColorClass: "bg-green-50",
    },
    {
      name: "NUTRIAPLUS",
      description: "A powerful antioxidant supplement formulated with fruit and vegetable concentrates, plant extracts, Vitamin C and selenium.",
      imageSrc: "/products/nutriaplus/nutriaplus.png",
      href: "/nutriaplus",
      colorClass: "text-(--color-nutria)",
      bgColorClass: "bg-teal-50",
    },
    {
      name: "CARDIOLIFE",
      description: "A scientifically formulated dietary supplement providing vitamins, minerals and plant extracts that support cardiovascular health.",
      imageSrc: "/products/cardiolife/cardiolife.png",
      href: "/cardiolife",
      colorClass: "text-(--color-cardio)",
      bgColorClass: "bg-red-50",
    },
    {
      name: "FIBRELIFE",
      description: "A unique soluble plant fibre with the highest viscosity of any fibre tested.",
      imageSrc: "/products/fibrelife/fibrelife.png",
      href: "/fibrelife",
      colorClass: "text-(--color-fibre)",
      bgColorClass: "bg-orange-50",
    },
  ];

  return (
    <div>
      <Hero />
      
      {/* Modern Scroll-Driven Product Showcase */}
      <ProductScrollShowcase />

      {/* Product Quick Collection Section */}
      <section className="py-20 bg-gray-50/70 border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-(--color-forest-green) mb-4">Complete Collection at a Glance</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Compare our four core formulations and find the perfect regimen for your lifestyle.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, idx) => (
              <ProductCard key={product.name} index={idx} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-24 bg-(--color-warm-cream)">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-(--color-forest-green) mb-6">Millions of Satisfied Customers</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Lifestyles has been providing quality wellness products since 1989. Our proprietary botanical 
            formulations are trusted in over 30 countries worldwide.
          </p>
          <Link 
            href="/about" 
            className="inline-flex items-center text-lg font-semibold text-(--color-leaf-green) hover:text-(--color-forest-green) transition-colors"
          >
            Learn more about Lifestyles <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
