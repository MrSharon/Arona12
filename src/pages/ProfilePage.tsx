import React from 'react';
import PersonalitySelector from '../components/profile/PersonalitySelector';
import { ChevronRight, Edit, Bell, RefreshCw } from 'lucide-react';

const ProfilePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Your Profile</h1>
          <button className="btn btn-outline flex items-center">
            <Edit size={16} className="mr-2" />
            Edit Profile
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="md:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 text-center">
              <div className="w-24 h-24 rounded-full bg-primary-100 text-primary-600 mx-auto flex items-center justify-center text-4xl font-bold mb-4">
                JD
              </div>
              
              <h2 className="text-xl font-semibold">John Doe</h2>
              <p className="text-gray-600 mb-4">Member since May 2025</p>
              
              <div className="space-y-2 mt-4">
                <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50">
                  <span className="text-gray-700">Check-in Streak</span>
                  <span className="font-medium">12 days</span>
                </div>
                
                <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50">
                  <span className="text-gray-700">Conversations</span>
                  <span className="font-medium">34</span>
                </div>
                
                <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50">
                  <span className="text-gray-700">Mood Journals</span>
                  <span className="font-medium">8</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Goals & Reminders</h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 border border-gray-100 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center">
                    <Bell size={20} className="text-primary-600 mr-3" />
                    <div>
                      <p className="font-medium">Daily Emotional Check-in</p>
                      <p className="text-sm text-gray-600">Every day at 8:00 PM</p>
                    </div>
                  </div>
                  <ChevronRight size={18} className="text-gray-400" />
                </div>
                
                <div className="flex items-center justify-between p-3 border border-gray-100 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center">
                    <RefreshCw size={20} className="text-secondary-600 mr-3" />
                    <div>
                      <p className="font-medium">Practice Mindfulness</p>
                      <p className="text-sm text-gray-600">Weekdays at 7:30 AM</p>
                    </div>
                  </div>
                  <ChevronRight size={18} className="text-gray-400" />
                </div>
                
                <button className="w-full p-3 border border-dashed border-gray-300 rounded-lg text-gray-500 hover:text-primary-600 hover:border-primary-300 flex items-center justify-center mt-2">
                  <span className="text-2xl mr-2">+</span>
                  <span>Add a new goal or reminder</span>
                </button>
              </div>
            </div>
            
            <PersonalitySelector />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;