"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }, 1000);
  };

  return (
    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-(--color-leaf-green)"></div>
      
      {submitted ? (
        <div className="text-center py-16">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-(--color-leaf-green)">
            <Send className="w-10 h-10" />
          </div>
          <h3 className="text-3xl font-bold text-(--color-forest-green) mb-4">Message Sent!</h3>
          <p className="text-gray-600">Thank you for your inquiry. We&apos;ll get back to you shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input 
                type="text" 
                id="name" 
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-(--color-leaf-green) focus:ring-2 focus:ring-(--color-lime-green) focus:ring-opacity-50 transition-all outline-none"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-(--color-leaf-green) focus:ring-2 focus:ring-(--color-lime-green) focus:ring-opacity-50 transition-all outline-none"
                placeholder="+63 900 000 0000"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input 
                type="email" 
                id="email" 
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-(--color-leaf-green) focus:ring-2 focus:ring-(--color-lime-green) focus:ring-opacity-50 transition-all outline-none"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-2">Product Interested In</label>
              <select 
                id="product" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-(--color-leaf-green) focus:ring-2 focus:ring-(--color-lime-green) focus:ring-opacity-50 transition-all outline-none bg-white"
              >
                <option value="">Select a product...</option>
                <option value="all">All Products</option>
                <option value="intra">Intra</option>
                <option value="nutriaplus">NutriaPlus</option>
                <option value="cardiolife">CardioLife</option>
                <option value="fibrelife">FibreLife</option>
              </select>
            </div>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
            <textarea 
              id="message" 
              rows={4}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-(--color-leaf-green) focus:ring-2 focus:ring-(--color-lime-green) focus:ring-opacity-50 transition-all outline-none resize-none"
              placeholder="How can we help you today?"
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-(--color-leaf-green) text-white font-semibold py-4 rounded-xl hover:bg-(--color-forest-green) transition-colors flex items-center justify-center"
          >
            {isSubmitting ? (
              <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            ) : (
              <>
                Send Inquiry <Send className="w-5 h-5 ml-2" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
