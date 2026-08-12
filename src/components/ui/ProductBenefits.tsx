import { ReactNode } from "react";

interface ProductBenefitsProps {
  title: string;
  items: string[];
  colorClass: string;
  icon?: ReactNode;
}

export function ProductBenefits({ title, items, colorClass, icon }: ProductBenefitsProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
      <div className="flex items-center mb-6">
        {icon && <div className={`mr-4 ${colorClass}`}>{icon}</div>}
        <h3 className={`text-2xl font-bold ${colorClass}`}>{title}</h3>
      </div>
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className={`inline-block w-2 h-2 rounded-full mt-2 mr-3 ${colorClass.replace('text-', 'bg-')}`}></span>
            <span className="text-gray-700 leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
