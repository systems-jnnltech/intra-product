"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Menu, 
  X, 
  ChevronDown
} from "lucide-react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Helper to close all menus
  const closeMenus = () => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
    setMobileProductsOpen(false);
  };

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 180);
  };

  const productItems = [
    {
      name: "Intra",
      href: "/intra",
      dotColor: "bg-[var(--color-intra)]",
    },
    {
      name: "NutriaPlus",
      href: "/nutriaplus",
      dotColor: "bg-[var(--color-nutria)]",
    },
    {
      name: "CardioLife",
      href: "/cardiolife",
      dotColor: "bg-[var(--color-cardio)]",
    },
    {
      name: "FibreLife",
      href: "/fibrelife",
      dotColor: "bg-[var(--color-fibre)]",
    },
  ];

  const mainNavLinks = [
    { name: "Home", href: "/" },
    { name: "How to Use", href: "/usage" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isProductActive = ["/intra", "/nutriaplus", "/cardiolife", "/fibrelife"].includes(pathname);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/98 backdrop-blur-lg shadow-md py-3 border-b border-gray-200/80" 
          : "bg-white/95 backdrop-blur-md shadow-sm py-4 border-b border-gray-100/90"
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 shrink-0">
            <div className="relative w-[170px] sm:w-[190px] h-[48px]">
              <Image 
                src="/logo.png" 
                alt="Lifestyles Logo" 
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-1 sm:space-x-2">
            
            {/* Home link */}
            <Link
              href="/"
              className={`px-3.5 py-2 rounded-full text-sm font-semibold transition-all ${
                pathname === "/" 
                  ? "text-[var(--color-forest-green)] bg-emerald-50/80 font-bold" 
                  : "text-gray-700 hover:text-[var(--color-forest-green)] hover:bg-gray-100/70"
              }`}
            >
              Home
            </Link>

            {/* Products Dropdown */}
            <div 
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setDropdownOpen((prev) => !prev)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                  isProductActive || dropdownOpen
                    ? "text-[var(--color-forest-green)] bg-emerald-50 font-bold" 
                    : "text-gray-700 hover:text-[var(--color-forest-green)] hover:bg-gray-100/70"
                }`}
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
              >
                <span>Products</span>
                <ChevronDown 
                  className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? "rotate-180 text-[var(--color-leaf-green)]" : "text-gray-500"}`} 
                />
              </button>

              {/* Simple Hover Dropdown Menu */}
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.96 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="absolute left-1/2 -translate-x-1/2 top-full pt-1.5 z-50 min-w-[180px]"
                  >
                    <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100/90 p-1.5 flex flex-col gap-0.5">
                      {productItems.map((prod) => {
                        const isCurrent = pathname === prod.href;
                        return (
                          <Link
                            key={prod.name}
                            href={prod.href}
                            onClick={closeMenus}
                            className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                              isCurrent
                                ? "bg-emerald-50 text-[var(--color-forest-green)] font-bold shadow-xs"
                                : "text-gray-700 hover:bg-emerald-50/70 hover:text-[var(--color-forest-green)]"
                            }`}
                          >
                            <span className={`w-2 h-2 rounded-full ${prod.dotColor} shrink-0`} />
                            <span>{prod.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Other links */}
            {mainNavLinks.slice(1).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3.5 py-2 rounded-full text-sm font-semibold transition-all ${
                  pathname === link.href 
                    ? "text-[var(--color-forest-green)] bg-emerald-50/80 font-bold" 
                    : "text-gray-700 hover:text-[var(--color-forest-green)] hover:bg-gray-100/70"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-xl text-gray-800 hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/98 backdrop-blur-lg border-b border-gray-200 shadow-xl overflow-hidden"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col space-y-2">
              <Link
                href="/"
                className={`text-base font-semibold py-2.5 px-3 rounded-xl transition-colors ${
                  pathname === "/" ? "bg-emerald-50 text-[var(--color-forest-green)]" : "text-gray-800 hover:bg-gray-50"
                }`}
                onClick={closeMenus}
              >
                Home
              </Link>

              {/* Mobile Products Accordion */}
              <div className="border-y border-gray-100 py-1">
                <button
                  type="button"
                  onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                  className="w-full flex items-center justify-between text-base font-semibold py-2.5 px-3 rounded-xl text-gray-800 hover:bg-gray-50"
                >
                  <span>Products</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileProductsOpen ? "rotate-180" : ""}`} />
                </button>

                {mobileProductsOpen && (
                  <div className="pl-3 pr-1 py-1 space-y-1 bg-gray-50/70 rounded-xl my-1">
                    {productItems.map((prod) => (
                      <Link
                        key={prod.name}
                        href={prod.href}
                        className={`flex items-center gap-2.5 py-2.5 px-3 rounded-lg text-sm font-medium transition-colors ${
                          pathname === prod.href 
                            ? "bg-white font-bold text-[var(--color-forest-green)] shadow-xs" 
                            : "text-gray-700 hover:text-[var(--color-forest-green)]"
                        }`}
                        onClick={closeMenus}
                      >
                        <span className={`w-2 h-2 rounded-full ${prod.dotColor} shrink-0`} />
                        <span>{prod.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {mainNavLinks.slice(1).map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-base font-semibold py-2.5 px-3 rounded-xl transition-colors ${
                    pathname === link.href ? "bg-emerald-50 text-[var(--color-forest-green)]" : "text-gray-800 hover:bg-gray-50"
                  }`}
                  onClick={closeMenus}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
