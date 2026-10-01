import { Hero } from "@/components/sections/Hero";
import { ProductScrollShowcase } from "@/components/sections/ProductScrollShowcase";
import { DistributorSection } from "@/components/sections/DistributorSection";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div>
      <Hero />
      
      {/* Modern Scroll-Driven Product Showcase */}
      <ProductScrollShowcase />

      {/* Meet Your License Lifestyle Distributor */}
      <DistributorSection />

      {/* About Snippet */}
      <section className="py-12 sm:py-20 lg:py-24 bg-(--color-warm-cream)">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-(--color-forest-green) mb-4 sm:mb-6">
            Millions of Satisfied Customers
          </h2>
          <p className="text-base sm:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8">
            Lifestyles has been providing quality wellness products since 1989. Our proprietary botanical 
            formulations are trusted in over 30 countries worldwide.
          </p>
          <Link 
            href="/about" 
            className="inline-flex items-center text-sm sm:text-lg font-semibold text-(--color-leaf-green) hover:text-(--color-forest-green) transition-colors"
          >
            Learn more about Lifestyles <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
