import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface EmotionCardProps {
  name: string;
  description: string;
  color: string;
  examples: string[];
  tips: string[];
}

const EmotionCard = ({ name, description, color, examples, tips }: EmotionCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div 
      className="bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 border border-gray-100"
      style={{ maxHeight: isExpanded ? '800px' : '120px' }}
    >
      <div 
        className={`p-4 cursor-pointer flex justify-between items-center ${isExpanded ? 'border-b border-gray-100' : ''}`}
        onClick={() => setIsExpanded(!isExpanded)}
        style={{ backgroundColor: `${color}10` }}
      >
        <div className="flex items-center">
          <div 
            className="w-10 h-10 rounded-full mr-4 flex items-center justify-center"
            style={{ backgroundColor: color }}
          >
            <span className="text-white font-bold">{name.charAt(0).toUpperCase()}</span>
          </div>
          <div>
            <h3 className="font-semibold text-lg">{name}</h3>
            <p className="text-gray-600 text-sm">{description}</p>
          </div>
        </div>
        <div>
          {isExpanded ? (
            <ChevronUp className="text-gray-500" />
          ) : (
            <ChevronDown className="text-gray-500" />
          )}
        </div>
      </div>
      
      {isExpanded && (
        <div className="p-4">
          <div className="mb-4">
            <h4 className="font-medium mb-2 text-gray-700">Examples:</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              {examples.map((example, index) => (
                <li key={index}>{example}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-2 text-gray-700">Tips for responding:</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              {tips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmotionCard;