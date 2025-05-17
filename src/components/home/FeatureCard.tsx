import React, { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  color: string;
}

const FeatureCard = ({ icon, title, description, color }: FeatureCardProps) => {
  return (
    <div className="flex flex-col bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-transform hover:shadow-md hover:-translate-y-1 h-full">
      <div className={`p-5 ${color} text-white`}>
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white bg-opacity-20">
          {icon}
        </div>
      </div>
      <div className="flex-1 p-5">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;