import { ReactNode } from "react";

interface UsageCardProps {
  title: string;
  colorClass: string;
  bgColorClass: string;
  icon: ReactNode;
  instructions: { label?: string; text: string }[];
}

export function UsageCard({ title, colorClass, bgColorClass, icon, instructions }: UsageCardProps) {
  return (
    <div className={`rounded-3xl overflow-hidden border border-gray-100 shadow-md hover:shadow-lg transition-shadow bg-white flex flex-col h-full`}>
      <div className={`${bgColorClass} p-6 flex items-center justify-between`}>
        <h3 className={`text-2xl font-bold ${colorClass}`}>{title}</h3>
        <div className={`p-3 bg-white rounded-full ${colorClass} shadow-sm`}>
          {icon}
        </div>
      </div>
      <div className="p-8 flex-grow">
        <div className="space-y-6">
          {instructions.map((instruction, idx) => (
            <div key={idx}>
              {instruction.label && (
                <p className={`font-semibold text-sm uppercase tracking-wider mb-2 ${colorClass}`}>
                  {instruction.label}
                </p>
              )}
              <p className="text-gray-700">{instruction.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
