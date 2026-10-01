import { ContactForm } from "@/components/sections/ContactForm";
import { MapPin, Phone, Mail, Globe, Share2 } from "lucide-react";

export const metadata = {
  title: "Contact Us | Lifestyles",
  description: "Get in touch with Lifestyles Philippines.",
};

export default function ContactPage() {
  return (
    <div className="bg-transparent min-h-screen py-12 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="text-center mb-10 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-(--color-forest-green) mb-3 sm:mb-4">Want to Learn More?</h1>
          <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Get in touch with us to learn more about our products or find a distributor near you.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6 sm:space-y-8 bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl shadow-sm border border-gray-100 h-full">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 border-b pb-3 sm:pb-4">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-(--color-leaf-green) mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Lifestyles Philippines</h3>
                  <p className="text-gray-600">
                    4th Floor - Alphaland Southgate Mall<br/>
                    2258 Chino Roces cor. EDSA<br/>
                    Makati City, Philippines 1232
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="w-6 h-6 text-(--color-leaf-green) mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Telephone</h3>
                  <a href="tel:63277527150" className="text-gray-600 hover:text-(--color-lime-green) transition-colors">
                    632.7752.7150
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="w-6 h-6 text-(--color-leaf-green) mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <a href="mailto:philippines@lifestyles.net" className="text-gray-600 hover:text-(--color-lime-green) transition-colors break-all">
                    philippines@lifestyles.net
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Globe className="w-6 h-6 text-(--color-leaf-green) mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Website</h3>
                  <a href="http://www.lifestyles.net" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-(--color-lime-green) transition-colors">
                    www.lifestyles.net
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Share2 className="w-6 h-6 text-(--color-leaf-green) mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Facebook</h3>
                  <a href="https://facebook.com/LifestylesPH" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-(--color-lime-green) transition-colors">
                    @Lifestyles PH
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

        </div>
      </div>
    </div>
  );
}
