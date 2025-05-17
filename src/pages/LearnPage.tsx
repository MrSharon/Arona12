import React from 'react';
import EmotionCard from '../components/learn/EmotionCard';

const LearnPage = () => {
  const emotions = [
    {
      name: 'Joy',
      description: 'A feeling of great pleasure and happiness',
      color: '#f59e0b',
      examples: [
        'Celebrating a personal achievement',
        'Reuniting with a loved one after a long time',
        'Receiving unexpected good news'
      ],
      tips: [
        'Smile and match their positive energy',
        'Validate their happiness by sharing in their excitement',
        'Ask open questions to let them elaborate on their joy'
      ]
    },
    {
      name: 'Sadness',
      description: 'Feeling or showing sorrow or unhappiness',
      color: '#3b82f6',
      examples: [
        'Experiencing a loss or disappointment',
        'Saying goodbye to someone important',
        'Feeling lonely or isolated'
      ],
      tips: [
        'Acknowledge their feelings without trying to fix them immediately',
        'Offer comfort through your presence and listening',
        'Validate that sadness is a normal and necessary emotion'
      ]
    },
    {
      name: 'Anger',
      description: 'A strong feeling of annoyance, displeasure, or hostility',
      color: '#ef4444',
      examples: [
        'Being treated unfairly',
        'Having boundaries violated',
        'Feeling frustrated when obstacles prevent goals'
      ],
      tips: [
        'Stay calm and avoid matching their anger',
        'Acknowledge the emotion without judgment',
        'Listen to understand the underlying cause',
        'Suggest taking time to cool down if needed'
      ]
    },
    {
      name: 'Fear',
      description: 'An unpleasant emotion caused by the belief that someone or something is dangerous',
      color: '#8b5cf6',
      examples: [
        'Facing a new and uncertain situation',
        'Anticipating a difficult conversation',
        'Worrying about potential negative outcomes'
      ],
      tips: [
        'Validate that fear is a natural protective response',
        'Help identify specific concerns rather than general anxiety',
        'Offer realistic reassurance and perspective',
        'Focus on what can be controlled in the situation'
      ]
    },
    {
      name: 'Surprise',
      description: 'A feeling of mild astonishment or shock caused by something unexpected',
      color: '#10b981',
      examples: [
        'Receiving an unexpected gift',
        'Learning something that challenges existing beliefs',
        'Encountering an unexpected outcome'
      ],
      tips: [
        'Give them space to process the surprise',
        'Ask questions to help them explore their reaction',
        'Acknowledge both positive and negative surprises appropriately'
      ]
    },
    {
      name: 'Disgust',
      description: 'A feeling of revulsion or strong disapproval aroused by something unpleasant',
      color: '#64748b',
      examples: [
        'Encountering something physically revolting',
        'Witnessing morally offensive behavior',
        'Experiencing violation of personal values'
      ],
      tips: [
        'Acknowledge their reaction without judgment',
        "Don't minimize feelings of disgust as they often relate to values",
        'Help distinguish between moral disgust and preference-based reactions',
        'Respect their need for distance from the triggering situation'
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2">Emotional Intelligence Learning Center</h1>
          <p className="text-gray-600">
            Explore different emotions, learn how to recognize them in yourself and others, 
            and discover healthy ways to respond.
          </p>
        </div>
        
        <div className="bg-primary-50 border border-primary-100 rounded-lg p-4 mb-8">
          <h2 className="text-lg font-semibold text-primary-800 mb-2">Why Emotional Intelligence Matters</h2>
          <p className="text-primary-700">
            Emotional intelligence helps you understand and manage your own emotions while empathizing
            with others. This skill improves relationships, reduces stress, and enhances communication.
          </p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Emotion Recognition Guide</h2>
          <p className="text-gray-600 mb-6">
            Tap on each emotion to learn more about how to recognize and respond to it effectively.
          </p>
          
          <div className="space-y-4">
            {emotions.map((emotion, index) => (
              <EmotionCard
                key={index}
                name={emotion.name}
                description={emotion.description}
                color={emotion.color}
                examples={emotion.examples}
                tips={emotion.tips}
              />
            ))}
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl font-semibold">Interactive Learning Modules</h2>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-gray-200 rounded-lg p-4 hover:border-primary-300 hover:shadow-sm transition-all cursor-pointer">
                <h3 className="font-medium text-lg mb-2">Emotion Identification Practice</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Identify emotions from facial expressions and scenarios.
                </p>
                <span className="text-sm text-primary-600">Start module →</span>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4 hover:border-primary-300 hover:shadow-sm transition-all cursor-pointer">
                <h3 className="font-medium text-lg mb-2">Social Cues & Context</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Learn how context affects emotional expression and interpretation.
                </p>
                <span className="text-sm text-primary-600">Start module →</span>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4 hover:border-primary-300 hover:shadow-sm transition-all cursor-pointer">
                <h3 className="font-medium text-lg mb-2">Emotion Regulation Techniques</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Practical strategies to manage strong emotions effectively.
                </p>
                <span className="text-sm text-primary-600">Start module →</span>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4 hover:border-primary-300 hover:shadow-sm transition-all cursor-pointer">
                <h3 className="font-medium text-lg mb-2">Empathy Building Exercises</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Activities to develop deeper understanding of others' feelings.
                </p>
                <span className="text-sm text-primary-600">Start module →</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnPage;