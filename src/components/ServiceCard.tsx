import { ReactNode } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div className="bg-white border-2 border-gray-100 p-8 rounded-xl shadow-sm hover:shadow-xl hover:border-brand-orange transition-all duration-300 relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-16 h-16 bg-gray-50 group-hover:bg-brand-orange/10 rounded-bl-full flex items-center justify-center transition-colors">
        <div className="text-gray-400 group-hover:text-brand-orange translate-x-2 -translate-y-2 transition-colors">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold text-brand-dark mb-3 mt-4 group-hover:text-brand-orange transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed text-sm">
        {description}
      </p>
    </div>
  );
}