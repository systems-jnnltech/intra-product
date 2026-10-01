import { Building2, Globe, Users } from "lucide-react";

export const metadata = {
  title: "About Us | Lifestyles",
  description: "Learn more about Lifestyles and our commitment to natural wellness products.",
};

export default function AboutPage() {
  return (
    <div className="bg-transparent min-h-screen pt-12 sm:pt-20 pb-12 sm:pb-20">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="text-center mb-10 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-(--color-forest-green) mb-3 sm:mb-4">About Lifestyles</h1>
          <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Millions of satisfied customers in over 30 countries worldwide – since 1989!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-24">
          <div className="bg-(--color-warm-cream) p-6 sm:p-8 rounded-2xl sm:rounded-3xl text-center shadow-sm border border-orange-100">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-sm">
              <Globe className="text-(--color-leaf-green) w-7 h-7 sm:w-8 sm:h-8" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-3">Global Reach</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Trusted by millions of satisfied customers across over 30 countries worldwide.
            </p>
          </div>
          
          <div className="bg-green-50 p-6 sm:p-8 rounded-2xl sm:rounded-3xl text-center shadow-sm border border-green-100">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-sm">
              <Building2 className="text-(--color-leaf-green) w-7 h-7 sm:w-8 sm:h-8" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-3">Established 1989</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              With decades of experience in providing quality wellness products.
            </p>
          </div>
          
          <div className="bg-teal-50 p-6 sm:p-8 rounded-2xl sm:rounded-3xl text-center shadow-sm border border-teal-100">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-sm">
              <Users className="text-(--color-leaf-green) w-7 h-7 sm:w-8 sm:h-8" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-3">Lifestyles Philippines</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Proudly serving the Philippine market with premium wellness solutions.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-16 mb-16 sm:mb-24 text-center max-w-4xl mx-auto shadow-sm border border-gray-100">
          <h2 className="text-2xl sm:text-3xl font-bold text-(--color-forest-green) mb-4 sm:mb-6">Our Philosophy</h2>
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-4 sm:mb-6 font-medium">
            &quot;Live Better. Every Day.&quot;
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            The Lifestyles product line is built around the concept of synergy and natural wellness. 
            Our proprietary formulations are designed to support your body&apos;s systems, providing 
            antioxidants, vitamins, minerals, and plant extracts.
          </p>
        </div>
      </div>
    </div>
  );
}
