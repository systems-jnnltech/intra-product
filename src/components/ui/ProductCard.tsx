import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  name: string;
  description: string;
  imageSrc: string;
  href: string;
  colorClass: string;
  bgColorClass: string;
}

export function ProductCard({ name, description, imageSrc, href, colorClass, bgColorClass }: ProductCardProps) {
  return (
    <div className="group bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full">
      <div className={`relative h-64 w-full p-8 ${bgColorClass} flex items-center justify-center transition-colors duration-300`}>
        <Image 
          src={imageSrc} 
          alt={name} 
          fill
          className="object-contain p-6 drop-shadow-md group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-8 flex flex-col flex-grow">
        <h3 className={`text-2xl font-bold mb-3 ${colorClass}`}>{name}</h3>
        <p className="text-gray-600 mb-6 flex-grow leading-relaxed">{description}</p>
        <Link 
          href={href}
          className={`inline-flex items-center font-semibold ${colorClass} hover:opacity-80 transition-opacity mt-auto`}
        >
          View Product <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
