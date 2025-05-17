import React, { useState } from 'react';
import { Info } from 'lucide-react';

interface PersonalityTrait {
  id: string;
  name: string;
  description: string;
  options: {
    low: string;
    high: string;
  };
  value: number;
}

const PersonalitySelector = () => {
  const [traits, setTraits] = useState<PersonalityTrait[]>([
    {
      id: 'openness',
      name: 'Openness',
      description: 'Your willingness to try new experiences and ideas',
      options: {
        low: 'Traditional & practical',
        high: 'Curious & inventive'
      },
      value: 70
    },
    {
      id: 'conscientiousness',
      name: 'Conscientiousness',
      description: 'How organized and persistent you are in pursuing goals',
      options: {
        low: 'Flexible & spontaneous',
        high: 'Organized & disciplined'
      },
      value: 60
    },
    {
      id: 'extraversion',
      name: 'Extraversion',
      description: 'How you interact with others and where you get your energy',
      options: {
        low: 'Reserved & reflective',
        high: 'Outgoing & energetic'
      },
      value: 50
    },
    {
      id: 'agreeableness',
      name: 'Agreeableness',
      description: 'Your approach to interactions with others',
      options: {
        low: 'Direct & objective',
        high: 'Empathetic & cooperative'
      },
      value: 80
    },
    {
      id: 'neuroticism',
      name: 'Emotional Stability',
      description: 'How you handle stress and emotions',
      options: {
        low: 'Sensitive & expressive',
        high: 'Calm & resilient'
      },
      value: 55
    }
  ]);

  const handleTraitChange = (id: string, value: number) => {
    setTraits(
      traits.map(trait =>
        trait.id === id ? { ...trait, value } : trait
      )
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Your Personality Profile</h2>
        <p className="text-gray-600 mb-4">
          Help Arona understand your personality traits better. This will allow for more personalized and meaningful interactions.
        </p>
        <div className="p-3 bg-primary-50 text-primary-700 rounded-lg flex items-start">
          <Info size={20} className="flex-shrink-0 mt-0.5 mr-2" />
          <p className="text-sm">
            Adjust the sliders below to reflect your personality. There are no "right" or "wrong" answers - this helps Arona adapt to your unique style.
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {traits.map(trait => (
          <div key={trait.id} className="space-y-2">
            <div className="flex justify-between items-center">
              <label htmlFor={trait.id} className="font-medium">
                {trait.name}
                <span className="ml-2 text-sm font-normal text-gray-500">{trait.description}</span>
              </label>
            </div>
            
            <div className="flex items-center space-x-3">
              <span className="text-xs text-gray-500 w-24">{trait.options.low}</span>
              <input
                type="range"
                id={trait.id}
                min="0"
                max="100"
                value={trait.value}
                onChange={(e) => handleTraitChange(trait.id, parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
              />
              <span className="text-xs text-gray-500 w-24 text-right">{trait.options.high}</span>
            </div>
            
            <div className="flex justify-between px-1">
              <span className="text-xs text-gray-500">0%</span>
              <span className="text-xs text-gray-500">50%</span>
              <span className="text-xs text-gray-500">100%</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 flex justify-end">
        <button className="btn btn-primary">
          Update Personality Profile
        </button>
      </div>
    </div>
  );
};

export default PersonalitySelector;