import { ReactNode } from "react";

interface ProductBenefitsProps {
  title: string;
  items: string[];
  colorClass: string;
  icon?: ReactNode;
}

export function ProductBenefits({ title, items, colorClass, icon }: ProductBenefitsProps) {
  return (
    <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-8">
      <div className="flex items-center mb-4 sm:mb-6">
        {icon && <div className={`mr-3 sm:mr-4 shrink-0 ${colorClass}`}>{icon}</div>}
        <h3 className={`text-lg sm:text-2xl font-bold ${colorClass}`}>{title}</h3>
      </div>
      <ul className="space-y-3 sm:space-y-4">
        {items.map((item, index) => (
          <li key={index} className="flex items-start text-sm sm:text-base">
            <span className={`inline-block w-2 h-2 rounded-full mt-2 mr-2.5 sm:mr-3 shrink-0 ${colorClass.replace('text-', 'bg-')}`}></span>
            <span className="text-gray-700 leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
