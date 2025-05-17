import React from 'react';
import { BarChart, ChevronRight } from 'lucide-react';

interface ProgressItemProps {
  title: string;
  value: number;
  color: string;
  previousValue?: number;
}

const ProgressItem = ({ title, value, color, previousValue }: ProgressItemProps) => {
  const difference = previousValue !== undefined ? value - previousValue : undefined;
  
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <div className="flex items-center">
          <span className="text-sm font-medium text-gray-700">{title}</span>
          {difference !== undefined && (
            <span 
              className={`ml-2 text-xs px-1.5 py-0.5 rounded-full ${
                difference > 0 ? 'bg-green-100 text-green-800' : 
                difference < 0 ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'
              }`}
            >
              {difference > 0 ? `+${difference}%` : `${difference}%`}
            </span>
          )}
        </div>
        <span className="text-sm font-medium">{value}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className="h-2.5 rounded-full" 
          style={{ width: `${value}%`, backgroundColor: color }}
        ></div>
      </div>
    </div>
  );
};

const TherapyProgress = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="p-5 border-b border-gray-100 flex justify-between items-center">
        <div className="flex items-center">
          <BarChart className="text-primary-600 mr-2" size={20} />
          <h3 className="font-semibold">Your Progress</h3>
        </div>
        <button className="text-sm text-primary-600 flex items-center hover:text-primary-700 transition-colors">
          <span>View detailed report</span>
          <ChevronRight size={16} />
        </button>
      </div>
      
      <div className="p-5">
        <p className="text-sm text-gray-600 mb-4">
          This tracks your emotional awareness progress based on our conversations.
        </p>
        
        <ProgressItem 
          title="Emotional Awareness" 
          value={72} 
          color="#8b5cf6" 
          previousValue={65}
        />
        
        <ProgressItem 
          title="Emotion Regulation" 
          value={58} 
          color="#14b8a6" 
          previousValue={45}
        />
        
        <ProgressItem 
          title="Social Interaction" 
          value={84} 
          color="#ec4899" 
          previousValue={80}
        />
        
        <ProgressItem 
          title="Stress Management" 
          value={49} 
          color="#f59e0b" 
          previousValue={52}
        />
        
        <div className="mt-6 text-sm text-gray-500">
          <p>Last updated: Today, 2:30 PM</p>
          <p className="mt-1">Progress is calculated based on 28 daily check-ins</p>
        </div>
      </div>
    </div>
  );
};

export default TherapyProgress;