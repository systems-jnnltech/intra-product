import Link from "next/link";
import { FooterDisclaimer } from "./FooterDisclaimer";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a1a] text-white pt-16">
      <div className="container mx-auto px-6 max-w-7xl mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Brand Info */}
          <div>
            <h2 className="text-2xl font-bold text-(--color-leaf-green) mb-2">Lifestyles</h2>
            <p className="text-gray-400 italic mb-6">&quot;Live Better. Every Day.&quot;</p>
            <p className="text-sm text-gray-400 max-w-xs">
              Millions of satisfied customers in over 30 countries worldwide – since 1989!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-(--color-lime-green) transition-colors">Home</Link></li>
              <li><Link href="/intra" className="text-gray-400 hover:text-(--color-lime-green) transition-colors">Intra</Link></li>
              <li><Link href="/nutriaplus" className="text-gray-400 hover:text-(--color-lime-green) transition-colors">NutriaPlus</Link></li>
              <li><Link href="/cardiolife" className="text-gray-400 hover:text-(--color-lime-green) transition-colors">CardioLife</Link></li>
              <li><Link href="/fibrelife" className="text-gray-400 hover:text-(--color-lime-green) transition-colors">FibreLife</Link></li>
              <li><Link href="/usage" className="text-gray-400 hover:text-(--color-lime-green) transition-colors">How to Use</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-(--color-lime-green) transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <address className="not-italic text-gray-400 space-y-2 text-sm">
              <p className="font-semibold text-gray-300">Lifestyles Philippines</p>
              <p>4th Floor - Alphaland Southgate Mall</p>
              <p>2258 Chino Roces cor. EDSA</p>
              <p>Makati City, Philippines 1232</p>
              <div className="pt-4 space-y-1">
                <p>Telephone: <a href="tel:63277527150" className="hover:text-(--color-lime-green)">632.7752.7150</a></p>
                <p>Email: <a href="mailto:philippines@lifestyles.net" className="hover:text-(--color-lime-green)">philippines@lifestyles.net</a></p>
                <p>Website: <a href="http://www.lifestyles.net" target="_blank" rel="noopener noreferrer" className="hover:text-(--color-lime-green)">www.lifestyles.net</a></p>
                <p>Facebook: <a href="https://facebook.com/LifestylesPH" target="_blank" rel="noopener noreferrer" className="hover:text-(--color-lime-green)">@Lifestyles PH</a></p>
              </div>
            </address>
          </div>
        </div>
      </div>
      
      <FooterDisclaimer />
      
      <div className="bg-black py-4 text-center text-xs text-gray-600">
        <p>&copy; {currentYear} Lifestyles. All Rights Reserved. This is a demonstration website based on provided product materials.</p>
      </div>
    </footer>
  );
}
