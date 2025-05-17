import React from 'react';
import TherapyProgress from '../components/therapy/TherapyProgress';
import { Calendar, BookOpen, ArrowRight } from 'lucide-react';

const TherapyPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2">Therapeutic Support</h1>
          <p className="text-gray-600">
            A safe space to work through emotional challenges with guided support.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="md:col-span-2">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-semibold">Therapeutic Journeys</h2>
                <p className="text-gray-600 mt-1">
                  Guided conversations to help process emotions and experiences.
                </p>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4 hover:border-primary-300 hover:shadow-sm transition-all cursor-pointer">
                    <div className="flex justify-between">
                      <h3 className="font-medium">Processing Difficult Emotions</h3>
                      <span className="text-xs bg-primary-100 text-primary-800 px-2 py-1 rounded-full">
                        Recommended
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mt-2">
                      A gentle path to understanding and accepting challenging feelings.
                    </p>
                    <div className="flex justify-between items-center mt-3">
                      <span className="text-xs text-gray-500">5 sessions • 15-20 minutes each</span>
                      <button className="text-primary-600 hover:text-primary-700 transition-colors flex items-center text-sm">
                        <span>Begin</span>
                        <ArrowRight size={14} className="ml-1" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4 hover:border-primary-300 hover:shadow-sm transition-all cursor-pointer">
                    <h3 className="font-medium">Building Resilience</h3>
                    <p className="text-gray-600 text-sm mt-2">
                      Develop emotional strength and adaptability for life's challenges.
                    </p>
                    <div className="flex justify-between items-center mt-3">
                      <span className="text-xs text-gray-500">8 sessions • 10-15 minutes each</span>
                      <button className="text-primary-600 hover:text-primary-700 transition-colors flex items-center text-sm">
                        <span>Begin</span>
                        <ArrowRight size={14} className="ml-1" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4 hover:border-primary-300 hover:shadow-sm transition-all cursor-pointer">
                    <h3 className="font-medium">Healing from Past Experiences</h3>
                    <p className="text-gray-600 text-sm mt-2">
                      Gentle guidance for processing and integrating difficult memories.
                    </p>
                    <div className="flex justify-between items-center mt-3">
                      <span className="text-xs text-gray-500">10 sessions • 20-25 minutes each</span>
                      <button className="text-primary-600 hover:text-primary-700 transition-colors flex items-center text-sm">
                        <span>Begin</span>
                        <ArrowRight size={14} className="ml-1" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4 hover:border-primary-300 hover:shadow-sm transition-all cursor-pointer">
                    <h3 className="font-medium">Social Connection & Belonging</h3>
                    <p className="text-gray-600 text-sm mt-2">
                      Explore and strengthen your connection to others and community.
                    </p>
                    <div className="flex justify-between items-center mt-3">
                      <span className="text-xs text-gray-500">6 sessions • 15 minutes each</span>
                      <button className="text-primary-600 hover:text-primary-700 transition-colors flex items-center text-sm">
                        <span>Begin</span>
                        <ArrowRight size={14} className="ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <TherapyProgress />
            
            <div className="bg-white rounded-xl shadow-sm overflow-hidden mt-6">
              <div className="p-5 border-b border-gray-100 flex items-center">
                <Calendar className="text-primary-600 mr-2" size={20} />
                <h3 className="font-semibold">Upcoming</h3>
              </div>
              
              <div className="p-5">
                <div className="border-l-2 border-primary-500 pl-3 py-1 mb-4">
                  <p className="text-sm font-medium">Daily Check-in</p>
                  <p className="text-xs text-gray-500">Today, 8:00 PM</p>
                </div>
                
                <div className="border-l-2 border-gray-300 pl-3 py-1">
                  <p className="text-sm font-medium">Resilience Session #3</p>
                  <p className="text-xs text-gray-500">Tomorrow, 10:00 AM</p>
                </div>
              </div>
            </div>
            
            <div className="bg-accent-50 border border-accent-100 rounded-xl p-5 mt-6">
              <h3 className="font-semibold text-accent-800 flex items-center">
                <BookOpen size={18} className="mr-2" />
                Remember
              </h3>
              <p className="text-sm text-accent-700 mt-2">
                While Arona can provide support, it's not a replacement for professional mental health care. If you're experiencing significant distress, please connect with a healthcare provider.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TherapyPage;