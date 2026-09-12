import { Building2, Globe, Users } from "lucide-react";

export const metadata = {
  title: "About Us | Lifestyles",
  description: "Learn more about Lifestyles and our commitment to natural wellness products.",
};

export default function AboutPage() {
  return (
    <div className="bg-transparent min-h-screen pt-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-(--color-forest-green) mb-4">About Lifestyles</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Millions of satisfied customers in over 30 countries worldwide – since 1989!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <div className="bg-(--color-warm-cream) p-8 rounded-3xl text-center shadow-sm border border-orange-100">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
              <Globe className="text-(--color-leaf-green) w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Global Reach</h3>
            <p className="text-gray-600">
              Trusted by millions of satisfied customers across over 30 countries worldwide.
            </p>
          </div>
          
          <div className="bg-green-50 p-8 rounded-3xl text-center shadow-sm border border-green-100">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
              <Building2 className="text-(--color-leaf-green) w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Established 1989</h3>
            <p className="text-gray-600">
              With decades of experience in providing quality wellness products.
            </p>
          </div>
          
          <div className="bg-teal-50 p-8 rounded-3xl text-center shadow-sm border border-teal-100">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
              <Users className="text-(--color-leaf-green) w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Lifestyles Philippines</h3>
            <p className="text-gray-600">
              Proudly serving the Philippine market with premium wellness solutions.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-3xl p-8 md:p-16 mb-24 text-center max-w-4xl mx-auto shadow-sm border border-gray-100">
          <h2 className="text-3xl font-bold text-(--color-forest-green) mb-6">Our Philosophy</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            &quot;Live Better. Every Day.&quot;
          </p>
          <p className="text-gray-600 leading-relaxed">
            The Lifestyles product line is built around the concept of synergy and natural wellness. 
            Our proprietary formulations are designed to support your body&apos;s systems, providing 
            antioxidants, vitamins, minerals, and plant extracts.
          </p>
        </div>
      </div>
    </div>
  );
}
